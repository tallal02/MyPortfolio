import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    id: 1,
    title: "AWS Academy Graduate — Cloud Data Pipeline Builder",
    issuer: "AWS Academy",
    date: "2024",
    description:
      "Trained in designing, building, and managing AWS data pipelines using services like S3, Lambda, and Glue for ETL workflows.",
    skills: ["AWS S3", "AWS Lambda", "AWS Glue", "ETL Workflows", "Data Pipelines"],
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "AWS Academy Graduate — Cloud Web Application Builder",
    issuer: "AWS Academy",
    date: "2024",
    description:
      "Completed training on developing and deploying secure, scalable web applications using AWS EC2, API Gateway, and DynamoDB.",
    skills: ["AWS EC2", "API Gateway", "DynamoDB", "Web Applications", "Cloud Deployment"],
    credentialUrl: "#",
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-20 px-4 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transform">
            Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
            Professional certifications and achievements in cloud computing and development
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-12" />
                      <CardTitle className="text-xl transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                        {cert.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                      <span className="font-medium transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                        {cert.issuer}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                        <span className="transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 hover:rotate-12" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-medium mb-2 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="text-center transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                2
              </div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                AWS Certifications
              </div>
            </CardContent>
          </Card>

          <Card className="text-center transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">
                2024
              </div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                Latest Certification
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
