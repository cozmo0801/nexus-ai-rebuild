import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MotionBubbles from "@/components/MotionBubbles";
import { 
  DollarSign, 
  Target, 
  TrendingUp, 
  Shield, 
  Search,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Star,
  Filter,
  X,
  HelpCircle,
  BookOpen,
  Users,
  Settings,
  CreditCard,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "general", name: "General", icon: HelpCircle, color: "text-accent-teal", bgColor: "bg-accent-teal/10" },
    { id: "technical", name: "Technical", icon: Settings, color: "text-accent-purple", bgColor: "bg-accent-purple/10" },
    { id: "billing", name: "Billing", icon: CreditCard, color: "text-accent-orange", bgColor: "bg-accent-orange/10" },
    { id: "integration", name: "Integration", icon: Globe, color: "text-accent-green", bgColor: "bg-accent-green/10" },
    { id: "support", name: "Support", icon: Users, color: "text-accent-pink", bgColor: "bg-accent-pink/10" },
  ];

  const faqItems = [
    {
      id: "roi",
      question: "What kind of ROI can I expect from AI automation?",
      answer: "Most businesses see a return on investment within 3-6 months. Our clients typically experience: 40% reduction in customer service costs, 60% faster response times, 25% increase in lead conversion rates, and 15 hours per week saved on repetitive tasks. The exact ROI depends on your business size and implementation scope, but we provide detailed projections during our consultation.",
      icon: DollarSign,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      category: "general",
      popular: true,
      tags: ["ROI", "Cost Savings", "Efficiency"]
    },
    {
      id: "technical",
      question: "Do I need technical knowledge to manage the AI systems?",
      answer: "Not at all! Our AI solutions are designed for business owners, not developers. We provide: Complete setup and configuration by our team, intuitive dashboard for monitoring and adjustments, 24/7 technical support, regular training sessions, and detailed documentation. Most clients are fully comfortable managing their AI systems within the first week.",
      icon: Target,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
      category: "technical",
      popular: true,
      tags: ["Setup", "Training", "Support"]
    },
    {
      id: "lead-generation",
      question: "How does AI help with lead generation and sales?",
      answer: "AI transforms your lead generation through: Intelligent chatbots that qualify leads 24/7, automated follow-up sequences based on customer behavior, predictive analytics to identify high-value prospects, personalized content recommendations, and smart scheduling for sales calls. Our clients see an average 40% increase in qualified leads within the first 90 days.",
      icon: TrendingUp,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      category: "general",
      popular: true,
      tags: ["Lead Generation", "Sales", "Automation"]
    },
    {
      id: "security",
      question: "Is my customer data secure with your AI platform?",
      answer: "Absolutely. Security is our top priority: SOC 2 Type II compliance certification, end-to-end encryption for all data transmissions, GDPR and CCPA compliance built-in, regular security audits and penetration testing, 99.9% uptime guarantee with redundant systems, and 24/7 security monitoring. Your data is more secure with us than most traditional systems.",
      icon: Shield,
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10",
      category: "technical",
      popular: true,
      tags: ["Security", "Compliance", "Privacy"]
    },
    {
      id: "implementation",
      question: "How long does implementation take?",
      answer: "Most implementations are completed within 2-4 weeks. Simple chatbot setups can be live within 48 hours, while comprehensive automation suites may take 3-4 weeks for full deployment. We provide a detailed timeline during onboarding and keep you updated on progress throughout the process.",
      icon: Clock,
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      category: "technical",
      popular: false,
      tags: ["Implementation", "Timeline", "Onboarding"]
    },
    {
      id: "integration",
      question: "Can AI integrate with my existing CRM and tools?",
      answer: "Yes! We support integration with 200+ popular business tools including Salesforce, HubSpot, Pipedrive, Slack, Microsoft Teams, Shopify, and many more. Custom integrations are also available. Our team handles all the technical setup, so you can focus on your business while we ensure everything works seamlessly together.",
      icon: Globe,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      category: "integration",
      popular: false,
      tags: ["Integration", "CRM", "Tools"]
    },
    {
      id: "industries",
      question: "What industries do you serve?",
      answer: "We work with businesses across all industries, with particular expertise in e-commerce, professional services, healthcare, real estate, manufacturing, and SaaS companies. Our AI solutions are adaptable to any business model and can be customized to meet industry-specific requirements and compliance needs.",
      icon: Building,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      category: "general",
      popular: false,
      tags: ["Industries", "Customization", "Compliance"]
    },
    {
      id: "support",
      question: "What's included in your support?",
      answer: "All plans include: 24/7 technical support, regular system updates, performance monitoring, monthly optimization reviews, and access to our knowledge base and training materials. Enterprise plans also include dedicated account managers, priority support, and custom training sessions for your team.",
      icon: Users,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
      category: "support",
      popular: false,
      tags: ["Support", "Training", "Updates"]
    },
    {
      id: "customization",
      question: "Can I customize the AI's responses and behavior?",
      answer: "Absolutely! You have full control over your AI's personality, responses, escalation rules, and conversation flows. We help you train the AI to match your brand voice perfectly. You can also create custom workflows, set specific business rules, and adjust the AI's decision-making parameters to align with your business processes.",
      icon: Settings,
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      category: "technical",
      popular: false,
      tags: ["Customization", "Brand Voice", "Workflows"]
    },
    {
      id: "cancellation",
      question: "What happens if I want to cancel?",
      answer: "No long-term contracts required. You can cancel anytime with 30 days notice. We'll help you export your data and ensure a smooth transition. We believe in earning your business every day, so there are no hidden fees or penalties for cancellation.",
      icon: CreditCard,
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10",
      category: "billing",
      popular: false,
      tags: ["Billing", "Cancellation", "Data Export"]
    },
    {
      id: "pricing",
      question: "How does your pricing work?",
      answer: "We offer transparent, usage-based pricing with no hidden fees. Plans start at $99/month for small businesses and scale based on your needs. Enterprise plans are custom-priced based on your specific requirements. We also offer a 30-day free trial so you can experience the full value before committing.",
      icon: DollarSign,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      category: "billing",
      popular: false,
      tags: ["Pricing", "Plans", "Free Trial"]
    },
    {
      id: "updates",
      question: "How often do you release updates?",
      answer: "We release major updates every quarter and minor improvements weekly. All updates are included in your subscription at no additional cost. We also provide advance notice of major changes and offer training sessions to help you take advantage of new features.",
      icon: Zap,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      category: "technical",
      popular: false,
      tags: ["Updates", "Features", "Training"]
    }
  ];

  const filteredFAQs = faqItems.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqItems.filter(faq => faq.popular);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory(null);
  };

  const hasActiveFilters = searchTerm !== "" || activeCategory !== null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

                   {/* Enhanced FAQ Header */}
             <section className="pt-24 pb-16 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-accent-purple/5 to-accent-green/5" />
               <MotionBubbles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-teal/10 border border-accent-teal/20 rounded-full text-accent-teal text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Frequently Asked Questions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal via-accent-purple to-accent-green bg-clip-text text-transparent animate-gradient">
                How Can We Help?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Find answers to common questions about NexusCore AI. Can't find what you're looking for?
                Our support team is here to help 24/7.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-green" />
                  <span>12 Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-orange" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent-purple" />
                  <span>Expert Answers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions, answers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground focus:border-accent-teal/50 focus:shadow-glow transition-all duration-300"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-accent-teal/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                variant={activeCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(null)}
                className={`transition-all duration-300 ${
                  activeCategory === null 
                    ? 'bg-accent-teal text-white border-accent-teal hover:bg-accent-teal/90' 
                    : 'hover:bg-accent-teal/10 hover:border-accent-teal/30'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                All Categories
              </Button>
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className={`transition-all duration-300 ${
                      activeCategory === category.id 
                        ? `${category.bgColor} ${category.color} border-current` 
                        : `hover:${category.bgColor} hover:${category.color} hover:border-current/30`
                    }`}
                  >
                    <IconComponent className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                      hoveredCategory === category.id ? 'scale-110' : ''
                    }`} />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex items-center gap-3 mb-6 p-3 bg-secondary/30 border border-border rounded-lg">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-teal/10 border border-accent-teal/20 rounded-full text-sm text-accent-teal">
                    Search: "{searchTerm}"
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchTerm("")}
                      className="h-4 w-4 p-0 hover:bg-accent-teal/20"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </span>
                )}
                {activeCategory && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-sm text-accent-purple">
                    Category: {categories.find(c => c.id === activeCategory)?.name}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveCategory(null)}
                      className="h-4 w-4 p-0 hover:bg-accent-purple/20"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </Button>
              </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-muted-foreground mb-6">
              {filteredFAQs.length === 0 ? (
                <span>No questions found matching your criteria.</span>
              ) : (
                <span>Showing {filteredFAQs.length} of {faqItems.length} questions</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Popular Questions Section */}
            {!hasActiveFilters && (
              <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6 text-accent-purple" />
                  Most Popular Questions
                </h2>
                <div className="space-y-4">
                  {popularFAQs.map((faq, index) => {
                    const IconComponent = faq.icon;
                    return (
                      <div
                        key={faq.id}
                        className="glass-card rounded-xl border border-glass backdrop-blur-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${faq.bgColor} ${faq.color} flex-shrink-0`}>
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {faq.question}
                                </h3>
                                <span className="px-2 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-xs text-accent-purple font-medium">
                                  Popular
                                </span>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {faq.tags.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-secondary/50 border border-border rounded-full text-xs text-muted-foreground"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Questions Section */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-accent-teal" />
                {hasActiveFilters ? 'Search Results' : 'All Questions'}
              </h2>
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => {
                  const IconComponent = faq.icon;
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={faq.id}
                      className={`glass-card rounded-xl border border-glass backdrop-blur-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1 ${
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
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="capitalize">{categories.find(c => c.id === faq.category)?.name}</span>
                              {faq.popular && (
                                <span className="px-2 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-xs text-accent-purple font-medium">
                                  Popular
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <div className="pt-4 border-t border-border/50">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {faq.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-secondary/50 border border-border rounded-full text-xs text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* No Results State */}
              {filteredFAQs.length === 0 && hasActiveFilters && (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No questions found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or category filters.
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="hover:bg-accent-teal/10 hover:border-accent-teal/30"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
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
              you 24/7 with personalized assistance.
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
                onClick={() => (window.location.href = "/get-started")}
              >
                Start Free Trial
              </Button>
            </div>
            
            {/* Support options */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <MessageSquare className="h-5 w-5 text-accent-teal" />
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