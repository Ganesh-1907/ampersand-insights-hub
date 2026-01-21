import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BarChart3, Users } from "lucide-react";
import servicesQuantitative from "@/assets/services-quantitative.jpg";
import servicesQualitative from "@/assets/services-qualitative.jpg";

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-olive-600 hover:text-primary transition-colors mb-6 font-body"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Comprehensive quantitative and qualitative research solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Quantitative */}
            <Link
              to="/services/quantitative"
              className="group relative overflow-hidden rounded-2xl card-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={servicesQuantitative}
                  alt="Quantitative Research"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/90 via-olive-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Quantitative Research
                </h3>
                <p className="font-body text-olive-200 mb-4">
                  Data-driven insights through surveys, market segmentation, competitor analysis, and statistical research methodologies.
                </p>
                <span className="inline-flex items-center gap-2 text-olive-200 font-body font-medium group-hover:text-primary-foreground transition-colors">
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Qualitative */}
            <Link
              to="/services/qualitative"
              className="group relative overflow-hidden rounded-2xl card-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={servicesQualitative}
                  alt="Qualitative Research"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/90 via-olive-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Qualitative Research
                </h3>
                <p className="font-body text-olive-200 mb-4">
                  In-depth consumer insights through focus groups, interviews, moderation, and professional analysis.
                </p>
                <span className="inline-flex items-center gap-2 text-olive-200 font-body font-medium group-hover:text-primary-foreground transition-colors">
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Find the right research solution for your needs
          </h2>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
