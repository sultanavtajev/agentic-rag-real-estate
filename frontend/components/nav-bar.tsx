"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileSearch, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/upload", label: "Upload" },
  { href: "/analyze", label: "Analysis" },
  { href: "/history", label: "Evaluation" },
  { href: "/results", label: "Results" },
  { href: "/categorize", label: "Categorization" },
  { href: "/ablation", label: "Ablation" },
  { href: "/rapport", label: "Report" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <FileSearch className="h-5 w-5 text-primary" />
          <span>Agentic RAG</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex sm:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(pathname, link.href)
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="border-t px-4 pb-4 sm:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(pathname, link.href)
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
