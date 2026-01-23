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
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-warm" />
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
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
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Research{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            We provide end-to-end market research services tailored to your
            business needs, from data collection to actionable insights.
          </p>
        </motion.div>

        {/* Service Cards - Bento Style */}
        <div className="grid md:grid-cols-2 gap-6">
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
                className="group block p-8 rounded-3xl bg-card border border-border/50 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-body text-sm font-medium">
                  Learn more
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="group gradient-primary text-primary-foreground rounded-full px-8 shadow-warm hover:shadow-warm-lg transition-all duration-300" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
