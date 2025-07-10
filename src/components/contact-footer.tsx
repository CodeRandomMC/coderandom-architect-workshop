import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "./social-links";

export function ContactFooter() {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Button asChild variant="ghost" size="icon" key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Jack Pollard. All Rights Reserved. |
          CodeRandom.com
        </p>
      </div>
    </footer>
  );
}
