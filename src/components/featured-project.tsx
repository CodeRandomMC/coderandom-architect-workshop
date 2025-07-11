import { ProjectShowcase } from "./project-showcase";

export function FeaturedProject() {
  return (
    <ProjectShowcase
      id="featured"
      title="Featured Project: VelocityAI Architecture Reviewer"
      subtitle="Built in hours, not days - showcasing rapid development capabilities"
      description="A full-stack Python application that acts as an AI co-pilot for systems architecture, providing instant expert-level feedback on design plans. Built from concept to deployment in just a few hours, this project demonstrates my ability to rapidly prototype and deliver production-ready solutions. Features both cloud and local LLM support, and showcases end-to-end development velocity that directly translates to real-world impact."
      linkText="Explore the Project on GitHub"
      linkHref="https://github.com/CodeRandomMC/VelocityAI-A-Systems-Architect-Co-Pilot"
      backgroundColor="default"
      images={[
        {
          src: "/velocity-ai/velocity_ai.png",
          alt: "VelocityAI main interface showcasing AI prototyping and rapid development capabilities for systems architecture",
        },
        {
          src: "/velocity-ai/local_llm_support.png",
          alt: "VelocityAI local LLM support feature demonstrating AI co-pilot functionality and ethical AI development practices",
        },
        {
          src: "/velocity-ai/export_showcase.png",
          alt: "VelocityAI export functionality showcase highlighting high-velocity development and AI-augmented systems architecture",
        },
      ]}
    />
  );
}
