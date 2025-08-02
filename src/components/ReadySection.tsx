import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReadySection = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let's discuss how AI can transform your business operations and boost your sales
          </p>
          <Button variant="cta" size="lg" className="animate-pulse-glow group">
            <span className="relative z-10">Get Started Now</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;