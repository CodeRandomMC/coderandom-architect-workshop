import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
          <div className="lg:sticky top-28 flex-shrink-0 mx-auto">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/50 shadow-lg">
              <AvatarImage src="/android-chrome-512x512.png" alt="Headshot" data-ai-hint="professional headshot" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="max-w-2xl mx-auto lg:mx-0 text-left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">The Maker's Journey</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I never followed the traditional path. Instead, I learned by experimenting, breaking things, and rebuilding them. My projects span AI, robotics, electronics, and tools for other makers. I believe in rapid prototyping, sharing openly, and pushing the boundaries of what's possible with code + hardware.
                </p>
                <p>
                  My journey started with curiosity and a soldering iron. From simple LED circuits to complex AI systems, I've always been driven by the question "What if I could build that?" rather than "Should I build that?"
                </p>
                <p>
                  What I lack in formal education, I make up for in hands-on experience. Every project teaches me something new, and every failure is just a step toward the next breakthrough. This iterative approach has become my signature style.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">My Approach: Rapid Prototyping & Open Sharing</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I believe the best way to learn is by doing, and the best way to improve is by sharing. That's why I open-source most of my projects and document my failures as much as my successes.
                </p>
                <p>
                  My workflow is simple but effective:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li><strong>Ideate:</strong> Start with a problem I want to solve or something I want to learn.</li>
                  <li><strong>Prototype:</strong> Build a quick, functional version to test the concept.</li>
                  <li><strong>Iterate:</strong> Refine based on what works and what doesn't.</li>
                  <li><strong>Share:</strong> Document the process and share the code for others to build upon.</li>
                </ol>
                <p>
                  This approach has led me from simple Arduino projects to complex AI systems, always with the goal of making technology more accessible and useful for other makers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">The Maker Community</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm passionate about the maker movement because it represents everything I believe in: learning by doing, sharing knowledge, and using technology to solve real problems.
                </p>
                <p>
                  Whether it's helping someone debug their first Arduino project or collaborating on a complex robotics build, I love being part of a community that values experimentation and innovation.
                </p>
                <p>
                  My goal is to inspire others to start their own maker journey, regardless of their background or experience level. Everyone starts somewhere, and the best time to begin is now.
                </p>
                <p className="font-semibold text-foreground">
                  If you're working on something interesting or want to collaborate on a project, I'd love to hear from you. Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
