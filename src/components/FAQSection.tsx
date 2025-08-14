import { ChevronDown, MessageCircle, Zap, Shield, Clock, Star } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: "roi",
      question: "What kind of ROI can I expect from AI automation?",
      answer: "Most businesses see a return on investment within 3-6 months. Our clients typically experience: 40% reduction in customer service costs, 60% faster response times, 25% increase in lead conversion rates, and 15 hours per week saved on repetitive tasks. The exact ROI depends on your business size and implementation scope, but we provide detailed projections during our consultation.",
      popular: true
    },
    {
      id: "free-trial",
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a one-week free trial of our automation solution specifically tailored to your business needs. This allows you to experience the benefits firsthand before making a commitment. To learn more about the free trial and get started, simply fill out our contact form and our team will reach out to discuss your specific automation requirements.",
      popular: true
    },
    {
      id: "technical",
      question: "Do I need technical knowledge to manage the AI systems?",
      answer: "Not at all! Our state-of-the-art automation systems are designed for business owners, not developers. We provide: Complete setup and configuration by our team, intuitive dashboard for monitoring and adjustments, 24/7 technical support, regular training sessions, and detailed documentation. Most clients are fully comfortable managing their AI systems within the first week.",
      popular: true
    },
    {
      id: "pricing",
      question: "How does your pricing work?",
      answer: "We offer transparent, custom pricing tailored to meet your specific business needs. Our plans start at $150/month and scale based on your requirements and usage. As a startup focused on Central Florida businesses, we work closely with each client to create a pricing structure that fits your budget and goals. We also offer flexible payment terms and a consultation to discuss your specific needs.",
      popular: true
    },
    {
      id: "implementation",
      question: "How long does implementation take?",
      answer: "Implementation time varies based on your business complexity and automation needs. Simple chatbot setups can be live within 48 hours, while comprehensive automation suites may take 2-4 weeks for full deployment. Each solution is customized to your specific business goals, so we provide a detailed timeline during onboarding and keep you updated on progress throughout the process.",
      popular: false
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <button 
              className="text-accent-purple hover:text-accent-teal transition-colors font-medium cursor-pointer"
              onClick={() => {
                // Open chat support - you can integrate with your chat system here
                alert("Chat support will open here. Please integrate with your preferred chat system.");
                // Alternative: window.open('your-chat-url', '_blank');
              }}
            >
              Chat with our team
            </button>
          </p>
        </div>

        {/* Main FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent-teal/20 focus:ring-offset-2 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 flex items-center justify-center mt-1">
                        <span className="text-sm font-bold text-accent-purple">Q</span>
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
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-teal/10 to-accent-green/10 flex items-center justify-center mt-1">
                            <span className="text-sm font-bold text-accent-teal">A</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
              <button 
                className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold rounded-2xl hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  // Open chat support - you can integrate with your chat system here
                  alert("Chat support will open here. Please integrate with your preferred chat system.");
                  // Alternative: window.open('your-chat-url', '_blank');
                }}
              >
                Chat with Support
              </button>
              <button 
                className="px-8 py-4 border border-accent-purple/30 text-accent-purple font-semibold rounded-2xl hover:bg-accent-purple/5 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  // Navigate to contact page for scheduling calls
                  window.location.href = '/contact';
                }}
              >
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