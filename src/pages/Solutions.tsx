import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MotionBubbles from "@/components/MotionBubbles";
import {
  Bot,
  TrendingUp,
  DollarSign,
  BarChart3,
  Puzzle,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Target,
  Users,
  Clock,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: "chatbots",
      title: "Smart AI Chatbots",
      subtitle: "Intelligent Customer Engagement",
      description:
        "Deploy intelligent chatbots that understand context and provide human-like responses, available 24/7 to enhance customer service and support.",
      icon: Bot,
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      borderColor: "border-accent-teal/20",
      features: [
        "Natural Language Processing for human-like conversations",
        "Multi-platform integration (website, social media, apps)",
        "Customizable personality and brand voice",
        "Escalation to human agents when needed",
        "Multilingual support for global customers",
      ],
      metrics: "95% customer satisfaction rate",
      cta: "Request Chatbot Demo",
      benefits: ["24/7 Availability", "Instant Responses", "Cost Effective"],
      stats: {
        value: "95%",
        label: "Customer Satisfaction",
        trend: "+15%",
        trendLabel: "vs Traditional Support"
      }
    },
    {
      id: "automation",
      title: "Sales Automation",
      subtitle: "Intelligent Lead Processing",
      description:
        "Automate lead qualification and follow-ups to increase conversion rates by up to 40% with timely, personalized customer engagement.",
      icon: TrendingUp,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      borderColor: "border-accent-green/20",
      features: [
        "Automated lead scoring and qualification",
        "Personalized email sequences and follow-ups",
        "CRM integration and data synchronization",
        "Pipeline management and tracking",
        "Predictive analytics for sales forecasting",
      ],
      metrics: "40% increase in conversion rates",
      cta: "See Sales Results",
      benefits: ["Higher Conversions", "Faster Follow-ups", "Better ROI"],
      stats: {
        value: "40%",
        label: "Conversion Increase",
        trend: "+25%",
        trendLabel: "vs Manual Process"
      }
    },
    {
      id: "cost-reduction",
      title: "Cost Reduction",
      subtitle: "Optimize Operations & Expenses",
      description:
        "Reduce customer service costs by up to 40% while improving response times and overall customer satisfaction through intelligent automation.",
      icon: DollarSign,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
      borderColor: "border-accent-orange/20",
      features: [
        "Automated customer support ticket routing",
        "Self-service knowledge base optimization",
        "Reduced need for large support teams",
        "24/7 availability without additional staffing",
        "Detailed cost analysis and reporting",
      ],
      metrics: "40% reduction in support costs",
      cta: "Calculate Savings",
      benefits: ["Lower Costs", "Higher Efficiency", "Better Margins"],
      stats: {
        value: "40%",
        label: "Cost Reduction",
        trend: "-$50K",
        trendLabel: "Annual Savings"
      }
    },
    {
      id: "insights",
      title: "Customer Insights",
      subtitle: "Data-Driven Decision Making",
      description:
        "Gather valuable data from customer interactions to improve products, services, and business strategies with actionable intelligence.",
      icon: BarChart3,
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      borderColor: "border-accent-teal/20",
      features: [
        "Real-time customer behavior analytics",
        "Sentiment analysis and feedback processing",
        "Custom dashboard and reporting",
        "Trend identification and forecasting",
        "Integration with existing analytics tools",
      ],
      metrics: "3x faster insights generation",
      cta: "View Analytics Demo",
      benefits: ["Real-time Data", "Actionable Insights", "Better Decisions"],
      stats: {
        value: "3x",
        label: "Faster Insights",
        trend: "+200%",
        trendLabel: "vs Manual Analysis"
      }
    },
    {
      id: "integration",
      title: "Custom Integration",
      subtitle: "Tailored System Connection",
      description:
        "Custom implementation based on your specific business goals and workflow requirements. Each automation is unique to your business process.",
      icon: Puzzle,
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10",
      borderColor: "border-accent-pink/20",
      features: [
        "Pre-built integrations for popular platforms",
        "API connectivity for custom systems",
        "White-label solutions available",
        "Guided setup with dedicated support",
        "Regular updates and maintenance included",
      ],
      metrics: "Custom setup tailored to your needs",
      cta: "Start Integration",
      benefits: ["Custom Setup", "No Coding", "Seamless"],
      stats: {
        value: "Custom",
        label: "Setup Process",
        trend: "-90%",
        trendLabel: "vs Custom Development"
      }
    },
    {
      id: "security",
      title: "Enterprise Security",
      subtitle: "Bank-Level Data Protection",
      description:
        "Bank-level security with SOC 2 compliance ensures your business and customer data is always protected with industry-leading standards.",
      icon: Shield,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      borderColor: "border-accent-purple/20",
      features: [
        "SOC 2 Type II compliance certification",
        "End-to-end encryption for all data",
        "Regular security audits and penetration testing",
        "GDPR and CCPA compliance built-in",
        "24/7 security monitoring and threat detection",
      ],
      metrics: "99.9% uptime guarantee",
      cta: "Security Overview",
      benefits: ["Bank-Level Security", "Compliance Ready", "Always Protected"],
      stats: {
        value: "99.9%",
        label: "Uptime Guarantee",
        trend: "+0.5%",
        trendLabel: "vs Industry Average"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

                   {/* Enhanced Solutions Overview Header */}
             <section className="pt-24 pb-16 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-accent-purple/5 to-accent-green/5" />
               <MotionBubbles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-teal/10 border border-accent-teal/20 rounded-full text-accent-teal text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                State-of-the-Art Automation Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal via-accent-purple to-accent-green bg-clip-text text-transparent animate-gradient">
                Our AI Solutions
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
                  <span>6 Core Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-orange" />
                  <span>Custom Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent-purple" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Individual Solution Sections */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={solution.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Enhanced Content Side */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-glass ${solution.color} shadow-inner hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground group-hover:text-accent-teal transition-colors">
                          {solution.title}
                        </h2>
                        <p className="text-lg text-accent-teal font-medium">
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Enhanced Benefits Display */}
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-sm text-muted-foreground hover:bg-accent-teal/10 hover:border-accent-teal/20 hover:text-accent-teal transition-all duration-300"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Features List */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Target className="h-5 w-5 text-accent-purple" />
                        Key Features:
                      </h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3 group"
                            onMouseEnter={() => setHoveredFeature(`${solution.id}-${featureIndex}`)}
                            onMouseLeave={() => setHoveredFeature(null)}
                          >
                            <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                              hoveredFeature === `${solution.id}-${featureIndex}` 
                                ? 'text-accent-green scale-110' 
                                : 'text-accent-green'
                            }`} />
                            <span className={`text-muted-foreground transition-colors duration-300 ${
                              hoveredFeature === `${solution.id}-${featureIndex}` 
                                ? 'text-foreground' 
                                : ''
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced Metrics Card */}
                    <div className={`glass-card rounded-2xl p-6 border ${solution.borderColor} backdrop-blur-glass hover:shadow-glow transition-all duration-500 hover:-translate-y-1`}>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Proven Results
                          </p>
                          <div className="flex items-baseline gap-2">
                            <p className="text-3xl font-bold text-foreground">
                              {solution.stats.value}
                            </p>
                            <span className="text-sm text-accent-green font-medium">
                              {solution.stats.trend}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {solution.stats.label}
                          </p>
                          <p className="text-xs text-accent-green">
                            {solution.stats.trendLabel}
                          </p>
                        </div>
                        <Button 
                          variant="hero" 
                          size="lg" 
                          className="group hover:scale-105 transition-transform"
                          onMouseEnter={() => setActiveSolution(solution.id)}
                          onMouseLeave={() => setActiveSolution(null)}
                        >
                          <span className="relative z-10">{solution.cta}</span>
                          <ArrowRight className={`h-5 w-5 ml-2 transition-all duration-300 ${
                            activeSolution === solution.id ? 'translate-x-1' : ''
                          }`} />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Visual Side */}
                  <div className="flex-1">
                    <div 
                      className={`glass-card rounded-3xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 group border ${solution.borderColor} backdrop-blur-glass relative overflow-hidden`}
                      onMouseEnter={() => setActiveSolution(solution.id)}
                      onMouseLeave={() => setActiveSolution(null)}
                    >
                      {/* Animated background elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-teal/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="text-center space-y-6 relative z-10">
                        <div
                          className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-glass ${solution.color} group-hover:scale-110 transition-transform duration-500 shadow-inner mx-auto`}
                        >
                          <IconComponent className="h-12 w-12" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-teal transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          Experience the power of AI-driven{" "}
                          {solution.title.toLowerCase()} that adapts to your
                          business needs and scales with your growth.
                        </p>
                        
                        {/* Interactive elements */}
                        <div className="flex justify-center gap-4 pt-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Zap className="h-4 w-4 text-accent-orange" />
                            <span>AI-Powered</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-accent-green" />
                            <span>Scalable</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

                   {/* Enhanced Ready to Get Started Section */}
             <section className="py-20 bg-gradient-to-b from-accent-purple/6 via-accent-teal/6 to-accent-green/6 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-green/5" />
               <MotionBubbles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let&apos;s discuss how these state-of-the-art automation solutions can be customized for
              your specific business needs in Central Florida and start your journey towards
              intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto group hover:scale-105 transition-transform"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10">Get Custom Quote</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                className="w-full sm:w-auto hover:scale-105 transition-transform"
                onClick={() => (window.location.href = "/contact")}
              >
                Schedule Consultation
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by growing startups in Central Florida</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent-green" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent-orange" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent-purple" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;