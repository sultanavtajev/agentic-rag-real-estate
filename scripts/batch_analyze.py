"""Batch-kjoer alle salgsoppgaver gjennom hele pipelinen.

Bruk:
    python scripts/batch_analyze.py --start 1 --end 10
    python scripts/batch_analyze.py --start 11 --skip-existing
    python scripts/batch_analyze.py  # Alle 203
"""

import argparse
import json
import shutil
import sys
import time
from datetime import datetime
from pathlib import Path

# Legg til prosjektrot i path
sys.path.insert(0, str(Path(__file__).parent.parent))

from src.agentic_rag.config import FULL_AGENTIC
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.config import get_settings
from src.document_processing.export import export_chunks_md
from src.document_processing.pipeline import DocumentProcessingPipeline
from src.evaluation.metrics import LLMRiskMatcher, compute_overall_metrics
from src.evaluation.verifier import RiskVerifier
from src.ground_truth.generator import GroundTruthGenerator
from src.models.schemas import (
    AnalysisResult,
    DocumentType,
    EvaluationResult,
    IdentifiedRisk,
    MatchedPair,
    OverallMetrics,
)
from src.retrieval.embeddings import VoyageAIEmbeddings
from src.retrieval.vector_store import VectorStoreManager
from src.standard_rag.pipeline import StandardRAGPipeline

SALGSOPPGAVER_DIR = Path("docs/teknisk/salgsoppgaver")
RAW_DIR = Path("data/raw")
PROCESSED_DIR = Path("data/processed")
RESULTS_DIR = Path("data/results")
GT_DIR = Path("data/ground_truth")
QUERY = "Identifiser risikoer i salgsoppgaven"


def save_result(result: AnalysisResult) -> None:
    """Lagre analyseresultat til disk."""
    sys_type = result.system_type
    if "agentic" in sys_type:
        dir_name = "agentic_rag"
    elif "standard" in sys_type:
        dir_name = "standard_rag"
    elif "ground_truth" in sys_type:
        dir_name = "ground_truth"
    else:
        dir_name = sys_type

    result_dir = RESULTS_DIR / result.document_set_id / dir_name
    result_dir.mkdir(parents=True, exist_ok=True)
    path = result_dir / f"{result.run_id}.json"
    path.write_text(result.model_dump_json(indent=2), encoding="utf-8")


def _save_processing_log(
    set_id: str,
    extract_time: float,
    chunk_time: float,
    embed_time: float,
    index_time: float,
    chunk_count: int,
) -> None:
    """Lagre prosesseringslogg som Markdown."""
    processed_dir = PROCESSED_DIR / set_id
    processed_dir.mkdir(parents=True, exist_ok=True)
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    total = extract_time + chunk_time + embed_time + index_time
    lines = [
        f"# Prosesseringslogg for {set_id}",
        "",
        f"Dato: {now}",
        "",
        "| Steg | Status | Tid |",
        "|------|--------|-----|",
        "| Last opp | OK | 0.0s |",
        f"| Tekstekstraksjon | OK | {extract_time:.1f}s |",
        f"| Chunking | OK | {chunk_time:.1f}s |",
        f"| Embedding | OK | {embed_time:.1f}s |",
        f"| Indeksering | OK | {index_time:.1f}s |",
        "",
        f"Total tid: {total:.1f}s",
        f"Chunks: {chunk_count}",
    ]
    (processed_dir / "processing_log.md").write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )


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
    (processed_dir / "embedding_log.md").write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )


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
    (processed_dir / "indexing_log.md").write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )


