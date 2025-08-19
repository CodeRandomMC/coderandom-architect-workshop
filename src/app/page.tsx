import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { TutorialsSection } from "@/components/tutorials-section";
import { AboutMe } from "@/components/about-me";
import { ContactSection } from "@/components/contact-section";
import { ContactFooter } from "@/components/contact-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeRandom | Where Code Meets Innovation - AI, Robotics & Electronics",
  description:
    "CodeRandom is a platform for makers, developers, and innovators. Explore AI experiments, robotics prototypes, electronics projects, tutorials, blog posts, and maker tools.",
  keywords: [
    "CodeRandom",
    "maker platform",
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
    "tutorials",
    "tech blog",
    "maker store",
    "innovation platform",
    "coding tutorials",
    "electronics guides",
  ],
  openGraph: {
    title: "CodeRandom | Where Code Meets Innovation - AI, Robotics & Electronics",
    description:
      "CodeRandom is a platform for makers, developers, and innovators. Explore AI experiments, robotics prototypes, electronics projects, tutorials, blog posts, and maker tools.",
    images: [
      {
        url: "/coderandom-hero.png",
        width: 1200,
        height: 630,
        alt: "CodeRandom - Where Code Meets Innovation",
      },
    ],
  },
  twitter: {
    title: "CodeRandom | Where Code Meets Innovation - AI, Robotics & Electronics",
    description:
      "CodeRandom is a platform for makers, developers, and innovators. Explore AI experiments, robotics prototypes, and electronics projects.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <AboutMe />
        <ContactSection />
      </main>
      <ContactFooter />
    </div>
  );
}
