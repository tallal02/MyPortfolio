import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Tallal Eatazaz - AI + Full-Stack + .NET + AWS Developer",
  description:
    "Computer Science graduate from FAST NUCES Islamabad, passionate about developing intelligent systems, robust web platforms, scalable enterprise applications, and cloud solutions.",
  keywords: [
    "AI Developer",
    "Full-Stack Developer",
    ".NET Developer",
    "AWS Developer",
    "React",
    "Python",
    "C#",
    "Machine Learning",
    "Cloud Computing",
  ],
  authors: [{ name: "Muhammad Tallal Eatazaz" }],
  creator: "Muhammad Tallal Eatazaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadtallal.com",
    title: "Muhammad Tallal Eatazaz - AI + Full-Stack + .NET + AWS Developer",
    description:
      "Computer Science graduate from FAST NUCES Islamabad, passionate about developing intelligent systems, robust web platforms, scalable enterprise applications, and cloud solutions.",
    siteName: "Muhammad Tallal Eatazaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tallal Eatazaz - AI + Full-Stack + .NET + AWS Developer",
    description:
      "Computer Science graduate from FAST NUCES Islamabad, passionate about developing intelligent systems, robust web platforms, scalable enterprise applications, and cloud solutions.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
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
