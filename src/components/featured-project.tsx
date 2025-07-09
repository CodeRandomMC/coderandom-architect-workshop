import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeaturedProject() {
  return (
    <section id="featured" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Featured Project: The Quantum Spire</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-2xl">
            <Card className="overflow-hidden border-0">
                <Image
                  src="https://placehold.co/1200x800.png"
                  alt="Featured Project Thumbnail"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="futuristic architecture building"
                />
            </Card>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
              <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </div>
          </div>
          <div className="text-lg">
            <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The Quantum Spire is a paradigm-shifting residential tower concept that leverages generative design and sustainable materials. Its dynamic facade adapts to environmental conditions, optimizing energy consumption while creating a living, breathing structure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This project explored parametric modeling to create a unique lattice structure, ensuring both aesthetic appeal and structural integrity. The embedded video showcases the design process from initial concept sketches to detailed 3D renderings and simulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
