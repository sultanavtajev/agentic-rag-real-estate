"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { listProcessedFiles, getProcessedFile } from "@/lib/api-client";

interface ProcessedDataDialogProps {
  setId: string | null;
  mode: "extracted" | "chunks" | "embedding" | "indexing" | "log";
  onClose: () => void;
}

const FILE_MAP: Record<string, string> = {
  chunks: "chunks.md",
  log: "processing_log.md",
  embedding: "embedding_log.md",
  indexing: "indexing_log.md",
};

export function ProcessedDataDialog({ setId, mode, onClose }: ProcessedDataDialogProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const loadedKey = useRef<string | null>(null);

  const fetchData = useCallback(async (id: string, m: string) => {
    const key = `${id}:${m}`;
    if (key === loadedKey.current) return;
    loadedKey.current = key;
    setLoading(true);
    try {
      const fileList = await listProcessedFiles(id);
      const exactName = FILE_MAP[m];
      const target = exactName
        ? fileList.find((f) => f.filename === exactName)
        : fileList.find((f) => f.filename.startsWith("extracted_"));
      if (target) {
        setContent(await getProcessedFile(id, target.filename));
      } else {
        setContent("Ingen fil funnet.");
      }
    } catch {
      setContent("Kunne ikke laste data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!setId) return;
    fetchData(setId, mode);
  }, [setId, mode, fetchData]);

  const handleClose = () => {
    loadedKey.current = null;
    setContent("");
    onClose();
  };

  const titleMap = {
    extracted: "Extracted text",
    chunks: "Chunks",
    embedding: "Embedding log",
    indexing: "Indexing log",
    log: "Processing log",
  } as const;
  const title = titleMap[mode];

  return (
    <Dialog open={!!setId} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title} — {setId}</DialogTitle>
        </DialogHeader>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="overflow-auto max-h-[65vh]">
            <pre className="whitespace-pre-wrap text-sm font-mono p-4 bg-muted/40 rounded-md">
              {content}
            </pre>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
