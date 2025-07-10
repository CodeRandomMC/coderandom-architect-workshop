import { ProjectShowcase } from "./project-showcase";

export function MissionProject() {
  return (
    <ProjectShowcase
      id="mission"
      title="Main Project: KidsAI (Mission Life Co-Pilot)"
      subtitle="Built in <12 hours to demonstrate rapid AI application development"
      description={[
        "🚀 **Development Timeline**: This entire portfolio and KidsAI project were built in under 12 hours, showcasing my ability to rapidly prototype and deploy full-stack AI applications using modern frameworks.",
        "🤖 **AI-First Philosophy**: My mission is to create AI that doesn't replace human potential, but amplifies it. Life Co-Pilot represents my vision for AI as a supportive companion that helps people navigate life's complexities and achieve their goals.",
        "🧠 **KidsAI Showcase**: The first implementation focuses on child development and learning - featuring safe AI interactions, creative learning modules, and parental guidance tools. This demonstrates my understanding of responsible AI deployment and age-appropriate technology design.",
        "🔧 **Next Steps**: Ready to integrate Claude API, implement comprehensive testing suites, and scale the platform. The foundation is built for rapid iteration and feature expansion.",
      ]}
      linkText="Explore KidsAI Implementation →"
      linkHref="https://github.com/CodeRandomMC/KidsAI"
      images={[
        {
          src: "/kids-ai/welcome_screen.png",
          alt: "KidsAI Welcome Screen - Safe AI playground for children",
        },
        {
          src: "/kids-ai/the_mission.png",
          alt: "KidsAI Mission Statement - Empowering creativity through AI",
        },
      ]}
      backgroundColor="muted"
    />
  );
}
