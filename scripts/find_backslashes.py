"""Find all backslash-escape patterns in rapport_4 markdown files."""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

# Find any backslash followed by a non-newline char (excludes \n line continuations)
pat = re.compile(r"\\([^\n])")

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

# Count by escape type
from collections import Counter
all_escapes: Counter[str] = Counter()
file_escapes: dict[Path, Counter[str]] = {}

for f in files:
    text = f.read_text(encoding="utf-8")
    matches = pat.findall(text)
    if not matches:
        continue
    counter: Counter[str] = Counter(f"\\{c}" for c in matches)
    file_escapes[f] = counter
    all_escapes.update(counter)

print(f"Files with backslash escapes: {len(file_escapes)}")
print()
for f, counter in sorted(file_escapes.items()):
    rel = f.relative_to(RAPPORT)
    summary = ", ".join(f"{seq}={n}" for seq, n in sorted(counter.items()))
    print(f"  {rel}")
    print(f"    {summary}")

print()
print("Total escape patterns across all files:")
for seq, n in sorted(all_escapes.items(), key=lambda x: -x[1]):
    print(f"  {n:4d}  {seq!r}")
