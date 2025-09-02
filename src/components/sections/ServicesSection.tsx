import { services } from "@/data/portfolio";
import { Card } from "@/components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground mb-6">What I'm Doing</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};