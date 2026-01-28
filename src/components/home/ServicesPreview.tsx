import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, FileText, Video } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: BarChart3,
    title: "Quantitative Solutions",
    description:
      "Market segmentation, competitor analysis, NPS, CSAT, and comprehensive data-driven research.",
    link: "/services/quantitative",
    color: "from-terracotta-500 to-terracotta-600",
  },
  {
    icon: Users,
    title: "Qualitative Solutions",
    description:
      "Focus groups, in-depth interviews, and expert moderation for rich consumer insights.",
    link: "/services/qualitative",
    color: "from-warm-500 to-warm-600",
  },
  {
    icon: FileText,
    title: "Project Management",
    description:
      "Single point of contact with proactive communication throughout your research journey.",
    link: "/services/project-management",
    color: "from-terracotta-600 to-warm-600",
  },
  {
    icon: Video,
    title: "Analysis & Reporting",
    description:
      "Comprehensive analysis with actionable insights delivered in clear, professional reports.",
    link: "/services/analysis",
    color: "from-warm-600 to-terracotta-500",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end market research services designed to deliver clarity,
            confidence, and measurable impact.
          </p>
        </motion.div>

        {/* PREMIUM SERVICE CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group relative block rounded-3xl p-8 
                           bg-card/70 backdrop-blur-xl 
                           border border-border/50
                           shadow-warm transition-all duration-500
                           hover:-translate-y-2 hover:shadow-warm-lg
                           hover:border-primary/40"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 
                                group-hover:opacity-100 transition
                                bg-gradient-to-br from-primary/10 to-transparent" />

                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl 
                              bg-gradient-to-br ${service.color}
                              flex items-center justify-center mb-6
                              shadow-lg group-hover:scale-110 
                              transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-semibold mb-3 
                               group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="relative z-10 text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="relative z-10 inline-flex items-center gap-2 
                                text-primary font-medium text-sm">
                  Learn more
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            size="lg"
            className="group gradient-primary rounded-full px-10 shadow-warm 
                       hover:shadow-warm-lg transition-all"
            asChild
          >
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
