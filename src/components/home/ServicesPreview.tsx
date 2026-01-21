import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, FileText, Video } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Quantitative Solutions",
    description:
      "Market segmentation, competitor analysis, NPS, CSAT, and comprehensive data-driven research.",
    link: "/services/quantitative",
  },
  {
    icon: Users,
    title: "Qualitative Solutions",
    description:
      "Focus groups, in-depth interviews, and expert moderation for rich consumer insights.",
    link: "/services/qualitative",
  },
  {
    icon: FileText,
    title: "Project Management",
    description:
      "Single point of contact with proactive communication throughout your research journey.",
    link: "/services/project-management",
  },
  {
    icon: Video,
    title: "Analysis & Reporting",
    description:
      "Comprehensive analysis with actionable insights delivered in clear, professional reports.",
    link: "/services/analysis",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-olive-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Research{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            We provide end-to-end market research services tailored to your
            business needs, from data collection to actionable insights.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-background rounded-xl p-6 card-elevated hover:border-olive-200 border border-transparent"
            >
              <div className="w-12 h-12 bg-olive-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-olive-600 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-olive-600 font-body text-sm font-medium group-hover:text-primary transition-colors">
                Learn more
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="olive" size="lg" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
