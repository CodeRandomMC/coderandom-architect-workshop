import { Introduction } from "@/components/introduction";
import { MissionProject } from "@/components/mission-project";
import { FeaturedProject } from "@/components/featured-project";
import { CaseStudies } from "@/components/case-studies";
import { AboutMe } from "@/components/about-me";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <Introduction />
        <MissionProject />
        <FeaturedProject />
        <CaseStudies />
        <AboutMe />
      </main>
      <ContactFooter />
    </div>
  );
}
