import { Clock, TrendingDown, Timer } from "lucide-react";

const TransformSection = () => {
  const benefits = [
    {
      title: "24/7 AI Support",
      description: "Never miss a customer inquiry",
      icon: Clock,
      color: "text-accent-teal"
    },
    {
      title: "40% Cost Reduction",
      description: "Reduce customer service costs",
      icon: TrendingDown,
      color: "text-accent-green"
    },
    {
      title: "15hrs Time Saved",
      description: "Focus on growing your business",
      icon: Timer,
      color: "text-accent-orange"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 group border border-glass backdrop-blur-glass"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-glass mb-6 ${benefit.color} group-hover:scale-110 transition-transform shadow-inner`}>
                <IconComponent className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-teal transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {benefit.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;