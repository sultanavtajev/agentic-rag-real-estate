"use client";

import { useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { toast } from "sonner";
import { saveChart } from "@/lib/api-client";

/**
 * Auto-capture a screenshot of the current page once it is fully loaded,
 * then save it via the backend. Fires once per component instance and
 * overwrites any existing file with the same name.
 *
 * The hook waits for page-specific readiness before capturing:
 *   1. If `ready` is provided: wait for `ready === true`.
 *   2. Always: wait for `document.readyState === "complete"`.
 *   3. Always: wait for all `<img>` elements to finish loading.
 *   4. Always: wait for two animation frames so React has painted.
 *   5. If `ready` is NOT provided: wait for a DOM quiet period (fallback).
 *
 * A toast notification is shown when the screenshot is saved.
 *
 * Usage:
 *   const [loading, setLoading] = useState(true);
 *   useAutoScreenshot("Appendix_A1_Dashboard.png", { ready: !loading });
 *
 *   // Pages without a clear loading signal:
 *   useAutoScreenshot("Appendix_A3_Analysis.png");
 */
export function useAutoScreenshot(
  filename: string,
  options?: { ready?: boolean; maxWaitMs?: number; quietMs?: number },
): void {
  const doneRef = useRef(false);
  const ready = options?.ready;
  const maxWaitMs = options?.maxWaitMs ?? 30000;
  const quietMs = options?.quietMs ?? 1000;

  useEffect(() => {
    if (doneRef.current) return;
    if (ready === false) return;

    let cancelled = false;
    let observer: MutationObserver | null = null;
    let quietTimer: ReturnType<typeof setTimeout> | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    function waitReadyState(): Promise<void> {
      if (document.readyState === "complete") return Promise.resolve();
      return new Promise<void>((resolve) => {
        const onLoad = () => {
          window.removeEventListener("load", onLoad);
          resolve();
        };
        window.addEventListener("load", onLoad);
      });
    }

    function waitImages(): Promise<void> {
      const imgs = Array.from(document.images);
      return Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                img.addEventListener("load", () => resolve(), { once: true });
                img.addEventListener("error", () => resolve(), { once: true });
              }),
        ),
      ).then(() => undefined);
    }

    function waitPaint(): Promise<void> {
      return new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });
    }

    function waitDomQuiet(): Promise<void> {
      return new Promise<void>((resolve) => {
        const resetTimer = () => {
          if (quietTimer) clearTimeout(quietTimer);
          quietTimer = setTimeout(() => {
            if (observer) observer.disconnect();
            resolve();
          }, quietMs);
        };
        observer = new MutationObserver(resetTimer);
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
        });
        resetTimer();
        fallbackTimer = setTimeout(() => {
          if (observer) observer.disconnect();
          if (quietTimer) clearTimeout(quietTimer);
          resolve();
        }, maxWaitMs);
      });
    }

    async function capture() {
      try {
        await waitReadyState();
        if (cancelled) return;
        await waitImages();
        if (cancelled) return;
        await waitPaint();
        if (cancelled) return;

        if (ready === undefined) {
          await waitDomQuiet();
          if (cancelled) return;
          await waitPaint();
          if (cancelled) return;
        }

        window.scrollTo(0, 0);
        await waitPaint();
        if (cancelled) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const png = await toPng(document.documentElement, {
          backgroundColor: "#ffffff",
          pixelRatio: 2,
          width: viewportWidth,
          height: viewportHeight,
          canvasWidth: viewportWidth,
          canvasHeight: viewportHeight,
          style: {
            transform: "none",
            margin: "0",
          },
          filter: (node) => {
            if (node instanceof HTMLElement) {
              if (node.getAttribute("role") === "dialog") return false;
              if (node.getAttribute("data-skip-screenshot") === "true") {
                return false;
              }
            }
            return true;
          },
        });
        if (cancelled) return;

        const base64 = png.split(",")[1];
        if (!base64) return;
        await saveChart(filename, base64);
        if (cancelled) return;

        doneRef.current = true;
        toast.success("Screenshot lagret", {
          description: filename,
          duration: 4000,
        });
      } catch (e) {
        if (cancelled) return;
        const message = e instanceof Error ? e.message : String(e);
        console.warn(`Auto-screenshot for ${filename} failed:`, e);
        toast.error("Screenshot feilet", {
          description: `${filename}: ${message}`,
          duration: 6000,
        });
      }
    }

    capture();

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (quietTimer) clearTimeout(quietTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [filename, ready, maxWaitMs, quietMs]);
}
