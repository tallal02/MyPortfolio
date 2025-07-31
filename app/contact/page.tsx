"use client"

import type React from "react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResumes, setShowResumes] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const result = await response.json()
  
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Sending failed",
          description: "There was a problem sending your message.",
        })
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Please try again.",
      })
    }
  
    setIsSubmitting(false)
  }
  
  

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">mmtallal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+92 334 7222344</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://linkedin.com/in/muhammad-tallal-eatazaz-/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn Profile
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://github.com/tallal02" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-3" />
                    GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Full-time Opportunities</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Freelance Projects</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Consulting</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Limited</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action & Resume Downloads */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Work Together?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you need AI solutions, full-stack
            development, or .NET applications, let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col items-center gap-4 w-full">

            <Button size="lg" asChild>
              <a href="mailto:mmtallal@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="default"
              onClick={() => setShowResumes(!showResumes)}
              className="flex items-center gap-2"
            >
              Download Resume
              {showResumes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>

            {showResumes && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full max-w-xl">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/Muhammad_Tallal_Eatazaz_Resume_AI.pdf" download>
                    🎓 AI Resume
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/Muhammad_Tallal_Eatazaz_Resume_FS.pdf" download>
                    💻 Full-Stack Resume
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/Muhammad_Tallal_Eatazaz_Resume_NET.pdf" download>
                    🧩 .NET Resume
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/Muhammad_Tallal_Eatazaz_Resume_AW.pdf" download>
                    📄 AWS Resume
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


