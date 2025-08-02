import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
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

          {/* Metrics Dashboard */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-card backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Live Status</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">247</div>
                <div className="text-sm text-muted-foreground">Active Conversations</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Performance</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">0.3s</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Quality</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">98.5%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;