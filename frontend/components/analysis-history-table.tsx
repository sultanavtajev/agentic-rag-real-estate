"use client";

import { Fragment, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, ChevronDown, ChevronRight, Trash2 } from "lucide-react";
import { listResults, listDocuments, listEvaluationHistory, deleteEvaluationRecord, getResult, deleteResult, deleteAblationDocumentSet } from "@/lib/api-client";
import type { AnalysisResult, AnalysisResultSummary } from "@/lib/types";

const SYS_LABELS: Record<string, string> = {
  standard_rag: "Standard RAG",
  ground_truth: "Ground Truth",
};

function sysLabel(t: string): string {
  return SYS_LABELS[t] ?? t.replace(/_/g, " ");
}

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    + " " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

interface Session {
  session_id: string;
  document_set_id: string;
  timestamp: string;
  runs: AnalysisResultSummary[];
}

function nearTimestamp(a: string, b: string, maxDiffMs = 5 * 60 * 1000): boolean {
  return Math.abs(new Date(a).getTime() - new Date(b).getTime()) < maxDiffMs;
}

function groupBySession(summaries: AnalysisResultSummary[]): Session[] {
  const map = new Map<string, Session>();

  // Grupper paa session_id hvis den finnes
  for (const s of summaries) {
    if (s.session_id) {
      const existing = map.get(s.session_id);
      if (existing) {
        existing.runs.push(s);
      } else {
        map.set(s.session_id, {
          session_id: s.session_id,
          document_set_id: s.document_set_id,
          timestamp: s.timestamp,
          runs: [s],
        });
      }
    }
  }

  // Gamle resultater uten session_id: grupper paa document_set_id + naert tidsstempel
  const noSession = summaries.filter((s) => !s.session_id);
  for (const s of noSession) {
    let placed = false;
    for (const sess of map.values()) {
      if (sess.document_set_id === s.document_set_id && nearTimestamp(sess.timestamp, s.timestamp)) {
        sess.runs.push(s);
        placed = true;
        break;
      }
    }
    if (!placed) {
      map.set(s.run_id, {
        session_id: s.run_id,
        document_set_id: s.document_set_id,
        timestamp: s.timestamp,
        runs: [s],
      });
    }
  }

  return [...map.values()].sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}

function groupByDocumentSet(summaries: AnalysisResultSummary[]): Session[] {
  const map = new Map<string, Session>();
  for (const s of summaries) {
    const existing = map.get(s.document_set_id);
    if (existing) {
      existing.runs.push(s);
      if (s.timestamp > existing.timestamp) existing.timestamp = s.timestamp;
    } else {
      map.set(s.document_set_id, {
        session_id: s.document_set_id,
        document_set_id: s.document_set_id,
        timestamp: s.timestamp,
        runs: [s],
      });
    }
  }
  return [...map.values()].sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}

const ABLATION_LABELS = new Set(["T+R", "P+R", "P+T", "P", "T", "R", "NONE"]);
function isAblationResult(s: AnalysisResultSummary) {
  if (!s.system_type.startsWith("agentic_rag_")) return false;
  const label = s.system_type.slice("agentic_rag_".length);
  return ABLATION_LABELS.has(label);
}

export interface AnalysisHistoryHandle {
  refresh: () => void;
}

interface HistoryTableProps {
  mode?: "analysis" | "ablation";
}

