import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, FileText, Scale, AlertTriangle, CheckCircle, Clock, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Terms = () => {
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
              Legal & Terms
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding our service agreement and your rights as a NexusCore AI client.
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
                Welcome to NexusCore AI. These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "User," or "you") and NexusCore AI ("Company," "we," "us," or "our") regarding your use of our custom AI automation services.
              </p>
              <p>
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>

              <h2>1. Services</h2>
              <h3>1.1 Service Description</h3>
              <p>
                NexusCore AI provides custom AI automation services, including but not limited to AI chatbots and other automated solutions tailored to meet your specific business needs. Our services are designed to help small businesses leverage artificial intelligence to improve efficiency, customer service, and operational effectiveness.
              </p>

              <h3>1.2 Nature of Service</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg my-6">
                <p className="text-yellow-800 font-semibold">
                  <strong>Important:</strong> NexusCore AI builds, owns, and operates these AI solutions on behalf of the client. While you receive the benefit of the service, NexusCore AI retains ownership and management of the underlying AI infrastructure and API access.
                </p>
              </div>
              <p>
                This arrangement allows us to provide you with professional-grade AI solutions while maintaining the technical expertise and infrastructure required for optimal performance.
              </p>

              <h2>2. User Responsibilities and Obligations</h2>
              <h3>2.1 Acceptable Use</h3>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are strictly prohibited from using NexusCore AI services for any malicious, illegal, or harmful activities, including but not limited to:
              </p>
              <ul>
                <li><strong>Spamming:</strong> Sending unsolicited messages or communications</li>
                <li><strong>Phishing:</strong> Attempting to deceive users into providing sensitive information</li>
                <li><strong>Harassment:</strong> Engaging in behavior that intimidates, threatens, or harasses others</li>
                <li><strong>Illegal Content Generation:</strong> Creating or distributing content that violates applicable laws</li>
                <li><strong>System Abuse:</strong> Attempting to disrupt, damage, or gain unauthorized access to our systems</li>
                <li><strong>Violation of Rights:</strong> Infringing on the intellectual property or privacy rights of others</li>
              </ul>

              <h2>3. NexusCore AI Responsibilities and Limitations</h2>
              <h3>3.2 Service Deactivation upon Non-Payment</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg my-6">
                <p className="text-red-800 font-semibold">
                  <strong>Critical Notice:</strong> If you fail to make payments for our services, NexusCore AI reserves the right to deactivate your AI automation service. This policy is necessary because NexusCore AI incurs ongoing costs for AI API usage and operational overhead on behalf of the client.
                </p>
              </div>

              <h2>4. Payments, Subscriptions, and Billing</h2>
              <h3>4.1 Payment Methods</h3>
              <p>
                NexusCore AI accepts almost all common payment methods, including major credit cards, debit cards, and electronic payment systems. Payment methods may vary based on your location and the specific services you select.
              </p>

              <h3>4.2 Billing Cycle</h3>
              <p>
                Our services are primarily offered on a monthly subscription basis. Billing occurs on a recurring monthly cycle unless otherwise specified in your service agreement. You authorize us to charge your payment method for all fees associated with your subscription.
              </p>

              <h2>5. Intellectual Property Rights</h2>
              <h3>5.1 NexusCore AI Ownership</h3>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg my-6">
                <p className="text-blue-800 font-semibold">
                  <strong>Important:</strong> NexusCore AI retains all intellectual property rights to the custom AI automations, software, underlying technology, and any modifications or improvements made to these systems.
                </p>
              </div>
              <p>This includes, but is not limited to:</p>
              <ul>
                <li>AI models and algorithms</li>
                <li>Software code and architecture</li>
                <li>User interface designs</li>
                <li>Integration methodologies</li>
                <li>Training data and models (excluding your specific business data)</li>
              </ul>

              <h2>6. Dispute Resolution</h2>
              <h3>6.1 Commitment to Amicable Resolution</h3>
              <p>
                NexusCore AI is committed to resolving disputes through direct, one-on-one conversation and mutual agreement. We believe that open communication and understanding are the best paths to resolution.
              </p>

              <h3>6.2 Dispute Resolution Process</h3>
              <p>In the event of a dispute:</p>
              <ol>
                <li><strong>Direct Communication:</strong> We encourage you to contact us directly to discuss any concerns or issues.</li>
                <li><strong>Good Faith Negotiation:</strong> Both parties agree to engage in good faith negotiations to resolve the dispute.</li>
                <li><strong>Escalation:</strong> If direct resolution is not possible, we may involve senior management or designated representatives.</li>
                <li><strong>Final Resolution:</strong> We are committed to finding a mutually acceptable solution to any dispute.</li>
              </ol>

              <h2>7. Termination</h2>
              <h3>7.1 Termination by User</h3>
              <p>
                You may terminate your service at any time by providing written notice to NexusCore AI. Termination will take effect at the end of your current billing cycle, and you will remain responsible for any charges incurred up to that date.
              </p>

              <h3>7.2 Termination by NexusCore AI</h3>
              <p>We may terminate or suspend your service immediately under the following circumstances:</p>
              <ul>
                <li><strong>Non-Payment:</strong> Failure to make required payments</li>
                <li><strong>Violation of Terms:</strong> Breach of these Terms of Service</li>
                <li><strong>Malicious Use:</strong> Use of our services for harmful or illegal purposes</li>
                <li><strong>Fraud or Misrepresentation:</strong> Providing false information or engaging in fraudulent activities</li>
              </ul>

              <h2>8. Prohibited Activities and Content</h2>
              <h3>8.1 Strictly Prohibited</h3>
              <p>The following activities are strictly prohibited and will result in immediate service termination:</p>
              <ul>
                <li><strong>Illegal Activities:</strong> Any use that violates applicable laws or regulations</li>
                <li><strong>Harmful Content:</strong> Creation or distribution of content that could harm individuals or businesses</li>
                <li><strong>System Abuse:</strong> Attempts to disrupt, damage, or gain unauthorized access to our systems</li>
                <li><strong>Violation of Rights:</strong> Infringement of intellectual property or privacy rights</li>
                <li><strong>Spam and Harassment:</strong> Unsolicited communications or harassing behavior</li>
              </ul>

              <h2>9. Age Restrictions</h2>
              <h3>9.1 Legal Age Requirement</h3>
              <p>
                You must be at least 18 years old to enter into these Terms of Service and use our services. By using our services, you represent and warrant that you meet this age requirement.
              </p>

              <h2>10. Changes to Terms of Service</h2>
              <h3>10.1 Notification of Changes</h3>
              <p>We may update these Terms of Service from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:</p>
              <ul>
                <li>Update the "Last Updated" date at the top of this document</li>
                <li>Provide notice of significant changes through our website, email, or other communication methods</li>
                <li>Maintain the same level of protection for your rights and privacy</li>
              </ul>

              <h2>11. General Provisions</h2>
              <h3>11.1 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
              </p>

              <h3>11.2 Entire Agreement</h3>
              <p>
                These Terms of Service, together with any additional agreements or policies referenced herein, constitute the entire agreement between you and NexusCore AI regarding your use of our services.
              </p>

              <h2>12. Contact Information</h2>
              <h3>12.1 Questions and Concerns</h3>
              <p>If you have any questions about these Terms of Service or need to discuss any concerns, please contact us:</p>
              <div className="bg-muted/50 p-4 rounded-lg my-6">
                <p className="font-semibold text-foreground mb-2">NexusCore AI</p>
                <p className="text-muted-foreground mb-1">Email: legal@nexuscore.ai</p>
                <p className="text-muted-foreground mb-1">Phone: [Your Phone Number]</p>
                <p className="text-muted-foreground">Address: [Your Business Address]</p>
              </div>

              <div className="text-center mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>By using NexusCore AI services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and NexusCore AI.</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Effective Date: January 1, 2025</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;