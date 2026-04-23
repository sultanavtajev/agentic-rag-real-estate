"""Tell ord i rapport-seksjoner og sammenlign med ordbudsjett.

Bruk:
    python scripts/count_words.py
    python scripts/count_words.py --chapter 2
    python scripts/count_words.py --verbose
"""

import argparse
import re
import sys
from pathlib import Path

RAPPORT_DIR = Path("docs/0.6_prosjekt_rapport/5.skriving/rapport_1")

# Ordbudsjett fra innhold_v2.md
BUDGET: dict[str, dict[str, int]] = {
    "0_sammendrag": {
        "_total": 600,
    },
    "1_introduction": {
        "_total": 1800,
        "1.1": 500,
        "1.2": 350,
        "1.3": 350,
        "1.4": 300,
        "1.5": 300,
    },
    "2_background": {
        "_total": 3600,
        "2.1": 700,
        "2.2": 800,
        "2.3": 600,
        "2.4": 600,
        "2.5": 500,
        "2.6": 400,
    },
    "3_methodology": {
        "_total": 1800,
        "3.1": 500,
        "3.2": 450,
        "3.3": 400,
        "3.4": 450,
    },
    "4_data_ground_truth": {
        "_total": 1500,
        "4.1": 400,
        "4.2": 400,
        "4.3": 350,
        "4.4": 350,
    },
    "5_system_design": {
        "_total": 3600,
        "5.1": 500,
        "5.2": 600,
        "5.3": 550,
        "5.4": 1100,
        "5.5": 400,
        "5.6": 450,
    },
    "6_results": {
        "_total": 2500,
        "6.1": 600,
        "6.2": 600,
        "6.3": 600,
        "6.4": 400,
        "6.5": 300,
    },
    "7_discussion": {
        "_total": 1800,
        "7.1": 450,
        "7.2": 350,
        "7.3": 350,
        "7.4": 350,
        "7.5": 300,
    },
    "8_conclusion": {
        "_total": 800,
        "8.1": 300,
        "8.2": 200,
        "8.3": 300,
    },
}

TOTAL_BUDGET = 18000


def count_words_in_file(path: Path) -> int:
    """Tell ord i en Markdown-fil, ekskluder metadata og markup."""
    text = path.read_text(encoding="utf-8")
    # Fjern YAML frontmatter
    text = re.sub(r"^---.*?---\s*", "", text, flags=re.DOTALL)
    # Fjern Markdown-overskrifter (# ## ### etc.)
    text = re.sub(r"^#{1,6}\s+.*$", "", text, flags=re.MULTILINE)
    # Fjern bildereferanser
    text = re.sub(r"!\[.*?\]\(.*?\)", "", text)
    # Fjern lenker men behold tekst
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    # Fjern tabellmarkering
    text = re.sub(r"^\|[-:| ]+\|$", "", text, flags=re.MULTILINE)
    # Fjern kodeblokker
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    # Fjern inline kode
    text = re.sub(r"`[^`]+`", "", text)
    # Fjern HTML-tags
    text = re.sub(r"<[^>]+>", "", text)
    # Fjern bold/italic markup
    text = re.sub(r"\*{1,3}", "", text)
    # Tell ord
    words = text.split()
    return len(words)


def count_chapter(chapter_dir: Path) -> dict[str, int]:
    """Tell ord per underseksjon i et kapittel."""
    counts: dict[str, int] = {}
    total = 0

    # Finn alle .md-filer i mappen
    md_files = sorted(chapter_dir.rglob("*.md"))
    for md_file in md_files:
        rel = md_file.relative_to(chapter_dir)
        name = rel.stem
        wc = count_words_in_file(md_file)
        counts[name] = wc
        total += wc

    counts["_total"] = total
    return counts


def format_bar(actual: int, budget: int, width: int = 20) -> str:
    """Lag en visuell bar for fremdrift."""
    if budget == 0:
        return " " * width
    ratio = min(actual / budget, 2.0)
    filled = int(ratio * width)
    filled = min(filled, width)
    bar = "#" * filled + "." * (width - filled)
    return bar


