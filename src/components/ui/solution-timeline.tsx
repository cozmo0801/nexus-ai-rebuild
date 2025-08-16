"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Search, 
  PenTool, 
  Settings, 
  Rocket, 
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
  Info
} from "lucide-react";
import Timeline from "./timeline";

interface SolutionStep {
  step: number;
  title: string;
  description: string;
  detailedDescription: string;
  timeline: string;
  interactive: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  features: string[];
}

const solutionSteps: SolutionStep[] = [
  {
    step: 1,
    title: "Discovery & Analysis",
    description: "We analyze your current business processes and identify automation opportunities.",
    detailedDescription: "Our expert team conducts a comprehensive analysis of your current business operations, customer interactions, and workflow bottlenecks. We identify specific areas where AI automation can deliver the highest ROI and create a detailed implementation roadmap.",
    timeline: "Typically 1-2 days",
    interactive: "Schedule Discovery Call",
    icon: "🔍",
    color: "text-accent-purple",
    bgColor: "from-accent-purple/10 to-accent-purple/5",
    borderColor: "border-accent-purple/20",
    features: [
      "Business process audit",
      "Automation opportunity analysis",
      "ROI calculation",
      "Implementation roadmap",
      "Resource requirement assessment"
    ]
  },
  {
    step: 2,
    title: "Custom Solution Design",
    description: "Our team designs your unique automation solution tailored to your business needs.",
    detailedDescription: "Based on our discovery findings, we design a custom AI automation solution that integrates seamlessly with your existing systems. This includes chatbot flows, automation triggers, and integration points with your CRM, website, and other business tools.",
    timeline: "Typically 3-5 days",
    interactive: "View Design Examples",
    icon: "✏️",
    color: "text-accent-teal",
    bgColor: "from-accent-teal/10 to-accent-teal/5",
    borderColor: "border-accent-teal/20",
    features: [
      "Custom chatbot design",
      "Workflow automation mapping",
      "Integration architecture",
      "User experience design",
      "Technical specifications"
    ]
  },
  {
    step: 3,
    title: "Implementation & Testing",
    description: "We implement and thoroughly test your automation solution in a staging environment.",
    detailedDescription: "Our development team implements your custom solution with rigorous testing protocols. We test every interaction, integration, and edge case to ensure flawless performance before going live. This includes user acceptance testing and performance optimization.",
    timeline: "Typically 1-2 weeks",
    interactive: "See Implementation Timeline",
    icon: "⚙️",
    color: "text-accent-orange",
    bgColor: "from-accent-orange/10 to-accent-orange/5",
    borderColor: "border-accent-orange/20",
    features: [
      "Development & coding",
      "Integration testing",
      "User acceptance testing",
      "Performance optimization",
      "Security validation"
    ]
  },
  {
    step: 4,
    title: "Launch & Training",
    description: "Go live with full team training and ongoing support for your automation solution.",
    detailedDescription: "We launch your AI automation solution with comprehensive training for your entire team. This includes hands-on workshops, documentation, and ongoing support to ensure maximum adoption and success. We're here to help you succeed every step of the way.",
    timeline: "Typically 1 day",
    interactive: "Book Training Session",
    icon: "🚀",
    color: "text-accent-green",
    bgColor: "from-accent-green/10 to-accent-green/5",
    borderColor: "border-accent-green/20",
    features: [
      "Go-live deployment",
      "Team training workshops",
      "Documentation & guides",
      "Ongoing support",
      "Success monitoring"
    ]
  }
];

export const SolutionTimeline = () => {
  const handleInteractiveAction = (step: SolutionStep) => {
    switch (step.interactive) {
      case "Schedule Discovery Call":
        window.location.href = '/contact?type=discovery';
        break;
      case "View Design Examples":
        // Could open a modal with design examples
        console.log("Show design examples");
        break;
      case "See Implementation Timeline":
        // Could show detailed timeline
        console.log("Show implementation timeline");
        break;
      case "Book Training Session":
        window.location.href = '/contact?type=training';
        break;
      default:
        break;
    }
  };

  // Prepare timeline data for the new Timeline component
  const timelineData = solutionSteps.map((step) => ({
    title: step.title,
    content: (
      <div className="space-y-6">
        {/* Step header with icon and description */}
        <div className="flex items-start gap-4">
          <div className={cn(
            "flex items-center justify-center w-16 h-16 rounded-2xl text-3xl",
            step.bgColor
          )}>
            {step.icon}
          </div>
          <div className="flex-1">
            <h4 className={cn("text-2xl font-bold mb-2", step.color)}>
              {step.title}
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        {/* Timeline disclaimer */}
        <div className="bg-muted/50 border border-border rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent-purple mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Timeline: {step.timeline}
              </p>
              <p className="text-xs text-muted-foreground">
                Actual duration depends on project complexity, scope, and your specific requirements. 
                We'll provide a detailed timeline during the discovery phase.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed description */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h5 className="font-semibold text-foreground mb-3">
            What's Included:
          </h5>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {step.detailedDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {step.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-green flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive button */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleInteractiveAction(step)}
            className={cn(
              "border-2 transition-all duration-300 hover:scale-105",
              step.borderColor,
              `hover:${step.bgColor.split(' ')[0]}`
            )}
          >
            {step.interactive}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-accent-green" />
            <span>Included</span>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <div className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-orange/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-full px-4 py-2 mb-6">
            <Rocket className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-foreground">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Journey to
            <span className="block bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">
              AI Automation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We've streamlined the implementation process to get you up and running quickly. 
            Each step is designed to ensure your success with maximum efficiency.
          </p>

          {/* Timeline disclaimer */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-muted/50 border border-border rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 text-accent-purple" />
                <span>
                  <strong>Note:</strong> Timeline estimates are based on typical projects and may vary based on your specific requirements, project complexity, and scope.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Component */}
        <Timeline data={timelineData} />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mt-20"
      >
        <div className="bg-gradient-to-r from-accent-purple/10 to-accent-teal/10 border border-accent-purple/20 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's begin with a discovery call to understand your business needs and 
            create a custom automation roadmap with accurate timelines for your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => window.location.href = '/contact?type=discovery'}
              className="bg-gradient-to-r from-accent-purple to-accent-teal hover:from-accent-purple/90 hover:to-accent-teal/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Discovery Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/solutions'}
              className="border-2 border-accent-purple/30 hover:border-accent-purple/50 hover:bg-accent-purple/5 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionTimeline;