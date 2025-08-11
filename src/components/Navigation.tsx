import { Button } from "@/components/ui/button";
import { Moon, Sun, Zap, Menu, MessageSquare, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinkClass = (to: string) =>
    `text-foreground transition-all duration-300 relative group ${
      pathname === to ? "text-accent-teal" : "hover:text-accent-teal"
    }`;

  const Underline = () => (
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-teal to-accent-purple group-hover:w-full transition-all duration-300" />
  );

  const openChat = () => {
    // @ts-ignore
    if (window.loadChatbase) {
      // @ts-ignore
      window.loadChatbase();
      // Give the embed a moment to initialize, then try to open if API exposes toggle
      setTimeout(() => {
        // @ts-ignore
        if (window.chatbase) {
          try {
            // some embeds open automatically once loaded; this is a no-op safety
          } catch {}
        }
      }, 300);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-nav shadow-lg backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-white/10 dark:border-white/5' 
        : 'glass-nav'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animation */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Zap className="h-7 w-7 text-accent-teal group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-accent-teal/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-accent-teal transition-colors duration-300">
              NexusCore AI
            </span>
          </Link>

          {/* Desktop links with enhanced interactions */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass("/")}>
              <span className="relative">
                Home
                <Underline />
              </span>
            </Link>
            <Link to="/solutions" className={navLinkClass("/solutions")}>
              <span className="relative">
                Solutions
                <Underline />
              </span>
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")}>
              <span className="relative">
                Contact
                <Underline />
              </span>
            </Link>
            <Link to="/faq" className={navLinkClass("/faq")}>
              <span className="relative">
                FAQ
                <Underline />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Enhanced chat button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="hidden md:inline-flex relative group hover:scale-105 transition-transform duration-300" 
              onClick={openChat} 
              aria-label="Open chat"
            >
              <MessageSquare className="h-4 w-4 group-hover:text-accent-purple transition-colors" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent-green rounded-full animate-pulse"></div>
            </Button>

            {/* Enhanced theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-card hover:bg-white/20 transition-all duration-300 border-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal hover:scale-105 group"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-foreground group-hover:text-accent-orange transition-colors" />
              ) : (
                <Moon className="h-4 w-4 text-foreground group-hover:text-accent-purple transition-colors" />
              )}
            </button>

            {/* Enhanced CTA button */}
            <Button
              variant="hero"
              size="default"
              onClick={() => (window.location.href = "/get-started")}
              className="hidden md:inline-flex group hover:scale-105 transition-transform duration-300"
            >
              <span className="flex items-center gap-2">
                Get Started
                <div className="w-1 h-1 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </span>
            </Button>

            {/* Enhanced mobile menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="md:hidden p-2.5 rounded-xl glass-card border-glass hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <Menu className="h-5 w-5 group-hover:text-accent-purple transition-colors" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xs bg-white/95 dark:bg-black/95 backdrop-blur-xl border-l border-white/10 dark:border-white/5">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-foreground">Menu</span>
                    <SheetClose asChild>
                      <button className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
                        <X className="h-5 w-5" />
                      </button>
                    </SheetClose>
                  </div>
                  
                  <SheetClose asChild>
                    <Link to="/" className="text-lg p-3 rounded-lg hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300" aria-label="Home">
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/solutions" className="text-lg p-3 rounded-lg hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300" aria-label="Solutions">
                      Solutions
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/contact" className="text-lg p-3 rounded-lg hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300" aria-label="Contact">
                      Contact
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/faq" className="text-lg p-3 rounded-lg hover:bg-accent-purple/10 hover:text-accent-purple transition-all duration-300" aria-label="FAQ">
                      FAQ
                    </Link>
                  </SheetClose>
                  
                  <div className="pt-4 border-t border-border">
                    <Button variant="outline" onClick={openChat} className="w-full mb-3">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat Support
                    </Button>
                    <Button
                      variant="hero"
                      size="default"
                      onClick={() => (window.location.href = "/get-started")}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
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
