import { ProjectShowcase } from "./project-showcase";

export function MissionProject() {
  return (
    <ProjectShowcase
      id="mission"
      title="Mission Project: Life Co-Pilot"
      subtitle="The vision that drives everything I build"
      description={[
        "My mission is to create AI that doesn't replace human potential, but amplifies it. Life Co-Pilot represents my vision for AI as a supportive companion that helps people navigate life's complexities, make better decisions, and achieve their goals. This isn't just about building technology—it's about creating tools that genuinely improve human well-being and capability.",
        "This project embodies my belief that AI should be helpful, harmless, and honest—values that align with building technology that serves humanity's best interests.",
      ]}
      linkText="Learn More About the Vision starting with (KidsAI)"
      linkHref="https://github.com/CodeRandomMC/KidsAI"
      backgroundColor="muted"
    />
  );
}
