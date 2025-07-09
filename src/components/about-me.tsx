import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
          <div className="lg:sticky top-28 flex-shrink-0 mx-auto">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/50 shadow-lg">
              <AvatarImage src="https://placehold.co/400x400.png" alt="Headshot" data-ai-hint="professional headshot" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="max-w-2xl mx-auto lg:mx-0 text-left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">My Journey: Forged in Chaos, Focused on Stability</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My path to technology wasn't linear or formal. It was a decade-long, self-directed apprenticeship driven by necessity and a deep-seated need to build. It started with Minecraft modding and Discord bots and evolved through web architecture and blockchain, all while working demanding manual labor jobs.
                </p>
                <p>
                  Growing up in a chaotic environment taught me two invaluable lessons that no university could:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li><strong>How to find the single point of failure in any system.</strong> My survival instinct became my red-teaming instinct. I learned to take nothing at face value and to instinctively search for the hidden vulnerability.</li>
                  <li><strong>How to build something stable and reliable from scratch.</strong> When you have no safety nets, you learn to weave your own.</li>
                </ol>
                <p>
                  When modern AI arrived, I realized it wasn't just another tool. It was a force multiplier for my mind—a way to translate my rapid, intuitive thinking into the formal, robust language of systems architecture.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">My Workflow: The AI-Augmented Architect</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I felt like an imposter because I don't store every framework and API in my head. I now know my strength isn't in memorization; it's in orchestration. I've pioneered a personal workflow that turns me into a one-person design firm.
                </p>
                <p>
                  My process is a tight, rapid loop:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li><strong>Conceptualize:</strong> A high-velocity idea for a system.</li>
                  <li><strong>Blueprint:</strong> Use my AI toolset to instantly draft a V1 architectural plan.</li>
                  <li><strong>Critique:</strong> Feed that blueprint into my own custom-built AI "Senior Architect" for an immediate, ruthless, and insightful review.</li>
                  <li><strong>Iterate:</strong> Refine the design with expert-level feedback in minutes, not months.</li>
                </ol>
                <p>
                  The <strong>VelocityAI Architecture Reviewer</strong> on my GitHub is a tangible product of this exact workflow. I don't just use tools; I build meta-tools that improve the very process of creation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">My Mission: The Life Co-pilot</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My work became deeply personal when my son was born. I saw his future and the world of AI he would inherit, and my mission crystallized.
                </p>
                <p>
                  My ultimate goal is to apply my skills to build what I call the <strong>"Life Co-pilot"</strong>—a verifiably safe, factually grounded, and deeply supportive AI companion for children growing up in adversity. It's an AI designed to be the stable, encouraging voice that many, including myself, never had.
                </p>
                <p>
                  This is the reason I am so fiercely dedicated to AI safety. The systems we build must be worthy of the trust our children will place in them. This is more than a career for me. It is the work I was built to do.
                </p>
                <p className="font-semibold text-foreground">
                  If you are working on hard problems that require a different way of thinking, I would love to connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
