import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const ReadySection = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
          Let's discuss how our custom state-of-the-art automation solutions can transform your Central Florida business operations and boost your growth
        </p>
        
        {/* Free Trial Information */}
        <div className="mb-8 p-4 bg-white/10 border border-white/20 rounded-2xl max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white">One-Week Free Trial Available</span>
          </div>
          <p className="text-sm text-white/80 text-center">
            Try our automation solution for your business free for one week. Fill out the contact form to learn more and get started.
          </p>
        </div>
        
          <LiquidButton 
            size="xl"
            className="font-medium bg-white/10 border border-white/20 text-white hover:bg-white/20"
            onClick={() => window.location.href = '/contact'}
          >
            Get Custom Quote
          </LiquidButton>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;