def process_one(
    set_id: str,
    pdf_path: Path,
    pipeline: DocumentProcessingPipeline,
    vector_store: VectorStoreManager,
    settings: object,
) -> dict:
    """Prosesser en salgsoppgave gjennom hele pipelinen."""
    total_start = time.time()

    # 0. Slett gamle data for dette dokumentsettet
    for d in [RAW_DIR / set_id, PROCESSED_DIR / set_id, RESULTS_DIR / set_id]:
        if d.exists():
            shutil.rmtree(d)
    gt_file = GT_DIR / f"{set_id}.json"
    if gt_file.exists():
        gt_file.unlink()
    try:
        import chromadb

        client = chromadb.PersistentClient(path=str(Path("data/chroma_db")))
        client.delete_collection(set_id)
    except Exception:
        pass

    # 1. Kopier PDF til data/raw/{set_id}/
    raw_dir = RAW_DIR / set_id
    raw_dir.mkdir(parents=True, exist_ok=True)
    dest = raw_dir / pdf_path.name
    shutil.copy2(pdf_path, dest)
    print("  [1/8] Kopiert PDF")

    # 2. Ekstraher tekst og chunk
    doc_type = DocumentType.salgsoppgave
    doc_id = f"{set_id}_{pdf_path.stem}"
    t0 = time.time()
    md_path = pipeline.extract_to_md(dest, doc_id, doc_type, set_id)
    extract_time = round(time.time() - t0, 2)

    t0 = time.time()
    chunks = pipeline.chunk_from_md(md_path, doc_id, doc_type)
    chunk_time = round(time.time() - t0, 2)

    # Lagre chunks.md
    processed_dir = PROCESSED_DIR / set_id
    processed_dir.mkdir(parents=True, exist_ok=True)
    (processed_dir / "chunks.md").write_text(
        export_chunks_md(chunks, pipeline.chunker.chunk_size, pipeline.chunker.chunk_overlap),
        encoding="utf-8",
    )
    print(f"  [2/8] Ekstrahert og chunket: {len(chunks)} chunks")

    # 3. Embedding + indeksering
    t0 = time.time()
    texts = [c.text for c in chunks]
    embeddings = vector_store.embedding_provider.embed_documents(texts)
    embed_time = round(time.time() - t0, 2)
    embed_dim = len(embeddings[0]) if embeddings else 0
    embed_model = getattr(vector_store.embedding_provider, "model", "unknown")
    batch_size = 50
    num_batches = (len(texts) + batch_size - 1) // batch_size

    t0 = time.time()
    collection = vector_store.client.get_or_create_collection(name=set_id)
    ids = [c.chunk_id for c in chunks]
    metadatas = [vector_store._chunk_to_metadata(c) for c in chunks]
    collection.add(ids=ids, embeddings=embeddings, documents=texts, metadatas=metadatas)
    index_time = round(time.time() - t0, 2)
    print("  [3/8] Embeddet og indeksert")

    # Lagre prosesserings-logger
    _save_processing_log(set_id, extract_time, chunk_time, embed_time, index_time, len(chunks))
    _save_embedding_log(
        set_id,
        embed_model,
        embed_dim,
        len(chunks),
        num_batches,
        batch_size,
        embed_time,
    )
    _save_indexing_log(set_id, len(chunks), index_time)

    # 4. Standard RAG
    std_pipeline = StandardRAGPipeline(settings, vector_store)
    std_result = std_pipeline.analyze(set_id, QUERY)
    std_result.session_id = set_id
    save_result(std_result)
    print(f"  [4/8] Standard RAG: {len(std_result.risks)} risikoer ({std_result.duration_s:.1f}s)")

    # 5. Agentic RAG
    orch = AgenticRAGOrchestrator(settings, vector_store, FULL_AGENTIC)
    agent_result = orch.analyze(set_id, QUERY)
    agent_result.session_id = set_id
    save_result(agent_result)
    n_agent = len(agent_result.risks)
    print(f"  [5/8] Agentic RAG: {n_agent} risikoer ({agent_result.duration_s:.1f}s)")

    # 6. Ground Truth
    gt_gen = GroundTruthGenerator(settings)
    gt = gt_gen.generate(set_id, RAW_DIR)
    GT_DIR.mkdir(parents=True, exist_ok=True)
    (GT_DIR / f"{set_id}.json").write_text(gt.model_dump_json(indent=2), encoding="utf-8")

    # Lagre GT som AnalysisResult for historikk
    gt_as_result = AnalysisResult(
        run_id=f"{set_id}_gt",
        session_id=set_id,
        document_set_id=set_id,
        system_type="ground_truth",
        risks=[
            IdentifiedRisk(
                risk_id=r.risk_id,
                description=r.description,
                evidence=r.evidence,
                source_documents=r.source_documents,
                source_pages=r.source_pages,
                confidence=r.details.get("confidence", 1.0),
                details=r.details,
            )
            for r in gt.risks
        ],
        raw_llm_response="",
        config={},
        duration_s=gt.duration_s,
        input_tokens=gt.input_tokens,
        output_tokens=gt.output_tokens,
    )
    save_result(gt_as_result)
    print(f"  [6/8] Ground Truth: {len(gt.risks)} risikoer ({gt.duration_s:.1f}s)")

    # 7. Evaluering: match Standard RAG og Agentic RAG mot GT
    eval_results = {}
    try:
        matcher = LLMRiskMatcher(settings)
        systems = {
            "standard_rag": std_result.risks,
            "agentic_rag": agent_result.risks,
        }
        match_results = matcher.match_all(systems, gt.risks)

        for sys_type, match_result in match_results.items():
            overall = compute_overall_metrics(match_result)
            result_obj = sys_type == "standard_rag" and std_result or agent_result
            eval_result = EvaluationResult(
                run_id=result_obj.run_id,
                system_type=sys_type,
                overall_metrics=overall,
                matched_risks=len(match_result.matched_pairs),
                unmatched_predicted=len(match_result.unmatched_predicted),
                unmatched_ground_truth=len(match_result.unmatched_ground_truth),
                matched_pair_details=[
                    MatchedPair(system_risk=p, ground_truth_risk=g)
                    for p, g in match_result.matched_pairs
                ],
                unmatched_predicted_risks=match_result.unmatched_predicted,
                unmatched_ground_truth_risks=match_result.unmatched_ground_truth,
            )
            eval_results[sys_type] = eval_result
            p = overall.precision
            r = overall.recall
            f = overall.f1
            print(f"  [7/8] Evaluering {sys_type}: P={p:.0%} R={r:.0%} F1={f:.0%}")
    except Exception as e:
        print(f"  [7/8] Evaluering feilet: {e}")

    # 8. Verifisering av umatchede risikoer
    for sys_type, eval_result in eval_results.items():
        if eval_result.unmatched_predicted_risks:
            try:
                verifier = RiskVerifier(settings)
                verified = verifier.verify(
                    eval_result.unmatched_predicted_risks,
                    set_id,
                )
                eval_result.verified_unmatched = verified
                confirmed_fp = sum(1 for v in verified if not v.is_real_risk)
                tp = eval_result.matched_risks
                fn = eval_result.unmatched_ground_truth
                adj_p = tp / (tp + confirmed_fp) if (tp + confirmed_fp) > 0 else 0.0
                adj_r = tp / (tp + fn) if (tp + fn) > 0 else 0.0
                adj_f1 = 2 * adj_p * adj_r / (adj_p + adj_r) if (adj_p + adj_r) > 0 else 0.0
                eval_result.adjusted_metrics = OverallMetrics(
                    precision=adj_p,
                    recall=adj_r,
                    f1=adj_f1,
                    total_support=tp + fn,
                )
                real = sum(1 for v in verified if v.is_real_risk)
                print(f"  [8/8] Verifisering {sys_type}: {real}/{len(verified)} bekreftet")
            except Exception as e:
                print(f"  [8/8] Verifisering {sys_type} feilet: {e}")

    # Lagre evalueringsresultater i single-format (kompatibelt med historikk-API)
    eval_dir = Path("data/eval_history")
    eval_dir.mkdir(parents=True, exist_ok=True)
    for sys_type, er in eval_results.items():
        import uuid

        record = {
            "record_id": str(uuid.uuid4()),
            "record_type": "single",
            "timestamp": datetime.now().isoformat(),
            "query": QUERY,
            "document_set_id": set_id,
            "evaluation": json.loads(er.model_dump_json()),
        }
        eval_path = eval_dir / f"{record['record_id']}.json"
        eval_path.write_text(
            json.dumps(record, indent=2, ensure_ascii=False),
            encoding="utf-8",
        )

    total_time = round(time.time() - total_start, 1)

    std_eval = eval_results.get("standard_rag")
    agent_eval = eval_results.get("agentic_rag")

    return {
        "set_id": set_id,
        "chunks": len(chunks),
        "std_risks": len(std_result.risks),
        "agent_risks": len(agent_result.risks),
        "gt_risks": len(gt.risks),
        "std_time": std_result.duration_s,
        "agent_time": agent_result.duration_s,
        "gt_time": gt.duration_s,
        "std_f1": std_eval.overall_metrics.f1 if std_eval else None,
        "agent_f1": agent_eval.overall_metrics.f1 if agent_eval else None,
        "total_time": total_time,
        "std_tokens": std_result.input_tokens + std_result.output_tokens,
        "agent_tokens": agent_result.input_tokens + agent_result.output_tokens,
        "gt_tokens": gt.input_tokens + gt.output_tokens,
    }


