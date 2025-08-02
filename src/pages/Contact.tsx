import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@nexuscore.ai",
      action: "mailto:hello@nexuscore.ai"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      value: "San Francisco, CA",
      action: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "@nexuscore-ai",
      action: "https://linkedin.com/company/nexuscore-ai"
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      availability: "24/7 Available"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      availability: "2 Hours"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager for enterprise clients",
      availability: "Enterprise Plans"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Contact Header */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business with AI? Let's discuss how NexusCore AI 
              can be tailored to your specific needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      First Name *
                    </label>
                    <Input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      Last Name *
                    </label>
                    <Input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Company
                  </label>
                  <Input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Subject *
                  </label>
                  <Input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business needs and how AI automation could help..."
                    className="bg-secondary/50 border-glass text-white placeholder:text-muted-foreground min-h-[120px]"
                    required
                  />
                </div>
                
                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <div className={`glass-card rounded-2xl p-4 border ${
                    submitStatus === 'success' 
                      ? 'border-accent-green bg-accent-green/10' 
                      : 'border-red-500 bg-red-500/10'
                  } backdrop-blur-glass`}>
                    <div className="flex items-center gap-3">
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      )}
                      <p className={`text-sm ${
                        submitStatus === 'success' ? 'text-accent-green' : 'text-red-500'
                      }`}>
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Choose the method that works best for you. Our team is here to help 
                  you every step of the way.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div 
                      key={index}
                      className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 border border-glass backdrop-blur-glass group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-glass text-accent-teal shadow-inner">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-accent-teal transition-colors">
                            {method.title}
                          </h3>
                          <p className="text-sm text-white/70 mb-1">{method.description}</p>
                          {method.action ? (
                            <a 
                              href={method.action}
                              className="text-accent-teal hover:text-accent-purple transition-colors font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-white font-medium">{method.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Support Information */}
              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-semibold text-white">Support & Response</h3>
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-glass backdrop-blur-glass">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-glass text-accent-green shadow-inner">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{option.title}</p>
                        <p className="text-sm text-white/70">{option.description}</p>
                        <p className="text-sm text-accent-teal font-medium">{option.availability}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Join hundreds of businesses already using NexusCore AI to automate their operations 
              and accelerate growth. Let's discuss your specific needs today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Schedule a Demo
              </Button>
              <Button variant="heroSecondary" size="lg" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;