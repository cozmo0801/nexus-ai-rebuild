import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Hammer } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Logo from "@/components/ui/logo";
import { CompactThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollProgress } from "@/components/ui/custom-scrollbar";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "Solutions", link: "/solutions", icon: "🔨" },
    { name: "Contact", link: "/contact", icon: "📞" },
    { name: "FAQ", link: "/faq", icon: "❓" },
  ];

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
      isActive
        ? "text-accent-teal bg-accent-teal/10 border border-accent-teal/20"
        : "text-muted-foreground hover:text-foreground hover:bg-accent-purple/5 hover:border-accent-purple/20 border border-transparent"
    }`;
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress height="3px" />
      
      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />

      {/* Main Navigation Bar */}
      <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-border/50" 
          : "bg-background/80 backdrop-blur-sm border-border/20"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            {/* Logo with enhanced animation - much bigger now */}
            <div className="flex-shrink-0">
              <Logo size="xxl" />
            </div>

            {/* Desktop links with enhanced interactions - centered */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-8">
                <Link to="/" className={navLinkClass("/")}>
                  <span className="relative">
                    Home
                  </span>
                </Link>
                <Link to="/solutions" className={navLinkClass("/solutions")}>
                  <span className="relative">
                    Solutions
                  </span>
                </Link>
                <Link to="/contact" className={navLinkClass("/contact")}>
                  <span className="relative">
                    Contact
                  </span>
                </Link>
                <Link to="/faq" className={navLinkClass("/faq")}>
                  <span className="relative">
                    FAQ
                  </span>
                </Link>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Theme Toggle */}
              <CompactThemeToggle />
              
              {/* Mobile menu button - moved to top right */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    {/* Mobile menu header */}
                    <div className="flex items-center justify-between mb-8">
                      <Logo size="lg" />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </div>

                    {/* Mobile navigation links */}
                    <nav className="flex-1 space-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.link}
                          to={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center px-4 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                            location.pathname === item.link
                              ? "text-accent-teal bg-accent-teal/10 border border-accent-teal/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent-purple/5"
                          }`}
                        >
                          <span className="mr-4 text-2xl">{item.icon}</span>
                          <span className="flex-1">{item.name}</span>
                          {location.pathname === item.link && (
                            <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                          )}
                        </Link>
                      ))}
                    </nav>

                    {/* Mobile CTA section */}
                    <div className="pt-6 border-t border-border/50 space-y-4">
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.location.href = '/contact';
                        }}
                      >
                        Get Quote
                      </Button>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          Need help? Our team is here for you.
                        </p>
                        <Link
                          to="/contact"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-accent-teal hover:text-accent-teal/80 transition-colors"
                        >
                          Contact Support →
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Solutions Quick Access Button - Hammer icon */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex hover:bg-accent-purple/10 text-accent-purple dark:text-accent-purple hover:text-accent-purple dark:hover:text-accent-purple transition-all duration-300"
                onClick={() => window.location.href = '/solutions'}
                title="View Solutions"
              >
                <Hammer className="h-5 w-5" />
              </Button>

              {/* Get Quote Button */}
              <LiquidButton
                size="default"
                onClick={() => window.location.href = '/contact'}
                className="hidden sm:flex"
              >
                Get Quote
              </LiquidButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