def main() -> None:
    """Hovedfunksjon for batch-analyse."""
    parser = argparse.ArgumentParser(description="Batch-analyser salgsoppgaver")
    parser.add_argument("--start", type=int, default=1, help="Start fra dokument nr (default: 1)")
    parser.add_argument("--end", type=int, default=203, help="Stopp ved dokument nr (default: 203)")
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Hopp over allerede prosesserte",
    )
    args = parser.parse_args()

    print(f"Batch-analyse: d{args.start:03d} - d{args.end:03d}")
    print(f"Starttid: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()

    settings = get_settings()
    embeddings = VoyageAIEmbeddings(api_key=settings.voyage_api_key, model=settings.voyage_model)
    vector_store = VectorStoreManager(embeddings, settings.chroma_persist_dir)
    pipeline = DocumentProcessingPipeline(settings)

    results = []
    errors = []

    for i in range(args.start, args.end + 1):
        set_id = f"d{i:03d}"
        pdf_path = SALGSOPPGAVER_DIR / f"{set_id}.pdf"

        if not pdf_path.exists():
            continue

        if args.skip_existing and (RESULTS_DIR / set_id).exists():
            print(f"HOPP {set_id} (allerede prosessert)")
            continue

        print(f"--- {set_id} ---")
        try:
            result = process_one(set_id, pdf_path, pipeline, vector_store, settings)
            results.append(result)
            print(f"  Total: {result['total_time']}s\n")
        except Exception as e:
            print(f"  FEIL: {e}\n")
            errors.append({"set_id": set_id, "error": str(e)})
            continue

    # Oppsummering
    print("=" * 60)
    print(f"Ferdig: {len(results)} OK, {len(errors)} feil")
    if results:
        total_risks_std = sum(r["std_risks"] for r in results)
        total_risks_agent = sum(r["agent_risks"] for r in results)
        total_risks_gt = sum(r["gt_risks"] for r in results)
        total_time = sum(r["total_time"] for r in results)
        print(f"Standard RAG: {total_risks_std} risikoer totalt")
        print(f"Agentic RAG: {total_risks_agent} risikoer totalt")
        print(f"Ground Truth: {total_risks_gt} risikoer totalt")
        print(f"Total tid: {total_time:.0f}s ({total_time / 60:.1f}min)")

    if errors:
        print("\nFeil:")
        for e in errors:
            print(f"  {e['set_id']}: {e['error']}")

    # Lagre oppsummering
    summary_path = Path("data/batch_summary.json")
    summary_path.write_text(
        json.dumps({"results": results, "errors": errors}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"\nOppsummering lagret: {summary_path}")


if __name__ == "__main__":
    main()
