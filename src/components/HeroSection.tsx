import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Bot, Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import ChatbotDemo from "@/components/ui/chatbot-demo";
import DemoScheduler from "@/components/ui/demo-scheduler";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isDemoSchedulerOpen, setIsDemoSchedulerOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDemoSchedule = (demoData: any) => {
    // This will send the demo data to the contact form
    // You can implement this to pre-fill the contact form or send directly
    console.log("Demo scheduled:", demoData);
    
    // For now, redirect to contact form with demo data
    const queryParams = new URLSearchParams({
      type: 'demo',
      demoType: demoData.demoType || '',
      selectedDate: demoData.selectedDate || '',
      selectedTime: demoData.selectedTime || '',
      firstName: demoData.firstName || '',
      lastName: demoData.lastName || '',
      email: demoData.email || '',
      phone: demoData.phone || '',
      company: demoData.company || '',
      industry: demoData.industry || '',
      challenge: demoData.challenge || '',
      employees: demoData.employees || '',
      timeline: demoData.timeline || ''
    });
    
    window.location.href = `/contact?${queryParams.toString()}`;
  };

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Badge */}
            <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl px-6 py-4 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Bot className="h-5 w-5 text-accent-purple" />
              <span className="text-sm font-medium text-foreground">
                State-of-the-Art AI Automation Solutions
              </span>
            </div>
            
            {/* Enhanced Main Heading */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Transform Your Business with
              <span className="block bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
                Intelligent AI
              </span>
            </h1>
            
            {/* Enhanced Subheading */}
            <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Comprehensive state-of-the-art automation systems designed to transform your business
              operations, enhance customer experience, and drive sustainable
              growth in Central Florida.
            </p>

            {/* Enhanced Product Preview: AI Chat */}
            <div className={`mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="relative group max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-green))]/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-card border rounded-3xl p-8 shadow-2xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent-purple to-accent-teal flex items-center justify-center">
                        <Bot className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="text-sm font-medium">AI Business Assistant</div>
                      <div className="ml-auto flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Online</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-left">
                      <div className="bg-muted rounded-lg p-4 text-sm">
                        Hi! I'm here to help grow your business 24/7. How can I assist you today?
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-lg p-4 text-sm ml-8">
                        What are your business hours and pricing?
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-sm">
                        We're open Monday-Friday 9AM-6PM EST, but I'm available 24/7 to help with questions, bookings, and support! Our AI solutions start at just $150/month with custom pricing plans.
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Typing...</span>
                        <div className="flex gap-1">
                          <div className="h-1.5 w-1.5 bg-accent-purple rounded-full animate-bounce"></div>
                          <div className="h-1.5 w-1.5 bg-accent-teal rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="h-1.5 w-1.5 bg-accent-orange rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Three Options */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto font-medium text-lg group bg-gradient-to-r from-accent-purple to-accent-teal hover:from-accent-purple/90 hover:to-accent-teal/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Custom Quote
              </Button>
              <MetalButton 
                variant="gold"
                onClick={() => setIsChatbotOpen(true)}
                className="w-full sm:w-auto font-medium text-lg group"
              >
                <span className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Try It Out
                </span>
              </MetalButton>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setIsDemoSchedulerOpen(true)}
                className="w-full sm:w-auto font-medium text-lg group border-2 border-accent-purple/30 hover:border-accent-purple/50 hover:bg-accent-purple/5 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Try a Demo
                </span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm text-muted-foreground mb-4">Join growing startups in Central Florida already transforming with AI</p>
                      <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <span>✓ Custom pricing plans</span>
            <span>✓ Fast and tailored setup</span>
            <span>✓ Flexible payment terms</span>
          </div>
          
          {/* Free Trial Information */}
          <div className="mt-6 p-4 bg-gradient-to-r from-accent-green/10 to-accent-teal/10 border border-accent-green/20 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-accent-green" />
              <span className="text-sm font-medium text-accent-green">One-Week Free Trial Available</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Try our automation solution for your business free for one week. Fill out the contact form to learn more and get started.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>

    {/* Chatbot Demo Modal */}
    <ChatbotDemo 
      isOpen={isChatbotOpen} 
      onClose={() => setIsChatbotOpen(false)} 
    />
    
    {/* Demo Scheduler Modal */}
    <DemoScheduler 
      isOpen={isDemoSchedulerOpen} 
      onClose={() => setIsDemoSchedulerOpen(false)}
      onSchedule={handleDemoSchedule}
    />
    </>
  );
};

export default HeroSection;