import { Button } from "@/components/ui/button";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { Play, Bot, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import BackgroundPaths from "./BackgroundPaths";
import { FluidBlob } from "@/components/ui/fluid-blob";
import { StarBorderButton } from "@/components/ui/star-border-button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  const benefits = [
    "Save 15+ hours per week",
    "Reduce costs by 40%",
    "Boost sales by 60%"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 min-h-screen overflow-hidden">
      <BackgroundPaths />
      
      {/* Enhanced fluid blob background effect */}
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <FluidBlob className="w-full h-full" />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-purple rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent-teal rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent-orange rounded-full animate-pulse opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-[calc(100vh-6rem)]">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">Trusted by Growing Startups in Central Florida</span>
          </div>

          {/* Main Headline with Enhanced Typography */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-foreground via-accent-teal to-accent-purple bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent">
              with State-of-the-Art AI Solutions
            </span>
          </h1>
          
          {/* Dynamic Benefit Display */}
          <div className="h-8 mb-6 flex items-center justify-center">
            <div className="flex items-center gap-2 text-xl text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-accent-green" />
              <span className="font-medium">
                {benefits[currentBenefit]}
              </span>
            </div>
          </div>
          
          {/* Enhanced Sub-headline */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Stop losing customers to slow responses and missed opportunities. Our state-of-the-art automation systems work 24/7 to 
            <span className="font-semibold text-foreground"> capture leads</span>, 
            <span className="font-semibold text-foreground"> answer questions</span>, and 
            <span className="font-semibold text-foreground"> close sales</span> while you focus on growing your business.
          </p>

          {/* Enhanced Product Preview: AI Chat */}
          <div className={`mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-green))]/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-card border rounded-3xl p-8 shadow-2xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent-purple to-accent-teal flex items-center justify-center">
                      <Bot className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="text-sm font-medium">AI Business Assistant</div>
                    <div className="ml-auto flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Online</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      Hi! I'm here to help grow your business 24/7. How can I assist you today?
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg p-4 text-sm ml-8">
                      What are your business hours and pricing?
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-sm">
                      We're open Monday-Friday 9AM-6PM EST, but I'm available 24/7 to help with questions, bookings, and support! Our AI solutions start at just $150/month with custom pricing plans.
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Typing...</span>
                      <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 bg-accent-purple rounded-full animate-bounce"></div>
                        <div className="h-1.5 w-1.5 bg-accent-teal rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="h-1.5 w-1.5 bg-accent-orange rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Liquid Glass */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <LiquidButton 
              size="xl"
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto font-medium text-lg group"
            >
              <span className="flex items-center gap-2">
                Get Custom Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </LiquidButton>
            <MetalButton 
              variant="gold"
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto font-medium text-lg group"
            >
              <span className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </span>
            </MetalButton>
          </div>

          {/* Social Proof */}
          <div className={`mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm text-muted-foreground mb-4">Join growing startups in Central Florida already transforming with AI</p>
                      <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <span>✓ Custom pricing plans</span>
            <span>✓ Fast and tailored setup</span>
            <span>✓ Flexible payment terms</span>
          </div>
          
          {/* Free Trial Information */}
          <div className="mt-6 p-4 bg-gradient-to-r from-accent-green/10 to-accent-teal/10 border border-accent-green/20 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-accent-green" />
              <span className="text-sm font-medium text-accent-green">One-Week Free Trial Available</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Try our automation solution for your business free for one week. Fill out the contact form to learn more and get started.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;