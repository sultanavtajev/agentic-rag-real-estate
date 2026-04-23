"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DocumentSetInfo } from "@/lib/types";
import { FileText, Trash2, Loader2, CheckCircle2 } from "lucide-react";

const PAGE_SIZE = 10;

interface DocumentSetTableProps {
  documentSets: DocumentSetInfo[];
  processingSetId: string;
  successSetId: string;
  onViewFiles: (doc: DocumentSetInfo) => void;
  onViewExtracted: (doc: DocumentSetInfo) => void;
  onViewChunks: (doc: DocumentSetInfo) => void;
  onViewEmbeddingLog: (doc: DocumentSetInfo) => void;
  onViewIndexingLog: (doc: DocumentSetInfo) => void;
  onViewLog: (doc: DocumentSetInfo) => void;
  onDelete: (doc: DocumentSetInfo) => void;
  onProcess: (setId: string) => void;
}

export function DocumentSetTable({
  documentSets,
  processingSetId,
  successSetId,
  onViewFiles,
  onViewExtracted,
  onViewChunks,
  onViewEmbeddingLog,
  onViewIndexingLog,
  onViewLog,
  onDelete,
  onProcess,
}: DocumentSetTableProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleSets = useMemo(
    () => documentSets.slice(0, visibleCount),
    [documentSets, visibleCount],
  );
  const remaining = documentSets.length - visibleCount;

  return (
    <div>
      <div className="mb-2 flex items-center justify-end text-sm text-muted-foreground">
        Showing {Math.min(visibleCount, documentSets.length)} of {documentSets.length}
      </div>
      <div className="overflow-x-auto rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40">
            <TableHead className="px-4">ID</TableHead>
            <TableHead className="px-4">Status</TableHead>
            <TableHead className="px-4 text-center">Original file</TableHead>
            <TableHead className="px-4 text-center">Extracted</TableHead>
            <TableHead className="px-4 text-center">Chunks</TableHead>
            <TableHead className="px-4 text-center">Embedding</TableHead>
            <TableHead className="px-4 text-center">Indexing</TableHead>
            <TableHead className="px-4 text-center">Log</TableHead>
            <TableHead className="px-4 text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleSets.map((d) => {
            const isProcessing = processingSetId === d.set_id;
            const isSuccess = successSetId === d.set_id;
            return (
              <TableRow key={d.set_id} className="group">
                <TableCell className="px-4">
                  <span className="font-medium">{d.set_id}</span>
                  {d.original_filename && (
                    <p className="text-xs text-muted-foreground truncate max-w-[200px]" title={d.original_filename}>
                      {d.original_filename}
                    </p>
                  )}
                </TableCell>
                <TableCell className="px-4">
                  {isProcessing ? (
                    <Badge variant="outline" className="gap-1">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Processing...
                    </Badge>
                  ) : isSuccess ? (
                    <Badge
                      variant="default"
                      className="gap-1 bg-green-100 text-green-800 border-green-200"
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      Processed
                    </Badge>
                  ) : d.processed ? (
                    <Badge
                      variant="default"
                      className="bg-green-100 text-green-800 border-green-200"
                    >
                      Processed
                    </Badge>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 text-xs"
                      onClick={() => onProcess(d.set_id)}
                    >
                      Process
                    </Button>
                  )}
                </TableCell>
                <TableCell className="px-4 text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onViewFiles(d)}
                    title="View original file"
                  >
                    <FileText className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="px-4 text-center">
                  {d.has_processed_data ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onViewExtracted(d)}
                      title="View extracted text"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="px-4 text-center">
                  {d.has_processed_data ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onViewChunks(d)}
                      title="View chunks"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="px-4 text-center">
                  {d.has_processed_data ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onViewEmbeddingLog(d)}
                      title="View embedding log"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="px-4 text-center">
                  {d.has_processed_data ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onViewIndexingLog(d)}
                      title="View indexing log"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="px-4 text-center">
                  {d.has_processed_data ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onViewLog(d)}
                      title="View processing log"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">&mdash;</span>
                  )}
                </TableCell>
                <TableCell className="px-4 text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => onDelete(d)}
                    title="Delete document set"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
      {remaining > 0 && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            onClick={() =>
              setVisibleCount((prev) =>
                Math.min(prev + PAGE_SIZE, documentSets.length),
              )
            }
          >
            Show more ({Math.min(PAGE_SIZE, remaining)})
          </Button>
        </div>
      )}
    </div>
  );
}
