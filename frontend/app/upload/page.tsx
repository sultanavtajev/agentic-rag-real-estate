"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DocumentUploader } from "@/components/document-uploader";
import { DocumentSetTable } from "@/components/document-set-table";
import { ProcessedDataDialog } from "@/components/processed-data-dialog";
import { ProcessingProgress } from "@/components/processing-progress";
import { UploadInfoSteps } from "@/components/upload-info-steps";
import {
  uploadDocuments,
  streamProcessDocuments,
  listDocuments,
  deleteDocumentSet,
} from "@/lib/api-client";
import type { DocumentSetInfo } from "@/lib/types";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

export default function UploadPage() {
  const [documentSets, setDocumentSets] = useState<DocumentSetInfo[]>([]);
  const [documentsLoaded, setDocumentsLoaded] = useState(false);
  const [processingSetId, setProcessingSetId] = useState("");
  const [successSetId, setSuccessSetId] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  useAutoScreenshot("Appendix_A2_Upload.png", { ready: documentsLoaded });

  const INITIAL_STEPS = [
    { name: "upload", label: "Upload", status: "pending" as const, elapsed_s: 0 },
    { name: "extraction", label: "Text extraction", status: "pending" as const, elapsed_s: 0 },
    { name: "chunking", label: "Chunking", status: "pending" as const, elapsed_s: 0 },
    { name: "embedding", label: "Embedding", status: "pending" as const, elapsed_s: 0 },
    { name: "indexing", label: "Indexing", status: "pending" as const, elapsed_s: 0 },
  ];

  const [processSteps, setProcessSteps] = useState(INITIAL_STEPS);
  const [showProgress, setShowProgress] = useState(false);

  const [processedDialogSetId, setProcessedDialogSetId] = useState<string | null>(null);
  const [processedDialogMode, setProcessedDialogMode] = useState<"extracted" | "chunks" | "embedding" | "indexing" | "log">("extracted");
  const [filesDialogSet, setFilesDialogSet] = useState<DocumentSetInfo | null>(null);
  const [deleteDialogSet, setDeleteDialogSet] = useState<DocumentSetInfo | null>(null);
  const [deleting, setDeleting] = useState(false);

  const refresh = () => {
    listDocuments()
      .then((docs) => {
        setDocumentSets([...docs].reverse());
        setDocumentsLoaded(true);
      })
      .catch(() => setDocumentsLoaded(true));
  };

  useEffect(() => { refresh(); }, []);

  const handleUpload = async (files: File[]) => {
    setSuccessMsg("");
    setError("");

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const docs = await listDocuments();
      const maxId = Math.max(0, ...docs.map((d) => parseInt(d.set_id.replace("d", "")) || 0));
      const setId = `d${String(maxId + 1).padStart(3, "0")}`;

      setSuccessMsg(`Processing ${setId} (${i + 1} of ${files.length})...`);

      await uploadDocuments([file], setId);

      setProcessingSetId(setId);
      setProcessSteps(INITIAL_STEPS.map((s) => ({ ...s })));
      setShowProgress(true);

      await streamProcessDocuments(setId, {
        onStep: (event) => {
          setProcessSteps((prev) =>
            prev.map((s) =>
              s.name === event.step
                ? { ...s, status: event.status === "done" ? "done" : "running", elapsed_s: event.elapsed_s }
                : s
            )
          );
        },
        onDone: () => {},
        onError: (err) => setError(err),
      });

      setProcessingSetId("");
    }

    setShowProgress(false);
    setSuccessSetId("done");
    setSuccessMsg(`${files.length} sales prospectus(es) uploaded and processed`);
    setTimeout(() => setSuccessSetId(""), 4000);
    refresh();
  };

  const handleProcess = async (setId: string) => {
    setProcessingSetId(setId);
    setError("");
    setProcessSteps(INITIAL_STEPS.map((s) => ({ ...s })));
    setShowProgress(true);

    await streamProcessDocuments(setId, {
      onStep: (event) => {
        setProcessSteps((prev) =>
          prev.map((s) =>
            s.name === event.step
              ? { ...s, status: event.status === "done" ? "done" : "running", elapsed_s: event.elapsed_s }
              : s
          )
        );
      },
      onDone: () => {
        setSuccessSetId(setId);
        setTimeout(() => {
          setSuccessSetId("");
          setShowProgress(false);
        }, 4000);
        refresh();
      },
      onError: (err) => {
        setError(err);
        setShowProgress(false);
      },
    });

    setProcessingSetId("");
  };

  const handleDelete = async () => {
    if (!deleteDialogSet) return;
    setDeleting(true);
    try {
      await deleteDocumentSet(deleteDialogSet.set_id);
      setDeleteDialogSet(null);
      refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Deletion failed");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Upload document sets</h1>
        <UploadInfoSteps />
      </div>

      <DocumentUploader onUpload={handleUpload} />

      <ProcessingProgress steps={processSteps} visible={showProgress} />

      {successMsg && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{successMsg}</span>
          {successSetId && (
            <Link
              href="/analyze"
              className="ml-auto text-xs font-medium text-green-700 underline underline-offset-2 hover:text-green-900"
            >
              Go to analysis
            </Link>
          )}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {documentSets.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Document sets</h2>
          <DocumentSetTable
            documentSets={documentSets}
            processingSetId={processingSetId}
            successSetId={successSetId}
            onViewFiles={setFilesDialogSet}
            onViewExtracted={(d) => { setProcessedDialogMode("extracted"); setProcessedDialogSetId(d.set_id); }}
            onViewChunks={(d) => { setProcessedDialogMode("chunks"); setProcessedDialogSetId(d.set_id); }}
            onViewEmbeddingLog={(d) => { setProcessedDialogMode("embedding"); setProcessedDialogSetId(d.set_id); }}
            onViewIndexingLog={(d) => { setProcessedDialogMode("indexing"); setProcessedDialogSetId(d.set_id); }}
            onViewLog={(d) => { setProcessedDialogMode("log"); setProcessedDialogSetId(d.set_id); }}
            onDelete={setDeleteDialogSet}
            onProcess={handleProcess}
          />
        </div>
      )}

      {/* PDF preview dialog */}
      <Dialog
        open={!!filesDialogSet}
        onOpenChange={(open) => !open && setFilesDialogSet(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>{filesDialogSet?.filenames[0] ?? "Original file"}</DialogTitle>
            <DialogDescription>
              {filesDialogSet?.set_id}
            </DialogDescription>
          </DialogHeader>
          {filesDialogSet?.filenames[0] && (
            <iframe
              src={`/api/proxy/documents/${filesDialogSet.set_id}/raw/${filesDialogSet.filenames[0]}`}
              className="w-full flex-1 min-h-[70vh] rounded-md border"
              title="PDF preview"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog
        open={!!deleteDialogSet}
        onOpenChange={(open) => !open && setDeleteDialogSet(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete document set</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong>{deleteDialogSet?.set_id}</strong>? This removes all
              files and any indexed data. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogSet(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ProcessedDataDialog
        setId={processedDialogSetId}
        mode={processedDialogMode}
        onClose={() => setProcessedDialogSetId(null)}
      />
    </div>
  );
}
