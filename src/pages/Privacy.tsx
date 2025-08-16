import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Privacy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Logo Header */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <Logo size="lg" />
        </Link>
      </div>

      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="h-auto min-h-screen pt-20">
        <section className="pt-20 pb-12 px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-6">
              Legal & Privacy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we protect your data and maintain transparency in everything we do.
            </p>
          </motion.div>
        </section>
      </AuroraBackground>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              <div className="text-center mb-8 pb-8 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Effective Date:</strong> January 1, 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> January 1, 2025
                </p>
              </div>

              <h2>Introduction</h2>
              <p>
                At NexusCore AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you interact with our website and services. We are dedicated to transparency and compliance with all applicable data protection regulations, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy laws.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this policy carefully to understand our practices regarding your personal information.
              </p>

              <h2>Data We Collect</h2>
              <h3>Types of Personal Information</h3>
              <p>We collect the following types of personal information directly from you when you interact with our website:</p>
              <ul>
                <li><strong>Contact Information:</strong> Email addresses, phone numbers, and names</li>
                <li><strong>Business Information:</strong> Company names and industry details (when provided)</li>
                <li><strong>Service Inquiries:</strong> Information related to your specific AI solution needs and requirements</li>
              </ul>

              <h3>How We Collect Your Data</h3>
              <p>All personal information is collected directly from you through:</p>
              <ul>
                <li>Contact forms on our website</li>
                <li>Service inquiry forms</li>
                <li>Direct communications with our team</li>
                <li>Demo scheduling requests</li>
              </ul>
              <p><strong>Important:</strong> We do not collect personal information from third-party sources or through automated tracking methods.</p>

              <h2>How We Use Your Data</h2>
              <h3>Primary Purposes</h3>
              <p>We use your personal information exclusively for the following purposes:</p>
              <ol>
                <li><strong>Service Delivery:</strong> To provide and manage the AI solutions and services you request</li>
                <li><strong>Communication:</strong> To respond to your inquiries, provide service updates, and maintain ongoing communication</li>
                <li><strong>Account Management:</strong> To manage your account and ensure proper service delivery</li>
                <li><strong>Security:</strong> To maintain the security and integrity of our services and protect against unauthorized access</li>
              </ol>

              <h2>Data Sharing and Third-Party Disclosure</h2>
              <h3>Our Commitment to Privacy</h3>
              <p><strong>NexusCore AI does NOT share, sell, rent, or disclose your personal information to any third parties, affiliates, or external entities.</strong></p>
              <p>Your personal data is used exclusively for internal purposes as outlined in this policy. We maintain strict control over your information and ensure it remains confidential within our organization.</p>

              <h2>Data Storage and Protection</h2>
              <h3>Security Measures</h3>
              <p>We implement comprehensive security measures to protect your personal information:</p>
              <ul>
                <li><strong>Encryption:</strong> All data is encrypted using industry-standard encryption protocols</li>
                <li><strong>Access Controls:</strong> Strict access controls limit data access to authorized personnel only</li>
                <li><strong>Secure Servers:</strong> Data is stored on secure, monitored servers with regular security updates</li>
                <li><strong>Network Security:</strong> Protected networks with firewalls and intrusion detection systems</li>
                <li><strong>Employee Training:</strong> Regular privacy and security training for all team members</li>
                <li><strong>Audit Logs:</strong> Comprehensive logging and monitoring of data access and modifications</li>
              </ul>

              <h2>Your Rights and Choices</h2>
              <p>You have several important rights regarding your personal data:</p>
              <ul>
                <li><strong>Right to Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of any inaccurate or incomplete information</li>
                <li><strong>Right to Deletion:</strong> <strong>You have the explicit right to request deletion of your personal data.</strong> NexusCore AI will promptly remove your data upon request.</li>
                <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your personal information</li>
                <li><strong>Right to Data Portability:</strong> Receive your personal data in a structured, commonly used format</li>
                <li><strong>Right to Object:</strong> Object to the processing of your personal information in certain situations</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>
              <h3>No Tracking Policy</h3>
              <p><strong>NexusCore AI explicitly states that we DO NOT use cookies or any similar tracking technologies on our website.</strong></p>
              <p>We believe in respecting your privacy and do not employ any automated tracking methods that could compromise your browsing experience or collect information without your explicit consent.</p>

              <h2>Regulatory Compliance</h2>
              <h3>Global Privacy Standards</h3>
              <p>NexusCore AI is fully compliant with all applicable data protection and privacy regulations, including:</p>
              <ul>
                <li><strong>GDPR (General Data Protection Regulation):</strong> European Union data protection standards</li>
                <li><strong>CCPA (California Consumer Privacy Act):</strong> California privacy rights</li>
                <li><strong>Other Applicable Laws:</strong> We monitor and comply with privacy laws in all jurisdictions where we operate</li>
              </ul>

              <h2>Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-muted/50 p-4 rounded-lg my-6">
                <p className="font-semibold text-foreground mb-2">NexusCore AI</p>
                <p className="text-muted-foreground mb-1">Email: contact@nexuscore-ai.com</p>
                <p className="text-muted-foreground mb-1">Phone: [Your Phone Number]</p>
                <p className="text-muted-foreground">Address: [Your Business Address]</p>
              </div>

              <h2>Commitment to Privacy</h2>
              <p>At NexusCore AI, we believe that privacy is a fundamental right. We are committed to:</p>
              <ul>
                <li><strong>Transparency:</strong> Being open and honest about how we handle your data</li>
                <li><strong>Security:</strong> Implementing robust measures to protect your information</li>
                <li><strong>Control:</strong> Giving you control over your personal data</li>
                <li><strong>Compliance:</strong> Maintaining the highest standards of privacy protection</li>
                <li><strong>Trust:</strong> Building and maintaining your trust through responsible data practices</li>
              </ul>

              <div className="text-center mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>This Privacy Policy is effective as of January 1, 2025, and will remain in effect until updated or replaced.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Privacy;