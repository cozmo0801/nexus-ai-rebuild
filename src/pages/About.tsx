import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Full Navigation Bar */}
      <Navigation />
      
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="h-auto min-h-screen pt-20">
        <section className="pt-20 pb-12 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                About NexusCore AI
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Empowering Small Businesses
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-teal">
                Through AI Innovation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              In 2025, we founded NexusCore AI with a vision to bring transformative AI technology to small businesses in a way that truly serves their unique needs.
            </motion.p>
          </div>
        </section>
      </AuroraBackground>

      {/* Founding Story Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Founding Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We started with a simple observation: while large corporations were rapidly adopting AI solutions, small businesses were being left behind. These businesses, the backbone of our economy, were missing out on the incredible efficiency and growth opportunities that AI could provide.
              </p>
              <p className="text-lg text-muted-foreground">
                Our founder had direct experience implementing this technology successfully in a business setting, demonstrating proven results and practical understanding. This hands-on experience became the foundation of our approach.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent-purple/10 to-accent-teal/10 p-8 rounded-2xl border border-accent-purple/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Founded in 2025</h3>
                <p className="text-muted-foreground">By Our Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission & Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're driven by a simple but powerful principle: putting our clients' best interests at the heart of everything we do.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Client-First Approach",
                description: "Every solution we create is built around your specific challenges and goals, not a one-size-fits-all template.",
                icon: "🎯"
              },
              {
                title: "Proven Results",
                description: "Our founder's direct experience implementing AI solutions ensures you get practical, tested approaches that work.",
                icon: "✅"
              },
              {
                title: "Continuous Partnership",
                description: "We don't just build solutions; we become long-term partners in your business growth and success.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl border border-border shadow-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In a world of generic AI solutions, we offer something truly unique: genuine care and personalized attention.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 p-8 md:p-12 rounded-2xl border border-accent-purple/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Personalized Care That Goes Beyond Technology
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our key differentiator isn't just the technology we use—it's our genuine commitment to helping you succeed on a personal level. We take the time to understand your business, your challenges, and your vision.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every solution is tailored to your unique needs, ensuring you get exactly what you need to grow and compete effectively in today's market.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-purple rounded-full"></div>
                  <span className="text-foreground">Custom solution design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                  <span className="text-foreground">Ongoing support & optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-purple rounded-full"></div>
                  <span className="text-foreground">24/7 AI automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                  <span className="text-foreground">Lead capture & nurturing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Impact We Create
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI isn't just about technology—it's about transforming how small businesses operate and compete.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "24/7",
                description: "Always-on lead capture and customer engagement"
              },
              {
                metric: "Hours Saved",
                description: "Reclaim valuable time for strategic growth"
              },
              {
                metric: "Cost Reduced",
                description: "Lower operational costs through automation"
              },
              {
                metric: "Growth",
                description: "Compete effectively with larger businesses"
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">
                  {impact.metric}
                </div>
                <p className="text-muted-foreground">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Looking Forward
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              While we're still new, our vision is ambitious. We see a future where every small business, regardless of size or industry, has access to the same powerful AI tools that give large corporations their competitive edge.
            </p>
            <p className="text-lg text-muted-foreground">
              We're building that future, one business at a time, with the same care and attention that we'd want for our own companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the growing number of small businesses that are already leveraging AI to save time, reduce costs, and never miss a lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/solutions"
                className="inline-flex items-center px-8 py-4 bg-accent-purple text-white font-semibold rounded-xl hover:bg-accent-purple/90 transition-colors duration-300"
              >
                Explore Our Solutions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-background text-foreground font-semibold rounded-xl border-2 border-accent-purple hover:bg-accent-purple hover:text-white transition-all duration-300"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}