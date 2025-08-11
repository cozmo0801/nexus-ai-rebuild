import { 
  Bot, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Puzzle, 
  Shield 
} from "lucide-react";
import GlowingEffect from "@/components/ui/glowing-effect";

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart AI Chatbots",
      description: "Deploy intelligent chatbots that understand context and provide human-like responses, available 24/7 to enhance customer service.",
      icon: Bot,
      color: "text-accent-purple"
    },
    {
      title: "Sales Automation", 
      description: "Automate lead qualification and follow-ups to increase conversion rates by up to 40% with timely customer engagement.",
      icon: TrendingUp,
      color: "text-accent-green"
    },
    {
      title: "Cost Reduction",
      description: "Reduce customer service costs by up to 60% while improving response times and overall customer satisfaction.",
      icon: DollarSign,
      color: "text-accent-orange"
    },
    {
      title: "Customer Insights",
      description: "Gather valuable data from customer interactions to improve products, services, and business strategies.",
      icon: BarChart3,
      color: "text-accent-teal"
    },
    {
      title: "Easy Integration",
      description: "One-click integration with your existing website, CRM, and business tools. No technical expertise required.",
      icon: Puzzle,
      color: "text-accent-pink"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance ensures your business and customer data is always protected.",
      icon: Shield,
      color: "text-accent-purple"
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to automate customer interactions and grow your business with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
            <div 
              key={index}
              className="relative glass-card rounded-3xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group border border-glass backdrop-blur-glass"
            >
              <GlowingEffect disabled className="opacity-60" variant="purple" spread={18} borderWidth={1} />
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-glass mb-4 ${feature.color} group-hover:scale-110 transition-transform shadow-inner`}>
                <IconComponent className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                {feature.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;