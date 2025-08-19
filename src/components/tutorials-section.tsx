"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  User, 
  Star, 
  Play, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  Code2,
  Brain,
  Cpu,
  Zap,
  Users
} from "lucide-react";
import Link from "next/link";

const tutorials = [
  {
    id: "getting-started-ai",
    title: "Getting Started with AI Development",
    description: "A comprehensive guide to begin your AI journey, covering basic concepts, tools, and your first AI project.",
    category: "AI",
    difficulty: "Beginner",
    duration: "2-3 hours",
    author: "CodeRandom",
    rating: 4.8,
    students: 1247,
    status: "Coming Soon",
    tags: ["AI", "Python", "Machine Learning", "Beginner"],
    featured: true
  },
  {
    id: "esp32-basics",
    title: "ESP32 Fundamentals for Makers",
    description: "Master the ESP32 microcontroller with hands-on projects covering WiFi, sensors, and IoT applications.",
    category: "Electronics",
    difficulty: "Intermediate",
    duration: "4-5 hours",
    author: "CodeRandom",
    rating: 4.9,
    students: 892,
    status: "Coming Soon",
    tags: ["ESP32", "IoT", "C++", "Arduino"],
    featured: true
  },
  {
    id: "robotics-101",
    title: "Robotics 101: Building Your First Robot",
    description: "From concept to completion, build a simple robot using Arduino and basic electronics components.",
    category: "Robotics",
    difficulty: "Beginner",
    duration: "6-8 hours",
    author: "CodeRandom",
    rating: 4.7,
    students: 567,
    status: "Coming Soon",
    tags: ["Robotics", "Arduino", "Electronics", "3D Printing"],
    featured: false
  },
  {
    id: "ai-chatbot",
    title: "Building AI Chatbots with Python",
    description: "Create intelligent chatbots using modern AI techniques and natural language processing.",
    category: "AI",
    difficulty: "Advanced",
    duration: "8-10 hours",
    author: "CodeRandom",
    rating: 4.6,
    students: 423,
    status: "Coming Soon",
    tags: ["AI", "Python", "NLP", "Chatbots"],
    featured: false
  },
  {
    id: "smart-home-iot",
    title: "Smart Home Automation with IoT",
    description: "Build a complete smart home system using ESP32, sensors, and cloud services.",
    category: "IoT",
    difficulty: "Intermediate",
    duration: "10-12 hours",
    author: "CodeRandom",
    rating: 4.8,
    students: 734,
    status: "Coming Soon",
    tags: ["IoT", "ESP32", "Automation", "Cloud"],
    featured: false
  },
  {
    id: "computer-vision",
    title: "Computer Vision with OpenCV",
    description: "Learn computer vision fundamentals and build applications for image and video processing.",
    category: "AI",
    difficulty: "Intermediate",
    duration: "12-15 hours",
    author: "CodeRandom",
    rating: 4.5,
    students: 298,
    status: "Coming Soon",
    tags: ["AI", "Computer Vision", "OpenCV", "Python"],
    featured: false
  }
];

const categories = [
  { name: "AI", icon: Brain, color: "bg-blue-500/10 text-blue-500", count: 3 },
  { name: "Electronics", icon: Cpu, color: "bg-green-500/10 text-green-500", count: 1 },
  { name: "Robotics", icon: Code2, color: "bg-purple-500/10 text-purple-500", count: 1 },
  { name: "IoT", icon: Zap, color: "bg-orange-500/10 text-orange-500", count: 1 }
];

const difficulties = [
  { name: "Beginner", color: "bg-green-500/10 text-green-500" },
  { name: "Intermediate", color: "bg-yellow-500/10 text-yellow-500" },
  { name: "Advanced", color: "bg-red-500/10 text-red-500" }
];

export function TutorialsSection() {
  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);
  const recentTutorials = tutorials.filter(tutorial => !tutorial.featured).slice(0, 4);

  return (
    <section id="tutorials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Tutorials & Guides</h2>
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step-by-step tutorials and guides to help you master AI, robotics, electronics, and more. 
            Learn by doing with hands-on projects.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-yellow-500">Coming Soon!</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                We're working hard to bring you comprehensive tutorials and guides. 
                Our educational content will cover everything from AI fundamentals to advanced robotics projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="#projects">
                    Explore Projects
                    <Code2 className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://github.com/CodeRandomMC" target="_blank">
                    Follow Development
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tutorials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Tutorials</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTutorials.map((tutorial) => (
              <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className={categories.find(c => c.name === tutorial.category)?.color}>
                      {tutorial.category}
                    </Badge>
                    <Badge className="bg-yellow-500/10 text-yellow-500">
                      {tutorial.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {tutorial.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {tutorial.students}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tutorial.duration}
                      </div>
                    </div>
                    <Badge variant="outline" className={difficulties.find(d => d.name === tutorial.difficulty)?.color}>
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {tutorial.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{tutorial.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" disabled>
                    Coming Soon
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Tutorials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">All Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTutorials.map((tutorial) => (
              <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {tutorial.category}
                    </Badge>
                    <Badge className="bg-yellow-500/10 text-yellow-500 text-xs">
                      {tutorial.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {tutorial.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {tutorial.students}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tutorial.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {tutorial.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{tutorial.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10" disabled>
                    Coming Soon
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Learning Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="text-center p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.count} tutorials available
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {difficulties.map((difficulty) => (
                    <Badge key={difficulty.name} variant="outline" className="text-xs">
                      {difficulty.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Comprehensive learning paths</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our tutorials are designed to take you from beginner to advanced levels. 
            Each tutorial includes hands-on projects, code examples, and real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">
                Explore Projects
                <Code2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/CodeRandomMC" target="_blank">
                Follow Development
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
