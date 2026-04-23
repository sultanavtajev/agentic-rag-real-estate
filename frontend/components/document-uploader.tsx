"use client";

import { useCallback, useEffect, useState } from "react";
import type { DragEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { listDocuments } from "@/lib/api-client";
import { CloudUpload } from "lucide-react";

interface DocumentUploaderProps {
  onUpload: (files: File[]) => Promise<void>;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function DocumentUploader({ onUpload }: DocumentUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [nextId, setNextId] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    listDocuments()
      .then((docs) => {
        const maxId = Math.max(0, ...docs.map((d) => parseInt(d.set_id.replace("d", "")) || 0));
        setNextId(maxId + 1);
      })
      .catch(() => {});
  }, []);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const valid: File[] = [];
    const arr = Array.from(incoming);
    for (const f of arr) {
      if (!f.name.toLowerCase().endsWith(".pdf")) {
        setError("Only PDF files are allowed.");
        return;
      }
      valid.push(f);
    }
    setError("");
    setFiles((prev) => [...prev, ...valid]);
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setDragging(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles],
  );

  const handleSubmit = async () => {
    if (files.length === 0) return;
    setUploading(true);
    try {
      await onUpload(files);
      setNextId((n) => n + files.length);
      setFiles([]);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 pt-6">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-input")?.click()}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center transition-colors",
            dragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50",
          )}
        >
          <CloudUpload className="h-8 w-8 text-muted-foreground/60 mb-2" />
          <p className="text-sm font-medium">
            Drag and drop PDF files here
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            or click to select files
          </p>
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        {files.length > 0 && (
          <ul className="space-y-1 text-sm">
            {files.map((f, i) => (
              <li key={i} className="flex justify-between rounded bg-muted px-3 py-1.5">
                <span className="truncate">{f.name}</span>
                <span className="shrink-0 text-muted-foreground text-xs">
                  {formatFileSize(f.size)} &rarr; d{String(nextId + i).padStart(3, "0")}
                </span>
              </li>
            ))}
          </ul>
        )}

        <Button
          onClick={handleSubmit}
          disabled={uploading || files.length === 0}
          className="w-full"
        >
          {uploading ? "Uploading..." : `Upload ${files.length} file(s)`}
        </Button>
      </CardContent>
    </Card>
  );
}
