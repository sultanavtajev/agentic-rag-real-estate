"""API-endepunkter for dokumenthåndtering."""

import asyncio
import json
import logging
import time
from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, Depends, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, PlainTextResponse, StreamingResponse
from pydantic import BaseModel, Field

from api.dependencies import get_processing_pipeline, get_settings, get_vector_store
from src.config import Settings
from src.document_processing.export import export_chunks_md
from src.document_processing.pipeline import DocumentProcessingPipeline
from src.models.schemas import DocumentType
from src.retrieval.vector_store import VectorStoreManager

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/documents", tags=["documents"])

RAW_DIR = Path("data/raw")
PROCESSED_DIR = Path("data/processed")


class UploadResponse(BaseModel):
    """Respons fra filopplasting."""

    document_set_id: str
    files_uploaded: int = Field(description="Antall filer lastet opp")
    message: str


class ProcessResponse(BaseModel):
    """Respons fra dokumentprosessering."""

    document_set_id: str
    chunks_created: int = Field(description="Antall chunks opprettet")
    message: str


class ProcessedFileInfo(BaseModel):
    """Informasjon om en prosessert Markdown-fil."""

    filename: str
    size_bytes: int


class DocumentSetInfo(BaseModel):
    """Informasjon om et dokumentsett."""

    set_id: str
    file_count: int
    filenames: list[str]
    original_filename: str = Field(default="", description="Originalt filnavn foer rename")
    processed: bool = Field(description="Om settet er prosessert i ChromaDB")
    has_processed_data: bool = Field(
        default=False,
        description="Om prosesserte .md-filer finnes",
    )


def _detect_document_type(filename: str) -> DocumentType:
    """Returner dokumenttype. Kun salgsoppgave stottet."""
    return DocumentType.salgsoppgave


@router.post("/upload", response_model=UploadResponse)
async def upload_documents(
    files: list[UploadFile],
    document_set_id: str = Form(...),
    settings: Settings = Depends(get_settings),
) -> UploadResponse:
    """Last opp dokumenter til et dokumentsett."""
    if not files:
        raise HTTPException(status_code=400, detail="Ingen filer lastet opp")

    set_dir = RAW_DIR / document_set_id
    set_dir.mkdir(parents=True, exist_ok=True)

    original_filenames = []
    for file in files:
        content = await file.read()
        original_filenames.append(file.filename)
        # Rename til {set_id}.pdf
        file_path = set_dir / f"{document_set_id}.pdf"
        file_path.write_bytes(content)

    # Lagre metadata med originalt filnavn
    metadata = {"original_filename": original_filenames[0] if original_filenames else ""}
    metadata_path = set_dir / "metadata.json"
    metadata_path.write_text(json.dumps(metadata, ensure_ascii=False), encoding="utf-8")

    return UploadResponse(
        document_set_id=document_set_id,
        files_uploaded=len(files),
        message=f"{len(files)} filer lastet opp til {document_set_id}",
    )


@router.post("/{set_id}/process", response_model=ProcessResponse)
async def process_documents(
    set_id: str,
    pipeline: DocumentProcessingPipeline = Depends(get_processing_pipeline),
    vector_store: VectorStoreManager = Depends(get_vector_store),
) -> ProcessResponse:
    """Prosesser dokumenter og indekser i vektordatabase."""
    set_dir = RAW_DIR / set_id
    if not set_dir.exists():
        raise HTTPException(status_code=404, detail=f"Dokumentsett {set_id} finnes ikke")

    all_chunks = []
    for file_path in set_dir.glob("*.pdf"):
        doc_type = _detect_document_type(file_path.name)
        doc_id = f"{set_id}_{file_path.stem}"
        md_path = pipeline.extract_to_md(file_path, doc_id, doc_type, set_id)
        chunks = pipeline.chunk_from_md(md_path, doc_id, doc_type)
        all_chunks.extend(chunks)

    # Save chunks.md
    processed_dir = PROCESSED_DIR / set_id
    processed_dir.mkdir(parents=True, exist_ok=True)
    chunks_md_path = processed_dir / "chunks.md"
    chunks_md_path.write_text(
        export_chunks_md(all_chunks, pipeline.chunker.chunk_size, pipeline.chunker.chunk_overlap),
        encoding="utf-8",
    )

    vector_store.index_chunks(all_chunks, collection_name=set_id)
    return ProcessResponse(
        document_set_id=set_id,
        chunks_created=len(all_chunks),
        message=f"{len(all_chunks)} chunks opprettet og indeksert for {set_id}",
    )


