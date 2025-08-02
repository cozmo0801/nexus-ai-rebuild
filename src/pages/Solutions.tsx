import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Puzzle, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      id: "chatbots",
      title: "Smart AI Chatbots",
      subtitle: "Intelligent Customer Engagement",
      description: "Deploy intelligent chatbots that understand context and provide human-like responses, available 24/7 to enhance customer service and support.",
      icon: Bot,
      color: "text-accent-teal",
      features: [
        "Natural Language Processing for human-like conversations",
        "Multi-platform integration (website, social media, apps)",
        "Customizable personality and brand voice",
        "Escalation to human agents when needed",
        "Multilingual support for global customers"
      ],
      metrics: "95% customer satisfaction rate",
      cta: "Request Chatbot Demo"
    },
    {
      id: "automation",
      title: "Sales Automation",
      subtitle: "Intelligent Lead Processing",
      description: "Automate lead qualification and follow-ups to increase conversion rates by up to 40% with timely, personalized customer engagement.",
      icon: TrendingUp,
      color: "text-accent-green",
      features: [
        "Automated lead scoring and qualification",
        "Personalized email sequences and follow-ups",
        "CRM integration and data synchronization",
        "Pipeline management and tracking",
        "Predictive analytics for sales forecasting"
      ],
      metrics: "40% increase in conversion rates",
      cta: "See Sales Results"
    },
    {
      id: "cost-reduction",
      title: "Cost Reduction",
      subtitle: "Optimize Operations & Expenses",
      description: "Reduce customer service costs by up to 60% while improving response times and overall customer satisfaction through intelligent automation.",
      icon: DollarSign,
      color: "text-accent-orange",
      features: [
        "Automated customer support ticket routing",
        "Self-service knowledge base optimization",
        "Reduced need for large support teams",
        "24/7 availability without additional staffing",
        "Detailed cost analysis and reporting"
      ],
      metrics: "60% reduction in support costs",
      cta: "Calculate Savings"
    },
    {
      id: "insights",
      title: "Customer Insights",
      subtitle: "Data-Driven Decision Making",
      description: "Gather valuable data from customer interactions to improve products, services, and business strategies with actionable intelligence.",
      icon: BarChart3,
      color: "text-accent-teal",
      features: [
        "Real-time customer behavior analytics",
        "Sentiment analysis and feedback processing",
        "Custom dashboard and reporting",
        "Trend identification and forecasting",
        "Integration with existing analytics tools"
      ],
      metrics: "3x faster insights generation",
      cta: "View Analytics Demo"
    },
    {
      id: "integration",
      title: "Easy Integration",
      subtitle: "Seamless System Connection",
      description: "One-click integration with your existing website, CRM, and business tools. No technical expertise required for setup and maintenance.",
      icon: Puzzle,
      color: "text-accent-pink",
      features: [
        "Pre-built integrations for popular platforms",
        "API connectivity for custom systems",
        "White-label solutions available",
        "Guided setup with dedicated support",
        "Regular updates and maintenance included"
      ],
      metrics: "Setup complete in under 30 minutes",
      cta: "Start Integration"
    },
    {
      id: "security",
      title: "Enterprise Security",
      subtitle: "Bank-Level Data Protection",
      description: "Bank-level security with SOC 2 compliance ensures your business and customer data is always protected with industry-leading standards.",
      icon: Shield,
      color: "text-accent-purple",
      features: [
        "SOC 2 Type II compliance certification",
        "End-to-end encryption for all data",
        "Regular security audits and penetration testing",
        "GDPR and CCPA compliance built-in",
        "24/7 security monitoring and threat detection"
      ],
      metrics: "99.9% uptime guarantee",
      cta: "Security Overview"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Solutions Overview Header */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
              Our AI Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive AI-powered tools designed to transform your business operations, 
              enhance customer experience, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Solution Sections */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={solution.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                >
                  {/* Content Side */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-glass ${solution.color} shadow-inner`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
                        <p className="text-lg text-accent-teal">{solution.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent-green mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="glass-card rounded-2xl p-6 border border-glass backdrop-blur-glass">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/70 mb-1">Proven Results</p>
                          <p className="text-2xl font-bold text-white">{solution.metrics}</p>
                        </div>
                        <Button variant="hero" size="lg" className="group">
                          <span className="relative z-10">{solution.cta}</span>
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Side */}
                  <div className="flex-1">
                    <div className="glass-card rounded-3xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 group border border-glass backdrop-blur-glass">
                      <div className="text-center space-y-6">
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-glass ${solution.color} group-hover:scale-110 transition-transform shadow-inner mx-auto`}>
                          <IconComponent className="h-12 w-12" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent-teal transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                          Experience the power of AI-driven {solution.title.toLowerCase()} 
                          that adapts to your business needs and scales with your growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let's discuss how these AI solutions can be customized for your specific business needs 
              and start your journey towards intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;