# Agentic RAG for Norwegian Real Estate

Agentic RAG-system for analyse av norske eiendomsdokumenter. Bruker Claude (Anthropic) for LLM-analyse, Voyage AI for embeddings, og ChromaDB for vektorlagring.

## Forutsetninger

- **Python** >= 3.11
- **Node.js** >= 18 og npm
- API-nokkler: `ANTHROPIC_API_KEY` og `VOYAGE_API_KEY`

## Hurtigstart

### 1. Klon og installer

```bash
git clone <repo-url>
cd master

# Python-avhengigheter
pip install -e ".[dev]"

# Frontend-avhengigheter
cd frontend && npm install && cd ..
```

### 2. Konfigurer miljovariabler

```bash
cp .env.example .env
```

Rediger `.env` og sett inn dine API-nokkler:

```
ANTHROPIC_API_KEY=sk-ant-...
VOYAGE_API_KEY=pa-...
```

### 3. Start prosjektet

Oppstartscriptet sjekker alle krav automatisk og starter backend + frontend:

```bash
python -m scripts.start
```

Scriptet gjor folgende:
1. Verifiserer Python-versjon
2. Sjekker Node.js og npm
3. Validerer `.env`-fil og API-nokkler
4. Sjekker Python-avhengigheter
5. Sjekker frontend-avhengigheter (tilbyr `npm install` hvis mangler)
6. Sjekker at port 8000 og 3000 er ledige
7. Starter backend (FastAPI/Uvicorn)
8. Starter frontend (Next.js)

Trykk `Ctrl+C` for a stoppe begge tjenester.

### Manuell oppstart

Hvis du foretrekker a starte tjenestene manuelt:

```bash
# Terminal 1: Backend
uvicorn api.main:app --reload

# Terminal 2: Frontend
cd frontend && npm run dev
```

## URL-er (etter oppstart)

| Tjeneste      | URL                          |
|---------------|------------------------------|
| Backend API   | http://localhost:8000        |
| Swagger docs  | http://localhost:8000/docs   |
| Frontend      | http://localhost:3000        |

## Prosjektstruktur

```
src/            # Kjernelogikk (RAG-pipeline, embeddings, config)
api/            # FastAPI backend
frontend/       # Next.js frontend
scripts/        # CLI-scripts (start, analyse, sammenligning)
tests/          # Pytest-tester
data/           # Dokumenter og ChromaDB
experiments/    # Eksperimentresultater
```

## CLI-scripts

```bash
python -m scripts.start              # Start hele prosjektet
python -m scripts.run_standard_rag   # Standard RAG-analyse
python -m scripts.run_agentic_rag    # Agentic RAG-analyse
python -m scripts.run_comparison     # Sammenlign standard vs agentic
python -m scripts.run_ablation       # Ablasjonsstudie
```

Alle scripts stotter `--help` for mer informasjon.

## Utvikling

```bash
# Kjor tester
pytest

# Lint
ruff check .

# Typesjekk
mypy src/
```
