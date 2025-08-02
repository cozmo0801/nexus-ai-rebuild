import { Button } from "@/components/ui/button";
import { Moon, Sun, Zap } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-accent-purple" />
            <span className="text-xl font-bold text-foreground">NexusCore AI</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent-teal transition-colors">
              Home
            </a>
            <a href="#solutions" className="text-foreground hover:text-accent-teal transition-colors">
              Solutions
            </a>
            <a href="#contact" className="text-foreground hover:text-accent-teal transition-colors">
              Contact
            </a>
            <a href="#faq" className="text-foreground hover:text-accent-teal transition-colors">
              FAQ
            </a>
          </div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-foreground" />
              )}
            </button>
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;