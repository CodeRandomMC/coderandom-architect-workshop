"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { socialLinks } from "./social-links";

export function Introduction() {
  const github_link = socialLinks.find((link) => link.name === "GitHub");

  return (
    <section className="py-24 md:py-40 bg-background text-foreground min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Jack Pollard
        </h1>
        <h2 className="text-xl md:text-2xl text-primary mb-8 font-semibold">
          AI-Augmented, High-Velocity Systems Architect
        </h2>
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6 inline-block">
            <p className="text-primary font-semibold">
              ⚡ This entire portfolio + AI project built in{" "}
              <strong>&lt;12 hours</strong> to demonstrate rapid development
              skills
            </p>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
          I design and build robust, safe, and scalable AI systems by augmenting
          my intuitive design process with modern development practices. I turn
          complex AI concepts into production-ready applications in hours, not
          months - perfect for rapid prototyping and iterative development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a
              href={github_link!.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={github_link!.name}
            >
              <Github className="mr-2" />
              View My Workshop (GitHub)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
