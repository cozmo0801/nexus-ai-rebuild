import { Button } from "@/components/ui/button";
import { Moon, Sun, Zap, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const { pathname } = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinkClass = (to: string) =>
    `text-foreground transition-all duration-300 relative group ${
      pathname === to ? 'text-accent-teal' : 'hover:text-accent-teal'
    }`;

  const Underline = () => (
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple group-hover:w-full transition-all duration-300" />
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-accent-teal" />
            <span className="text-xl font-bold text-foreground">NexusCore AI</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>Home<Underline /></Link>
            <Link to="/solutions" className={navLinkClass('/solutions')}>Solutions<Underline /></Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact<Underline /></Link>
            <Link to="/faq" className={navLinkClass('/faq')}>FAQ<Underline /></Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-card hover:bg-white/20 transition-all duration-300 border-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
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
              onClick={() => (window.location.href = '/get-started')}
              className="hidden md:inline-flex"
            >
              Get Started
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="md:hidden p-2 rounded-lg glass-card border-glass">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xs">
                <div className="flex flex-col gap-4 mt-8">
                  <SheetClose asChild>
                    <Link to="/" className="text-lg" aria-label="Home">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/solutions" className="text-lg" aria-label="Solutions">Solutions</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/contact" className="text-lg" aria-label="Contact">Contact</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/faq" className="text-lg" aria-label="FAQ">FAQ</Link>
                  </SheetClose>
                  <Button 
                    variant="hero" 
                    size="default"
                    onClick={() => (window.location.href = '/get-started')}
                    className="mt-4"
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;