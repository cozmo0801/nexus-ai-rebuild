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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-accent-teal" />
            <span className="text-xl font-bold text-foreground">NexusCore AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-accent-teal transition-all duration-300 relative group">
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="/solutions" className="text-foreground hover:text-accent-teal transition-all duration-300 relative group">
              <span>Solutions</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="/contact" className="text-foreground hover:text-accent-teal transition-all duration-300 relative group">
              <span>Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="/faq" className="text-foreground hover:text-accent-teal transition-all duration-300 relative group">
              <span>FAQ</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-card hover:bg-white/20 transition-all duration-300 border-glass"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-foreground" />
              )}
            </button>
            <Button 
              variant="hero" 
              size="default"
              onClick={() => window.location.href = '/get-started'}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;