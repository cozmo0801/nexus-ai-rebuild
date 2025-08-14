import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StarBorderButton } from "@/components/ui/star-border-button";

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
          Let's discuss how our custom state-of-the-art automation solutions can transform your Central Florida business operations and boost your growth
        </p>
          <StarBorderButton 
            color="hsl(var(--accent-teal))"
            speed="3s"
            className="font-medium"
            onClick={() => window.location.href = '/contact'}
          >
            Get Custom Quote
            <ArrowRight className="h-5 w-5 ml-2" />
          </StarBorderButton>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;