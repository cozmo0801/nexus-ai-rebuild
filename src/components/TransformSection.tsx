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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Small businesses face overwhelming customer inquiries and repetitive tasks that consume valuable time. 
            Our AI solutions automate these processes, allowing you to focus on what matters most - growing your business.
          </p>
        </div>

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
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-teal transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
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