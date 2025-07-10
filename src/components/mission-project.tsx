import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MissionProject() {
  return (
    <section id="mission" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Mission Project: Life Co-Pilot
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            The vision that drives everything I build
          </p>
          <Card className="overflow-hidden border-2 border-border mb-8 shadow-2xl shadow-primary/10 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.loom.com/embed/0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f"
              title="Life Co-Pilot Vision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
          <div className="text-lg text-left max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My mission is to create AI that doesn't replace human potential,
              but amplifies it. Life Co-Pilot represents my vision for AI as a
              supportive companion that helps people navigate life's
              complexities, make better decisions, and achieve their goals. This
              isn't just about building technology—it's about creating tools
              that genuinely improve human well-being and capability.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This project embodies my belief that AI should be helpful,
              harmless, and honest—values that align with building technology
              that serves humanity's best interests.
            </p>
            <a
              href="#mission-details"
              className="inline-flex items-center font-semibold text-primary hover:underline"
            >
              Learn More About the Vision{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
