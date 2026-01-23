import { TrendingUp, Lightbulb, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: TrendingUp,
    title: "Impactful",
    description:
      "The information we provide is impactful and will have a positive impact on the baseline for your business.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      "Our work is innovative and based on the latest advances in technology. We are acrobatic and creative.",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Users,
    title: "Expert",
    description:
      "Our team encompasses experts who apply their knowledge to provide you with clear direction and insightful information.",
    gradient: "from-sky-500 to-sky-700",
  },
  {
    icon: Handshake,
    title: "Engaged & Advisory",
    description:
      "We are proactive. When working with us, the spirit of partnership and shared responsibility is inherent.",
    gradient: "from-cyan-500 to-cyan-700",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-warm" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            Our Promise
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Why Choose{" "}
            <span className="gradient-text">Ampersand Profiles?</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Working with Ampersand Profiles helps you make impactful decisions
            faster and stay ahead of what’s next.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-16 h-16 rounded-xl bg-primary ${value.gradient} flex items-center justify-center shadow-md`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground text-center mb-3">
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
