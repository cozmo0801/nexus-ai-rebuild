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
                Transforming small businesses with intelligent AI solutions. Automate customer service, 
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
                {[
                  "AI Chatbots",
                  "Lead Generation",
                  "Customer Support",
                  "Sales Automation",
                  "Business Intelligence",
                  "Integration Services"
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-accent-purple transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Team",
                  "Careers",
                  "Press & Media",
                  "Partners",
                  "Contact Us"
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-accent-purple transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 text-lg">Support</h3>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Documentation",
                  "API Reference",
                  "Community Forum",
                  "Status Page",
                  "Security"
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-accent-purple transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-border pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with AI Insights
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest news, tips, and insights on how AI is transforming business. 
                Join thousands of business owners staying ahead of the curve.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold px-6 py-2 rounded-xl hover:shadow-glow transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <span className="flex items-center gap-2">
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>

              {/* Subscribe Status */}
              {subscribeStatus === "success" && (
                <div className="flex items-center justify-center gap-2 text-accent-green mt-4">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Successfully subscribed! Welcome to the community.</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact & CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, text: "hello@nexuscore.ai", action: "Send Email" },
                  { icon: Phone, text: "+1 (555) 123-4567", action: "Call Now" },
                  { icon: MapPin, text: "123 AI Boulevard, Tech City, TC 12345", action: "View Map" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple">
                      <contact.icon className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground flex-1">{contact.text}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-accent-purple/30 text-accent-purple hover:bg-accent-purple/5"
                    >
                      {contact.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Ready to get started?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Join thousands of businesses already growing with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                      onClick={() => window.location.href = "/contact"}
                      className="bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                    >
                      Get Custom Quote
                    </Button>
                <Button
                  variant="outline"
                  onClick={openChat}
                  className="border-accent-purple/30 text-accent-purple hover:bg-accent-purple/5"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat with Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© {currentYear} NexusCore AI. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-accent-purple transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent-purple transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent-purple transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Made with</span>
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
              <span>by NexusCore AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;