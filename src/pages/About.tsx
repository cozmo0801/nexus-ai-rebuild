import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Lightbulb, Users, Zap, Target, Clock, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";
import Navigation from "@/components/Navigation";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Full Navigation Bar */}
      <Navigation />

      {/* Logo Header */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <Logo size="lg" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-6">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Innovation Meets Personal Care
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In 2025, we founded NexusCore AI with a vision to bring transformative AI technology to small businesses in a way that truly serves their unique needs.
          </p>
        </motion.div>
      </section>

      {/* Founding Story Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                The Founding Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began with a realization that while AI technology was rapidly advancing, small business owners were being left behind. The solutions available were either too complex, too expensive, or too generic to address their specific challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We saw an opportunity to bridge this gap by creating AI solutions that weren't just powerful—they were personal.
              </p>
              <div className="bg-accent-purple/10 border-l-4 border-accent-purple p-4 rounded-r-lg">
                <p className="text-accent-purple font-semibold text-lg">
                  "Our vision is simple: to bring the transformative power of AI into a more tailored fashion for small business owners, saving them time and money while ensuring they never miss a lead, operating 24/7."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-purple/20 to-accent-teal/20 rounded-2xl p-8 border border-accent-purple/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-accent-purple to-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Founded in 2025</h3>
                <p className="text-muted-foreground">By Our Team</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission & Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that every small business deserves access to the same cutting-edge technology that gives large corporations their competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-teal rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To empower the small businesses we serve, helping them stand out and leverage innovative AI solutions to achieve their goals. We're not just selling technology; we're building partnerships that transform how small businesses operate.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-pink rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Core Value</h3>
              </div>
              <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-lg p-4">
                <p className="text-accent-orange font-bold text-xl text-center">
                  "We have our clients' best interests in mind."
                </p>
              </div>
              <p className="text-muted-foreground mt-4">
                This isn't just a slogan—it's the foundation of everything we do. Every decision we make is guided by one question: "How does this help our client succeed?"
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While many companies focus solely on the technology, we focus on the relationship. Our key differentiator is our genuine commitment to helping clients on a personal level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Personal Care Meets Technical Excellence</h3>
              <p className="text-muted-foreground mb-6">
                We don't just implement AI—we become an extension of your team. Every solution we develop starts with understanding your business, your challenges, and your goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  <span className="text-muted-foreground">Personal consultation for your specific needs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-teal rounded-full"></div>
                  <span className="text-muted-foreground">Custom solutions tailored to your business</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                  <span className="text-muted-foreground">Ongoing support every step of the way</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Proven Experience, Real Results</h3>
              <p className="text-muted-foreground mb-6">
                Our team doesn't just talk about AI solutions; we've lived them. Having successfully implemented this technology in real business settings, we bring firsthand knowledge of what works.
              </p>
              <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 rounded-lg p-4">
                <p className="text-foreground font-semibold">
                  This practical experience means we don't just understand the technology—we understand your business challenges from the inside out.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Impact: Transforming How Small Businesses Operate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions help small businesses reclaim time, save money, and never miss a lead while standing out in competitive markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Reclaim Your Time</h3>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks and streamline processes to reclaim hours of your life
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-pink rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Never Miss a Lead</h3>
              <p className="text-sm text-muted-foreground">
                Ensure your business is always available, responsive, and ready to convert opportunities
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Stand Out in the Market</h3>
              <p className="text-sm text-muted-foreground">
                Level the playing field with tools and capabilities to compete effectively
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Save Money While Growing</h3>
              <p className="text-sm text-muted-foreground">
                Reduce operational costs while increasing capacity to serve more customers
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Looking Forward Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Looking Forward: Our Growth and Your Future
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            While NexusCore AI is still in its early stages, we have ambitious plans for growth and expansion. We're building something special here—a company that combines cutting-edge technology with genuine human care.
          </p>
          
          <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Us on This Journey</h3>
            <p className="text-muted-foreground mb-6">
              We're not just building AI solutions—we're building a community of small business owners who believe in the power of technology to transform their businesses and their lives.
            </p>
            <p className="text-foreground font-semibold">
              As we grow, our commitment to personal service and client success will only strengthen.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The future of small business success isn't about working harder—it's about working smarter. With NexusCore AI, you get more than just technology; you get a partner who understands your challenges, shares your vision, and is committed to your success.
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <p className="text-2xl font-bold text-foreground mb-4">
              "Let's start a conversation about how AI can transform your business. Because when you succeed, we succeed."
            </p>
            <p className="text-muted-foreground mb-6">
              NexusCore AI: Where Innovation Meets Personal Care
            </p>
            <button className="bg-gradient-to-r from-accent-purple to-accent-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-accent-purple/90 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us Today
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Heart icon component since it's not in lucide-react
const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export default About;