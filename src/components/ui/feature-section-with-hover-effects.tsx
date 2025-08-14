import { cn } from "@/lib/utils";
import {
  MessageSquare,
  Target,
  Puzzle,
  Globe,
  Shield,
  Rocket,
  DollarSign,
  TrendingUp,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "24/7 AI Support",
      description: "Intelligent chatbots that never sleep, providing instant customer support around the clock.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Smart Lead Capture",
      description: "Automatically capture and qualify leads from your website, social media, and other channels.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing CRM, email, and business tools for maximum efficiency.",
      icon: <Puzzle className="h-6 w-6" />,
    },
    {
      title: "Local Expertise",
      description: "Built specifically for Central Florida businesses with deep understanding of local market needs.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security with SOC 2 compliance and GDPR readiness for your peace of mind.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined setup process tailored to your business.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "Cost Reduction",
      description: "Reduce customer service costs by up to 40% while improving response times and satisfaction.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Scalable Growth",
      description: "Grow your business without growing your team - our AI scales with your business needs.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};