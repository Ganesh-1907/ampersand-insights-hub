import { TrendingUp, Lightbulb, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: TrendingUp,
    title: "Impactful",
    description:
      "The information we provide is impactful and will have a positive impact on the baseline for your business.",
    gradient: "from-terracotta-500 to-terracotta-600",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      "Our work is innovative and based on the latest advances in technology. We are acrobatic and creative.",
    gradient: "from-warm-500 to-warm-600",
  },
  {
    icon: Users,
    title: "Expert",
    description:
      "Our team encompasses experts who apply their knowledge to provide you with clear direction and insightful information.",
    gradient: "from-terracotta-600 to-warm-600",
  },
  {
    icon: Handshake,
    title: "Engaged & Advisory",
    description:
      "We are proactive. When working with us, the spirit of partnership and shared responsibility is inherent.",
    gradient: "from-warm-600 to-terracotta-500",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm mb-4">
            Our Promise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="gradient-text">Ampersand Profiles?</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            Working with Ampro will help you make impactful decisions faster and
            keep you ahead of what's next.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-20 rounded-full blur-xl scale-150 group-hover:opacity-30 transition-opacity`} />
                
                <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-warm group-hover:shadow-warm-lg group-hover:scale-110 transition-all duration-300`}>
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
