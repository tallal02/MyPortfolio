import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL("https://tallal-portfolio.vercel.app"),
  title: {
    default: "Muhammad Tallal Eatazaz - Production AI Engineer",
    template: "%s - Muhammad Tallal Eatazaz",
  },
  description:
    "Production AI engineer building reliable retrieval, translation, and evaluation systems for enterprise workflows.",
  keywords: [
    "Production AI Engineer",
    "RAG",
    "Retrieval Systems",
    "LangSmith",
    "Machine Learning Reliability",
    "Translation Systems",
    "React",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Muhammad Tallal Eatazaz" }],
  creator: "Muhammad Tallal Eatazaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tallal-portfolio.vercel.app",
    title: "Muhammad Tallal Eatazaz - Production AI Engineer",
    description:
      "Reliable retrieval, translation, and evaluation systems for enterprise AI workflows.",
    siteName: "Muhammad Tallal Eatazaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tallal Eatazaz - Production AI Engineer",
    description:
      "Reliable retrieval, translation, and evaluation systems for enterprise AI workflows.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
