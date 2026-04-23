"""Computes precision/recall/F1 per risk category for standard and agentic RAG.

Reads eval_history/*.json for TP/FP/FN details and risk_categories.json for
category mapping. Outputs Fig_45_F1_per_category.png and a markdown summary.
"""

import json
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np


ROOT = Path(__file__).resolve().parent.parent
EVAL_DIR = ROOT / "data" / "eval_history"
CAT_FILE = ROOT / "data" / "risk_categories.json"
OUT_DIR = ROOT / "docs" / "0.6_prosjekt_rapport" / "4.dokumentasjon" / "resultater" / "visualiseringer"
FIG_PATH = OUT_DIR / "Fig_48_F1_per_category.png"
MD_PATH = OUT_DIR / "f1_per_category_report.md"


def load_categories() -> dict[str, str]:
    with CAT_FILE.open(encoding="utf-8") as f:
        data = json.load(f)
    return {rid: v["category"] for rid, v in data["mappings"].items()}


def compute_counts(cat_map: dict[str, str]) -> dict[str, dict[str, dict[str, int]]]:
    systems = ["standard_rag", "agentic_rag_P+T+R"]
    counts: dict[str, dict[str, dict[str, int]]] = {s: {} for s in systems}

    for fn in sorted(EVAL_DIR.glob("*.json")):
        with fn.open(encoding="utf-8") as f:
            data = json.load(f)
        for sys_name in systems:
            if sys_name not in data["system_results"]:
                continue
            sr = data["system_results"][sys_name]
            for pair in sr.get("matched_pair_details", []):
                gt_id = pair["ground_truth_risk"]["risk_id"]
                cat = cat_map.get(gt_id)
                if cat:
                    counts[sys_name].setdefault(cat, {"tp": 0, "fp": 0, "fn": 0})["tp"] += 1
            for risk in sr.get("unmatched_predicted_risks", []):
                cat = cat_map.get(risk["risk_id"])
                if cat:
                    counts[sys_name].setdefault(cat, {"tp": 0, "fp": 0, "fn": 0})["fp"] += 1
            for risk in sr.get("unmatched_ground_truth_risks", []):
                cat = cat_map.get(risk["risk_id"])
                if cat:
                    counts[sys_name].setdefault(cat, {"tp": 0, "fp": 0, "fn": 0})["fn"] += 1
    return counts


def compute_metrics(counts: dict) -> dict[str, dict[str, dict[str, float]]]:
    metrics: dict[str, dict[str, dict[str, float]]] = {}
    for sys_name, cats in counts.items():
        metrics[sys_name] = {}
        for cat, c in cats.items():
            tp, fp, fn = c["tp"], c["fp"], c["fn"]
            prec = tp / (tp + fp) if tp + fp else 0.0
            rec = tp / (tp + fn) if tp + fn else 0.0
            f1 = 2 * prec * rec / (prec + rec) if prec + rec else 0.0
            metrics[sys_name][cat] = {
                "precision": prec,
                "recall": rec,
                "f1": f1,
                "tp": tp,
                "fp": fp,
                "fn": fn,
                "support": tp + fn,
            }
    return metrics


def plot_f1(metrics: dict) -> None:
    cats_sorted = sorted(
        metrics["agentic_rag_P+T+R"].keys(),
        key=lambda c: metrics["agentic_rag_P+T+R"][c]["support"],
        reverse=True,
    )
    cats_sorted = [c for c in cats_sorted if metrics["agentic_rag_P+T+R"][c]["support"] >= 10]

    std = [metrics["standard_rag"].get(c, {"f1": 0})["f1"] * 100 for c in cats_sorted]
    ag = [metrics["agentic_rag_P+T+R"][c]["f1"] * 100 for c in cats_sorted]

    fig, ax = plt.subplots(figsize=(12, 10))
    y = np.arange(len(cats_sorted))
    h = 0.4
    ax.barh(y - h / 2, std, h, label="Standard RAG", color="#d97757")
    ax.barh(y + h / 2, ag, h, label="Agentic RAG", color="#4a7c7c")
    ax.set_yticks(y)
    ax.set_yticklabels([c.replace("_", " ") for c in cats_sorted], fontsize=9)
    ax.invert_yaxis()
    ax.set_xlabel("F1 score (%)")
    ax.set_title("Fig 48. F1 score per risk category (support \u2265 10)")
    ax.legend(loc="lower right")
    ax.grid(axis="x", alpha=0.3)
    plt.tight_layout()
    plt.savefig(FIG_PATH, dpi=150, bbox_inches="tight")
    plt.close()


def write_markdown(metrics: dict) -> None:
    cats_sorted = sorted(
        metrics["agentic_rag_P+T+R"].keys(),
        key=lambda c: metrics["agentic_rag_P+T+R"][c]["support"],
        reverse=True,
    )
    lines = [
        "# F1 per Category Report",
        "",
        "F1 score, precision and recall computed per risk category for Standard RAG and Agentic RAG.",
        "TP/FP/FN counted from matched_pair_details and unmatched lists in eval_history/*.json.",
        "",
        "## Fig 48. F1 per category",
        "",
        "![Fig 48](Fig_48_F1_per_category.png)",
        "",
        "> Path: `docs/0.6_prosjekt_rapport/4.dokumentasjon/resultater/visualiseringer/Fig_48_F1_per_category.png`",
        "",
        "| Category | Support | Std F1 | Std P | Std R | Agentic F1 | Agentic P | Agentic R |",
        "|----------|--------:|-------:|------:|------:|-----------:|----------:|----------:|",
    ]
    for cat in cats_sorted:
        s = metrics["agentic_rag_P+T+R"][cat]
        std = metrics["standard_rag"].get(cat, {"f1": 0, "precision": 0, "recall": 0})
        lines.append(
            f"| {cat} | {s['support']} | "
            f"{std['f1'] * 100:.1f}% | {std['precision'] * 100:.1f}% | {std['recall'] * 100:.1f}% | "
            f"{s['f1'] * 100:.1f}% | {s['precision'] * 100:.1f}% | {s['recall'] * 100:.1f}% |"
        )

    agentic_f1 = [(c, metrics["agentic_rag_P+T+R"][c]["f1"]) for c in cats_sorted if metrics["agentic_rag_P+T+R"][c]["support"] >= 10]
    agentic_f1.sort(key=lambda x: x[1], reverse=True)
    top = agentic_f1[:3]
    bot = agentic_f1[-3:]
    lines.extend([
        "",
        f"Top 3 agentic F1 (support \u2265 10): {', '.join(f'{c} ({v * 100:.1f}%)' for c, v in top)}.",
        f"Bottom 3 agentic F1 (support \u2265 10): {', '.join(f'{c} ({v * 100:.1f}%)' for c, v in bot)}.",
    ])
    MD_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    cat_map = load_categories()
    counts = compute_counts(cat_map)
    metrics = compute_metrics(counts)
    plot_f1(metrics)
    write_markdown(metrics)
    print(f"Wrote {FIG_PATH}")
    print(f"Wrote {MD_PATH}")
    # Summary
    for sys_name in metrics:
        cats_with_data = [c for c, v in metrics[sys_name].items() if v["support"] >= 10]
        avg_f1 = np.mean([metrics[sys_name][c]["f1"] for c in cats_with_data])
        print(f"{sys_name}: macro-F1 (support>=10) = {avg_f1 * 100:.1f}% across {len(cats_with_data)} categories")


if __name__ == "__main__":
    main()
