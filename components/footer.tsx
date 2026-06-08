import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-zinc-50">Muhammad Tallal Eatazaz</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
              Production AI engineer focused on reliability, retrieval, and translation systems.
            </p>
          </div>

          <nav className="grid gap-2 text-sm" aria-label="Footer navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-zinc-400 transition-colors hover:text-zinc-50">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <a href="https://github.com/tallal02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <a
                  href="https://linkedin.com/in/muhammad-tallal-eatazaz-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <a href="mailto:mmtallal@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="font-mono text-xs text-zinc-500">Islamabad, Pakistan</p>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-500">Copyright 2026 Muhammad Tallal Eatazaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
