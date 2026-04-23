"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { ChartCard } from "@/components/charts/chart-helpers";

const DIAGRAM = `flowchart TB
  S1["\`**1. Upload documents**
  The user uploads one or more PDF sales prospectuses through the web interface. The files are saved in the system as a new document set.\`"]
  S2["\`**2. Prepare documents for search**
  The system reads each PDF, extracts the text, and splits it into smaller passages. Each passage is converted into a numerical vector and stored, so the system can later find passages with similar meaning even if they use different words.\`"]
  S3["\`**3. Start risk analysis**
  The user picks a document set and chooses which method to run: the simple baseline or the smarter agent-based version. The system streams progress back to the browser as it works.\`"]
  S4A["\`**4a. Standard RAG (baseline)**
  The system retrieves the most relevant passages from the document and asks Claude once to list every risk it can find. This is the simple approach we compare against.\`"]
  S4B["\`**4b. Agentic RAG (smarter pipeline)**
  Claude first plans which sub-questions to ask, fetches the right passages for each, identifies risks, and then reflects on its own answer to refine and validate the results.\`"]
  S5["\`**5. Save the results**
  The list of identified risks is saved with metadata about the run. A trace of every Claude call is also saved so the run can be inspected later.\`"]
  S6["\`**6. Evaluate against ground truth**
  Claude reads the full document to build a gold-standard list of risks. The system then compares the analysis output against this list and calculates how well it did, using precision, recall and F1.\`"]
  S7["\`**7. Categorize the risks**
  Each identified risk is sorted into a topic category (for example moisture, electrical, legal) so we can compare which kinds of risks each method handles best.\`"]
  S8["\`**8. Ablation study**
  To find out which parts of the agent matter most, the system reruns the analysis with different combinations of planning, tool use and reflection turned on or off, and measures how performance changes.\`"]
  S9["\`**9. Reports and visualizations**
  All numbers are turned into charts and tables on the results, ablation, categorize and report pages. Figures and a markdown report are saved automatically for the thesis.\`"]
  CLAUDE["\`**Anthropic Claude**
  Large language model used for understanding text, identifying risks, matching, and categorizing.\`"]
  VOYAGE["\`**Voyage AI**
  Embedding model that turns text into numerical vectors for semantic search.\`"]

  S1 ==> S2
  S2 ==> S3
  S3 ==> S4A
  S3 ==> S4B
  S4A ==> S5
  S4B ==> S5
  S5 ==> S6
  S6 ==> S7
  S7 ==> S8
  S8 ==> S9

  S2 -.->|embeddings| VOYAGE
  S4B -.->|tool_use calls| CLAUDE
  CLAUDE -.->|results| S6

  classDef userStyle fill:#fef3c7,stroke:#d97706,stroke-width:3px,color:#78350f
  classDef procStyle fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
  classDef ragStyle fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#4c1d95
  classDef evalStyle fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
  classDef dataStyle fill:#fef9c3,stroke:#ca8a04,stroke-width:2px,color:#713f12
  classDef extStyle fill:#fce7f3,stroke:#db2777,stroke-width:2px,color:#831843

  class S1,S3,S9 userStyle
  class S2 procStyle
  class S4A,S4B ragStyle
  class S6,S7,S8 evalStyle
  class S5 dataStyle
  class CLAUDE,VOYAGE extStyle
`;

export function ArchitectureFigure({ prefix }: { prefix?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
      flowchart: {
        curve: "basis",
        htmlLabels: true,
        padding: 15,
        nodeSpacing: 60,
        rankSpacing: 70,
        useMaxWidth: false,
        wrappingWidth: 280,
        defaultRenderer: "elk",
      },
    });

    let cancelled = false;
    (async () => {
      try {
        const { svg } = await mermaid.render("architecture-diagram", DIAGRAM);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          // Ensure SVG can grow beyond container width
          const svgEl = ref.current.querySelector("svg");
          if (svgEl) {
            svgEl.style.maxWidth = "none";
          }
        }
      } catch (e) {
        if (ref.current) {
          ref.current.innerHTML = `<pre class="text-xs text-red-600">Diagram render error: ${String(e)}</pre>`;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ChartCard prefix={prefix} title="Overall system architecture">
      <div className="w-full overflow-x-auto bg-white flex justify-center">
        <div
          ref={ref}
          className="inline-block p-4"
          style={{ minHeight: 600 }}
        />
      </div>
    </ChartCard>
  );
}
