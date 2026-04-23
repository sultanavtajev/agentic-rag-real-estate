"""Strip `## ` header markers and `**` bold markers from rapport_4.

Removes:
  - `## ` at line starts (h2 markdown headers)
  - `**` anywhere in the file (bold markers, both opening and closing)
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

H2_RE = re.compile(r"^## ", re.MULTILINE)

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total_h2 = 0
total_bold = 0
changed_files = 0

for f in files:
    text = f.read_text(encoding="utf-8")
    n_h2 = len(H2_RE.findall(text))
    n_bold = text.count("**")
    if n_h2 == 0 and n_bold == 0:
        continue
    new_text = H2_RE.sub("", text)
    new_text = new_text.replace("**", "")
    f.write_text(new_text, encoding="utf-8")
    print(f"  {f.relative_to(RAPPORT)}: -{n_h2} '## ', -{n_bold} '**'")
    total_h2 += n_h2
    total_bold += n_bold
    changed_files += 1

print(f"\nTotal: -{total_h2} '## ' prefixes, -{total_bold} '**' markers across {changed_files} files")
