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
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
      contact: "hello@nexuscore.ai",
      action: "Send Email",
      color: "text-accent-purple",
      bgColor: "from-accent-purple/10 to-accent-purple/5"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our AI experts",
      contact: "+1 (555) 123-4567",
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
      subtitle: "Weekend support available"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 AI Boulevard, Tech City, TC 12345",
      subtitle: "Remote-first company"
    },
    {
      icon: Globe,
      title: "Global Reach",
      details: "Serving businesses worldwide",
      subtitle: "24/7 AI support available"
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

  const openChat = () => {
    // @ts-ignore
    if (window.loadChatbase) {
      // @ts-ignore
      window.loadChatbase();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-orange/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent"> Business?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss how NexusCore AI can help you automate customer service, boost sales, and scale your business. 
            Our team of experts is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Send us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company Name
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm font-medium text-foreground">
                    Website URL
                  </Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yoursite.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  How can we help? *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business needs and how we can help..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  Preferred Contact Method
                </Label>
                <div className="flex gap-4">
                  {["email", "phone", "chat"].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleInputChange}
                        className="text-accent-purple focus:ring-accent-purple"
                      />
                      <span className="text-sm capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold py-4 rounded-2xl hover:shadow-glow transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>

              {/* Form Status */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-accent-green bg-accent-green/10 border border-accent-green/20 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods & Business Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border border-border bg-gradient-to-br ${method.bgColor} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                      onClick={() => {
                        if (method.title === "Live Chat") {
                          openChat();
                        }
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-white/80 ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{method.title}</h4>
                          <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{method.contact}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs border-accent-purple/30 text-accent-purple hover:bg-accent-purple/5"
                            >
                              {method.action}
                            </Button>
                          </div>
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
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground text-sm">{info.details}</p>
                        <p className="text-muted-foreground text-xs">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Start CTA */}
            <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Ready to get started?</h4>
                              <p className="text-muted-foreground text-sm mb-4">
                  Get a custom quote today and see how AI can transform your business.
                </p>
                                  <Button
                      onClick={() => window.location.href = "/contact"}
                      className="w-full bg-gradient-to-r from-accent-purple to-accent-teal text-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                    >
                      Get Custom Quote
                    </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;