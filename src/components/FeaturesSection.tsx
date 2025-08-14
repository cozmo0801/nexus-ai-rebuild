import { 
  Bot, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Puzzle, 
  Shield,
  Zap,
  Clock,
  Users,
  Target,
  CheckCircle
} from "lucide-react";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import GlowingEffect from "@/components/ui/glowing-effect";
import { useState } from "react";

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "24/7 AI Support",
      description: "Never miss a customer inquiry with intelligent chatbots that work around the clock, providing instant responses and capturing leads while you sleep.",
      icon: Bot,
      color: "text-accent-purple",
      bgColor: "from-accent-purple/10 to-accent-purple/5",
      borderColor: "border-accent-purple/20",
      stat: "24/7",
      statLabel: "Availability"
    },
    {
      title: "40% Cost Reduction", 
      description: "Automate repetitive customer service tasks and reduce operational costs while maintaining or improving customer satisfaction scores.",
      icon: DollarSign,
      color: "text-accent-green",
      bgColor: "from-accent-green/10 to-accent-green/5",
      borderColor: "border-accent-green/20",
      stat: "40%",
      statLabel: "Cost Savings"
    },
    {
      title: "15hrs Time Saved",
      description: "Free up valuable time by automating customer interactions, lead qualification, and follow-ups so you can focus on growing your business.",
      icon: Clock,
      color: "text-accent-orange",
      bgColor: "from-accent-orange/10 to-accent-orange/5",
      borderColor: "border-accent-orange/20",
      stat: "15hrs",
      statLabel: "Per Week"
    },
    {
      title: "Smart Lead Capture",
      description: "Intelligently qualify leads and automatically follow up with prospects using AI-powered conversation analysis and personalized messaging.",
      icon: Target,
      color: "text-accent-teal",
      bgColor: "from-accent-teal/10 to-accent-teal/5",
      borderColor: "border-accent-teal/20",
      stat: "3x",
      statLabel: "More Leads"
    },
    {
      title: "Fast & Tailored Setup",
      description: "Custom implementation based on your specific business goals and workflow requirements. Each automation is unique to your business process.",
      icon: Zap,
      color: "text-accent-pink",
      bgColor: "from-accent-pink/10 to-accent-pink/5",
      borderColor: "border-accent-pink/20",
      stat: "Custom",
      statLabel: "Setup"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR readiness, and end-to-end encryption ensures your business and customer data is always protected.",
      icon: Shield,
      color: "text-accent-purple",
      bgColor: "from-accent-purple/10 to-accent-purple/5",
      borderColor: "border-accent-purple/20",
      stat: "99.9%",
      statLabel: "Uptime"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-[hsl(var(--accent-purple))]/8 to-[hsl(var(--accent-green))]/8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-orange/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent"> Grow with AI</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your customer service, boost sales, and scale your business with our comprehensive state-of-the-art automation systems designed specifically for small businesses in Central Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredFeature === index;
            
            return (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-500 group cursor-pointer ${
                  isHovered ? 'scale-105 -translate-y-2' : 'hover:scale-102 hover:-translate-y-1'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Enhanced background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl border ${feature.borderColor} transition-all duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-60'
                }`}></div>
                
                {/* Glowing effect */}
                <GlowingEffect 
                  disabled={!isHovered} 
                  className="opacity-80" 
                  variant="purple" 
                  spread={20} 
                  borderWidth={1} 
                />
                
                <div className="relative z-10">
                  {/* Icon with enhanced styling */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent-purple transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Stat display */}
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-accent-purple transition-all duration-300 ${
                  isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl px-6 py-4 mb-8">
            <Users className="h-5 w-5 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">
              Join growing startups in Central Florida already transforming with AI
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your business? Get a custom quote today and see the difference our state-of-the-art automation systems can make.
          </p>
          
          {/* Free Trial Information */}
          <div className="mb-8 p-4 bg-gradient-to-r from-accent-green/10 to-accent-teal/10 border border-accent-green/20 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-accent-green" />
              <span className="text-sm font-medium text-accent-green">One-Week Free Trial Available</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Try our automation solution for your business free for one week. Fill out the contact form to learn more and get started.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidButton 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto"
            >
              Get Custom Quote
            </LiquidButton>
            <MetalButton 
              variant="primary"
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto"
            >
              Schedule Demo
            </MetalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;