def print_report(
    chapter_filter: int | None = None,
    verbose: bool = False,
) -> None:
    """Skriv ordtellingsrapport."""
    grand_total = 0
    chapters_found = 0
    chapters_empty = 0

    print()
    print("=" * 72)
    print("  ORDTELLING — Masteroppgave")
    print("=" * 72)
    print()
    print(f"  {'Seksjon':<30} {'Ord':>6} {'Budsjett':>8} {'%':>6}  {'Fremgang'}")
    print(f"  {'-' * 30} {'-' * 6} {'-' * 8} {'-' * 6}  {'-' * 20}")

    for chapter_key, budget_map in BUDGET.items():
        # Filtrer paa kapittel hvis angitt
        if chapter_filter is not None:
            chapter_num = chapter_key.split("_")[0]
            if chapter_num != str(chapter_filter):
                continue

        chapter_dir = RAPPORT_DIR / chapter_key
        chapter_budget = budget_map["_total"]

        if not chapter_dir.exists():
            b = format_bar(0, chapter_budget)
            print(f"  {chapter_key:<30} {'0':>6} {chapter_budget:>8} {'0%':>6}  {b}")
            chapters_empty += 1
            continue

        counts = count_chapter(chapter_dir)
        chapter_total = counts.get("_total", 0)
        grand_total += chapter_total
        chapters_found += 1

        if chapter_total == 0:
            chapters_empty += 1

        pct = round(chapter_total / chapter_budget * 100) if chapter_budget else 0
        pct_str = f"{pct}%"
        bar = format_bar(chapter_total, chapter_budget)

        # Marker over/under budsjett
        if pct > 120:
            status = " OVER"
        elif pct >= 90:
            status = " OK"
        elif pct > 0:
            status = ""
        else:
            status = ""

        print(
            f"  {chapter_key:<30} {chapter_total:>6} "
            f"{chapter_budget:>8} {pct_str:>6}  {bar}{status}"
        )

        # Verbose: vis underseksjoner
        if verbose:
            for sub_key, sub_budget in budget_map.items():
                if sub_key == "_total":
                    continue
                sub_count = 0
                # Finn filer som matcher underseksjonen
                for name, wc in counts.items():
                    if name == "_total":
                        continue
                    if name.startswith(sub_key) or name == sub_key:
                        sub_count += wc
                sub_pct = round(sub_count / sub_budget * 100) if sub_budget else 0
                sub_bar = format_bar(sub_count, sub_budget, width=15)
                print(f"    {sub_key:<28} {sub_count:>6} {sub_budget:>8} {sub_pct:>5}%  {sub_bar}")

    print()
    print(f"  {'-' * 30} {'-' * 6} {'-' * 8} {'-' * 6}  {'-' * 20}")
    grand_pct = round(grand_total / TOTAL_BUDGET * 100)
    gt_bar = format_bar(grand_total, TOTAL_BUDGET)
    print(f"  {'TOTALT':<30} {grand_total:>6} {TOTAL_BUDGET:>8} {grand_pct:>5}%  {gt_bar}")
    print()
    print(f"  Kapitler med innhold: {chapters_found}")
    print(f"  Kapitler uten innhold: {chapters_empty}")
    print(f"  Gjenstaar: {TOTAL_BUDGET - grand_total} ord")
    print()


def main() -> None:
    parser = argparse.ArgumentParser(description="Tell ord i rapport-seksjoner")
    parser.add_argument("--chapter", type=int, help="Vis kun ett kapittel (f.eks. --chapter 2)")
    parser.add_argument("--verbose", "-v", action="store_true", help="Vis underseksjoner")
    args = parser.parse_args()

    if not RAPPORT_DIR.exists():
        print(f"Rapport-mappen finnes ikke: {RAPPORT_DIR}")
        sys.exit(1)

    print_report(chapter_filter=args.chapter, verbose=args.verbose)


if __name__ == "__main__":
    main()
