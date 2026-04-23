import logging

from src.utils.logging_config import setup_logging
from src.utils.text import (
    detect_section_headers,
)

# --- detect_section_headers ---


def test_detect_section_headers_finds_sections():
    text = "Bad\nLitt tekst her.\nTak\nMer tekst.\nKjeller\n"
    results = detect_section_headers(text)
    sections = [r["section"] for r in results]
    assert "Bad" in sections
    assert "Tak" in sections
    assert "Kjeller" in sections


def test_detect_section_headers_sorted_by_position():
    text = "Tak\nLitt tekst.\nBad\nMer tekst.\nKjeller\n"
    results = detect_section_headers(text)
    positions = [r["position"] for r in results]
    assert positions == sorted(positions)


def test_detect_section_headers_no_sections():
    text = "Dette er en helt vanlig tekst uten seksjoner."
    results = detect_section_headers(text)
    assert results == []


# --- setup_logging ---


def test_setup_logging_no_error():
    setup_logging("DEBUG")


def test_setup_logging_sets_level():
    setup_logging("DEBUG")
    root = logging.getLogger()
    assert root.level == logging.DEBUG
