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
        <div className="flex items-center h-16">
          {/* Logo with enhanced animation */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Zap className="h-7 w-7 text-accent-teal group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-accent-teal/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-accent-teal transition-colors duration-300">
                NexusCore AI
              </span>
            </Link>
          </div>

          {/* Desktop links with enhanced interactions - centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
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
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Enhanced chat button */}
            <button
              onClick={openChat}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-xl text-accent-purple hover:bg-accent-purple/20 transition-all duration-300 group"
            >
              <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Chat</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-muted hover:bg-accent-purple/10 text-muted-foreground hover:text-accent-purple transition-all duration-300"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* CTA Button */}
            <Button
              onClick={() => window.location.href = '/contact'}
              className="hidden sm:flex bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              Get Quote
            </Button>

            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 rounded-xl bg-muted hover:bg-accent-purple/10 text-muted-foreground hover:text-accent-purple transition-all duration-300">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl border-l border-border/50">
                <div className="flex flex-col h-full">
                  {/* Mobile menu header */}
                  <div className="flex items-center justify-between mb-8">
                    <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="relative">
                        <Zap className="h-6 w-6 text-accent-teal" />
                        <div className="absolute inset-0 bg-accent-teal/20 rounded-full blur-md"></div>
                      </div>
                      <span className="text-lg font-bold text-foreground">NexusCore AI</span>
                    </Link>
                    <SheetClose asChild>
                      <button className="p-2 rounded-xl bg-muted hover:bg-accent-purple/10 text-muted-foreground hover:text-accent-purple transition-all duration-300">
                        <X className="h-5 w-5" />
                      </button>
                    </SheetClose>
                  </div>

                  {/* Mobile navigation links */}
                  <nav className="flex-1 space-y-4">
                    {[
                      { to: "/", label: "Home" },
                      { to: "/solutions", label: "Solutions" },
                      { to: "/contact", label: "Contact" },
                      { to: "/faq", label: "FAQ" }
                    ].map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block p-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                          pathname === link.to
                            ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                            : "text-foreground hover:bg-accent-purple/5 hover:text-accent-purple"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-border/50">
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.location.href = '/contact';
                      }}
                      className="w-full bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold hover:shadow-glow transition-all duration-300"
                    >
                      Get Quote
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
