import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DollarSign, 
  Target, 
  TrendingUp, 
  Shield, 
  Search,
  ChevronDown,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      id: "roi",
      question: "What kind of ROI can I expect from AI automation?",
      answer: "Most businesses see a return on investment within 3-6 months. Our clients typically experience: 40% reduction in customer service costs, 60% faster response times, 25% increase in lead conversion rates, and 15 hours per week saved on repetitive tasks. The exact ROI depends on your business size and implementation scope, but we provide detailed projections during our consultation.",
      icon: DollarSign,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10"
    },
    {
      id: "technical",
      question: "Do I need technical knowledge to manage the AI systems?",
      answer: "Not at all! Our AI solutions are designed for business owners, not developers. We provide: Complete setup and configuration by our team, intuitive dashboard for monitoring and adjustments, 24/7 technical support, regular training sessions, and detailed documentation. Most clients are fully comfortable managing their AI systems within the first week.",
      icon: Target,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    },
    {
      id: "lead-generation",
      question: "How does AI help with lead generation and sales?",
      answer: "AI transforms your lead generation through: Intelligent chatbots that qualify leads 24/7, automated follow-up sequences based on customer behavior, predictive analytics to identify high-value prospects, personalized content recommendations, and smart scheduling for sales calls. Our clients see an average 40% increase in qualified leads within the first 90 days.",
      icon: TrendingUp,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10"
    },
    {
      id: "security",
      question: "Is my customer data secure with your AI platform?",
      answer: "Absolutely. Security is our top priority: SOC 2 Type II compliance certification, end-to-end encryption for all data transmissions, GDPR and CCPA compliance built-in, regular security audits and penetration testing, 99.9% uptime guarantee with redundant systems, and 24/7 security monitoring. Your data is more secure with us than most traditional systems.",
      icon: Shield,
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10"
    }
  ];

  const additionalFAQs = [
    {
      question: "How long does implementation take?",
      answer: "Most implementations are completed within 2-4 weeks. Simple chatbot setups can be live within 48 hours, while comprehensive automation suites may take 3-4 weeks for full deployment.",
      category: "Implementation"
    },
    {
      question: "Can AI integrate with my existing CRM and tools?",
      answer: "Yes! We support integration with 200+ popular business tools including Salesforce, HubSpot, Pipedrive, Slack, Microsoft Teams, Shopify, and many more. Custom integrations are also available.",
      category: "Integration"
    },
    {
      question: "What industries do you serve?",
      answer: "We work with businesses across all industries, with particular expertise in e-commerce, professional services, healthcare, real estate, manufacturing, and SaaS companies.",
      category: "General"
    },
    {
      question: "What's included in your support?",
      answer: "All plans include: 24/7 technical support, regular system updates, performance monitoring, monthly optimization reviews, and access to our knowledge base and training materials.",
      category: "Support"
    },
    {
      question: "Can I customize the AI's responses and behavior?",
      answer: "Absolutely! You have full control over your AI's personality, responses, escalation rules, and conversation flows. We help you train the AI to match your brand voice perfectly.",
      category: "Customization"
    },
    {
      question: "What happens if I want to cancel?",
      answer: "No long-term contracts required. You can cancel anytime with 30 days notice. We'll help you export your data and ensure a smooth transition.",
      category: "Billing"
    }
  ];

  const filteredFAQs = additionalFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* FAQ Header */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about AI automation for your business. 
              Can't find what you're looking for? Contact our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 bg-secondary/50 border-glass text-white placeholder:text-muted-foreground text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Items */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Top Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.id}
                    className={`glass-card rounded-3xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-105 group border border-glass backdrop-blur-glass ${item.bgColor}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-glass ${item.color} shadow-inner flex-shrink-0`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-teal transition-colors leading-tight">
                        {item.question}
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/95 transition-colors">
                      {item.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional FAQs */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">More Questions</h2>
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl border border-glass backdrop-blur-glass overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {faq.question}
                      </h3>
                      <span className="text-sm text-accent-teal font-medium">
                        {faq.category}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {filteredFAQs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No FAQs found matching "{searchTerm}". Try a different search term or contact us directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-b from-[hsl(var(--accent-purple))]/6 to-[hsl(var(--accent-green))]/6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-12 border border-glass backdrop-blur-glass">
              <MessageCircle className="h-16 w-16 text-accent-teal mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team of AI experts is here to help. Get personalized answers to your specific 
                questions about implementing AI automation in your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                  <span className="relative z-10">Contact Our Team</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
                  Schedule a Call
                </Button>
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