"""Sweep: replace backslash-escaped periods with plain periods."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

NEEDLE = "\\."
REPLACEMENT = "."

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total = 0
for f in files:
    text = f.read_text(encoding="utf-8")
    n = text.count(NEEDLE)
    if n == 0:
        continue
    f.write_text(text.replace(NEEDLE, REPLACEMENT), encoding="utf-8")
    print(f"  {n:3d} -> {f.relative_to(RAPPORT)}")
    total += n

print(f"\nTotal: {total} replacements")
