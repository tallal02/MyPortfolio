"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Braces,
  CheckCircle2,
  Database,
  Gauge,
  Github,
  Mail,
  Network,
  Search,
  ShieldCheck,
  Terminal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const metrics = [
  {
    value: "96%",
    label: "CNN Accuracy",
    detail: "computer vision classifier",
    tone: "text-emerald-300",
  },
  {
    value: "30%",
    label: "API Latency Reduction",
    detail: "optimized dashboard responses",
    tone: "text-sky-300",
  },
  {
    value: "+14",
    label: "BLEU Score Improvement",
    detail: "Urdu-to-English translation",
    tone: "text-amber-300",
  },
]

const stages = [
  {
    id: "ingest",
    label: "Ingest",
    icon: Database,
    title: "Structured corpus intake",
    description:
      "Document loading, chunk normalization, metadata retention, and embedding writes prepared for predictable retrieval behavior.",
    signal: "schema checks",
  },
  {
    id: "retrieve",
    label: "Retrieve",
    icon: Search,
    title: "VectorDB retrieval pass",
    description:
      "Similarity search is tuned around grounded answer quality, not just nearest-neighbor convenience.",
    signal: "top-k review",
  },
  {
    id: "evaluate",
    label: "Evaluate",
    icon: ShieldCheck,
    title: "Guardrails and tracing",
    description:
      "LangSmith traces expose prompt, context, and failure paths so retrieval errors become debuggable engineering events.",
    signal: "trace replay",
  },
]

const systemNotes = [
  "Grounded responses over generic completions",
  "Retrieval quality debugging with LangSmith traces",
  "Evaluation guardrails for answer drift and weak context",
]

export default function HomePage() {
  const [activeStage, setActiveStage] = useState(stages[0])
  const ActiveIcon = activeStage.icon

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
          <div className="max-w-2xl">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Badge className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300 hover:bg-zinc-900">
                Production AI Engineer
              </Badge>
              <span className="font-mono text-xs text-zinc-500">Islamabad, Pakistan</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-zinc-50 sm:text-6xl lg:text-7xl">
              Muhammad Tallal Eatazaz builds reliable AI systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              I focus on retrieval, translation, and evaluation systems that turn abstract models into stable
              enterprise workflows. The work is practical: grounded answers, measurable latency wins, and traceable
              failure modes.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-zinc-50 text-zinc-950 hover:bg-emerald-300">
                <Link href="/projects">
                  View Systems
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-800 bg-zinc-950 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <a href="mailto:mmtallal@gmail.com">
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <a href="https://github.com/tallal02" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <p className="font-mono text-xs text-zinc-500">rag/eval_pipeline.ts</p>
              </div>
              <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-300">
                <code>{`const answer = await pipeline.run({
  source: vectorDB.retrieve(query),
  guardrails: ["grounding", "context_quality"],
  trace: langsmith.capture(session),
})

return answer.withEvidence()`}</code>
              </pre>
            </div>

            <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-r border-zinc-800 p-4 last:border-r-0">
                  <p className={cn("font-mono text-2xl font-semibold", metric.tone)}>{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-zinc-100">{metric.label}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Featured System</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-50">
                VectorDB and RAG pipeline at Oak Street Technologies
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              A retrieval workflow shaped around response grounding, evaluation guardrails, and traceable debugging.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-zinc-800 bg-zinc-900/40 p-3 lg:border-b-0 lg:border-r">
              <div className="grid gap-2">
                {stages.map((stage) => {
                  const StageIcon = stage.icon

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setActiveStage(stage)}
                      className={cn(
                        "flex min-h-20 items-center gap-3 rounded-md border px-4 py-3 text-left transition-colors",
                        activeStage.id === stage.id
                          ? "border-emerald-400/50 bg-emerald-400/10 text-zinc-50"
                          : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50",
                      )}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950">
                        <StageIcon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium">{stage.label}</span>
                        <span className="mt-1 block font-mono text-xs text-zinc-500">{stage.signal}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-[1fr_0.85fr]">
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-300">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-50">{activeStage.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{activeStage.description}</p>

                <div className="mt-8 grid gap-3">
                  {systemNotes.map((note) => (
                    <div key={note} className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-800 bg-zinc-900/40 p-6 md:border-l md:border-t-0">
                <div className="grid gap-3">
                  <SystemNode icon={Network} label="retrieval" value="VectorDB" tone="text-emerald-300" />
                  <Connector />
                  <SystemNode icon={Braces} label="orchestration" value="RAG Chain" tone="text-sky-300" />
                  <Connector />
                  <SystemNode icon={Activity} label="observability" value="LangSmith" tone="text-amber-300" />
                  <Connector />
                  <SystemNode icon={Gauge} label="output" value="Grounded Answer" tone="text-zinc-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <ReliabilityTile
            icon={ShieldCheck}
            title="Reliability"
            body="Evaluation guardrails, trace review, and retrieval debugging for production AI behavior."
          />
          <ReliabilityTile
            icon={Search}
            title="Retrieval"
            body="Vector search workflows designed for grounded answers and explainable context selection."
          />
          <ReliabilityTile
            icon={Terminal}
            title="Translation"
            body="Seq2Seq optimization, token masking, beam search, and teacher forcing for measurable BLEU gains."
          />
        </div>
      </section>
    </div>
  )
}

function Connector() {
  return <div className="ml-5 h-5 w-px bg-zinc-800" />
}

function SystemNode({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Network
  label: string
  value: string
  tone: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-950 p-3">
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-md bg-zinc-900", tone)}>
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{label}</p>
        <p className="mt-1 text-sm font-medium text-zinc-100">{value}</p>
      </div>
    </div>
  )
}

function ReliabilityTile({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck
  title: string
  body: string
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/35 p-6">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-zinc-200">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
    </div>
  )
}
