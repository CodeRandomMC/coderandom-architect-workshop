import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, User, Search, Filter } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tutorials | CodeRandom - Learn AI, Robotics & Electronics",
  description: "Comprehensive tutorials on AI development, robotics, electronics, and maker projects. Step-by-step guides for beginners and advanced makers.",
};

const tutorials = [
  {
    id: "getting-started-esp32",
    title: "Getting Started with ESP32",
    description: "Learn the basics of ESP32 development, from setup to your first IoT project. Perfect for beginners.",
    category: "Electronics",
    difficulty: "Beginner",
    duration: "2 hours",
    author: "Jack Pollard",
    image: "/tutorials/esp32-basics.jpg",
    tags: ["ESP32", "IoT", "Arduino", "C++"],
    published: "2024-01-15",
    featured: true,
  },
  {
    id: "ai-chatbot-development",
    title: "Building AI Chatbots with Python",
    description: "Create intelligent chatbots using modern AI techniques. From simple rule-based bots to advanced LLM integration.",
    category: "AI",
    difficulty: "Intermediate",
    duration: "4 hours",
    author: "Jack Pollard",
    image: "/tutorials/ai-chatbot.jpg",
    tags: ["Python", "AI", "Chatbots", "LLM"],
    published: "2024-01-10",
    featured: true,
  },
  {
    id: "robotics-basics",
    title: "Introduction to Robotics",
    description: "Essential concepts in robotics, from motor control to sensor integration. Build your first robot.",
    category: "Robotics",
    difficulty: "Beginner",
    duration: "3 hours",
    author: "Jack Pollard",
    image: "/tutorials/robotics-intro.jpg",
    tags: ["Robotics", "Arduino", "Motors", "Sensors"],
    published: "2024-01-05",
    featured: false,
  },
  {
    id: "iot-home-automation",
    title: "Home Automation with IoT",
    description: "Transform your home with smart devices. Control lights, temperature, and security with ESP32.",
    category: "Electronics",
    difficulty: "Intermediate",
    duration: "5 hours",
    author: "Jack Pollard",
    image: "/tutorials/home-automation.jpg",
    tags: ["IoT", "ESP32", "Home Automation", "MQTT"],
    published: "2023-12-20",
    featured: false,
  },
  {
    id: "computer-vision-robotics",
    title: "Computer Vision for Robotics",
    description: "Integrate computer vision into your robotics projects. Object detection, tracking, and autonomous navigation.",
    category: "Robotics",
    difficulty: "Advanced",
    duration: "6 hours",
    author: "Jack Pollard",
    image: "/tutorials/computer-vision.jpg",
    tags: ["Computer Vision", "OpenCV", "Python", "Robotics"],
    published: "2023-12-15",
    featured: false,
  },
  {
    id: "local-llm-setup",
    title: "Setting Up Local LLMs",
    description: "Run large language models locally on your hardware. Privacy-focused AI development.",
    category: "AI",
    difficulty: "Intermediate",
    duration: "3 hours",
    author: "Jack Pollard",
    image: "/tutorials/local-llm.jpg",
    tags: ["AI", "LLM", "Local", "Python"],
    published: "2023-12-10",
    featured: false,
  },
];

const categories = ["All", "AI", "Robotics", "Electronics"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Learn AI development, robotics, electronics, and maker projects with comprehensive step-by-step guides. 
          From beginner basics to advanced techniques.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search tutorials..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="All">
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="All">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Featured Tutorials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Tutorials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tutorials.filter(t => t.featured).map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{tutorial.difficulty}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{tutorial.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                <CardDescription className="text-base">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {tutorial.author}
                  </div>
                  <Button asChild>
                    <Link href={`/platform/tutorials/${tutorial.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Start Learning
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Tutorials */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">All Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{tutorial.difficulty}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{tutorial.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                <CardDescription>
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    {tutorial.author}
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/platform/tutorials/${tutorial.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Learn
                    </Link>
                  </Button>
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
            <h3 className="text-2xl font-semibold mb-4">Want to Contribute?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have expertise in AI, robotics, or electronics? Share your knowledge with the community 
              by creating tutorials and helping others learn.
            </p>
            <Button size="lg" asChild>
              <Link href="/platform/community">
                Join the Community
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
