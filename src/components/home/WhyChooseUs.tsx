import { TrendingUp, Lightbulb, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: TrendingUp,
    title: "Impactful",
    description:
      "The information we provide is impactful and will have a positive impact on the baseline for your business.",
    rotate: -18,
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      "Our work is innovative and based on the latest advances in technology. We are acrobatic and creative.",
    rotate: -6,
  },
  {
    icon: Users,
    title: "Expert",
    description:
      "Our team encompasses experts who apply their knowledge to provide you with clear direction and insightful information.",
    rotate: 6,
  },
  {
    icon: Handshake,
    title: "Engaged & Advisory",
    description:
      "We are proactive. When working with us, the spirit of partnership and shared responsibility is inherent.",
    rotate: 18,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            Our Promise
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Why Choose <span className="gradient-text">Ampersand Profiles?</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Working with Ampersand Profiles helps you make impactful decisions
            faster and stay ahead of what’s next.
          </p>
        </motion.div>

        {/* Semi-Circle Cards */}
        <div className="relative flex justify-center items-end h-[300px] gap-6 flex-wrap md:flex-nowrap">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ rotate: value.rotate }}
              className="origin-bottom"
            >
              <div className="group w-[260px] h-[320px] bg-card/80 backdrop-blur-xl 
                              border border-border shadow-xl 
                              rounded-t-[140px] rounded-b-2xl 
                              px-6 pt-8 pb-16
                              transition-all duration-300 
                              hover:-translate-y-4 hover:scale-105">
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary 
                                flex items-center justify-center shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-center mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
