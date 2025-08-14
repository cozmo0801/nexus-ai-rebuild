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
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare,
  Settings,
  Cpu,
  Database,
  Globe,
  Lock,
  Headphones,
  Rocket,
  Award
} from "lucide-react";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import Navigation from "@/components/Navigation";
import GlowingEffect from "@/components/ui/glowing-effect";

const Solutions = () => {
  const currentYear = new Date().getFullYear();

  // Custom features for NexusCore AI
  const customFeatures = [
    {
      title: "24/7 AI Support",
      description: "Intelligent chatbots that never sleep, providing instant customer support around the clock.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Smart Lead Capture",
      description: "Automatically capture and qualify leads from your website, social media, and other channels.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing CRM, email, and business tools for maximum efficiency.",
      icon: <Puzzle className="h-6 w-6" />,
    },
    {
      title: "Local Expertise",
      description: "Built specifically for Central Florida businesses with deep understanding of local market needs.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security with SOC 2 compliance and GDPR readiness for your peace of mind.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined setup process tailored to your business.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "Cost Reduction",
      description: "Reduce customer service costs by up to 40% while improving response times and satisfaction.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Scalable Growth",
      description: "Grow your business without growing your team - our AI scales with your business needs.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  // Industry solutions
  const industrySolutions = [
    {
      title: "Real Estate",
      description: "Automate lead qualification, property inquiries, and client follow-ups 24/7.",
      icon: "🏠",
      benefits: ["Lead Qualification", "Property Showings", "Client Communication", "Market Updates"]
    },
    {
      title: "Tourism & Hospitality",
      description: "Handle bookings, reservations, and customer inquiries automatically with intelligent responses.",
      icon: "✈️",
      benefits: ["Booking Management", "Customer Support", "Local Recommendations", "Availability Updates"]
    },
    {
      title: "Healthcare",
      description: "Streamline appointment scheduling, patient communications, and administrative tasks.",
      icon: "🏥",
      benefits: ["Appointment Booking", "Patient Reminders", "Insurance Verification", "Follow-up Care"]
    },
    {
      title: "Professional Services",
      description: "Automate client intake, project updates, and service inquiries for better client relationships.",
      icon: "💼",
      benefits: ["Client Intake", "Project Updates", "Billing Inquiries", "Service Scheduling"]
    },
    {
      title: "Retail",
      description: "Enhance customer experience with instant product information, order tracking, and support.",
      icon: "🛍️",
      benefits: ["Product Information", "Order Tracking", "Customer Support", "Inventory Updates"]
    }
  ];

  // Key metrics
  const metrics = [
    {
      value: "40%",
      label: "Cost Reduction",
      description: "Reduce customer service costs while maintaining quality"
    },
    {
      value: "15hrs",
      label: "Time Saved",
      description: "Save hours per week on repetitive tasks"
    },
    {
      value: "24/7",
      label: "Availability",
      description: "Never miss a customer inquiry again"
    },
    {
      value: "98.5%",
      label: "Satisfaction",
      description: "Improve customer satisfaction scores"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl px-6 py-4 mb-8">
              <Zap className="h-5 w-5 text-accent-purple" />
              <span className="text-sm font-medium text-foreground">
                State-of-the-Art Automation Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
              Transform Your Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive state-of-the-art automation systems designed to transform your business
              operations, enhance customer experience, and drive sustainable
              growth in Central Florida.
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
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-green" />
                <span>Custom automation solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-green" />
                <span>Central Florida focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-green" />
                <span>Fast implementation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-teal mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored automation solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-card border rounded-2xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent-green" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid with Hover Effects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose NexusCore AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the key features that make our automation solutions the perfect choice for growing Central Florida businesses.
            </p>
          </div>
          
          <div className="bg-card border rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto">
            <FeaturesSectionWithHoverEffects />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl px-6 py-4 mb-8">
              <Users className="h-5 w-5 text-accent-purple" />
              <span className="text-sm font-medium text-foreground">
                Trusted by growing startups in Central Florida
              </span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how these state-of-the-art automation solutions can be customized for
              your specific business needs in Central Florida and start your journey towards
              sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LiquidButton 
                size="lg"
                onClick={() => (window.location.href = "/contact")}
                className="w-full sm:w-auto"
              >
                <span className="relative z-10">Get Custom Quote</span>
              </LiquidButton>
              <MetalButton 
                variant="success"
                onClick={() => (window.location.href = "/contact")}
                className="w-full sm:w-auto"
              >
                <span className="relative z-10">Schedule Consultation</span>
              </MetalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Trusted by growing startups in Central Florida</p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span className="text-sm">GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Local Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;