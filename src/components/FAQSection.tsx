import React, { useState } from "react";
import { MessageCircle, ChevronDown, CheckCircle, AlertCircle, Zap, Users, Clock, Star } from "lucide-react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      icon: "❓",
      color: "from-accent-purple to-accent-teal"
    },
    {
      id: "technical",
      title: "Technical Details",
      icon: "⚙️",
      color: "from-accent-teal to-accent-green"
    },
    {
      id: "pricing",
      title: "Pricing & Plans",
      icon: "💰",
      color: "from-accent-green to-accent-orange"
    },
    {
      id: "support",
      title: "Support & Help",
      icon: "🆘",
      color: "from-accent-orange to-accent-purple"
    }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: "What is NexusCore AI and how can it help my business?",
        answer: "NexusCore AI is an intelligent automation platform that transforms small businesses by automating customer service, boosting sales, and scaling operations. We use cutting-edge AI to handle repetitive tasks, provide 24/7 customer support, and give you insights to grow your business.",
        popular: true,
        category: "general"
      },
      {
        id: 2,
        question: "How quickly can I see results with NexusCore AI?",
        answer: "Most businesses see immediate improvements within the first week. Customer response times drop from hours to minutes, and you'll notice increased efficiency in your daily operations. Full optimization typically takes 2-4 weeks.",
        popular: false,
        category: "general"
      },
      {
        id: 3,
        question: "Is NexusCore AI suitable for small businesses?",
        answer: "Absolutely! We're specifically designed for small businesses in Central Florida. Our solutions are scalable, affordable, and easy to implement. You don't need a large IT team or technical expertise to get started.",
        popular: true,
        category: "general"
      }
    ],
    technical: [
      {
        id: 4,
        question: "What kind of AI technology does NexusCore use?",
        answer: "We use state-of-the-art natural language processing, machine learning, and automation frameworks. Our AI continuously learns from your business interactions to provide personalized, accurate responses and improve over time.",
        popular: false,
        category: "technical"
      },
      {
        id: 5,
        question: "How secure is my business data with NexusCore AI?",
        answer: "Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and follow industry best practices. Your data is never shared with third parties and is protected by multiple security layers.",
        popular: true,
        category: "technical"
      },
      {
        id: 6,
        question: "Can I integrate NexusCore AI with my existing systems?",
        answer: "Yes! We offer seamless integration with popular CRM systems, e-commerce platforms, social media, and communication tools. Our API-first approach makes integration simple and flexible.",
        popular: false,
        category: "technical"
      }
    ],
    pricing: [
      {
        id: 7,
        question: "What are your pricing plans and what's included?",
        answer: "We offer flexible pricing starting at $99/month for basic automation. Our plans include AI customer service, sales automation, analytics dashboard, and 24/7 support. Custom enterprise solutions are also available.",
        popular: true,
        category: "pricing"
      },
      {
        id: 8,
        question: "Do you offer a free trial or demo?",
        answer: "Yes! We offer a free 7-day trial with full access to all features. You can also schedule a personalized demo to see exactly how NexusCore AI can transform your specific business processes.",
        popular: false,
        category: "pricing"
      },
      {
        id: 9,
        question: "Are there any hidden fees or setup costs?",
        answer: "No hidden fees! Our pricing is transparent and includes setup, training, and ongoing support. The only additional cost would be if you need custom integrations or enterprise features.",
        popular: false,
        category: "pricing"
      }
    ],
    support: [
      {
        id: 10,
        question: "What kind of support do you provide?",
        answer: "We provide comprehensive support including 24/7 live chat, phone support during business hours, video training sessions, and a detailed knowledge base. Our team of AI experts is always here to help.",
        popular: true,
        category: "support"
      },
      {
        id: 11,
        question: "How do I get started with NexusCore AI?",
        answer: "Getting started is simple! Sign up for a free trial, schedule an onboarding call with our team, and we'll have you up and running within 24 hours. No technical expertise required!",
        popular: false,
        category: "support"
      },
      {
        id: 12,
        question: "Can you customize solutions for my specific industry?",
        answer: "Absolutely! We specialize in creating industry-specific AI solutions. Whether you're in retail, healthcare, professional services, or manufacturing, we'll customize our platform to meet your unique needs.",
        popular: true,
        category: "support"
      }
    ]
  };

  const currentFAQs = faqs[activeCategory] || [];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent-purple/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-teal/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
              className="text-accent-purple hover:text-accent-teal transition-colors font-medium cursor-pointer ml-1"
              onClick={() => {
                alert("Chat support will open here. Please integrate with your preferred chat system.");
              }}
            >
              Chat with our team
            </button>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                  : "bg-background border-border text-foreground hover:border-accent-purple/50 hover:bg-accent-purple/5"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Cards Stack FAQ Display */}
        <div className="max-w-6xl mx-auto">
          <ContainerScroll className="h-[800px] relative">
            {currentFAQs.map((faq, index) => (
              <CardSticky
                key={faq.id}
                index={index}
                incrementY={20}
                incrementZ={20}
                className="mb-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Question Header */}
                  <div className="p-6 border-b border-border/50 bg-gradient-to-r from-accent-purple/5 to-accent-teal/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-accent-purple">Q</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground pr-4 leading-tight">
                            {faq.question}
                          </h3>
                          {faq.popular && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-orange/10 border border-accent-orange/20 rounded-full text-sm text-accent-orange font-medium">
                              <Star className="h-3 w-3" />
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="capitalize">{faq.category}</span>
                          <span>•</span>
                          <span>Question {faq.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Answer */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-accent-teal/10 to-accent-green/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-accent-teal">A</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
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
                  alert("Chat support will open here. Please integrate with your preferred chat system.");
                }}
              >
                Chat with Support
              </button>
              <button 
                className="px-8 py-4 border border-accent-purple/30 text-accent-purple font-semibold rounded-2xl hover:bg-accent-purple/5 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  window.location.href = '/contact';
                }}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* Support Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-accent-purple/5 to-accent-teal/5 border border-accent-purple/20">
            <MessageCircle className="h-12 w-12 text-accent-teal mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Live Chat Support</h4>
            <p className="text-muted-foreground">Get instant help from our AI experts 24/7</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-accent-teal/5 to-accent-green/5 border border-accent-teal/20">
            <Clock className="h-12 w-12 text-accent-green mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">2hr Response Time</h4>
            <p className="text-muted-foreground">Quick responses to all your questions</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-accent-green/5 to-accent-orange/5 border border-accent-green/20">
            <Users className="h-12 w-12 text-accent-orange mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Expert Team</h4>
            <p className="text-muted-foreground">Dedicated specialists ready to help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;