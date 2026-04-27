# Agentic RAG for Norwegian Real Estate

Agentic RAG system for analysing Norwegian real estate documents. Uses Claude (Anthropic) for LLM analysis, Voyage AI for embeddings, and ChromaDB for vector storage.

## Prerequisites

- **Python** >= 3.11
- **Node.js** >= 18 and npm
- API keys: `ANTHROPIC_API_KEY` and `VOYAGE_API_KEY`

## Quick start

### 1. Clone and install

```bash
git clone https://github.com/sultanavtajev/agentic-rag-real-estate.git
cd agentic-rag-real-estate

# Python dependencies
pip install -e ".[dev]"

# Frontend dependencies
cd frontend && npm install && cd ..
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```
ANTHROPIC_API_KEY=sk-ant-...
VOYAGE_API_KEY=pa-...
```

### 3. Start the project

The startup script checks all requirements automatically and starts backend + frontend:

```bash
python -m scripts.start
```

The script does the following:
1. Verifies Python version
2. Checks Node.js and npm
3. Validates `.env` file and API keys
4. Checks Python dependencies
5. Checks frontend dependencies (offers `npm install` if missing)
6. Checks that ports 8000 and 3000 are available
7. Starts the backend (FastAPI/Uvicorn)
8. Starts the frontend (Next.js)

Press `Ctrl+C` to stop both services.

### Manual startup

If you prefer to start the services manually:

```bash
# Terminal 1: Backend
uvicorn api.main:app --reload

# Terminal 2: Frontend
cd frontend && npm run dev
```

## URLs (after startup)

| Service       | URL                          |
|---------------|------------------------------|
| Backend API   | http://localhost:8000        |
| Swagger docs  | http://localhost:8000/docs   |
| Frontend      | http://localhost:3000        |

## Project structure

```
src/            # Core logic (RAG pipeline, embeddings, config)
api/            # FastAPI backend
frontend/       # Next.js frontend
scripts/        # CLI scripts (start, analysis, comparison)
tests/          # Pytest tests
data/           # Documents and ChromaDB
experiments/    # Experiment results
```

## Data availability

The `data/` directory in this repository contains a minimal scaffold only. Large generated artefacts and source documents are excluded due to GitHub file size limits and privacy considerations:

- `data/raw/` — sales prospectuses (salgsoppgaver) retrieved from finn.no, approximately 2.3 GB across 409 documents. Excluded due to size and GDPR considerations (the documents contain personal information such as addresses, party names, and financial details).
- `data/processed/` — chunked and pre-processed documents (~125 MB).
- `data/chroma_db/` — vector embeddings (~1.2 GB), including a single SQLite file that exceeds GitHub's 100 MB per-file limit.
- `data/results/` — analysis output for 204 document sets (~14 MB).

To reproduce the experiments, place your own Norwegian real estate documents in `data/raw/<doc_id>/<doc_id>.pdf` and run the pipeline via `python -m scripts.start`. The system will process, embed, and analyse the documents end-to-end.

## CLI scripts

```bash
python -m scripts.start              # Start the whole project
python -m scripts.run_standard_rag   # Standard RAG analysis
python -m scripts.run_agentic_rag    # Agentic RAG analysis
python -m scripts.run_comparison     # Compare standard vs agentic
python -m scripts.run_ablation       # Ablation study
```

All scripts support `--help` for more information.

## Development

```bash
# Run tests
pytest

# Lint
ruff check .

# Type check
mypy src/
```
