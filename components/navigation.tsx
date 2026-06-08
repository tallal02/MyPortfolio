"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowUpRight, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-semibold tracking-normal text-zinc-50"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 font-mono text-[11px] text-emerald-300">
              MT
            </span>
            <span>Muhammad Tallal</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-50",
                  pathname === item.href && "bg-zinc-900 text-zinc-50",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden border-zinc-800 bg-zinc-950 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 sm:inline-flex"
          >
            <a href="mailto:mmtallal@gmail.com">
              mmtallal@gmail.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-zinc-800 bg-zinc-950 p-0 text-zinc-50">
              <div className="border-b border-zinc-800 px-5 py-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Navigation</p>
              </div>
              <nav className="flex flex-col p-3" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-50",
                      pathname === item.href && "bg-zinc-900 text-zinc-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
