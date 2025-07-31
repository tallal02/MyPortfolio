"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Brain, Code, Cloud, Database, Wrench, Award, Sparkles } from "lucide-react"

const skillsData = {
  languages: [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "C#", level: 85, color: "bg-purple-500" },
    { name: "Java", level: 80, color: "bg-red-500" },
    { name: "C++", level: 75, color: "bg-blue-600" },
    { name: "Kotlin", level: 70, color: "bg-orange-500" },
    { name: "SQL", level: 85, color: "bg-gray-600" },
    { name: "HTML/CSS", level: 90, color: "bg-orange-600" },
    { name: "x86 Assembly", level: 65, color: "bg-gray-500" },
  ],
  frameworks: [
    { name: "React", level: 90, color: "bg-cyan-500" },
    { name: "Next.js", level: 90, color: "bg-black" },
    { name: "ASP.NET Core", level: 85, color: "bg-purple-600" },
    { name: "Node.js", level: 85, color: "bg-green-600" },
    { name: "Express.js", level: 80, color: "bg-gray-700" },
    { name: ".NET 7/6", level: 85, color: "bg-purple-600" },
    { name: "PyTorch", level: 80, color: "bg-orange-500" },
    { name: "TensorFlow", level: 75, color: "bg-orange-600" },
    { name: "Entity Framework", level: 80, color: "bg-blue-600" },
    { name: "Blazor", level: 70, color: "bg-purple-500" },
    { name: "JavaFX", level: 65, color: "bg-red-600" },
  ],
  tools: [
    { name: "Git", level: 90, color: "bg-orange-600" },
    { name: "Docker", level: 80, color: "bg-blue-500" },
    { name: "Visual Studio", level: 85, color: "bg-purple-600" },
    { name: "PyCharm", level: 80, color: "bg-green-500" },
    { name: "IntelliJ", level: 75, color: "bg-red-500" },
    { name: "Azure DevOps", level: 75, color: "bg-blue-600" },
    { name: "Maven", level: 70, color: "bg-orange-500" },
    { name: "Eclipse", level: 70, color: "bg-purple-500" },
    { name: "SSMS", level: 80, color: "bg-red-600" },
  ],
  databases: [
    { name: "MS SQL Server", level: 85, color: "bg-red-600" },
    { name: "MongoDB", level: 80, color: "bg-green-500" },
    { name: "MySQL", level: 75, color: "bg-blue-600" },
    { name: "SQLite", level: 70, color: "bg-gray-600" },
    { name: "Entity Framework", level: 80, color: "bg-purple-600" },
    { name: "ADO.NET", level: 75, color: "bg-blue-500" },
  ],
  cloud: [
    { name: "AWS S3", level: 80, color: "bg-orange-500" },
    { name: "AWS Lambda", level: 75, color: "bg-orange-600" },
    { name: "AWS EC2", level: 75, color: "bg-orange-500" },
    { name: "AWS Glue", level: 70, color: "bg-orange-600" },
    { name: "API Gateway", level: 75, color: "bg-blue-500" },
    { name: "DynamoDB", level: 70, color: "bg-blue-600" },
    { name: "Azure", level: 70, color: "bg-blue-500" },
  ],
  ai: [
    { name: "PyTorch", level: 80, color: "bg-orange-500" },
    { name: "TensorFlow", level: 75, color: "bg-orange-600" },
    { name: "OpenCV", level: 75, color: "bg-green-600" },
    { name: "NumPy", level: 85, color: "bg-blue-500" },
    { name: "Scikit-learn", level: 70, color: "bg-orange-500" },
    { name: "NLTK", level: 70, color: "bg-green-500" },
    { name: "Transformers", level: 75, color: "bg-yellow-500" },
    { name: "Word2Vec", level: 70, color: "bg-purple-500" },
  ],
}

