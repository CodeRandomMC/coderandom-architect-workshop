import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "./social-links";

export function ContactFooter() {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* CodeRandom Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                CodeRandom
              </h3>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Where Code Meets Innovation</p>
          </div>

          {/* Social Links */}
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

          {/* Copyright and Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground/60 mb-2">
              &copy; {new Date().getFullYear()} CodeRandom. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground/40">
              Building the future of maker culture, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
