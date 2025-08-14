import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Underline } from "lucide-react";
import Logo from "@/components/ui/logo";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
      isActive 
        ? 'text-accent-purple' 
        : 'text-muted-foreground hover:text-foreground'
    }`;
  };

  const navItems = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "Solutions", link: "/solutions", icon: "⚡" },
    { name: "Contact", link: "/contact", icon: "📞" },
    { name: "FAQ", link: "/faq", icon: "❓" },
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />
      
      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <LiquidButton 
                size="default"
                onClick={() => window.location.href = '/contact'}
                className="hidden sm:flex"
              >
                Get Quote
              </LiquidButton>

              {/* Mobile menu button */}
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
                      <Logo size="xl" onClick={() => setIsMobileMenuOpen(false)} />
                      <SheetClose asChild>
                        <button className="p-2 rounded-xl bg-muted hover:bg-accent-purple/10 text-muted-foreground hover:text-accent-purple transition-all duration-300">
                          <X className="h-5 w-5" />
                        </button>
                      </SheetClose>
                    </div>

                    {/* Mobile navigation links */}
                    <nav className="flex-1 space-y-4">
                      <Link
                        to="/"
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-accent-purple/10 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        to="/solutions"
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-accent-purple/10 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Solutions
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-accent-purple/10 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <Link
                        to="/faq"
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-accent-purple/10 rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        FAQ
                      </Link>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="pt-6 border-t border-border">
                      <LiquidButton
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.location.href = '/contact';
                        }}
                        className="w-full"
                      >
                        Get Custom Quote
                      </LiquidButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
