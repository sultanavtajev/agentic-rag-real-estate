"""Sweep: clean remaining backslash escapes (\+, \=, \(, \[, \])."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

REPLACEMENTS = [
    ("\\+", "+"),
    ("\\=", "="),
    ("\\(", "("),
    ("\\[", "["),
    ("\\]", "]"),
]

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total = 0
for f in files:
    text = f.read_text(encoding="utf-8")
    original = text
    counts: dict[str, int] = {}
    for needle, repl in REPLACEMENTS:
        n = text.count(needle)
        if n > 0:
            counts[needle] = n
            text = text.replace(needle, repl)
    if text != original:
        f.write_text(text, encoding="utf-8")
        summary = ", ".join(f"{k!r}={v}" for k, v in counts.items())
        print(f"  {f.relative_to(RAPPORT)}: {summary}")
        total += sum(counts.values())

print(f"\nTotal: {total} replacements")
