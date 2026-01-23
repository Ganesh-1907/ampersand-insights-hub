import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, MapPin, Users, TrendingUp } from "lucide-react";
import servicesRealEstate from "@/assets/services-real-estate.jpg";

const expertise = [
  {
    icon: MapPin,
    title: "Detailed Location Assessment",
    description: "Comprehensive analysis of potential locations, evaluating demographics, accessibility, competition, and market potential.",
  },
  {
    icon: TrendingUp,
    title: "Feasibility Testing",
    description: "Rigorous testing methodologies to determine the viability and potential success of real estate developments.",
  },
  {
    icon: Users,
    title: "Consumer Preferences",
    description: "Understanding what consumers want in residential and commercial properties through targeted research.",
  },
];

const Expertise = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-5 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-olive-600 hover:text-primary transition-colors mb-6 font-body"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-primary">Expertise</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Specialized knowledge in real estate research, location assessment, feasibility testing, and understanding consumer preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={servicesRealEstate}
                alt="Real Estate Expertise"
                className="w-full rounded-2xl shadow-xl max-h-96 object-cover"
              />
            </div>
            <div className="space-y-3">
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles brings specialized expertise in real estate market research, supporting developers, investors, and planners with data-driven insights at every stage of decision-making. Our research approach combines deep market understanding with practical analysis to reduce risk and identify high-value opportunities.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We provide comprehensive location assessments, evaluating market dynamics, demand potential, competitive landscape, and surrounding infrastructure to help clients determine the viability of new developments or investments.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our feasibility testing focuses on understanding commercial potential, customer demand, and pricing sensitivity, enabling informed decisions before major commitments are made. By integrating quantitative and qualitative insights, we ensure recommendations are both realistic and actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-olive-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Real Estate Research
              </h2>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-12">
              Our specialized real estate research services help developers, investors, and businesses make informed decisions about property investments and developments.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-6 card-elevated text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-primary shadow-md rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-olive-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Leverage our expertise for your project
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

export default Expertise;
