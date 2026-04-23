"""Oppstartscript: sjekker krav og starter backend + frontend."""

import atexit
import os
import platform
import shutil
import signal
import socket
import subprocess
import sys
import time
from pathlib import Path

import typer
from rich.console import Console

app = typer.Typer(help="Sjekk krav og start backend + frontend for Agentic RAG.")
console = Console()

PROJECT_ROOT = Path(__file__).resolve().parent.parent
REQUIRED_PACKAGES = ["anthropic", "voyageai", "chromadb", "fastapi", "uvicorn", "rich", "typer"]
IS_WIN = platform.system() == "Windows"

OK = "[green]OK[/]"
FAIL = "[red]FEIL[/]"
WARN = "[yellow]ADVARSEL[/]"


def _ok(msg: str) -> None:
    console.print(f"  {OK} {msg}")


def _fail(msg: str) -> None:
    console.print(f"  {FAIL} {msg}")


def _warn(msg: str) -> None:
    console.print(f"  {WARN} {msg}")


def _header(title: str) -> None:
    console.print(f"\n[bold]{title}[/]")


def _check_python_version() -> bool:
    _header("Python")
    v = sys.version_info
    version_str = f"{v.major}.{v.minor}.{v.micro}"
    if (v.major, v.minor) >= (3, 11):
        _ok(f"Python {version_str}")
        return True
    _fail(f"Python {version_str} — krever >= 3.11")
    return False


def _check_node() -> bool:
    _header("Node.js")
    ok = True
    node_cmd = shutil.which("node")
    if node_cmd:
        try:
            result = subprocess.run(
                [node_cmd, "--version"], capture_output=True, text=True, check=True
            )
            version = result.stdout.strip().lstrip("v")
            major = int(version.split(".")[0])
            if major >= 18:
                _ok(f"Node {version}")
            else:
                _fail(f"Node {version} — krever >= 18")
                ok = False
        except subprocess.CalledProcessError:
            _fail("node --version feilet")
            ok = False
    else:
        _fail("Node ikke funnet")
        ok = False

    npm_cmd = shutil.which("npm")
    if npm_cmd:
        try:
            result = subprocess.run(
                [npm_cmd, "--version"], capture_output=True, text=True, check=True
            )
            _ok(f"npm {result.stdout.strip()}")
        except subprocess.CalledProcessError:
            _fail("npm --version feilet")
            ok = False
    else:
        _fail("npm ikke funnet")
        ok = False
    return ok


def _check_env() -> bool:
    _header("Miljovariabler")
    env_path = PROJECT_ROOT / ".env"
    if not env_path.exists():
        _fail(".env finnes ikke")
        return False

    from dotenv import dotenv_values

    env_vars = dotenv_values(env_path)
    ok = True
    for key in ("ANTHROPIC_API_KEY", "VOYAGE_API_KEY"):
        val = env_vars.get(key, "")
        if val and val not in ("your-key-here", "sk-placeholder", ""):
            _ok(key)
        else:
            _fail(f"{key} mangler eller er placeholder")
            ok = False

    optional = ["CLAUDE_MODEL", "VOYAGE_MODEL", "LOG_LEVEL"]
    missing_opt = [k for k in optional if not env_vars.get(k)]
    if missing_opt:
        _warn(f"Valgfrie mangler: {', '.join(missing_opt)}")
    return ok


def _check_python_deps() -> bool:
    _header("Python-pakker")
    missing = []
    for pkg in REQUIRED_PACKAGES:
        try:
            __import__(pkg)
        except ImportError:
            missing.append(pkg)

    if not missing:
        _ok(f"Alle {len(REQUIRED_PACKAGES)} pakker installert")
        return True
    _fail(f"Mangler: {', '.join(missing)}")
    console.print('    pip install -e ".[dev]"')
    return False


def _check_frontend_deps() -> bool:
    _header("Frontend")
    node_modules = PROJECT_ROOT / "frontend" / "node_modules"
    if node_modules.is_dir():
        _ok("node_modules OK")
        return True
    _warn("node_modules mangler")
    if typer.confirm("    Kjor npm install?", default=True):
        subprocess.run(
            [shutil.which("npm"), "install"],
            cwd=PROJECT_ROOT / "frontend",
            check=True,
        )
        _ok("npm install fullfort")
        return True
    return False


