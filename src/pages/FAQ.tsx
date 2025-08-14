import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MotionBubbles from "@/components/MotionBubbles";
import { 
  DollarSign, 
  Target, 
  TrendingUp, 
  Shield, 
  ChevronDown,
  MessageCircle,
  Clock,
  Star,
  HelpCircle,
  Users,
  Settings,
  CreditCard,
  Globe,
  Building
} from "lucide-react";
import { useState, useEffect } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqItems = [
    {
      id: "roi",
      question: "What kind of ROI can I expect from AI automation?",
      answer: "Most businesses see a return on investment within 3-6 months. Our clients typically experience: 40% reduction in customer service costs, 60% faster response times, 25% increase in lead conversion rates, and 15 hours per week saved on repetitive tasks. The exact ROI depends on your business size and implementation scope, but we provide detailed projections during our consultation.",
      icon: DollarSign,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      popular: true
    },
    {
      id: "technical",
      question: "Do I need technical knowledge to manage the AI systems?",
      answer: "Not at all! Our state-of-the-art automation systems are designed for business owners, not developers. We provide: Complete setup and configuration by our team, intuitive dashboard for monitoring and adjustments, 24/7 technical support, regular training sessions, and detailed documentation. Most clients are fully comfortable managing their AI systems within the first week.",
      icon: Target,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
      popular: true
    },
    {
      id: "lead-generation",
      question: "How does AI help with lead generation and sales?",
      answer: "AI transforms your lead generation through: Intelligent chatbots that qualify leads 24/7, automated follow-up sequences based on customer behavior, predictive analytics to identify high-value prospects, personalized content recommendations, and smart scheduling for sales calls. Our clients see an average 40% increase in qualified leads within the first 90 days.",
      icon: TrendingUp,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      popular: true
    },
    {
      id: "security",
      question: "Is my customer data secure with your AI platform?",
      answer: "Absolutely. Security is our top priority: SOC 2 Type II compliance certification, end-to-end encryption for all data transmissions, GDPR and CCPA compliance built-in, regular security audits and penetration testing, 99.9% uptime guarantee with redundant systems, and 24/7 security monitoring. Your data is more secure with us than most traditional systems.",
      icon: Shield,
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10",
      popular: true
    },
    {
      id: "implementation",
      question: "How long does implementation take?",
      answer: "Implementation time varies based on your business complexity and automation needs. Simple chatbot setups can be live within 48 hours, while comprehensive automation suites may take 2-4 weeks for full deployment. Each solution is customized to your specific business goals, so we provide a detailed timeline during onboarding and keep you updated on progress throughout the process.",
      icon: Clock,
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      popular: false
    },
    {
      id: "integration",
      question: "Can AI integrate with my existing CRM and tools?",
      answer: "Yes! We support integration with 200+ popular business tools including Salesforce, HubSpot, Pipedrive, Slack, Microsoft Teams, Shopify, and many more. Custom integrations are also available. Our team handles all the technical setup, so you can focus on your business while we ensure everything works seamlessly together.",
      icon: Globe,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      popular: false
    },
    {
      id: "pricing",
      question: "How does your pricing work?",
      answer: "We offer transparent, custom pricing tailored to meet your specific business needs. Our plans start at $150/month and scale based on your requirements and usage. As a startup focused on Central Florida businesses, we work closely with each client to create a pricing structure that fits your budget and goals. We also offer flexible payment terms and a consultation to discuss your specific needs.",
      icon: DollarSign,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      popular: true
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="h-4 w-4 text-accent-purple" />
              <span className="text-sm font-medium text-foreground">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent"> Know</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about NexusCore AI. Can't find what you're looking for? 
              Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Popular Questions Section */}
            <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Star className="h-6 w-6 text-accent-purple" />
                Most Popular Questions
              </h2>
              <div className="space-y-4">
                {faqItems.filter(faq => faq.popular).map((faq, index) => {
                  const IconComponent = faq.icon;
                  return (
                    <div
                      key={faq.id}
                      className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${faq.bgColor} ${faq.color} flex-shrink-0`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-purple transition-colors">
                            {faq.question}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* All Questions Section */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-accent-teal" />
                All Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => {
                  const IconComponent = faq.icon;
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.id}
                      className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                        isOpen ? 'ring-2 ring-accent-teal/20' : ''
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent-teal/20 focus:ring-offset-2 rounded-xl"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${faq.bgColor} ${faq.color} flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'scale-110' : ''
                          }`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold text-foreground pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`} />
                            </div>
                            {faq.popular && (
                              <span className="inline-block px-2 py-1 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-xs text-accent-orange font-medium">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <div className="pt-4 border-t border-border/50">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-b from-accent-purple/6 via-accent-teal/6 to-accent-green/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-green/5" />
        <MotionBubbles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our expert support team is here to help
              you with personalized assistance and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto group hover:scale-105 transition-transform"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10">Contact Support</span>
                <MessageCircle className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                className="w-full sm:w-auto hover:scale-105 transition-transform"
                onClick={() => (window.location.href = "/contact")}
              >
                Get Custom Quote
              </Button>
            </div>
            
            {/* Support options */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <MessageCircle className="h-5 w-5 text-accent-teal" />
                  <span className="text-sm text-muted-foreground">Live Chat Available</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Clock className="h-5 w-5 text-accent-orange" />
                  <span className="text-sm text-muted-foreground">2hr Response Time</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Users className="h-5 w-5 text-accent-purple" />
                  <span className="text-sm text-muted-foreground">Expert Team</span>
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

export default FAQ;