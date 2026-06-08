import type { LucideIcon } from "lucide-react"
import {
  Bot,
  CheckCircle2,
  GraduationCap,
  Gauge,
  Github,
  Languages,
  Newspaper,
  ScanSearch,
  Workflow,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "InfoMorph Multilingual News Summarizer",
    label: "News Pipeline",
    icon: Newspaper,
    description:
      "A multilingual news app that scrapes articles, summarizes them, and can turn the result into audio and avatar-style video.",
    stack: ["FastAPI", "Next.js", "MongoDB", "Pegasus", "ElevenLabs", "FOMM"],
    metrics: [
      { label: "Concurrent users", value: "50+" },
      { label: "Pipeline mode", value: "Async" },
      { label: "Output forms", value: "Text / Audio / Video" },
    ],
    highlights: [
      "Scraping and cleanup normalize article text before model inference.",
      "Pegasus handles the summary step after the content is cleaned.",
      "ElevenLabs and First Order Motion Model extend the output beyond plain text.",
    ],
    architecture: `Scraping
  -> Text cleanup
  -> Pegasus summarizer
  -> ElevenLabs narration
  -> First Order Motion Model
  -> Next.js delivery`,
    github: "https://github.com/tallal02",
    tone: "text-emerald-300",
  },
  {
    title: "Urdu-to-English Neural Translator",
    label: "Neural Translation",
    icon: Languages,
    description:
      "A PyTorch Urdu-to-English translator built around an LSTM encoder-decoder, Bahdanau Attention, and decoding controls.",
    stack: ["PyTorch", "LSTM", "Bahdanau Attention", "Beam Search", "BLEU-4"],
    metrics: [
      { label: "BLEU-4 gain", value: "+14" },
      { label: "Architecture", value: "Seq2Seq" },
      { label: "Decoder", value: "Beam Search" },
    ],
    highlights: [
      "Bahdanau Attention improves alignment between Urdu input tokens and English output tokens.",
      "Teacher forcing stabilizes training while token masking keeps padding out of the loss.",
      "Beam search improves final translations compared with greedy token selection.",
    ],
    architecture: `Urdu tokens
  -> Embedding layer
  -> LSTM encoder
  -> Bahdanau attention
  -> Masked decoder loss
  -> Beam-search English output`,
    github: "https://github.com/tallal02",
    tone: "text-sky-300",
  },
  {
    title: "CNN Image Classifier",
    label: "Computer Vision",
    icon: ScanSearch,
    description:
      "A Keras six-layer CNN for image classification, tuned with augmentation and local inference export improvements.",
    stack: ["Keras", "TensorFlow", "CNN", "Data Augmentation", "Model Export"],
    metrics: [
      { label: "Accuracy", value: "96%" },
      { label: "Overfitting drop", value: "-18%" },
      { label: "Inference speed", value: "+20%" },
    ],
    highlights: [
      "Six-layer CNN balances feature extraction depth with local inference practicality.",
      "Augmentation strategy reduced overfitting by 18% across training and validation behavior.",
      "Export optimizations improved local inference speed by 20% for faster iteration.",
    ],
    architecture: `Image input
  -> Augmentation
  -> Conv / Pool blocks
  -> Dense classifier
  -> Exported model
  -> Local inference`,
    github: "https://github.com/tallal02",
    tone: "text-amber-300",
  },
  {
    title: "Flex Academic Portal",
    label: ".NET Application",
    icon: GraduationCap,
    description:
      "An academic management portal built with .NET 6, role-based access, JWT authentication, and an MS SQL-backed data layer.",
    stack: ["ASP.NET Core", "Entity Framework", ".NET 6", "JWT", "MS SQL"],
    metrics: [
      { label: "Access model", value: "Role-based" },
      { label: "Auth", value: "JWT" },
      { label: "Data layer", value: "MS SQL" },
    ],
    highlights: [
      "Used ASP.NET Core and Entity Framework to model academic workflows and data access.",
      "Implemented role-based access for separate user responsibilities across the portal.",
      "Added JWT authentication so API access stayed explicit and testable.",
    ],
    architecture: `React / portal UI
  -> ASP.NET Core API
  -> JWT auth middleware
  -> Entity Framework
  -> MS SQL records
  -> Role-based views`,
    github: "https://github.com/tallal02",
    tone: "text-rose-300",
  },
]

const systemThemes = [
  {
    icon: Workflow,
    title: "Show the path",
    body: "Each project is easier to judge when the data flow and model step are visible.",
  },
  {
    icon: Bot,
    title: "Clear tool boundaries",
    body: "These systems could become agent tools because their inputs, outputs, and failure points are explicit.",
  },
  {
    icon: Gauge,
    title: "Keep the numbers",
    body: "BLEU gain, latency, accuracy, overfitting, and inference speed are more useful than vague claims.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="border-b border-zinc-800 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300 hover:bg-zinc-900">
              Projects
            </Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-zinc-50 sm:text-5xl">
              Projects, shown by how they work.
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A more technical view of the systems: what goes in, what transforms it, what comes out, and what I measured.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6">
          {projects.map((project, index) => (
            <ProjectBrief key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-800 px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {systemThemes.map((theme) => (
            <ThemeTile key={theme.title} {...theme} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectBrief({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const ProjectIcon = project.icon

  return (
    <article className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
      <div className="grid gap-0 lg:grid-cols-[0.68fr_0.32fr]">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <ProjectIcon className={`h-5 w-5 ${project.tone}`} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                System {String(index + 1).padStart(2, "0")}
              </p>
              <p className={`mt-1 font-mono text-xs ${project.tone}`}>{project.label}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-50">{project.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{project.description}</p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-fit border-zinc-800 bg-zinc-950 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-400">
                <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${project.tone}`} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800 bg-zinc-900/35 p-6 lg:border-l lg:border-t-0">
          <div className="grid gap-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-zinc-800 bg-zinc-950 p-3">
                <p className="font-mono text-xs text-zinc-500">{metric.label}</p>
                <p className="mt-1 text-lg font-semibold text-zinc-50">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <p className="font-mono text-xs text-zinc-500">architecture.md</p>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-6 text-zinc-300">
              <code>{project.architecture}</code>
            </pre>
          </div>
        </div>
      </div>
    </article>
  )
}

function ThemeTile({
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
