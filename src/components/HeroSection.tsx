import { Button } from "@/components/ui/button";
import { Play, Bot } from "lucide-react";
import BackgroundPaths from "./BackgroundPaths";
import { FluidBlob } from "@/components/ui/fluid-blob";
import { StarBorderButton } from "@/components/ui/star-border-button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 min-h-screen overflow-hidden">
      <BackgroundPaths />
      
      {/* Fluid blob background effect */}
      <div className="absolute inset-0 opacity-10 mix-blend-screen">
        <FluidBlob className="w-full h-full" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-[calc(100vh-6rem)]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
            NexusCore AI - Smarter Solutions for Small Business
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Integrate powerful AI chatbots and automation into your website. Save time, reduce costs, 
            and boost sales with intelligent customer interactions.
          </p>

          {/* Product Preview: AI Chat */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-green))]/15 rounded-3xl blur-3xl"></div>
              <div className="relative bg-card border rounded-3xl p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="text-sm font-medium">AI Assistant</div>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      Hi! I'm here to help you 24/7. How can I assist you today?
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-sm ml-8">
                      What are your business hours?
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      We're open Monday-Friday 9AM-6PM EST, but I'm available 24/7 to help with questions, bookings, and support!
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online and ready to help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <StarBorderButton 
              color="hsl(var(--accent-teal))"
              speed="4s"
              className="w-full sm:w-auto font-medium"
              onClick={() => window.location.href = '/get-started'}
            >
              Get Started Free
            </StarBorderButton>
            <StarBorderButton 
              color="hsl(var(--accent-purple))"
              speed="5s"
              className="w-full sm:w-auto font-medium"
              onClick={() => window.location.href = '/contact'}
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </StarBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;