@router.post("/{set_id}/process/stream")
async def stream_process_documents(
    set_id: str,
    pipeline: DocumentProcessingPipeline = Depends(get_processing_pipeline),
    vector_store: VectorStoreManager = Depends(get_vector_store),
) -> StreamingResponse:
    """Prosesser dokumenter med SSE-streaming av stegprogress."""
    set_dir = RAW_DIR / set_id
    if not set_dir.exists():
        raise HTTPException(status_code=404, detail=f"Dokumentsett {set_id} finnes ikke")

    async def generate():  # noqa: C901
        steps_log: list[dict] = []
        total_start = time.time()

        def emit(event_type: str, data: dict) -> str:
            return f"event: {event_type}\ndata: {json.dumps(data)}\n\n"

        # Step 1: Upload (already done)
        steps_log.append({"step": "Last opp", "elapsed_s": 0.0})
        yield emit("step", {"step": "upload", "status": "done", "elapsed_s": 0.0})

        all_chunks = []

        # Step 2: Extraction
        yield emit("step", {"step": "extraction", "status": "running", "elapsed_s": 0})
        t0 = time.time()
        md_paths = []
        for file_path in set_dir.glob("*.pdf"):
            doc_type = _detect_document_type(file_path.name)
            doc_id = f"{set_id}_{file_path.stem}"
            md_path = pipeline.extract_to_md(file_path, doc_id, doc_type, set_id)
            md_paths.append((md_path, doc_id, doc_type))
        elapsed = round(time.time() - t0, 2)
        steps_log.append({"step": "Tekstekstraksjon", "elapsed_s": elapsed})
        yield emit("step", {"step": "extraction", "status": "done", "elapsed_s": elapsed})
        await asyncio.sleep(0)

        # Step 3: Chunking
        yield emit("step", {"step": "chunking", "status": "running", "elapsed_s": 0})
        t0 = time.time()
        for md_path, doc_id, doc_type in md_paths:
            chunks = pipeline.chunk_from_md(md_path, doc_id, doc_type)
            all_chunks.extend(chunks)
        # Save chunks.md
        processed_dir = PROCESSED_DIR / set_id
        processed_dir.mkdir(parents=True, exist_ok=True)
        chunks_md_path = processed_dir / "chunks.md"
        chunks_md_path.write_text(
            export_chunks_md(
                all_chunks, pipeline.chunker.chunk_size, pipeline.chunker.chunk_overlap
            ),
            encoding="utf-8",
        )
        elapsed = round(time.time() - t0, 2)
        steps_log.append({"step": "Chunking", "elapsed_s": elapsed})
        yield emit("step", {"step": "chunking", "status": "done", "elapsed_s": elapsed})
        await asyncio.sleep(0)

        # Step 4: Embedding (Voyage AI API call)
        yield emit("step", {"step": "embedding", "status": "running", "elapsed_s": 0})
        t0 = time.time()
        texts = [chunk.text for chunk in all_chunks]
        embeddings = vector_store.embedding_provider.embed_documents(texts)
        embed_elapsed = round(time.time() - t0, 2)
        embed_dim = len(embeddings[0]) if embeddings else 0
        embed_model = getattr(vector_store.embedding_provider, "model", "unknown")
        batch_size = 50
        num_batches = (len(texts) + batch_size - 1) // batch_size
        steps_log.append({"step": "Embedding", "elapsed_s": embed_elapsed})
        yield emit("step", {"step": "embedding", "status": "done", "elapsed_s": embed_elapsed})
        await asyncio.sleep(0)

        # Step 5: Indexing (ChromaDB storage)
        yield emit("step", {"step": "indexing", "status": "running", "elapsed_s": 0})
        t0 = time.time()
        collection = vector_store.client.get_or_create_collection(name=set_id)
        ids = [chunk.chunk_id for chunk in all_chunks]
        metadatas = [vector_store._chunk_to_metadata(chunk) for chunk in all_chunks]
        collection.add(
            ids=ids,
            embeddings=embeddings,
            documents=texts,
            metadatas=metadatas,
        )
        index_elapsed = round(time.time() - t0, 2)
        steps_log.append({"step": "Indeksering", "elapsed_s": index_elapsed})
        yield emit("step", {"step": "indexing", "status": "done", "elapsed_s": index_elapsed})

        total_time = round(time.time() - total_start, 2)

        # Save log files
        _save_processing_log(set_id, steps_log, total_time, len(all_chunks))
        _save_embedding_log(
            set_id, embed_model, embed_dim, len(all_chunks), num_batches, batch_size, embed_elapsed
        )
        _save_indexing_log(set_id, len(all_chunks), index_elapsed)

        yield emit("done", {"chunks_created": len(all_chunks), "total_time_s": total_time})

    return StreamingResponse(generate(), media_type="text/event-stream")


