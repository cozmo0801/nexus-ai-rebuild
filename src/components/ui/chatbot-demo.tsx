import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Lightbulb, ArrowRight, Bot, Clock, DollarSign, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatbotDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedQuestions = [
  {
    category: "Services & Pricing",
    questions: [
      "What AI automation services do you offer?",
      "How much do your solutions cost?",
      "Do you offer a free trial?",
      "What's included in your packages?"
    ]
  },
  {
    category: "Implementation",
    questions: [
      "How long does setup take?",
      "What industries do you specialize in?",
      "Can you integrate with my existing systems?",
      "What kind of training do you provide?"
    ]
  },
  {
    category: "Business Benefits",
    questions: [
      "How much time can this save me?",
      "What's the ROI of your solutions?",
      "How do you handle customer support?",
      "Can you help with lead generation?"
    ]
  }
];

const chatbotTips = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get instant answers anytime, day or night"
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "No waiting - immediate AI-powered support"
  },
  {
    icon: Users,
    title: "Personalized Help",
    description: "Tailored responses based on your business needs"
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce support costs while improving service"
  }
];

export const ChatbotDemo = ({ isOpen, onClose }: ChatbotDemoProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-background rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-purple to-accent-teal p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">NexusCore AI Support</h2>
                  <p className="text-white/80">Your 24/7 AI business assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex h-[calc(90vh-120px)]">
            {/* Left Side - Suggested Questions & Tips */}
            <div className="w-1/3 border-r border-border p-6 overflow-y-auto">
              <div className="space-y-6">
                {/* Quick Start Guide */}
                <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-5 w-5 text-accent-purple" />
                    <h3 className="font-semibold text-foreground">💡 Quick Start Guide</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get the most out of your AI assistant with these tips:
                  </p>
                  <div className="space-y-2">
                    {chatbotTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs">
                        <tip.icon className="h-3 w-3 text-accent-purple mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong>{tip.title}:</strong> {tip.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggested Questions */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-accent-purple" />
                    Suggested Questions
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    💡 Click any question to copy it to your clipboard, then paste it in the chatbot above
                  </p>
                  <div className="space-y-4">
                    {suggestedQuestions.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-2">
                        <h4 className="text-sm font-medium text-accent-purple">
                          {category.category}
                        </h4>
                        <div className="space-y-2">
                          {category.questions.map((question, questionIndex) => (
                            <button
                              key={questionIndex}
                              className="w-full text-left p-3 bg-muted/50 hover:bg-muted border border-border rounded-lg transition-all duration-200 hover:border-accent-purple/30 hover:shadow-sm group"
                              onClick={async (e) => {
                                try {
                                  // Copy the question to clipboard
                                  await navigator.clipboard.writeText(question);
                                  
                                  // Show visual feedback
                                  const button = e.currentTarget as HTMLButtonElement;
                                  button.classList.add('bg-accent-purple/10', 'border-accent-purple/50');
                                  
                                  // Show success message
                                  const originalText = button.querySelector('span')?.textContent;
                                  const successText = '✓ Copied! Paste in chatbot above';
                                  if (button.querySelector('span')) {
                                    (button.querySelector('span') as HTMLElement).textContent = successText;
                                  }
                                  
                                  // Reset after 3 seconds
                                  setTimeout(() => {
                                    button.classList.remove('bg-accent-purple/10', 'border-accent-purple/50');
                                    if (button.querySelector('span') && originalText) {
                                      (button.querySelector('span') as HTMLElement).textContent = originalText;
                                    }
                                  }, 3000);
                                } catch (err) {
                                  // Fallback for older browsers
                                  const button = e.currentTarget as HTMLButtonElement;
                                  button.classList.add('bg-accent-purple/10', 'border-accent-purple/50');
                                  setTimeout(() => {
                                    button.classList.remove('bg-accent-purple/10', 'border-accent-purple/50');
                                  }, 1000);
                                }
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                  {question}
                                </span>
                                <ArrowRight className="h-3 w-3 text-accent-purple opacity-0 group-hover:opacity-100 transition-all duration-200" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="bg-gradient-to-r from-accent-teal/10 to-accent-green/10 border border-accent-teal/20 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent-teal" />
                    Pro Tips
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Be specific about your business needs</li>
                    <li>• Ask about pricing and timelines</li>
                    <li>• Request case studies from your industry</li>
                    <li>• Ask about integration requirements</li>
                    <li>• Inquire about ongoing support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - Chatbot */}
            <div className="flex-1 flex flex-col">
              {/* Chatbot Header */}
              <div className="p-4 border-b border-border bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-teal flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">NexusCore AI Assistant</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Online • Ready to help</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chatbot Embed */}
              <div className="flex-1 relative">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/-hHBm8K_fvurRvli9lz9-"
                  width="100%"
                  style={{ height: '100%', minHeight: '500px' }}
                  frameBorder="0"
                  title="NexusCore AI Chatbot"
                  className="rounded-b-2xl"
                />
              </div>

              {/* Chatbot Footer */}
              <div className="p-4 border-t border-border bg-muted/20">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Powered by NexusCore AI</span>
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatbotDemo;