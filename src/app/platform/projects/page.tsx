import { Metadata } from "next";
import { ProjectShowcase } from "@/components/project-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | CodeRandom - AI, Robotics & Electronics Projects",
  description: "Explore innovative AI experiments, robotics prototypes, and electronics projects. From ESP32 IoT solutions to AI chatbots and hardware prototypes.",
};

const featuredProjects = [
  {
    id: "kids-ai",
    title: "Kids AI Platform",
    description: "An AI-powered educational platform designed specifically for children, featuring interactive learning experiences and safe AI interactions.",
    image: "/kids-ai/welcome_screen.png",
    tags: ["AI", "Education", "React", "Next.js"],
    status: "Active",
    githubUrl: "https://github.com/CodeRandomMC/kids-ai",
    liveUrl: "https://kids-ai.coderandom.com",
    featured: true,
  },
  {
    id: "velocity-ai",
    title: "Velocity AI",
    description: "A high-performance AI development platform with local LLM support, export capabilities, and advanced AI tools for developers.",
    image: "/velocity-ai/velocity_ai.png",
    tags: ["AI", "Local LLM", "Python", "FastAPI"],
    status: "Active",
    githubUrl: "https://github.com/CodeRandomMC/velocity-ai",
    liveUrl: "https://velocity-ai.coderandom.com",
    featured: true,
  },
];

const allProjects = [
  ...featuredProjects,
  {
    id: "esp32-iot",
    title: "ESP32 IoT Hub",
    description: "A comprehensive IoT solution using ESP32 microcontrollers for home automation and sensor monitoring.",
    image: "/projects/esp32-iot.jpg",
    tags: ["IoT", "ESP32", "C++", "Arduino"],
    status: "In Development",
    githubUrl: "https://github.com/CodeRandomMC/esp32-iot-hub",
    featured: false,
  },
  {
    id: "robotics-arm",
    title: "Robotic Arm Controller",
    description: "An open-source robotic arm controller with computer vision integration and precise movement control.",
    image: "/projects/robotic-arm.jpg",
    tags: ["Robotics", "Computer Vision", "Python", "OpenCV"],
    status: "Planning",
    githubUrl: "https://github.com/CodeRandomMC/robotic-arm",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore innovative AI experiments, robotics prototypes, and electronics projects. 
          From ESP32 IoT solutions to AI chatbots and hardware prototypes.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-semibold mb-4">Have a Project Idea?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in collaborating on innovative projects. 
              Whether it's AI, robotics, or electronics, let's build something amazing together.
            </p>
            <Button size="lg" asChild>
              <Link href="/platform/community">
                Join the Community
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
