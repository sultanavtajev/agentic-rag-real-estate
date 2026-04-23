"""Tekstekstraksjon fra norske eiendomsdokumenter.

Regex-baserte funksjoner for å finne seksjonsoverskrifter
fra tilstandsrapporter og prospekter.
"""

import re

# Seksjonsoverskrifter (typisk NS 3600-format)
_SECTION_PATTERN = re.compile(
    r"^[\s]*(?:\d+[\.\)]\s*)?"
    r"("
    + "|".join(
        [
            "Bad",
            "Kjøkken",
            "Tak",
            "Fasade",
            "Kjeller",
            "Grunnmur",
            "Elektro",
            "VVS",
            "Ventilasjon",
            "Drenering",
            r"Pipe(?:/Ildsted)?",
            r"Ildsted(?:/Pipe)?",
            r"Vinduer(?:/Dører)?",
            r"Dører(?:/Vinduer)?",
            r"Balkong(?:/Terrasse)?",
            r"Terrasse(?:/Balkong)?",
            "Våtrom",
            "Etasjeskille",
        ]
    )
    + r")\s*$",
    re.MULTILINE | re.IGNORECASE,
)


def detect_section_headers(text: str) -> list[dict]:
    """Finn NS 3600-seksjonsoverskrifter i tekst.

    Args:
        text: Dokumenttekst å søke i.

    Returns:
        Liste med dict sortert etter posisjon. Hvert dict har nøklene
        ``section`` og ``position`` (char-offset).
    """
    results: list[dict] = []
    for match in _SECTION_PATTERN.finditer(text):
        section_name = match.group(1).strip()
        results.append(
            {
                "section": section_name,
                "position": match.start(),
            }
        )
    results.sort(key=lambda x: x["position"])
    return results
