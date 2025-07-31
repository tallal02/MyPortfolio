import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Mail, MapPin, Calendar, Award, Code, Brain, Cloud } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center space-y-6 max-w-4xl">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-700 hover:scale-105 transform">
                  <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                    Muhammad Tallal Eatazaz
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-all duration-500 hover:text-gray-800 dark:hover:text-gray-100">
                  AI + Full-Stack + .NET + AWS Developer from Pakistan
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-200">
                  <MapPin className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="px-3 py-1 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Brain className="w-4 h-4 mr-1 transition-transform duration-300 hover:rotate-12" />
                  Artificial Intelligence
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Code className="w-4 h-4 mr-1 transition-transform duration-300 hover:rotate-12" />
                  Full-Stack Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  .NET Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-3 py-1 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Cloud className="w-4 h-4 mr-1 transition-transform duration-300 hover:rotate-12" />
                  AWS Cloud
                </Badge>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2 transition-transform duration-300 hover:rotate-12" />
                    Get In Touch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                >
                  <a href="#" download>
                    <Download className="w-4 h-4 mr-2 transition-transform duration-300 hover:rotate-12" />
                    Download Resumes
                  </a>
                </Button>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <a href="https://linkedin.com/in/muhammadtallaleatazaz" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <a href="https://github.com/tallal02" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="transition-all duration-300 hover:scale-110 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <a href="mailto:mmtallal@gmail.com">
                    <Mail className="w-5 h-5 transition-all duration-300 hover:text-red-600 dark:hover:text-red-400" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transform">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-blue-600 transition-transform duration-300 hover:rotate-12" />
                  <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                    Education
                  </h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                    FAST NUCES Islamabad
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300">
                    August 2021 - June 2025
                  </p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                      <strong>Relevant Courses:</strong> Artificial Intelligence, Machine Learning, Deep Learning,
                      Natural Language Processing, Software Engineering, Database Systems, Web Development, Mobile App
                      Development, Computer Networks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-blue-600 transition-transform duration-300 hover:rotate-12" />
                  <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                    <h4 className="font-medium text-sm transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                      AWS Academy Graduate — Cloud Data Pipeline Builder
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">AWS S3, Lambda, Glue for ETL workflows</p>
                  </div>
                  <div className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded">
                    <h4 className="font-medium text-sm transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                      AWS Academy Graduate — Cloud Web Application Builder
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">AWS EC2, API Gateway, DynamoDB</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="mt-3 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <Link href="/certifications">View All Certifications</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                I'm a Computer Science graduate from FAST NUCES Islamabad, passionate about developing intelligent
                systems, robust web platforms, scalable enterprise applications, and cloud solutions. With expertise
                spanning AI/ML, full-stack development, .NET applications, and AWS cloud services, I create innovative
                solutions that bridge multiple domains. My experience includes building neural networks for image
                classification and NLP, developing MERN stack applications, creating enterprise .NET systems, and
                implementing cloud-based data pipelines.
              </p>
            </CardContent>
          </Card>

          {/* Specialization Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 hover:scale-105 transform hover:border-l-purple-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12" />
                  <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-purple-600">
                    AI & Machine Learning
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Specialized in deep learning, NLP, and computer vision with hands-on experience in PyTorch and
                  TensorFlow.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    PyTorch
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    TensorFlow
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    NLP
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    Computer Vision
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 hover:scale-105 transform hover:border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-green-600 transition-all duration-300 hover:scale-110 hover:rotate-12" />
                  <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-green-600">
                    Full-Stack Development
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Expert in modern web technologies including React, Next.js, Node.js, and database management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 hover:scale-105 transform hover:border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm transition-all duration-300 hover:scale-110 hover:rotate-12">
                    .NET
                  </div>
                  <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-blue-600">
                    .NET Development
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Proficient in building enterprise applications with ASP.NET Core, Entity Framework, and microservices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    ASP.NET Core
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    Entity Framework
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    C#
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    Azure
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center transition-all duration-300 hover:scale-110 transform">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Projects Completed
                </div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 transform">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                  3
                </div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Specializations
                </div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 transform">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Years Experience
                </div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 transform">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                  2
                </div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  AWS Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transform">
            Core Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Python",
              "React",
              "C#",
              "Next.js",
              "PyTorch",
              "ASP.NET Core",
              "JavaScript",
              "Docker",
              "AWS",
              "TensorFlow",
              "MongoDB",
              "MS SQL",
            ].map((tech) => (
              <div
                key={tech}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-110 transform hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <div className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  {tech}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transform">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 transition-all duration-300 hover:scale-105">
                  <Brain className="w-3 h-3 mr-1 transition-transform duration-300 hover:rotate-12" />
                  AI
                </Badge>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-600">
                  CNN Image Classifier
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Built a CNN with TensorFlow to classify Cats vs Dogs images, achieving 96% accuracy with advanced
                  preprocessing and data augmentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    TensorFlow
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    OpenCV
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 transition-all duration-300 hover:scale-105">
                  <Code className="w-3 h-3 mr-1 transition-transform duration-300 hover:rotate-12" />
                  Full-Stack
                </Badge>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-green-600">
                  InfoMorph
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Built an automated tool for scraping, cleaning, and summarizing multi-lingual articles using advanced
                  NLP with Pegasus transformers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    FastAPI
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 transition-all duration-300 hover:scale-105">
                  .NET
                </Badge>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-600">
                  Flex Academic Portal
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  Developed academic management system using .NET 6 with role-based access control and JWT
                  authentication.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    ASP.NET Core
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    Entity Framework
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    MS SQL
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
