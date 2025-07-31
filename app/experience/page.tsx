import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Cloud Application Development and Mobility Intern",
    company: "Systems Limited",
    location: "Islamabad, Pakistan",
    duration: "June 2023 - Aug 2023",
    type: "Internship",
    description:
      "Contributed to Cloud Application Development and Mobility projects with React.js and MS SQL, building scalable solutions.",
    achievements: [
      "Developed scalable, mobile-friendly solutions with real-time updates",
      "Implemented secure authentication systems",
      "Optimized applications for cloud deployment",
      "Collaborated on enterprise-level projects",
    ],
    technologies: ["React.js", "MS SQL", "Cloud Development", "Mobile Development", "Authentication"],
  },
  {
    id: 2,
    title: "Cybersecurity Intern",
    company: "Datamatics Consulting",
    location: "Islamabad, Pakistan",
    duration: "June 2022 - Aug 2022",
    type: "Internship",
    description:
      "Implemented Python-based encryption systems and automated threat detection tools for enhanced security.",
    achievements: [
      "Developed Python-based encryption/decryption systems",
      "Created automated threat detection tools",
      "Performed comprehensive vulnerability assessments",
      "Conducted malware analysis and system hardening",
    ],
    technologies: ["Python", "Encryption Systems", "Threat Detection", "Vulnerability Assessment", "Security Tools"],
  },
  {
    id: 3,
    title: "Teaching Assistant & Lab Demonstrator",
    company: "FAST NUCES",
    location: "Islamabad, Pakistan",
    duration: "Fall 2023 - Spring 2024",
    type: "Teaching Assistant",
    description: "Assisted in multiple computer science courses and mentored students on practical projects.",
    achievements: [
      "Supported Computer Organization and Assembly Language courses",
      "Assisted with ICT and Database Management Systems",
      "Mentored students on practical projects and assignments",
      "Enhanced student understanding through personalized guidance",
    ],
    technologies: ["Computer Organization", "Assembly Language", "Database Systems", "ICT", "Teaching"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey and teaching experience</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

              <Card className="ml-12 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>

                  <div>
                    <h4 className="font-medium mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-400">Positions Held</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Mentored</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
