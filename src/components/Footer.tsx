import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubscribeStatus("success");
    setIsSubscribing(false);
    setEmail("");
    
    // Reset status after 3 seconds
    setTimeout(() => setSubscribeStatus("idle"), 3000);
  };

  const openChat = () => {
    // @ts-ignore
    if (window.loadChatbase) {
      // @ts-ignore
      window.loadChatbase();
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent-purple/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent-teal/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Zap className="h-8 w-8 text-accent-teal" />
                  <div className="absolute inset-0 bg-accent-teal/20 rounded-full blur-md"></div>
                </div>
                <span className="text-2xl font-bold text-foreground">NexusCore AI</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming small businesses in Central Florida with intelligent state-of-the-art automation systems. Automate customer service, 
                boost sales, and scale your business with our cutting-edge technology.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-muted hover:bg-accent-purple/10 text-muted-foreground hover:text-accent-purple transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-lg">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    24/7 AI Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Smart Lead Capture
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Customer Service Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Custom AI Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Business Process Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-lg">Industries</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Tourism & Hospitality
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Professional Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Retail
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted-foreground hover:text-accent-purple transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="border-t border-border/50 pt-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with NexusCore AI
              </h3>
              <p className="text-muted-foreground mb-6">
                Join growing startups in Central Florida already transforming with AI. Get the latest insights, tips, and updates delivered to your inbox.
              </p>
              
              {/* Free Trial Information */}
              <div className="mb-6 p-4 bg-gradient-to-r from-accent-green/10 to-accent-teal/10 border border-accent-green/20 rounded-2xl max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-accent-green" />
                  <span className="text-xs font-medium text-accent-green">One-Week Free Trial Available</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Try our automation solution for your business free for one week. Contact us to learn more.
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <LiquidButton 
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full sm:w-auto"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </LiquidButton>
              </form>

              {/* Subscription Status */}
              {subscribeStatus === "success" && (
                <div className="flex items-center justify-center gap-2 mt-4 text-accent-green">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Successfully subscribed!</span>
                </div>
              )}

              {subscribeStatus === "error" && (
                <div className="flex items-center justify-center gap-2 mt-4 text-accent-orange">
                  <span className="text-sm">Something went wrong. Please try again.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} NexusCore AI. All rights reserved. Serving Central Florida businesses with state-of-the-art automation solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@nexuscore-ai.com" className="hover:text-accent-purple transition-colors">
                  contact@nexuscore-ai.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:(407) 730-1373" className="hover:text-accent-purple transition-colors">
                  (407) 730-1373
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Clermont, Florida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;