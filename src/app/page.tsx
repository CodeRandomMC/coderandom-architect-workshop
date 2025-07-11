import { Introduction } from "@/components/introduction";
import { MissionProject } from "@/components/mission-project";
import { FeaturedProject } from "@/components/featured-project";
import { CaseStudies } from "@/components/case-studies";
import { AboutMe } from "@/components/about-me";
import { ContactSection } from "@/components/contact-section";
import { ContactFooter } from "@/components/contact-footer";
import { FloatingNav } from "@/components/floating-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Jack Pollard | AI Systems Architect Portfolio - Ethical AI & AI for Kids",
  description:
    "Explore Jack Pollard's portfolio featuring KidsAI mission project, VelocityAI architecture reviewer, and expertise in ethical AI development, AI for kids, and rapid AI prototyping. Demonstrating high-velocity development and AI safety practices.",
  keywords: [
    "Jack Pollard portfolio",
    "AI systems architect portfolio",
    "ethical AI projects",
    "AI for kids portfolio",
    "KidsAI project",
    "VelocityAI project",
    "AI prototyping examples",
    "responsible AI development",
    "AI safety portfolio",
    "high velocity development showcase",
    "AI co-pilot development",
    "Claude API projects",
  ],
  openGraph: {
    title:
      "Jack Pollard | AI Systems Architect Portfolio - Ethical AI & AI for Kids",
    description:
      "Explore Jack Pollard's portfolio featuring KidsAI mission project, VelocityAI architecture reviewer, and expertise in ethical AI development, AI for kids, and rapid AI prototyping.",
    images: [
      {
        url: "/kids-ai/welcome_screen.png",
        width: 1200,
        height: 630,
        alt: "KidsAI Project - Safe AI for Children",
      },
    ],
  },
  twitter: {
    title:
      "Jack Pollard | AI Systems Architect Portfolio - Ethical AI & AI for Kids",
    description:
      "Explore Jack Pollard's portfolio featuring KidsAI mission project, VelocityAI architecture reviewer, and expertise in ethical AI development.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <FloatingNav />
      <main className="flex-grow">
        <Introduction />
        <MissionProject />
        <FeaturedProject />
        <CaseStudies />
        <AboutMe />
        <ContactSection />
      </main>
      <ContactFooter />
    </div>
  );
}
