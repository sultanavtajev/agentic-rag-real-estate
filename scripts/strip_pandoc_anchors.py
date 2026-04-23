"""Strip Pandoc heading anchors `{#...}` from rapport_4."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

# Match " {#anchor}" including the space before it
ANCHOR_RE = re.compile(r"[ \t]*\{#[^}]+\}")
# Trailing whitespace on lines after anchor removal
TRAILING_WS_RE = re.compile(r"[ \t]+$", re.MULTILINE)

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total = 0
for f in files:
    text = f.read_text(encoding="utf-8")
    n = len(ANCHOR_RE.findall(text))
    if n == 0:
        continue
    new_text = ANCHOR_RE.sub("", text)
    new_text = TRAILING_WS_RE.sub("", new_text)
    f.write_text(new_text, encoding="utf-8")
    print(f"  {n:3d} -> {f.relative_to(RAPPORT)}")
    total += n

print(f"\nTotal: {total} Pandoc anchors stripped")
