import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { WorkshopSection } from "@/components/workshop-section";
import { AboutMe } from "@/components/about-me";
import { ContactSection } from "@/components/contact-section";
import { ContactFooter } from "@/components/contact-footer";
import { FloatingNav } from "@/components/floating-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeRandom | Maker Portfolio - AI, Robotics & Electronics",
  description:
    "Jack's maker portfolio featuring AI experiments, robotics prototypes, and electronics projects. From chatbots to ESP32 builds, exploring the intersection of code and hardware.",
  keywords: [
    "CodeRandom",
    "maker portfolio",
    "AI experiments",
    "robotics projects",
    "electronics projects",
    "ESP32 projects",
    "AI chatbots",
    "maker tools",
    "hardware projects",
    "prototype development",
    "embedded systems",
    "IoT projects",
  ],
  openGraph: {
    title: "CodeRandom | Maker Portfolio - AI, Robotics & Electronics",
    description:
      "Jack's maker portfolio featuring AI experiments, robotics prototypes, and electronics projects. From chatbots to ESP32 builds, exploring the intersection of code and hardware.",
    images: [
      {
        url: "/coderandom-hero.png",
        width: 1200,
        height: 630,
        alt: "CodeRandom Maker Portfolio",
      },
    ],
  },
  twitter: {
    title: "CodeRandom | Maker Portfolio - AI, Robotics & Electronics",
    description:
      "Jack's maker portfolio featuring AI experiments, robotics prototypes, and electronics projects.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <FloatingNav />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <WorkshopSection />
        <AboutMe />
        <ContactSection />
      </main>
      <ContactFooter />
    </div>
  );
}
