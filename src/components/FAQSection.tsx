import { useState } from "react";
import { ChevronDown, Search, MessageCircle, Zap, Shield, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Questions", icon: MessageCircle, count: 12 },
    { id: "getting-started", label: "Getting Started", icon: Zap, count: 4 },
    { id: "features", label: "Features", icon: Shield, count: 5 },
    { id: "billing", label: "Billing & Plans", icon: Clock, count: 3 }
  ];

  const faqs = [
    {
      id: 1,
      question: "How quickly can I get started with NexusCore AI?",
      answer: "You can be up and running in under 5 minutes! Our one-click integration works with most websites and requires no technical expertise. Simply add your website URL, customize your AI assistant, and you're ready to go.",
      category: "getting-started",
      popular: true
    },
    {
      id: 2,
      question: "What makes your AI different from other chatbot solutions?",
      answer: "Our AI is specifically trained on business conversations and understands context better than generic chatbots. It can handle complex queries, remember conversation history, and provide personalized responses that actually help close sales.",
      category: "features",
      popular: true
    },
    {
      id: 3,
      question: "How much does NexusCore AI cost?",
      answer: "We offer flexible pricing starting at just $29/month for small businesses. Our plans scale with your needs, and we offer a 30-day free trial with no credit card required. Enterprise plans are available for larger organizations.",
      category: "billing"
    },
    {
      id: 4,
      question: "Can I integrate with my existing CRM and business tools?",
      answer: "Absolutely! NexusCore AI integrates seamlessly with popular CRMs like Salesforce, HubSpot, and Pipedrive. We also support Zapier, webhooks, and custom API integrations to fit your existing workflow.",
      category: "features"
    },
    {
      id: 5,
      question: "Is my customer data secure?",
      answer: "Security is our top priority. We use bank-level encryption, are SOC 2 compliant, and follow GDPR guidelines. Your data never leaves our secure servers, and we provide detailed privacy controls for your customers.",
      category: "features",
      popular: true
    },
    {
      id: 6,
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support through live chat, email, and phone. Our team of AI experts is always available to help you optimize your setup and maximize your results. We also provide comprehensive documentation and video tutorials.",
      category: "getting-started"
    },
    {
      id: 7,
      question: "Can I customize the AI's personality and responses?",
      answer: "Yes! You can fully customize your AI's personality, tone, and responses to match your brand voice. Set specific answers for common questions, define conversation flows, and even upload your own knowledge base for specialized responses.",
      category: "features"
    },
    {
      id: 8,
      question: "How do you measure success and ROI?",
      answer: "We provide detailed analytics on response times, customer satisfaction, lead conversion rates, and time saved. Our dashboard shows you exactly how much value NexusCore AI is delivering to your business with real-time metrics.",
      category: "features"
    },
    {
      id: 9,
      question: "What happens if I'm not satisfied with the service?",
      answer: "We're confident you'll love NexusCore AI, but if you're not completely satisfied within 30 days, we'll give you a full refund. No questions asked. We want you to be successful with our platform.",
      category: "billing"
    },
    {
      id: 10,
      question: "Do you offer training for my team?",
      answer: "Yes! We provide comprehensive onboarding sessions, training webinars, and ongoing support to ensure your team gets the most out of NexusCore AI. We'll help you set up best practices and optimize your AI strategy.",
      category: "getting-started"
    },
    {
      id: 11,
      question: "Can I use NexusCore AI on multiple websites?",
      answer: "Absolutely! Our plans support multiple websites and domains. You can manage all your AI assistants from one dashboard, making it easy to scale across different business ventures or client projects.",
      category: "features"
    },
    {
      id: 12,
      question: "What if I need to cancel my subscription?",
      answer: "You can cancel your subscription at any time with no penalties or hidden fees. Your AI will continue working until the end of your billing period, and you can reactivate anytime. We make it easy to pause and resume as needed.",
      category: "billing"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Got Questions? We've Got
            <span className="bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent"> Answers</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about NexusCore AI. Can't find what you're looking for? 
            <button className="text-accent-purple hover:text-accent-teal transition-colors font-medium">
              Chat with our team
            </button>
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-purple text-foreground border-accent-purple shadow-lg'
                      : 'bg-card text-muted-foreground border-border hover:border-accent-purple/30 hover:text-foreground'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-muted'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Popular Questions Section */}
        {searchQuery === "" && activeCategory === "all" && (
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Most Popular Questions
            </h3>
            <div className="grid gap-4">
              {popularFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-purple transition-colors">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 flex items-center justify-center mt-1">
                      <span className="text-sm font-bold text-accent-purple">Q</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-purple transition-colors">
                        {faq.question}
                      </h3>
                      {faq.popular && (
                        <span className="inline-block mt-2 px-2 py-1 bg-accent-orange/10 text-accent-orange text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-accent-purple transition-colors flex-shrink-0" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-teal/10 to-accent-green/10 flex items-center justify-center mt-1">
                      <span className="text-sm font-bold text-accent-teal">A</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team of AI experts is here to help you get the most out of NexusCore AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold rounded-2xl hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                Chat with Support
              </button>
              <button className="px-8 py-4 border border-accent-purple/30 text-accent-purple font-semibold rounded-2xl hover:bg-accent-purple/5 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;