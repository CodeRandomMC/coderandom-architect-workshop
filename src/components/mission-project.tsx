import { ProjectShowcase } from "./project-showcase";

export function MissionProject() {
  return (
    <ProjectShowcase
      id="mission"
      title="Main Project: KidsAI (Mission Life Co-Pilot)"
      subtitle="A foundational step toward safe, supportive AI for children in need"
      description={[
        "🎯 **Mission-Driven Development**: KidsAI represents my commitment to building AI systems that serve humanity's most vulnerable populations. This project demonstrates my approach to responsible AI development with real-world impact potential.",
        "🤖 **AI Safety & Ethics**: Every design decision prioritizes child safety, age-appropriate interactions, and transparent AI behavior. This showcases my understanding of the critical importance of safety-first AI development, especially for vulnerable users.",
        "🧠 **Technical Foundation**: The implementation demonstrates full-stack AI application architecture, including safe content generation, user experience design for children, and scalable system architecture that can grow with evolving AI capabilities.",
        "🔧 **Anthropic Integration Vision**: The platform is architected specifically for Claude API integration (To be added), representing my vision for how Anthropic's safety-focused AI can be responsibly deployed in educational and developmental contexts for children.",
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
