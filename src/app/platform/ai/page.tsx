import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Cpu, Database, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Platform | CodeRandom - AI Tools & Experiments",
  description: "Explore AI tools, experiments, and development resources. From local LLMs to AI chatbots and machine learning utilities.",
};

const aiTools = [
  {
    id: "velocity-ai",
    name: "Velocity AI",
    description: "High-performance AI development platform with local LLM support and advanced AI tools.",
    status: "Active",
    image: "/velocity-ai/velocity_ai.png",
    features: ["Local LLM", "Export", "Advanced Tools"],
    url: "https://velocity-ai.coderandom.com",
    featured: true,
  },
  {
    id: "kids-ai",
    name: "Kids AI Platform",
    description: "AI-powered educational platform designed specifically for children with safe AI interactions.",
    status: "Active",
    image: "/kids-ai/welcome_screen.png",
    features: ["Education", "Safe AI", "Interactive"],
    url: "https://kids-ai.coderandom.com",
    featured: true,
  },
  {
    id: "prompt-builder",
    name: "AI Prompt Builder",
    description: "Build and optimize AI prompts for various LLM models with advanced testing capabilities.",
    status: "Active",
    image: "/tools/ai-prompt.jpg",
    features: ["Prompt Optimization", "Testing", "LLM Support"],
    url: "/platform/tools/ai-prompt-builder",
    featured: false,
  },
];

const aiExperiments = [
  {
    id: "chatbot-framework",
    name: "Modular Chatbot Framework",
    description: "Flexible framework for building AI chatbots with multiple backend support.",
    status: "In Development",
    image: "/experiments/chatbot-framework.jpg",
    tags: ["Chatbots", "Framework", "Modular"],
    githubUrl: "https://github.com/CodeRandomMC/chatbot-framework",
  },
  {
    id: "local-llm-setup",
    name: "Local LLM Setup Guide",
    description: "Comprehensive guide for setting up and running large language models locally.",
    status: "Documentation",
    image: "/experiments/local-llm.jpg",
    tags: ["LLM", "Local", "Guide"],
    githubUrl: "https://github.com/CodeRandomMC/local-llm-guide",
  },
];

export default function AIPlatformPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI Platform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore AI tools, experiments, and development resources. From local LLMs to AI chatbots 
          and machine learning utilities - everything you need for AI development.
        </p>
      </div>

      {/* Featured AI Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured AI Tools</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiTools.filter(t => t.featured).map((tool) => (
            <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{tool.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <CardDescription className="text-base">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" asChild>
                  <Link href={tool.url} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Launch Tool
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All AI Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">All AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">{tool.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription>
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href={tool.url} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Launch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Experiments */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">AI Experiments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiExperiments.map((experiment) => (
            <Card key={experiment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={experiment.image}
                  alt={experiment.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline">{experiment.status}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{experiment.name}</CardTitle>
                <CardDescription>
                  {experiment.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experiment.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={experiment.githubUrl} target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Development Resources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">AI Development Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Local LLM Setup</h3>
                  <p className="text-sm text-muted-foreground">Run AI models locally</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Learn how to set up and run large language models on your own hardware for privacy and performance.
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/platform/tutorials">View Tutorials</Link>
              </Button>
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
                  <p className="text-sm text-muted-foreground">Development utilities</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Essential tools for AI development including prompt builders, model testers, and optimization utilities.
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/platform/tools">Browse Tools</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Community</h3>
                  <p className="text-sm text-muted-foreground">Connect with developers</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Join discussions about AI development, share projects, and collaborate with fellow AI enthusiasts.
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/platform/community">Join Community</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Build with AI?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your AI development journey with our tools and resources. 
              From local LLMs to AI chatbots, we have everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/platform/tools">
                  Explore AI Tools
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/platform/tutorials">
                  Learn AI Development
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
