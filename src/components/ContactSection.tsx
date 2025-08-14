import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  Globe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import GlowingEffect from "@/components/ui/glowing-effect";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    contactMethod: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get a response within 2 hours during business hours",
      contact: "contact@nexuscore-ai.com",
      action: "Send Email",
      color: "text-accent-purple",
      bgColor: "from-accent-purple/10 to-accent-purple/5"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our AI experts",
      contact: "(407) 730-1373",
      action: "Call Now",
      color: "text-accent-green",
      bgColor: "from-accent-green/10 to-accent-green/5"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support through our AI assistant",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "text-accent-teal",
      bgColor: "from-accent-teal/10 to-accent-teal/5"
    }
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM EST",
      subtitle: "AI support available 24/7"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Clermont, Florida",
      subtitle: "Serving Central Florida businesses"
    },
    {
      icon: Globe,
      title: "Local Focus",
      details: "Central Florida business expertise",
      subtitle: "Deep understanding of local market"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus("idle");
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        message: "",
        contactMethod: "email"
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent"> Business?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a custom quote today and see how our state-of-the-art automation systems can transform your Central Florida business operations.
          </p>
          
          {/* Free Trial Information */}
          <div className="mt-6 p-4 bg-gradient-to-r from-accent-green/10 to-accent-teal/10 border border-accent-green/20 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-accent-green" />
              <span className="text-sm font-medium text-accent-green">One-Week Free Trial Available</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Try our automation solution for your business free for one week. Fill out the form below to learn more and get started.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Send us a message</h3>
              <p className="text-muted-foreground">
                Tell us about your business needs and we'll get back to you with a customized solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="website" className="text-sm font-medium text-foreground mb-2 block">
                    Website
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business automation needs..."
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>

              {/* Form Status */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-accent-green bg-accent-green/10 border border-accent-green/20 rounded-lg p-3">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-accent-orange bg-accent-orange/10 border border-accent-orange/20 rounded-lg p-3">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => {
                        if (method.title === "Email Support") {
                          window.location.href = `mailto:${method.contact}`;
                        } else if (method.title === "Phone Support") {
                          window.location.href = `tel:${method.contact}`;
                        } else {
                          // Open chat for live chat
                          // @ts-ignore
                          if (window.loadChatbase) {
                            // @ts-ignore
                            window.loadChatbase();
                          }
                        }
                      }}
                    >
                      <div className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent-purple/30 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.bgColor} ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-accent-purple transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium text-accent-purple">
                            {method.contact}
                          </p>
                        </div>
                        <div className="text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Business Information</h3>
              <div className="space-y-4">
                {businessInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-purple/10 text-accent-purple flex-shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-foreground font-medium">
                          {info.details}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Need immediate assistance?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our AI assistant is available 24/7 to answer your questions and help you get started.
              </p>
              <LiquidButton
                onClick={() => {
                  // @ts-ignore
                  if (window.loadChatbase) {
                    // @ts-ignore
                    window.loadChatbase();
                  }
                }}
                className="w-full"
              >
                Start Chat Now
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;