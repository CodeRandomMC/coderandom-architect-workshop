import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ContactFooter() {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "GitHub", icon: Github, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:example@example.com" },
  ];

  return (
    <footer id="contact" className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">CodeRandom Architect's Workshop</p>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            {socialLinks.map((link) => (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
}
