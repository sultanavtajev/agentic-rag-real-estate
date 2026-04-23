"""Strip remaining markdown header markers (#, ###, ####, etc) in rapport_4."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

# Match any level of markdown header prefix at line start (up to h6)
HEADER_RE = re.compile(r"^#{1,6} ", re.MULTILINE)

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total = 0
for f in files:
    text = f.read_text(encoding="utf-8")
    n = len(HEADER_RE.findall(text))
    if n == 0:
        continue
    f.write_text(HEADER_RE.sub("", text), encoding="utf-8")
    print(f"  {n:3d} -> {f.relative_to(RAPPORT)}")
    total += n

print(f"\nTotal: {total} header prefixes stripped")
