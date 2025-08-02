import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
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

          {/* Metrics Dashboard */}
          <div className="glass-card rounded-3xl p-8 mb-12 shadow-glass border border-glass backdrop-blur-glass animate-float">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                  <span className="text-sm text-white/70">Live Status</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">247</div>
                <div className="text-sm text-white/70">Active Conversations</div>
              </div>
              
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                  <span className="text-sm text-white/70">Performance</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">0.3s</div>
                <div className="text-sm text-white/70">Response Time</div>
              </div>
              
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-sm text-white/70">Quality</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">98.5%</div>
                <div className="text-sm text-white/70">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <StarBorderButton 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.location.href = '/get-started'}
            >
              Get Started Free
            </StarBorderButton>
            <StarBorderButton 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto"
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