"use client";

import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BookOpen, PenTool, Code2, Wrench, Brain } from "lucide-react";
import { socialLinks } from "./social-links";

export function HeroSection() {
  const github_link = socialLinks.find((link) => link.name === "GitHub");

  return (
    <section className="py-24 md:py-40 bg-background text-foreground min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        {/* CodeRandom Brand Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            CodeRandom
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Where Code Meets Innovation
          </p>
        </div>

        {/* Main Tagline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          I'm Jack — a maker exploring AI, robotics, and electronics.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          I build tools, prototypes, and experiments that combine code with hardware.
        </p>
        
        <p className="text-lg text-primary font-semibold mb-12">
          From AI chatbots to robotics prototypes, I turn curiosity into working projects.
        </p>

        {/* Platform Features Preview */}
        <div className="mb-12 p-6 bg-muted/20 rounded-2xl border border-border/50">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Explore the Platform</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center gap-2 text-sm">
              <Code2 className="h-6 w-6 text-primary" />
              <span>Projects</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Brain className="h-6 w-6 text-primary" />
              <span>AI</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>Tutorials</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <PenTool className="h-6 w-6 text-primary" />
              <span>Store</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <Wrench className="h-6 w-6 text-primary" />
              <span>Tools</span>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <a href="/platform/projects">
              Explore Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/platform/community">
              Join Community
            </a>
          </Button>
          {github_link && (
            <Button size="lg" variant="outline" asChild>
              <a href={github_link.url} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="/platform/projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="/platform/ai" className="hover:text-primary transition-colors">
            AI
          </a>
          <a href="/platform/tutorials" className="hover:text-primary transition-colors">
            Tutorials
          </a>
          <a href="/platform/store" className="hover:text-primary transition-colors">
            Store
          </a>
          <a href="/platform/tools" className="hover:text-primary transition-colors">
            Tools
          </a>
          <a href="/platform/community" className="hover:text-primary transition-colors">
            Community
          </a>
        </div>
      </div>
    </section>
  );
}