const categories = [
  { key: "all", label: "All Skills", icon: Sparkles, gradient: "from-purple-500 to-pink-500" },
  { key: "languages", label: "Languages", icon: Code, gradient: "from-blue-500 to-cyan-500" },
  { key: "frameworks", label: "Frameworks", icon: Brain, gradient: "from-green-500 to-emerald-500" },
  { key: "ai", label: "AI/ML", icon: Brain, gradient: "from-purple-500 to-violet-500" },
  { key: "cloud", label: "Cloud", icon: Cloud, gradient: "from-orange-500 to-red-500" },
  { key: "databases", label: "Databases", icon: Database, gradient: "from-teal-500 to-cyan-500" },
  { key: "tools", label: "Tools", icon: Wrench, gradient: "from-gray-500 to-slate-500" },
]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const getSkillsToShow = () => {
    if (selectedCategory === "all") {
      return Object.entries(skillsData).reduce(
        (acc, [category, skills]) => {
          acc[category] = skills
          return acc
        },
        {} as Record<string, typeof skillsData.languages>,
      )
    }
    return { [selectedCategory]: skillsData[selectedCategory as keyof typeof skillsData] }
  }

  const skillsToShow = getSkillsToShow()

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across multiple domains, showcasing proficiency in modern
            technologies and frameworks
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.key
            return (
              <Button
                key={category.key}
                variant={isSelected ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                    : "hover:scale-105 hover:shadow-md"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillsToShow).map(([categoryKey, skills]) => {
            const categoryTitles = {
              languages: { title: "Programming Languages", icon: "💻", gradient: "from-blue-500 to-cyan-500" },
              frameworks: { title: "Frameworks & Libraries", icon: "🚀", gradient: "from-green-500 to-emerald-500" },
              ai: { title: "AI & Machine Learning", icon: "🧠", gradient: "from-purple-500 to-violet-500" },
              tools: { title: "Tools & Platforms", icon: "🛠️", gradient: "from-gray-500 to-slate-500" },
              databases: { title: "Databases", icon: "🗄️", gradient: "from-teal-500 to-cyan-500" },
              cloud: { title: "Cloud Technologies", icon: "☁️", gradient: "from-orange-500 to-red-500" },
            }

            const categoryInfo = categoryTitles[categoryKey as keyof typeof categoryTitles]
            if (!categoryInfo) return null

            return (
              <Card key={categoryKey} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${categoryInfo.gradient} text-white rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{categoryInfo.icon}</span>
                    {categoryInfo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                          {skill.level >= 90 && <Sparkles className="w-4 h-4 text-yellow-500" />}
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-3 bg-gray-200 dark:bg-gray-700" />
                        <div
                          className={`absolute top-0 left-0 h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Specialization Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-purple-500 to-violet-600 p-6 text-white">
              <Brain className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-purple-100">Deep learning, NLP, computer vision</p>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                  Neural Networks
                </Badge>
                <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                  Computer Vision
                </Badge>
                <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                  NLP
                </Badge>
                <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                  Deep Learning
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
              <Code className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Full-Stack Development</h3>
              <p className="text-green-100">Modern web applications</p>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                  MERN Stack
                </Badge>
                <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                  RESTful APIs
                </Badge>
                <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                  Responsive Design
                </Badge>
                <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                  Real-time Apps
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                .NET
              </div>
              <h3 className="text-2xl font-bold mb-2">.NET Development</h3>
              <p className="text-blue-100">Enterprise applications</p>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                  Microservices
                </Badge>
                <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                  Web APIs
                </Badge>
                <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                  Authentication
                </Badge>
                <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">
                  Cloud Integration
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Preview */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-lg">AWS Academy Graduate — Cloud Data Pipeline Builder</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-4">
                  Trained in designing, building, and managing AWS data pipelines using S3, Lambda, and Glue
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-lg">AWS Academy Graduate — Cloud Web Application Builder</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-4">
                  Completed training on developing secure, scalable web applications using AWS services
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                <a href="/certifications">
                  <Award className="w-4 h-4 mr-2" />
                  View All Certifications
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
