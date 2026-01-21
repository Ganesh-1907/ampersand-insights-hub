import { TrendingUp, Lightbulb, Users, Handshake } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Impactful",
    description:
      "The information we provide is impactful and will have a positive impact on the baseline for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      "Our work is innovative and based on the latest advances in technology. We are acrobatic and creative.",
  },
  {
    icon: Users,
    title: "Expert",
    description:
      "Our team encompasses experts who apply their knowledge to provide you with clear direction and insightful information.",
  },
  {
    icon: Handshake,
    title: "Engaged & Advisory",
    description:
      "We are proactive. When working with us, the spirit of partnership and shared responsibility is inherent.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
            Our Promise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Why Choose{" "}
            <span className="text-primary">Ampersand Profiles?</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Working with Ampro will help you make impactful decisions faster and
            keep you ahead of what's next.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-olive-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <value.icon className="w-8 h-8 text-olive-600 group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