@router.get("", response_model=list[DocumentSetInfo])
async def list_document_sets() -> list[DocumentSetInfo]:
    """List alle dokumentsett."""
    if not RAW_DIR.exists():
        return []

    result = []
    for set_dir in sorted(RAW_DIR.iterdir()):
        if not set_dir.is_dir():
            continue

        filenames = [f.name for f in set_dir.iterdir() if f.is_file() and f.name != "metadata.json"]
        processed = _check_collection_exists(set_dir.name)
        has_processed = _has_processed_data(set_dir.name)

        # Les originalt filnavn fra metadata.json
        original_filename = ""
        metadata_path = set_dir / "metadata.json"
        if metadata_path.exists():
            try:
                meta = json.loads(metadata_path.read_text(encoding="utf-8"))
                original_filename = meta.get("original_filename", "")
            except Exception:
                pass
        if not original_filename and filenames:
            original_filename = filenames[0]

        result.append(
            DocumentSetInfo(
                set_id=set_dir.name,
                file_count=len(filenames),
                filenames=filenames,
                original_filename=original_filename,
                processed=processed,
                has_processed_data=has_processed,
            )
        )

    return result


@router.delete("/{set_id}")
async def delete_document_set(set_id: str) -> dict[str, str]:
    """Slett et dokumentsett (filer + eventuell ChromaDB-collection)."""
    import shutil

    set_dir = RAW_DIR / set_id
    if not set_dir.exists():
        raise HTTPException(status_code=404, detail=f"Dokumentsett {set_id} finnes ikke")

    shutil.rmtree(set_dir)

    # Slett prosesserte .md-filer
    processed_dir = PROCESSED_DIR / set_id
    if processed_dir.exists():
        shutil.rmtree(processed_dir)

    # Prøv å slette ChromaDB-collection
    try:
        import chromadb

        client = chromadb.PersistentClient(path=str(Path("data/chroma_db")))
        client.delete_collection(set_id)
    except Exception:
        pass

    return {"deleted": set_id}


@router.get("/{set_id}/raw/{filename}")
async def get_raw_file(set_id: str, filename: str) -> FileResponse:
    """Server en rå PDF-fil fra dokumentsettet."""
    file_path = RAW_DIR / set_id / filename
    if not file_path.exists() or not filename.endswith(".pdf"):
        raise HTTPException(status_code=404, detail="Fil ikke funnet")
    return FileResponse(file_path, media_type="application/pdf", filename=filename)


