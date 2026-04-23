"""One-shot sweep: replace backslash-escaped close-parens with plain close-parens
across all rapport_4 markdown files."""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

NEEDLE = "\\)"
REPLACEMENT = ")"

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

total_replacements = 0
changed_files: list[Path] = []

for f in files:
    text = f.read_text(encoding="utf-8")
    n = text.count(NEEDLE)
    if n == 0:
        continue
    new_text = text.replace(NEEDLE, REPLACEMENT)
    f.write_text(new_text, encoding="utf-8")
    total_replacements += n
    changed_files.append(f)
    print(f"  {n:3d} replacements -> {f.relative_to(RAPPORT)}")

print(f"\nTotal: {total_replacements} replacements across {len(changed_files)} files")
