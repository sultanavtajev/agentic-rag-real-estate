"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const steps = [
  {
    id: "upload",
    title: "1. Upload",
    summary: "Select or drag in a sales prospectus (PDF). The document set ID is assigned automatically.",
    detail:
      "The sales prospectus is uploaded to the backend and stored as the original PDF in data/raw/{id}/. " +
      "The system automatically assigns a unique ID (d001, d002, etc.) based on the number of existing document sets. " +
      "Only PDF files are allowed. Processing starts automatically after upload.",
  },
  {
    id: "extraction",
    title: "2. Text extraction",
    summary: "Text is extracted from the PDF and stored as a .md file.",
    detail:
      "The PDF is parsed page by page using pdfplumber. Only text is extracted; images and tables are ignored. " +
      "The result is stored as a Markdown file (extracted_{filename}.md) in data/processed/{id}/. " +
      "This file is the source for all downstream work and can be inspected via the Extracted column in the table.",
  },
  {
    id: "chunking",
    title: "3. Chunking",
    summary: "The .md file is split into chunks of 512 characters with 64 characters of overlap.",
    detail:
      "The extracted .md file is read and split into chunks with a fixed size of 512 characters. " +
      "Between each chunk there are 64 characters of overlap so that context is not lost at split boundaries. " +
      "The result is stored as chunks.md and can be inspected via the Chunks column. " +
      "The overlap ensures that sentences crossing a chunk boundary are captured in both neighboring chunks.",
  },
  {
    id: "embedding",
    title: "4. Embedding",
    summary: "Each chunk is converted into a vector via Voyage AI.",
    detail:
      "Chunks are sent to the Voyage AI API (model: voyage-3-large) in batches of 50 for efficiency, " +
      "but a separate vector is produced per chunk. Each vector is a numerical representation of the text. " +
      "Similar vectors mean the text covers similar topics. " +
      "This makes it possible to search semantically instead of only on exact words.",
  },
  {
    id: "indexing",
    title: "5. Indexing",
    summary: "The vectors are stored in ChromaDB, ready for semantic search.",
    detail:
      "The vectors are stored in ChromaDB, a local vector database. Each chunk is stored with its vector, " +
      "text, page number, and chunk ID. When you later run an analysis, the system searches this database " +
      "for chunks that are semantically relevant to your question.",
  },
];

export function UploadInfoSteps() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        How the upload works (click for details):
      </p>
      <Accordion type="multiple" className="w-full">
        {steps.map((s) => (
          <AccordionItem key={s.id} value={s.id} className="border-b-0">
            <AccordionTrigger className="py-2 text-sm hover:no-underline">
              <span>
                <strong className="text-foreground">{s.title}</strong>
                <span className="text-muted-foreground"> — {s.summary}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-2 pl-4">
              {s.detail}
            </AccordionContent>
          </AccordionItem>
        ))}
        <div className="py-2 text-sm">
          <strong className="text-foreground">6. Ready for analysis</strong>
          <span className="text-muted-foreground"> — The document set is available on the{" "}
            <Link href="/analyze" className="text-primary underline underline-offset-4 hover:text-primary/80">
              Analysis page
            </Link>.
          </span>
        </div>
      </Accordion>
    </div>
  );
}