def _port_is_free(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(("127.0.0.1", port)) != 0


def _check_ports() -> bool:
    _header("Porter")
    for port, name in [(8000, "Backend"), (3000, "Frontend")]:
        if _port_is_free(port):
            _ok(f":{port} ({name}) ledig")
        else:
            _warn(f":{port} ({name}) opptatt")
    return True


def _wait_for_health(url: str, timeout: int = 30) -> bool:
    import urllib.error
    import urllib.request

    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            with urllib.request.urlopen(url, timeout=2) as resp:
                if resp.status == 200:
                    return True
        except (urllib.error.URLError, OSError):
            pass
        time.sleep(1)
    return False


def _start_services() -> None:
    procs: list[subprocess.Popen] = []

    def _kill_tree(pid: int) -> None:
        if IS_WIN:
            subprocess.run(
                ["taskkill", "/F", "/T", "/PID", str(pid)],
                capture_output=True,
            )
        else:
            os.killpg(os.getpgid(pid), signal.SIGTERM)

    def _shutdown(*_: object) -> None:
        console.print(f"\n  {WARN} Stopper tjenester...")
        for p in procs:
            if p.poll() is None:
                _kill_tree(p.pid)
        for p in procs:
            try:
                p.wait(timeout=10)
            except subprocess.TimeoutExpired:
                p.kill()
        console.print(f"  {OK} Alt stoppet")
        raise SystemExit(0)

    signal.signal(signal.SIGINT, _shutdown)
    signal.signal(signal.SIGTERM, _shutdown)
    atexit.register(lambda: _shutdown() if procs else None)

    # Fjern gammel Next.js lock-fil
    lock_file = PROJECT_ROOT / "frontend" / ".next" / "dev" / "lock"
    lock_file.unlink(missing_ok=True)

    popen_kwargs: dict = {}
    if not IS_WIN:
        popen_kwargs["preexec_fn"] = os.setsid
    else:
        popen_kwargs["creationflags"] = subprocess.CREATE_NEW_PROCESS_GROUP

    # Backend
    _header("Starter backend")
    backend = subprocess.Popen(
        [sys.executable, "-m", "uvicorn", "api.main:app", "--reload"],
        cwd=PROJECT_ROOT,
        **popen_kwargs,
    )
    procs.append(backend)

    if _wait_for_health("http://localhost:8000/health"):
        _ok("Backend OK — http://localhost:8000")
    else:
        _warn("Health check tidsavbrudd")

    # Frontend
    _header("Starter frontend")
    frontend = subprocess.Popen(
        [shutil.which("npm"), "run", "dev"],
        cwd=PROJECT_ROOT / "frontend",
        **popen_kwargs,
    )
    procs.append(frontend)
    time.sleep(3)
    _ok("Frontend OK — http://localhost:3000")

    # Oppsummering
    console.print("\n[bold]Klart![/]")
    console.print("  Backend   http://localhost:8000")
    console.print("  Swagger   http://localhost:8000/docs")
    console.print("  Frontend  http://localhost:3000")
    console.print("\n  Ctrl+C for a stoppe\n")

    try:
        while all(p.poll() is None for p in procs):
            time.sleep(1)
    except KeyboardInterrupt:
        _shutdown()


@app.command()
def main() -> None:
    """Sjekk alle krav og start backend + frontend."""
    console.print("\n[bold]Agentic RAG — Oppstart[/]")

    checks = [
        _check_python_version,
        _check_node,
        _check_env,
        _check_python_deps,
        _check_frontend_deps,
        _check_ports,
    ]

    failed = False
    for check in checks:
        if not check():
            failed = True

    if failed:
        console.print(f"\n  {FAIL} [bold]Fiks problemene over for du fortsetter.[/]\n")
        raise typer.Exit(1)

    console.print(f"\n  {OK} [bold]Alle sjekker bestatt[/]")
    _start_services()


if __name__ == "__main__":
    app()
