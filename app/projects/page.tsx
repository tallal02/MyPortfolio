"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, Code } from "lucide-react"

const projects = [
  // AI Projects
  {
    id: 1,
    title: "CNN Image Classifier",
    category: "AI",
    stack: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    description:
      "Built a CNN with TensorFlow to classify Cats vs Dogs images, achieving 96% accuracy with data augmentation and adaptive learning rates.",
    features: [
      "96% accuracy achieved",
      "Data augmentation techniques",
      "Adaptive learning rates",
      "Comprehensive evaluation with precision and recall",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
  {
    id: 2,
    title: "Urdu-to-English Translator",
    category: "AI",
    stack: ["PyTorch", "BLEU", "LSTM", "Python"],
    description:
      "Designed an attention-based encoder-decoder RNN in PyTorch for Urdu to English translation with BLEU score evaluation.",
    features: [
      "Attention-based architecture",
      "Encoder-decoder RNN design",
      "BLEU score evaluation",
      "Optional LSTM variant support",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
  {
    id: 3,
    title: "Spam Detector",
    category: "AI",
    stack: ["Python", "Word2Vec", "NLP", "Neural Networks"],
    description:
      "Developed a two-layer neural network with handcrafted Word2Vec embeddings using negative sampling for spam detection.",
    features: [
      "Handcrafted Word2Vec embeddings",
      "Two-layer neural network",
      "SGD training optimization",
      "Confusion matrix evaluation",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },

  // Full-Stack Projects
  {
    id: 4,
    title: "InfoMorph",
    category: "Full-Stack",
    stack: ["Next.js", "Node.js", "MongoDB", "FastAPI", "Transformers"],
    description:
      "Built an automated tool for scraping, cleaning, and summarizing multi-lingual articles using advanced NLP with Pegasus transformers.",
    features: [
      "Multi-lingual article processing",
      "Automated scraping and cleaning",
      "NLP summarization with Pegasus",
      "Secure and intuitive UI",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
  {
    id: 5,
    title: "WorkForce Nexus (MERN)",
    category: "Full-Stack",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "MS SQL"],
    description:
      "Engineered a robust MERN stack Employee Management System with secure authentication, role-based authorization, and real-time updates.",
    features: [
      "MERN stack architecture",
      "Secure authentication system",
      "Role-based authorization",
      "Real-time updates and scalability",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
  {
    id: 6,
    title: "MentorMe",
    category: "Full-Stack",
    stack: ["Android Studio", "Kotlin", "SQLite"],
    description:
      "Developed software solution for TA/LD management, automating scheduling, task tracking, and reporting for enhanced operational efficiency.",
    features: [
      "Automated scheduling system",
      "Task tracking and management",
      "Comprehensive reporting",
      "Data-driven workflow optimization",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },

  // .NET Projects
  {
    id: 7,
    title: "Flex Academic Portal",
    category: ".NET",
    stack: ["ASP.NET Core", "Entity Framework", "Windows Forms", "MS SQL"],
    description:
      "Developed academic management system using .NET 6 with role-based access control, .NET Identity, and JWT authentication.",
    features: [
      "Role-based access control",
      ".NET Identity integration",
      "JWT authentication",
      "Entity Framework code-first approach",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
  {
    id: 8,
    title: "WorkForce Nexus (.NET)",
    category: ".NET",
    stack: ["ASP.NET Core", "Entity Framework", "React", "MS SQL"],
    description:
      "Engineered employee management system using ASP.NET Core MVC with RESTful APIs, .NET 7, and JWT authentication.",
    features: [
      "ASP.NET Core MVC architecture",
      "RESTful API development",
      "JWT authentication and authorization",
      "Entity Framework Core integration",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
  {
    id: 9,
    title: "Cloud Solutions Enterprise",
    category: ".NET",
    stack: [".NET 7", "Azure", "Docker", "Entity Framework", "MS SQL"],
    description:
      "Modernized legacy systems using .NET Core microservices architecture with OAuth 2.0 security, IdentityServer4, and Docker containerization.",
    features: [
      "Microservices architecture",
      "OAuth 2.0 security implementation",
      "IdentityServer4 integration",
      "Docker containerization",
    ],
    github: "https://github.com/tallal02",
    demo: "#",
  },
]

const categories = [
  { key: "All", label: "All Projects", icon: null },
  { key: "AI", label: "AI & Machine Learning", icon: Brain },
  { key: "Full-Stack", label: "Full-Stack Development", icon: Code },
  { key: ".NET", label: ".NET Development", icon: null },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "AI":
        return (
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <Brain className="w-3 h-3 mr-1" />
            AI
          </Badge>
        )
      case "Full-Stack":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Code className="w-3 h-3 mr-1" />
            Full-Stack
          </Badge>
        )
      case ".NET":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">.NET</Badge>
      default:
        return <Badge variant="secondary">{category}</Badge>
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A comprehensive showcase of my work across AI, Full-Stack, and .NET development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.key)}
                className="px-6 py-2"
              >
                {Icon && <Icon className="w-4 h-4 mr-2" />}
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  {getCategoryBadge(project.category)}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">AI Projects</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Full-Stack Projects</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">.NET Projects</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">96%</div>
              <div className="text-gray-600 dark:text-gray-400">Best Model Accuracy</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
