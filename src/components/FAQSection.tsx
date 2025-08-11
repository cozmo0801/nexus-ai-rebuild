import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DollarSign, Target, TrendingUp, Lock } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What kind of ROI can I expect from AI automation?",
      answer:
        "Most businesses see a 3-5x return on investment within the first 6 months. Our AI automation typically reduces operational costs by 40-60% while increasing customer satisfaction and sales conversion rates.",
      icon: DollarSign,
      bgColor: "bg-muted/50 border-border", // unified background
      iconColor: "text-accent-green",
    },
    {
      id: "item-2",
      question: "Do I need technical knowledge to manage the AI systems?",
      answer:
        "Not at all! Our platform is designed for business owners, not developers. Setup takes just minutes with our one-click integration, and our intuitive dashboard makes management simple and straightforward.",
      icon: Target,
      bgColor: "bg-muted/50 border-border",
      iconColor: "text-accent-purple",
    },
    {
      id: "item-3",
      question: "How does AI help with lead generation and sales?",
      answer:
        "Our AI chatbots qualify leads 24/7, engage visitors instantly, and guide them through your sales funnel. This results in up to 40% higher conversion rates and ensures you never miss a potential customer.",
      icon: TrendingUp,
      bgColor: "bg-muted/50 border-border",
      iconColor: "text-accent-green",
    },
    {
      id: "item-4",
      question: "Is my customer data secure with your AI platform?",
      answer:
        "Absolutely. We use bank-level encryption and are SOC 2 compliant. Your data is stored securely and never shared with third parties. We take privacy and security as seriously as you do.",
      icon: Lock,
      bgColor: "bg-muted/50 border-border",
      iconColor: "text-accent-purple",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about AI automation for your business
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`glass-card border rounded-3xl px-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 backdrop-blur-glass ${faq.bgColor}`}
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-glass ${faq.iconColor} shadow-inner group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-semibold text-foreground group-hover:text-accent-purple transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-14 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;