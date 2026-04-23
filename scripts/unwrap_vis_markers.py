"""Unwrap [VIS Fig N: ...] -> VIS Fig N: ...

Removes only the wrapping brackets, keeps the descriptive text.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

PAT = re.compile(r'\[(VIS [^\]]+)\]')

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total = 0
for f in files:
    text = f.read_text(encoding="utf-8")
    matches = PAT.findall(text)
    if not matches:
        continue
    new_text = PAT.sub(r'\1', text)
    f.write_text(new_text, encoding="utf-8")
    print(f"  {len(matches):3d} -> {f.relative_to(RAPPORT)}")
    total += len(matches)

print(f"\nTotal: {total} [VIS ...] wrappers unwrapped")
