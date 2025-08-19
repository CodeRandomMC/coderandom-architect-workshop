import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wrench, Code2, Calculator, Download, ExternalLink, Search, Filter, Zap, Cpu, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools | CodeRandom - Maker Tools & Development Utilities",
  description: "Essential tools for makers, developers, and innovators. From code generators to circuit calculators and AI utilities.",
};

const tools = [
  {
    id: "circuit-calculator",
    name: "Circuit Calculator",
    description: "Calculate resistor values, voltage dividers, and component specifications for your electronics projects.",
    category: "Electronics",
    type: "Calculator",
    status: "Active",
    image: "/tools/circuit-calc.jpg",
    tags: ["Electronics", "Calculator", "Resistors", "Voltage"],
    url: "/platform/tools/circuit-calculator",
    featured: true,
  },
  {
    id: "code-generator",
    name: "ESP32 Code Generator",
    description: "Generate boilerplate code for ESP32 projects including WiFi, sensors, and IoT functionality.",
    category: "Development",
    type: "Generator",
    status: "Active",
    image: "/tools/code-gen.jpg",
    tags: ["ESP32", "Code Generator", "IoT", "WiFi"],
    url: "/platform/tools/code-generator",
    featured: true,
  },
  {
    id: "ai-prompt-builder",
    name: "AI Prompt Builder",
    description: "Build and test AI prompts for various LLM models. Optimize your prompts for better results.",
    category: "AI",
    type: "Utility",
    status: "Active",
    image: "/tools/ai-prompt.jpg",
    tags: ["AI", "LLM", "Prompts", "Optimization"],
    url: "/platform/tools/ai-prompt-builder",
    featured: false,
  },
  {
    id: "component-library",
    name: "Component Library",
    description: "Comprehensive library of electronic components with datasheets, pinouts, and usage examples.",
    category: "Electronics",
    type: "Database",
    status: "Active",
    image: "/tools/components.jpg",
    tags: ["Components", "Datasheets", "Pinouts", "Library"],
    url: "/platform/tools/component-library",
    featured: false,
  },
  {
    id: "project-estimator",
    name: "Project Cost Estimator",
    description: "Estimate the cost of your maker projects including components, tools, and development time.",
    category: "Planning",
    type: "Calculator",
    status: "Active",
    image: "/tools/cost-estimator.jpg",
    tags: ["Cost", "Planning", "Budget", "Estimator"],
    url: "/platform/tools/project-estimator",
    featured: false,
  },
  {
    id: "3d-model-viewer",
    name: "3D Model Viewer",
    description: "View and analyze 3D models for 3D printing projects. Check printability and optimize designs.",
    category: "3D Printing",
    type: "Viewer",
    status: "Beta",
    image: "/tools/3d-viewer.jpg",
    tags: ["3D Printing", "STL", "Viewer", "Analysis"],
    url: "/platform/tools/3d-model-viewer",
    featured: false,
  },
  {
    id: "sensor-database",
    name: "Sensor Database",
    description: "Database of sensors with specifications, wiring diagrams, and code examples for various platforms.",
    category: "Electronics",
    type: "Database",
    status: "Active",
    image: "/tools/sensors.jpg",
    tags: ["Sensors", "Database", "Wiring", "Examples"],
    url: "/platform/tools/sensor-database",
    featured: false,
  },
  {
    id: "api-testing-tool",
    name: "API Testing Tool",
    description: "Test and debug APIs for IoT projects. Supports REST, MQTT, and WebSocket protocols.",
    category: "Development",
    type: "Testing",
    status: "Active",
    image: "/tools/api-testing.jpg",
    tags: ["API", "Testing", "MQTT", "WebSocket"],
    url: "/platform/tools/api-testing",
    featured: false,
  },
];

const categories = ["All", "Electronics", "Development", "AI", "Planning", "3D Printing"];
const types = ["All", "Calculator", "Generator", "Utility", "Database", "Viewer", "Testing"];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Essential tools for makers, developers, and innovators. From code generators to circuit calculators 
          and AI utilities - everything you need to build amazing projects.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search tools..."
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
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Featured Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Tools</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.filter(t => t.featured).map((tool) => (
            <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={tool.status === "Active" ? "secondary" : "destructive"}>
                    {tool.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{tool.category}</Badge>
                  <Badge variant="outline">{tool.type}</Badge>
                </div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-base">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" asChild>
                  <Link href={tool.url}>
                    <Wrench className="h-4 w-4 mr-2" />
                    Use Tool
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">All Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={tool.status === "Active" ? "secondary" : "destructive"} className="text-xs">
                    {tool.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                  <Badge variant="outline" className="text-xs">{tool.type}</Badge>
                </div>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription>
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href={tool.url}>
                    <Wrench className="h-4 w-4 mr-2" />
                    Use Tool
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tool Categories Overview */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Tool Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Electronics</h3>
                  <p className="text-sm text-muted-foreground">Circuit calculators, component libraries</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Tools for electronic design, component selection, and circuit analysis.
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Development</h3>
                  <p className="text-sm text-muted-foreground">Code generators, API testing</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Development utilities for faster coding and project setup.
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Tools</h3>
                  <p className="text-sm text-muted-foreground">Prompt builders, model testing</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                AI development tools for prompt optimization and model testing.
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Planning</h3>
                  <p className="text-sm text-muted-foreground">Cost estimators, project planners</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Planning tools to help estimate costs and manage projects.
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Databases</h3>
                  <p className="text-sm text-muted-foreground">Component libraries, sensor databases</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Comprehensive databases of components, sensors, and technical data.
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Utilities</h3>
                  <p className="text-sm text-muted-foreground">Viewers, converters, analyzers</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Various utilities for file conversion, analysis, and visualization.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Tool?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have an idea for a tool that would help the maker community? 
              Let me know and I'll build it for everyone to use.
            </p>
            <Button size="lg" asChild>
              <Link href="/platform/community">
                Suggest a Tool
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
