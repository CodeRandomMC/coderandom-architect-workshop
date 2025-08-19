"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "top", label: "Home", href: "#" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "workshop", label: "Workshop", href: "#workshop" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("top");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show nav after scrolling past the first 100px
      setIsVisible(scrollY > 100);

      // Find the current active section
      const sections = navItems.slice(1).map((item) => item.id); // Skip 'top'

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Consider a section active when it's within the top 30% of the viewport
          if (rect.top <= window.innerHeight * 0.3) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // If no section is in the active zone, default to 'top'
      if (scrollY < 100) {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group">
      <div className="flex flex-col items-center space-y-4 bg-background/20 backdrop-blur-sm border border-border/20 rounded-full px-4 py-6 transition-all duration-300 opacity-30 hover:opacity-100 hover:bg-background/80 hover:shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.href)}
            className={cn(
              "relative w-4 h-4 rounded-full transition-all duration-300 border-2",
              activeSection === item.id
                ? "bg-primary border-primary scale-125"
                : "bg-transparent border-muted-foreground/40 hover:border-primary hover:bg-primary/20"
            )}
            aria-label={`Navigate to ${item.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-7 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background/90 backdrop-blur-sm text-foreground text-sm px-3 py-1 rounded-md border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
