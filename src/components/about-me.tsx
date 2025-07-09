import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/50 shadow-lg">
            <AvatarImage src="https://placehold.co/400x400.png" alt="Headshot" data-ai-hint="professional headshot" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">My Journey: Forged in Chaos, Focused on Stability</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I am a passionate digital architect with over a decade of experience in bridging the gap between imaginative design and functional, scalable software. My philosophy is rooted in the belief that great architecture, whether physical or digital, should be both beautiful and intuitive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After graduating with a Master's in Architectural Engineering, I found my calling in the world of code, applying structural principles to create elegant and resilient digital systems. I specialize in full-stack development with a keen eye for user experience and system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
