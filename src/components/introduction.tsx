'use client';

import { Button } from "@/components/ui/button";

export function Introduction() {
  return (
    <section className="py-24 md:py-40 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">CodeRandom Architect's Workshop</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Innovative Digital Architecture & Design</p>
        <p className="max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
          We craft bespoke digital experiences, blending cutting-edge technology with timeless architectural principles to build robust and beautiful web applications.
        </p>
        <Button size="lg" asChild>
          <a href="#featured">Explore Our Work</a>
        </Button>
      </div>
    </section>
  );
}