@router.get("/{set_id}/processed", response_model=list[ProcessedFileInfo])
async def list_processed_files(set_id: str) -> list[ProcessedFileInfo]:
    """List prosesserte Markdown-filer for et dokumentsett."""
    processed_dir = PROCESSED_DIR / set_id
    if not processed_dir.exists():
        return []
    return [
        ProcessedFileInfo(filename=f.name, size_bytes=f.stat().st_size)
        for f in sorted(processed_dir.glob("*.md"))
    ]


@router.get("/{set_id}/processed/{filename}")
async def get_processed_file(set_id: str, filename: str) -> PlainTextResponse:
    """Returner innholdet i en prosessert Markdown-fil."""
    file_path = PROCESSED_DIR / set_id / filename
    if not file_path.exists() or not filename.endswith(".md"):
        raise HTTPException(status_code=404, detail="Fil ikke funnet")
    content = file_path.read_text(encoding="utf-8")
    return PlainTextResponse(content)


def _has_processed_data(set_id: str) -> bool:
    """Sjekk om prosesserte .md-filer finnes for et dokumentsett."""
    processed_dir = PROCESSED_DIR / set_id
    if not processed_dir.exists():
        return False
    return any(processed_dir.glob("*.md"))


def _check_collection_exists(collection_name: str) -> bool:
    """Sjekk om en ChromaDB collection eksisterer."""
    try:
        import chromadb

        client = chromadb.PersistentClient(path=str(Path("data/chroma_db")))
        client.get_collection(collection_name)
    except Exception:
        return False
    return True


def _save_processing_log(
    set_id: str,
    steps: list[dict],
    total_time: float,
    chunks_count: int,
) -> None:
    """Lagre prosesseringslogg som Markdown."""
    processed_dir = PROCESSED_DIR / set_id
    processed_dir.mkdir(parents=True, exist_ok=True)

    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    lines = [
        f"# Prosesseringslogg for {set_id}",
        "",
        f"Dato: {now}",
        "",
        "| Steg | Status | Tid |",
        "|------|--------|-----|",
    ]
    for s in steps:
        lines.append(f"| {s['step']} | OK | {s['elapsed_s']:.1f}s |")
    lines.extend(
        [
            "",
            f"Total tid: {total_time:.1f}s",
            f"Chunks: {chunks_count}",
        ]
    )

    log_path = processed_dir / "processing_log.md"
    log_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _save_embedding_log(
    set_id: str,
    model: str,
    dimension: int,
    chunk_count: int,
    num_batches: int,
    batch_size: int,
    elapsed: float,
) -> None:
    """Lagre embedding-logg som Markdown."""
    processed_dir = PROCESSED_DIR / set_id
    processed_dir.mkdir(parents=True, exist_ok=True)
    lines = [
        f"# Embedding-logg for {set_id}",
        "",
        f"Modell: {model}",
        f"Dimensjon: {dimension}",
        f"Chunks: {chunk_count}",
        f"Batches: {num_batches} ({batch_size} per batch)",
        f"Tid: {elapsed:.1f}s",
    ]
    path = processed_dir / "embedding_log.md"
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _save_indexing_log(
    set_id: str,
    chunk_count: int,
    elapsed: float,
) -> None:
    """Lagre indekserings-logg som Markdown."""
    processed_dir = PROCESSED_DIR / set_id
    processed_dir.mkdir(parents=True, exist_ok=True)
    lines = [
        f"# Indekserings-logg for {set_id}",
        "",
        "Database: ChromaDB",
        f"Collection: {set_id}",
        f"Dokumenter lagret: {chunk_count}",
        f"Tid: {elapsed:.1f}s",
    ]
    path = processed_dir / "indexing_log.md"
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")