export const AnalysisHistoryTable = forwardRef<AnalysisHistoryHandle, HistoryTableProps>(
  function AnalysisHistoryTable({ mode = "analysis" }, ref) {
  const [summaries, setSummaries] = useState<AnalysisResultSummary[]>([]);
  const [uploadedSets, setUploadedSets] = useState<string[]>([]);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [expandedRun, setExpandedRun] = useState<string | null>(null);
  const [detailResult, setDetailResult] = useState<AnalysisResult | null>(null);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const refresh = useCallback(() => {
    listResults()
      .then((all) => setSummaries(
        mode === "ablation"
          ? all.filter((s) => isAblationResult(s))
          : all.filter((s) => !isAblationResult(s)),
      ))
      .catch(() => {});
    listDocuments()
      .then((docs) => setUploadedSets(docs.filter((d) => d.processed).map((d) => d.set_id)))
      .catch(() => {});
  }, [mode]);

  useImperativeHandle(ref, () => ({ refresh }), [refresh]);

  useEffect(() => { refresh(); }, [refresh]);

  const handleDeleteSession = useCallback(async (sess: Session) => {
    try {
      if (mode === "ablation") {
        // Cascade-slett alle ablasjon-data for dokumentsettet
        await deleteAblationDocumentSet(sess.document_set_id);
      } else {
        // Delete analysis results
        await Promise.all(sess.runs.map((r) => deleteResult(r.run_id)));
        // Delete matching evaluation records for this document set
        const evalHistory = await listEvaluationHistory();
        const matchingEvals = evalHistory.filter((e) => e.document_set_id === sess.document_set_id);
        await Promise.all(matchingEvals.map((e) => deleteEvaluationRecord(e.record_id)));
      }
      refresh();
    } catch { /* ignore */ }
  }, [mode, refresh]);

  const toggleRun = useCallback(async (runId: string) => {
    if (expandedRun === runId) {
      setExpandedRun(null);
      setDetailResult(null);
      return;
    }
    setExpandedRun(runId);
    try {
      setDetailResult(await getResult(runId));
    } catch {
      setDetailResult(null);
    }
  }, [expandedRun]);

  const allSessions = mode === "ablation"
    ? groupByDocumentSet(summaries)
    : groupBySession(summaries);
  const sessions = useMemo(() => {
    return [...allSessions].sort((a, b) => {
      const cmp = a.document_set_id.localeCompare(b.document_set_id, undefined, { numeric: true });
      return sortOrder === "asc" ? cmp : -cmp;
    });
  }, [allSessions, sortOrder]);

  // Duplikater: dokumentsett med mer enn 1 sesjon
  const duplicates = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of allSessions) counts.set(s.document_set_id, (counts.get(s.document_set_id) ?? 0) + 1);
    return [...counts.entries()].filter(([, c]) => c > 1).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));
  }, [allSessions]);

  // Manglende: opplastede sett uten analyseresultat
  const missingSets = useMemo(() => {
    const analyzed = new Set(allSessions.map((s) => s.document_set_id));
    return uploadedSets.filter((id) => !analyzed.has(id)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [allSessions, uploadedSets]);

  // Manglende systemer: sett som ikke har alle 3 (standard_rag, agentic_rag, ground_truth)
  const incompleteSets = useMemo(() => {
    const result: { id: string; missing: string[] }[] = [];
    for (const sess of allSessions) {
      const types = new Set(sess.runs.map((r) => {
        if (r.system_type.includes("agentic")) return "agentic_rag";
        if (r.system_type.includes("standard")) return "standard_rag";
        if (r.system_type.includes("ground_truth")) return "ground_truth";
        return r.system_type;
      }));
      const m: string[] = [];
      if (!types.has("standard_rag")) m.push("Standard RAG");
      if (!types.has("agentic_rag")) m.push("Agentic RAG");
      if (!types.has("ground_truth")) m.push("Ground Truth");
      if (m.length > 0) result.push({ id: sess.document_set_id, missing: m });
    }
    return result.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }, [allSessions]);

  if (sessions.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Previous analyses</h2>
        <Button variant="outline" size="sm" className="gap-1" onClick={() => setSortOrder((o) => o === "asc" ? "desc" : "asc")}>
          <ArrowUpDown className="h-3 w-3" />
          {sortOrder === "asc" ? "d001 → d203" : "d203 → d001"}
        </Button>
      </div>

      {mode === "analysis" && (duplicates.length > 0 || missingSets.length > 0 || incompleteSets.length > 0) && (
        <div className="grid gap-3 sm:grid-cols-3">
          {duplicates.length > 0 && (
            <Card className="border-orange-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-orange-700">Duplicates ({duplicates.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {duplicates.map(([id, c]) => <Badge key={id} variant="outline" className="text-xs border-orange-200">{id} ({c}x)</Badge>)}
                </div>
              </CardContent>
            </Card>
          )}
          {missingSets.length > 0 && (
            <Card className="border-red-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-red-700">Missing analysis ({missingSets.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {missingSets.map((id) => <Badge key={id} variant="outline" className="text-xs border-red-200">{id}</Badge>)}
                </div>
              </CardContent>
            </Card>
          )}
          {incompleteSets.length > 0 && (
            <Card className="border-yellow-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-yellow-700">Incomplete ({incompleteSets.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {incompleteSets.slice(0, 20).map((s) => (
                    <Badge key={s.id} variant="outline" className="text-xs border-yellow-200">{s.id}: {s.missing.join(", ")}</Badge>
                  ))}
                  {incompleteSets.length > 20 && <span className="text-xs text-muted-foreground">+{incompleteSets.length - 20} more</span>}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
      <div className="rounded-lg border bg-card overflow-hidden max-h-[280px] overflow-y-auto">
        <Table className="table-fixed w-full">
          <TableHeader className="sticky top-0 bg-muted/40 z-10">
            <TableRow className="bg-muted/40">
              <TableHead className="px-2 w-10" />
              <TableHead className="px-2 w-36">Date</TableHead>
              <TableHead className="px-2 w-24">Document set</TableHead>
              <TableHead className="px-2">Systems</TableHead>
              <TableHead className="px-2 w-20 text-right">Risks</TableHead>
              <TableHead className="px-2 w-16 text-right">Time</TableHead>
              <TableHead className="px-2 w-24 text-right">Input tokens</TableHead>
              <TableHead className="px-2 w-24 text-right">Output tokens</TableHead>
              <TableHead className="px-2 w-12 text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((sess) => {
              const isOpen = expandedSession === sess.session_id;
              const totalRisks = sess.runs.reduce((n, r) => n + r.risk_count, 0);
              const totalTime = sess.runs.reduce((n, r) => n + r.duration_s, 0);
              const totalInput = sess.runs.reduce((n, r) => n + r.input_tokens, 0);
              const totalOutput = sess.runs.reduce((n, r) => n + r.output_tokens, 0);
              return (
                <Fragment key={sess.session_id}>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/30"
                    onClick={() => setExpandedSession(isOpen ? null : sess.session_id)}
                  >
                    <TableCell className="px-2">
                      {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </TableCell>
                    <TableCell className="px-2 text-sm">{fmtDate(sess.timestamp)}</TableCell>
                    <TableCell className="px-2 text-sm">{sess.document_set_id}</TableCell>
                    <TableCell className="px-2 text-sm truncate">
                      {sess.runs.map((r) => sysLabel(r.system_type)).join(", ")}
                    </TableCell>
                    <TableCell className="px-2 text-right text-sm">{totalRisks}</TableCell>
                    <TableCell className="px-2 text-right text-sm">{totalTime.toFixed(1)}s</TableCell>
                    <TableCell className="px-2 text-right text-sm">{totalInput.toLocaleString()}</TableCell>
                    <TableCell className="px-2 text-right text-sm">{totalOutput.toLocaleString()}</TableCell>
                    <TableCell className="px-4 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={(e) => { e.stopPropagation(); handleDeleteSession(sess); }}
                        title="Delete all analyses in this run"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  {isOpen && sess.runs.map((run) => {
                    const runOpen = expandedRun === run.run_id;
                    return (
                      <Fragment key={run.run_id}>
                        <TableRow
                          className="cursor-pointer bg-muted/10 hover:bg-muted/20"
                          onClick={(e) => { e.stopPropagation(); toggleRun(run.run_id); }}
                        >
                          <TableCell className="px-2 pl-8">
                            {runOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                          </TableCell>
                          <TableCell className="px-2 text-sm text-muted-foreground">{fmtDate(run.timestamp)}</TableCell>
                          <TableCell className="px-2 text-sm text-muted-foreground" />
                          <TableCell className="px-2 text-sm font-medium">{sysLabel(run.system_type)}</TableCell>
                          <TableCell className="px-2 text-right text-sm">{run.risk_count}</TableCell>
                          <TableCell className="px-2 text-right text-sm">{run.duration_s.toFixed(1)}s</TableCell>
                          <TableCell className="px-2 text-right text-sm">{run.input_tokens.toLocaleString()}</TableCell>
                          <TableCell className="px-2 text-right text-sm">{run.output_tokens.toLocaleString()}</TableCell>
                          <TableCell />
                        </TableRow>
                        {runOpen && (
                          <TableRow key={`${run.run_id}-detail`}>
                            <TableCell colSpan={9} className="p-4 bg-muted/5 whitespace-normal break-words" style={{ wordBreak: "break-word" }}>
                              {detailResult?.run_id === run.run_id ? (
                                <RiskDetail result={detailResult} />
                              ) : (
                                <p className="text-sm text-muted-foreground">Loading...</p>
                              )}
                            </TableCell>
                          </TableRow>
                        )}
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
});

function RiskDetail({ result }: { result: AnalysisResult }) {
  return (
    <div className="space-y-3 max-w-full overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div><span className="text-muted-foreground">Input tokens:</span> {result.input_tokens.toLocaleString()}</div>
        <div><span className="text-muted-foreground">Output tokens:</span> {result.output_tokens.toLocaleString()}</div>
        <div><span className="text-muted-foreground">Time:</span> {result.duration_s.toFixed(1)}s</div>
        <div><span className="text-muted-foreground">Risks:</span> {result.risks.length}</div>
      </div>
      <div className="space-y-2">
        {result.risks.map((risk) => (
          <div key={risk.risk_id} className="rounded border p-3 text-sm space-y-1 break-words">
            <p className="font-medium">{risk.description}</p>
            {risk.evidence.length > 0 && (
              <p className="text-muted-foreground text-xs break-words">
                Evidence: {risk.evidence.join(" | ")}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Pages: {risk.source_pages.join(", ")} | Confidence: {risk.confidence.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
