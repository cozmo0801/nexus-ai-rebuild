import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Lightbulb, ArrowRight, Bot, Clock, DollarSign, Users, Zap, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatbotDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

// Floating Toast Component
const FloatingToast = ({ message, isVisible, onClose }: { message: string; isVisible: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 right-6 z-[9999] bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg border border-green-400 max-w-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" />
            </div>
            <span className="text-sm font-medium">{message}</span>
            <button
              onClick={onClose}
              className="ml-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ChatbotDemo = ({ isOpen, onClose }: ChatbotDemoProps) => {
  const [copiedQuestion, setCopiedQuestion] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  if (!isOpen) return null;

  const handleQuestionCopy = async (question: string) => {
    try {
      // Copy the question to clipboard
      await navigator.clipboard.writeText(question);
      
      // Show the floating toast
      setShowToast(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
    } catch (err) {
      // Fallback for older browsers
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <>
      {/* Floating Toast */}
      <FloatingToast
        message={`Copied "${copiedQuestion}" to clipboard!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-purple/10 via-accent-teal/10 to-accent-orange/10 border-b border-border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">AI Sales Bot Demo</h2>
                  <p className="text-sm text-muted-foreground">Ask me anything about our solutions!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="relative group px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-teal/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Contact Form
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* Left Panel - Guidance */}
            <div className="w-full lg:w-1/3 p-6 border-r border-border overflow-y-auto">
              <div className="space-y-6">
                {/* Quick Start */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent-yellow" />
                    Quick Start Guide
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span>Click any suggested question below to copy it</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span>Paste it in the chatbot input field</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>Get instant AI-powered responses</span>
                    </div>
                  </div>
                </div>

                {/* Suggested Questions */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-accent-blue" />
                    Suggested Questions
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    💡 Click any question to copy it to your clipboard, then paste it in the chatbot below
                  </p>
                  <div className="space-y-4">
                    {suggestedQuestions.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">{category.title}</h4>
                        <div className="space-y-2">
                          {category.questions.map((question, questionIndex) => (
                            <button
                              key={questionIndex}
                              className="w-full text-left p-3 bg-muted/50 hover:bg-muted border border-border rounded-lg transition-all duration-200 hover:border-accent-purple/30 hover:shadow-sm group"
                              onClick={() => {
                                setCopiedQuestion(question);
                                handleQuestionCopy(question);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-foreground group-hover:text-accent-purple transition-colors">
                                  {question}
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-purple transition-colors" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent-yellow" />
                    Pro Tips
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ask follow-up questions for detailed responses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use specific industry terms for better answers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>Request examples or case studies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Chatbot */}
            <div className="w-full lg:w-2/3 p-6 flex flex-col">
              {/* Chatbot Header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">AI Sales Bot</h3>
                <p className="text-sm text-muted-foreground">
                  Ask me about our AI solutions, pricing, implementation, or anything else!
                </p>
              </div>

              {/* Chatbot Iframe */}
              <div className="flex-1 bg-muted/20 rounded-xl border border-border overflow-hidden">
                <iframe 
                  src="https://www.chatbase.co/chatbot-iframe/-hHBm8K_fvurRvli9lz9-" 
                  width="100%" 
                  style={{ height: '100%', minHeight: '500px' }} 
                  frameBorder="0"
                  title="AI Sales Bot"
                />
              </div>

              {/* Need More Help Section */}
              <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">Need More Help?</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  If you need to schedule a call or fill out a detailed contact form, click the "Contact Form" button above.
                </p>
                <Button
                  onClick={() => window.location.href = '/contact'}
                  className="relative group w-full px-4 py-3 bg-gradient-to-r from-accent-orange/20 to-accent-pink/20 backdrop-blur-sm border border-accent-orange/30 text-accent-orange font-semibold rounded-xl hover:from-accent-orange/30 hover:to-accent-pink/30 hover:border-accent-orange/50 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/10 to-accent-pink/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Go to Contact Form
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const suggestedQuestions = [
  {
    title: "Lead Generation",
    questions: [
      "Can you help with lead generation?",
      "What's your approach to B2B lead generation?",
      "How do you qualify leads?"
    ]
  },
  {
    title: "AI Solutions",
    questions: [
      "What AI tools do you offer?",
      "How does your AI automation work?",
      "Can you customize AI solutions?"
    ]
  },
  {
    title: "Pricing & ROI",
    questions: [
      "What are your pricing packages?",
      "What's the typical ROI timeline?",
      "Do you offer performance-based pricing?"
    ]
  },
  {
    title: "Implementation",
    questions: [
      "How long does implementation take?",
      "What's your onboarding process?",
      "Do you provide training and support?"
    ]
  }
];

export default ChatbotDemo;