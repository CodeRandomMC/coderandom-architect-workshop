import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";

const caseStudies = [
  {
    title: "The LLM Guardian Cluster",
    description:
      "A foundational whitepaper on a distributed, multi-agent architecture for ensuring AI safety and reliability.",
    pdfUrl: "#",
    github: "https://github.com/CodeRandomMC/LLMGuardian",
  },
  {
    title: "KidsAI Safety Architecture",
    description:
      "A proof-of-concept for building AI systems worthy of a child's trust. Features a two-stage guardian pipeline, stateless design, and safety-by-design architecture that eliminates attack surfaces rather than filtering them.",
    pdfUrl: "#",
    github: "https://github.com/CodeRandomMC/KidsAI",
  },
  {
    title: "The Medical Guardian",
    description:
      "Architectural plan for a secure, HIPAA-compliant AI system for medical data analysis and diagnostic support.",
    pdfUrl: "#",
    github: "https://github.com/CodeRandomMC/MedicalDiagnosticGuardian",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Architectural Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col bg-background border-border/80 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="leading-relaxed">
                  {study.description}
                </CardDescription>
              </CardContent>
              {(study.pdfUrl && study.pdfUrl !== "#") ||
              (study.github && study.github !== "#") ? (
                <div className="space-y-3 px-6 pb-6">
                  {study.pdfUrl && study.pdfUrl !== "#" && (
                    <Button asChild variant="secondary" className="w-full">
                      <a href={study.pdfUrl} download>
                        <FileText className="mr-2 h-4 w-4" />
                        Read the Blueprint (PDF)
                      </a>
                    </Button>
                  )}
                  {study.github && study.github !== "#" && (
                    <Button asChild variant="default" className="w-full">
                      <a
                        href={study.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        In the workshop (GitHub)
                      </a>
                    </Button>
                  )}
                </div>
              ) : (
                <CardContent className="mt-auto">
                  <p className="text-sm text-muted-foreground text-center italic">
                    Coming soon...
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
