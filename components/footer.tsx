import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Muhammad Tallal Eatazaz</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI + Full-Stack + .NET + AWS Developer passionate about creating innovative solutions across multiple
              domains.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/tallal02" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/muhammadtallaleatazaz" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:mmtallal@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/skills"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Experience
              </Link>
              <Link
                href="/certifications"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Certifications
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Services</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">AI/ML Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">.NET Applications</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">AWS Cloud Solutions</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">mmtallal@gmail.com</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
              <Button asChild className="w-full mt-4">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Muhammad Tallal Eatazaz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
