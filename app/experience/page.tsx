import type { LucideIcon } from "lucide-react"
import {
  Activity,
  ArrowUpRight,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  DatabaseZap,
  Gauge,
  MapPin,
  Route,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    company: "Oak Street Technologies",
    role: "AI Engineer",
    period: "2025",
    location: "Gulberg, Islamabad",
    icon: SearchCheck,
    summary:
      "Worked on a RAG workflow where the hard part was not calling an LLM, but making retrieval misses visible and answer grounding easier to inspect.",
    focus: ["RAG reliability", "Vector retrieval", "Response grounding", "Evaluation workflows"],
    stack: ["Python", "VectorDB", "RAG", "LangSmith", "Embeddings", "LLM Evaluation"],
    brief: [
      "Tuned a VectorDB-backed RAG pipeline around context relevance and grounded answer behavior.",
      "Used LangSmith traces to inspect prompts, retrieved chunks, response formation, and weak-answer paths.",
      "Worked through guardrails for answer drift, low-quality context, and retrieval misses.",
      "Looked at agent-style workflow patterns where retrieval, tool calls, and verification steps stay observable instead of becoming one opaque prompt chain.",
    ],
    metrics: [
      { label: "Primary system", value: "RAG" },
      { label: "Debugging layer", value: "LangSmith" },
      { label: "Reliability axis", value: "Grounding" },
    ],
  },
  {
    company: "EUNOMATIX",
    role: "Software Engineer",
    period: "2024",
    location: "Remote",
    icon: ServerCog,
    summary:
      "Built product surfaces and automation scripts for BrowserMon and Watchdog, mostly around detection logic that needed to be explainable and repeatable.",
    focus: ["BrowserMon", "Watchdog", "Detection logic", "Data automation"],
    stack: ["Python", "JavaScript", "React", "Node.js", "SQL", "Automation"],
    brief: [
      "Developed features for BrowserMon and Watchdog workflows used to monitor web behavior and operational signals.",
      "Implemented deterministic web-detection logic so results were easier to test and explain.",
      "Created Python scripts for data collection, cleanup, and repeatable processing tasks.",
      "Balanced UI work with backend reliability and maintainable automation.",
    ],
    metrics: [
      { label: "Surface area", value: "Full-stack" },
      { label: "Automation", value: "Python" },
      { label: "Detection", value: "Deterministic" },
    ],
  },
  {
    company: "Systems Limited",
    role: "Cloud App Development Intern",
    period: "Jun 2023 to Aug 2023",
    location: "Islamabad, Pakistan",
    icon: DatabaseZap,
    summary:
      "Built React and MS SQL dashboard workflows for enterprise cloud applications, then worked on the slower query and API paths.",
    focus: ["React dashboards", "MS SQL", "API optimization", "Enterprise workflows"],
    stack: ["React", "MS SQL", "REST APIs", "Query Optimization", "Cloud Apps"],
    brief: [
      "Built dashboard interfaces in React for cloud application workflows.",
      "Worked with MS SQL queries and API flows supporting reporting and user-facing data retrieval.",
      "Optimized query and response paths, contributing to a 30% reduction in API response time for dashboard interactions.",
      "Learned the discipline of shipping inside a larger engineering environment: reviews, authentication, deployment concerns, and handoffs.",
    ],
    metrics: [
      { label: "API response", value: "-30%" },
      { label: "Frontend", value: "React" },
      { label: "Data layer", value: "MS SQL" },
    ],
  },
]

const principles = [
  {
    icon: ShieldCheck,
    title: "Trace the failure",
    body: "The useful question is usually: where did the answer go wrong, retrieval, prompt, data, or interface?",
  },
  {
    icon: Route,
    title: "Keep the path visible",
    body: "I like systems where the data path is readable enough that another engineer can debug it later.",
  },
  {
    icon: Bot,
    title: "Agents need rails",
    body: "Tool boundaries, memory discipline, trace review, and verification loops matter before autonomy is useful.",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="border-b border-zinc-800 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Badge className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300 hover:bg-zinc-900">
              Experience
            </Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-zinc-50 sm:text-5xl">
              Work notes from AI, product, and dashboard systems.
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A short version of what I worked on, what I touched, and what I cared about while building it.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.28fr_0.72fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">What I keep coming back to</p>
              <p className="mt-4 text-lg font-semibold leading-7 text-zinc-50">
                Reliability, retrieval, and translation systems.
              </p>
              <div className="mt-6 grid gap-3">
                <Signal icon={Activity} label="Production AI" />
                <Signal icon={Gauge} label="Latency and quality" />
                <Signal icon={TerminalSquare} label="Debuggable workflows" />
              </div>
            </div>
          </aside>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-zinc-800 md:block" />
            <div className="grid gap-6">
              {experiences.map((experience) => {
                const ExperienceIcon = experience.icon

                return (
                  <article key={experience.company} className="relative md:pl-12">
                    <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-emerald-300 md:flex">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    </div>

                    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                      <div className="grid gap-6 border-b border-zinc-800 bg-zinc-900/35 p-6 lg:grid-cols-[1fr_0.55fr]">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <ExperienceIcon className="h-5 w-5 text-emerald-300" />
                          </div>
                          <h2 className="mt-4 text-2xl font-semibold text-zinc-50">{experience.company}</h2>
                          <p className="mt-2 text-sm text-zinc-400">{experience.role}</p>
                        </div>

                        <div className="grid gap-3 text-sm text-zinc-400">
                          <Meta icon={CalendarDays} text={experience.period} />
                          <Meta icon={MapPin} text={experience.location} />
                          <Meta icon={Building2} text={experience.focus.join(" / ")} />
                        </div>
                      </div>

                      <div className="grid gap-0 lg:grid-cols-[1fr_0.45fr]">
                        <div className="p-6">
                          <p className="text-sm leading-7 text-zinc-300">{experience.summary}</p>

                          <div className="mt-7 grid gap-3">
                            {experience.brief.map((item) => (
                              <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-zinc-800 bg-zinc-900/25 p-6 lg:border-l lg:border-t-0">
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Stack</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {experience.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-xs text-zinc-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-8 grid gap-3">
                            {experience.metrics.map((metric) => (
                              <div key={metric.label} className="rounded-md border border-zinc-800 bg-zinc-950 p-3">
                                <p className="font-mono text-xs text-zinc-500">{metric.label}</p>
                                <p className="mt-1 text-lg font-semibold text-zinc-50">{metric.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <Principle key={principle.title} {...principle} />
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-800 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-zinc-400">
            The next layer of this portfolio documents the systems behind the work: pipelines, model architecture,
            evaluation decisions, and deployment tradeoffs.
          </p>
          <Button asChild className="w-fit bg-zinc-50 text-zinc-950 hover:bg-emerald-300">
            <a href="/projects">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

function Meta({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
      <span>{text}</span>
    </div>
  )
}

function Signal({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-950 p-3">
      <Icon className="h-4 w-4 text-emerald-300" />
      <span className="text-sm text-zinc-300">{label}</span>
    </div>
  )
}

function Principle({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon
  title: string
  body: string
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/35 p-6">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-emerald-300">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
    </div>
  )
}
