import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, MessageSquare, Clock, Users, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotDemo = ({ isOpen, onClose }: ChatbotDemoProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm NexusCore AI, your intelligent business automation assistant. I'm here to help you understand how AI can transform your business. What would you like to know about our solutions?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Predefined responses for common questions
  const botResponses = {
    'pricing': "Our AI automation solutions start at $99/month for basic automation, scaling based on your needs. We offer custom pricing for enterprise solutions and a free 7-day trial to get you started. Would you like me to connect you with our team for a personalized quote?",
    'features': "NexusCore AI offers 24/7 customer support automation, lead generation, sales automation, data analytics, and custom integrations. We specialize in solutions for Central Florida businesses. Which feature interests you most?",
    'implementation': "We can have you up and running in as little as 24 hours! Our team handles all setup, training, and integration. Most businesses see results within the first week. Would you like to schedule a demo call?",
    'trial': "Absolutely! We offer a free 7-day trial with full access to all features. No credit card required. I can help you get started right now or connect you with our team for a personalized setup. What would you prefer?",
    'contact': "I'd be happy to connect you with our team! You can reach us at contact@nexuscore.ai, call us at (555) 123-4567, or I can help you schedule a consultation call. How would you like to proceed?",
    'default': "That's a great question! I'd love to help you with that. Let me connect you with one of our AI experts who can provide detailed information. Would you like me to schedule a call or send you more information?"
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking and response
    setTimeout(() => {
      const botResponse = generateBotResponse(text.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const generateBotResponse = (userText: string): string => {
    if (userText.includes('price') || userText.includes('cost') || userText.includes('pricing')) {
      return botResponses.pricing;
    } else if (userText.includes('feature') || userText.includes('what can') || userText.includes('capabilities')) {
      return botResponses.features;
    } else if (userText.includes('implement') || userText.includes('setup') || userText.includes('how long')) {
      return botResponses.implementation;
    } else if (userText.includes('trial') || userText.includes('free') || userText.includes('demo')) {
      return botResponses.trial;
    } else if (userText.includes('contact') || userText.includes('call') || userText.includes('speak')) {
      return botResponses.contact;
    } else {
      return botResponses.default;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputText);
    }
  };

  const quickQuestions = [
    "What are your pricing plans?",
    "What features do you offer?",
    "How long does implementation take?",
    "Do you offer a free trial?",
    "How can I contact your team?"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-background border border-border rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-accent-purple to-accent-teal flex items-center justify-center">
                  <Bot className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">NexusCore AI Assistant</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-96">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-teal flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-foreground" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.sender === 'user' 
                      ? 'bg-accent-purple text-white ml-auto' 
                      : 'bg-muted text-foreground'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <div className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {message.sender === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-accent-purple flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-teal flex items-center justify-center">
                    <Bot className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 bg-accent-purple rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-accent-teal rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="h-2 w-2 bg-accent-orange rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-4">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="px-3 py-2 text-xs bg-muted hover:bg-accent-purple/10 text-foreground rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              
              {/* Input */}
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about NexusCore AI..."
                  className="flex-1 px-4 py-3 bg-muted border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-purple/20 focus:border-accent-purple"
                />
                <button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="px-4 py-3 bg-accent-purple hover:bg-accent-purple/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-muted/30">
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  <span>Secure & Private</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatbotDemo;