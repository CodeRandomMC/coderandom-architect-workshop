import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const caseStudies = [
  {
    title: "Urban Oasis",
    description: "A mixed-use development focused on green spaces and community living in a dense urban environment.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "modern architecture green",
    pdfUrl: "#",
  },
  {
    title: "The Sentinel Bridge",
    description: "A pedestrian bridge design combining modern aesthetics with advanced structural engineering principles.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "modern bridge",
    pdfUrl: "#",
  },
  {
    title: "Eco-Habitats",
    description: "Sustainable, modular housing solutions designed for minimal environmental impact and rapid deployment.",
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: "eco friendly house",
    pdfUrl: "#",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Architectural Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
              <div className="overflow-hidden">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={study.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="leading-relaxed">{study.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="secondary" className="w-full">
                  <a href={study.pdfUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
