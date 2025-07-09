'use client';

import { Button } from "@/components/ui/button";
import { Github, Video } from "lucide-react";

export function Introduction() {
  return (
    <section className="py-24 md:py-40 bg-background text-foreground min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Jack Pollard</h1>
        <h2 className="text-xl md:text-2xl text-primary mb-8 font-semibold">AI-Augmented, High-Velocity Systems Architect</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
          I design and build robust, safe, and scalable systems by augmenting my intuitive design process with a custom AI toolset. I turn complex problems into production-ready blueprints in hours, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#github">
              <Github className="mr-2" />
              View My Workshop (GitHub)
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#featured">
              <Video className="mr-2" />
              See My Process (Video Demo)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
