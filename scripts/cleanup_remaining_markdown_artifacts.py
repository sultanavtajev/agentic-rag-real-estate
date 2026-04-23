"""Clean up remaining markdown artifacts in rapport_4:

1. Unwrap `[Fig N: ...]` -> `Fig N: ...`
2. Remove broken `![][imageN]` references
3. Fix lingering "VIS" in 5.1 architecture overview
4. Remove broken `![OsloMet logo][image1]` reference in titlepage
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAPPORT = ROOT / "docs" / "0.6_prosjekt_rapport" / "5.skriving" / "rapport_4"

FIG_WRAP_RE = re.compile(r'\[(Fig \d+[^\]]*)\]')
BROKEN_IMG_RE = re.compile(r'^!\[\]\[image\d*\]\s*\n?', re.MULTILINE)
BROKEN_IMG_ALT_RE = re.compile(r'^!\[[^\]]*\]\[image\d*\]\s*\n?', re.MULTILINE)
VIS_PREFIX_RE = re.compile(r'^VIS (Fig\.?\s*\d+)', re.MULTILINE)
EXTRA_BLANKS_RE = re.compile(r'\n{3,}')

files = sorted(p for p in RAPPORT.rglob("*.md") if p.name != "Sultan_Avtajev_s199219_ACIT5900_v4.md")

totals = {"fig_wrap": 0, "broken_img": 0, "broken_img_alt": 0, "vis_prefix": 0}

for f in files:
    text = f.read_text(encoding="utf-8")
    original = text

    n_fig = len(FIG_WRAP_RE.findall(text))
    text = FIG_WRAP_RE.sub(r'\1', text)

    n_img = len(BROKEN_IMG_RE.findall(text))
    text = BROKEN_IMG_RE.sub("", text)

    n_img_alt = len(BROKEN_IMG_ALT_RE.findall(text))
    text = BROKEN_IMG_ALT_RE.sub("", text)

    n_vis = len(VIS_PREFIX_RE.findall(text))
    text = VIS_PREFIX_RE.sub(r'\1', text)

    if text == original:
        continue

    text = EXTRA_BLANKS_RE.sub("\n\n", text)
    f.write_text(text, encoding="utf-8")

    parts = []
    if n_fig: parts.append(f"{n_fig} [Fig wrap]")
    if n_img: parts.append(f"{n_img} ![][imageN]")
    if n_img_alt: parts.append(f"{n_img_alt} ![alt][imageN]")
    if n_vis: parts.append(f"{n_vis} VIS prefix")
    print(f"  {f.relative_to(RAPPORT)}: {', '.join(parts)}")

    totals["fig_wrap"] += n_fig
    totals["broken_img"] += n_img
    totals["broken_img_alt"] += n_img_alt
    totals["vis_prefix"] += n_vis

print(f"\nTotals: {totals}")
