import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeaturedProject() {
  return (
    <section id="featured" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Featured Project: The VelocityAI Architecture Reviewer</h2>
          <Card className="overflow-hidden border-2 border-border mb-8 shadow-2xl shadow-primary/10 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.loom.com/embed/0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f"
              title="Project Video Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
          <div className="text-lg text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A full-stack Python application that acts as an AI co-pilot for systems architecture. It provides instant, expert-level feedback on design plans, supports both cloud and local LLMs, and was built to accelerate my own iterative design workflow.
            </p>
            <a href="#github" className="inline-flex items-center font-semibold text-primary hover:underline">
              Explore the Project on GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
