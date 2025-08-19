"use client";

import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { socialLinks } from "./social-links";

export function HeroSection() {
  const github_link = socialLinks.find((link) => link.name === "GitHub");

  return (
    <section className="py-24 md:py-40 bg-background text-foreground min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          I'm Jack — a maker exploring AI, robotics, and electronics.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          I build tools, prototypes, and experiments that combine code with hardware.
        </p>
        <p className="text-lg text-primary font-semibold mb-12">
          From AI chatbots to robotics prototypes, I turn curiosity into working projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#projects" className="flex items-center">
              <ExternalLink className="mr-2 h-5 w-5" />
              See My Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href={github_link!.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={github_link!.name}
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
