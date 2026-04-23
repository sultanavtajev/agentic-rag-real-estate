"""One-shot helper to count backslash-escape patterns in rapport_4."""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

# Pattern: "Fig 6\)" -> backslash before close paren
backslash_paren = re.compile(r"\\\)")
# Pattern: "Fig N\" anywhere
fig_with_backslash = re.compile(r"Fig\s+\d+\\")

total_paren = 0
total_fig = 0
files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

print(f"Scanning {len(files)} files in rapport_4 (excluding merged Sultan_*)\n")
for f in files:
    text = f.read_text(encoding="utf-8")
    np = len(backslash_paren.findall(text))
    nf = len(fig_with_backslash.findall(text))
    if np + nf > 0:
        rel = f.relative_to(RAPPORT)
        print(f"  {nf:3d} FigN\\, {np:3d} \\)  ->  {rel}")
        total_paren += np
        total_fig += nf

print(f"\nTotal: {total_fig} 'Fig N\\' patterns, {total_paren} '\\)' patterns")
