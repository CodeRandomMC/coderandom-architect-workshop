"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Cpu, Wrench } from "lucide-react";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  category: "ai" | "electronics" | "tools";
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Pixel-to-CPP",
    description: "Maker Tool for OLED & TFT Screens",
    problem: "Image-to-C++ workflow was slow and cumbersome.",
    solution: "Built a browser editor that exports Arduino-ready C++ arrays in one click.",
    category: "tools",
    demoUrl: "https://pixel-to-cpp.vercel.app",
    githubUrl: "https://github.com/CodeRandomMC/pixel-to-cpp",
    tags: ["Arduino", "OLED", "TFT", "C++", "Image Processing"],
  },
  {
    title: "AI Chatbot Assistant",
    description: "Intelligent Conversational AI",
    problem: "Needed a customizable AI assistant for various use cases.",
    solution: "Built a modular chatbot system with natural language processing capabilities.",
    category: "ai",
    githubUrl: "https://github.com/CodeRandomMC/ai-chatbot",
    tags: ["AI", "NLP", "Python", "OpenAI"],
  },
  {
    title: "ESP32 Sensor Hub",
    description: "Multi-Sensor Data Collection Platform",
    problem: "Wanted to monitor environmental data from multiple sensors.",
    solution: "Created an ESP32-based system that collects and transmits sensor data to a web dashboard.",
    category: "electronics",
    githubUrl: "https://github.com/CodeRandomMC/esp32-sensor-hub",
    tags: ["ESP32", "IoT", "Sensors", "Arduino"],
  },
  {
    title: "Discord Bot Framework",
    description: "Modular Discord Bot Architecture",
    problem: "Discord bots were hard to maintain and extend.",
    solution: "Built a modular framework for creating feature-rich Discord bots with plugin system.",
    category: "ai",
    githubUrl: "https://github.com/CodeRandomMC/discord-bot-framework",
    tags: ["Discord", "Bot", "Python", "Modular"],
  },
  {
    title: "OLED Display Experiments",
    description: "Various OLED Display Projects",
    problem: "Learning OLED display programming and graphics.",
    solution: "Collection of experiments with different OLED displays, animations, and UI patterns.",
    category: "electronics",
    githubUrl: "https://github.com/CodeRandomMC/oled-experiments",
    tags: ["OLED", "Arduino", "Graphics", "Display"],
  },
  {
    title: "Maker Utility Scripts",
    description: "Collection of Helper Tools",
    problem: "Repetitive tasks in maker projects slowed down development.",
    solution: "Built a collection of utility scripts for common maker tasks and workflows.",
    category: "tools",
    githubUrl: "https://github.com/CodeRandomMC/maker-utils",
    tags: ["Python", "Automation", "Utilities", "Workflow"],
  },
];

const categoryConfig = {
  ai: { icon: Zap, label: "AI & Software Experiments", color: "bg-blue-100 text-blue-800" },
  electronics: { icon: Cpu, label: "Electronics & Robotics", color: "bg-green-100 text-green-800" },
  tools: { icon: Wrench, label: "Tools for Makers", color: "bg-purple-100 text-purple-800" },
};

export function ProjectsSection() {
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of experiments, prototypes, and tools from my maker journey.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const IconComponent = config.icon;

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-8">
                  <IconComponent className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">{config.label}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                            <CardDescription className="text-sm font-medium text-primary">
                              {project.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Problem:</span> {project.problem}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Solution:</span> {project.solution}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-2">
                          {project.demoUrl && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                GitHub
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
