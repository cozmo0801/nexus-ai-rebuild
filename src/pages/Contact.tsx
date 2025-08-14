import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MotionBubbles from "@/components/MotionBubbles";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  MessageSquare,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Zap,
  Target,
  Star,
  Building,
  Globe,
  Calendar,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data: any;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        try {
          data = await response.json();
        } catch {
          throw new Error("Invalid JSON response from server");
        }
      } else {
        const responseText = await response.text();
        data = { message: responseText };
      }

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || `Server error (${response.status}). Please try again.`);
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "contact@nexuscore-ai.com",
      action: "mailto:contact@nexuscore-ai.com",
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      borderColor: "border-accent-teal/20",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "(407) 730-1373",
      action: "tel:(407) 730-1373",
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
      borderColor: "border-accent-green/20",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      value: "Clermont, Florida",
      action: null,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
      borderColor: "border-accent-orange/20",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "@nexuscore-ai",
      action: "https://linkedin.com/company/nexuscore-ai",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
      borderColor: "border-accent-purple/20",
    },
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      availability: "24/7 Available",
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      availability: "2 Hours",
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager for enterprise clients",
      availability: "Enterprise Plans",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
    },
  ];

  const businessInfo = [
    {
      icon: Building,
      title: "Company",
      value: "NexusCore AI",
      description: "Leading state-of-the-art automation platform"
    },
    {
      icon: Globe,
      title: "Founded",
      value: "2025",
      description: "Innovating business automation in Central Florida"
    },
    {
      icon: Target,
      title: "Mission",
      value: "Empower Small Businesses",
      description: "Make AI automation accessible to Central Florida businesses"
    },
    {
      icon: Shield,
      title: "Security",
      value: "SOC 2 Compliant",
      description: "Enterprise-grade protection"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

                   {/* Enhanced Contact Header */}
             <section className="pt-24 pb-16 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-accent-purple/5 to-accent-green/5" />
               <MotionBubbles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent-teal/10 border border-accent-teal/20 rounded-full text-accent-teal text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal via-accent-purple to-accent-green bg-clip-text text-transparent animate-gradient">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Ready to transform your Central Florida business with state-of-the-art automation? Let's discuss how NexusCore AI can be tailored
                to your specific needs and goals.
              </p>
              
              {/* Free Trial Information */}
              <div className="mb-8 p-4 bg-gradient-to-r from-accent-green/10 to-accent-teal/10 border border-accent-green/20 rounded-2xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-accent-green" />
                  <span className="text-sm font-medium text-accent-green">One-Week Free Trial Available</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Try our automation solution for your business free for one week. Fill out the form below to learn more and get started.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-green" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-orange" />
                  <span>2hr Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent-purple" />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form and Info */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Enhanced Contact Form */}
            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="h-8 w-8 text-accent-teal" />
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name *</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("firstName")}
                      onBlur={() => setActiveField(null)}
                      placeholder="John"
                      className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                        activeField === "firstName" ? "border-accent-teal/50 shadow-glow" : ""
                      }`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name *</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("lastName")}
                      onBlur={() => setActiveField(null)}
                      placeholder="Doe"
                      className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                        activeField === "lastName" ? "border-accent-teal/50 shadow-glow" : ""
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      placeholder="john@company.com"
                      className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                        activeField === "email" ? "border-accent-teal/50 shadow-glow" : ""
                      }`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      placeholder="+1 (555) 123-4567"
                      className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                        activeField === "phone" ? "border-accent-teal/50 shadow-glow" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("company")}
                      onBlur={() => setActiveField(null)}
                      placeholder="Your Company"
                      className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                        activeField === "company" ? "border-accent-teal/50 shadow-glow" : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject *</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("subject")}
                      onBlur={() => setActiveField(null)}
                      placeholder="How can we help?"
                      className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 ${
                        activeField === "subject" ? "border-accent-teal/50 shadow-glow" : ""
                      }`}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    rows={6}
                    className={`bg-secondary/50 border-glass text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none ${
                      activeField === "message" ? "border-accent-teal/50 shadow-glow" : ""
                    }`}
                    required
                  />
                </div>

                {/* Enhanced Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group hover:scale-105 transition-transform"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>

                {/* Enhanced Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg text-accent-green animate-fade-in">
                    <CheckCircle className="h-5 w-5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive animate-fade-in">
                    <AlertCircle className="h-5 w-5" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Enhanced Contact Methods and Info */}
            <div className="space-y-8">
              {/* Enhanced Contact Methods */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-accent-purple" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`glass-card rounded-xl p-4 border ${method.borderColor} backdrop-blur-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer group ${
                          method.action ? 'hover:scale-105' : ''
                        }`}
                        onMouseEnter={() => setHoveredMethod(method.id)}
                        onMouseLeave={() => setHoveredMethod(null)}
                        onClick={() => method.action && window.open(method.action, '_blank')}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.bgColor} ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-accent-teal transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.description}
                            </p>
                            <p className="text-foreground font-medium">
                              {method.value}
                            </p>
                          </div>
                          {method.action && (
                            <ArrowRight className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${
                              hoveredMethod === method.id ? 'translate-x-1 text-accent-teal' : ''
                            }`} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Support Options */}
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-accent-green" />
                  Support & Availability
                </h3>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <div
                        key={index}
                        className={`glass-card rounded-xl p-4 border border-glass backdrop-blur-glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${option.bgColor} ${option.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">
                              {option.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {option.description}
                            </p>
                            <p className="text-accent-teal font-medium">
                              {option.availability}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Business Info */}
              <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Building className="h-6 w-6 text-accent-orange" />
                  About NexusCore AI
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {businessInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className="glass-card rounded-xl p-4 border border-glass backdrop-blur-glass text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-teal/10 text-accent-teal mb-3`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-bold text-lg mb-1">
                          {info.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                   {/* Enhanced Quick Start CTA */}
             <section className="py-20 bg-gradient-to-b from-accent-purple/6 via-accent-teal/6 to-accent-green/6 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-green/5" />
               <MotionBubbles />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Don't wait to transform your Central Florida business. Start your automation journey today
              with our free consultation and personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto group hover:scale-105 transition-transform"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10">Get Custom Quote</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroSecondary"
                size="lg"
                className="w-full sm:w-auto hover:scale-105 transition-transform"
                onClick={() => (window.location.href = "/faq")}
              >
                View FAQ
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Join growing startups in Central Florida already using NexusCore AI</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent-green" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent-orange" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent-purple" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;