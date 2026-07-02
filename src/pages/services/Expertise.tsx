import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, MapPin, Users, TrendingUp, HardHat, ShieldCheck, Wrench } from "lucide-react";
import servicesRealEstate from "@/assets/services-real-estate.jpg";
import servicesInfrastructure from "@/assets/services-infrastructure.png";

const realEstateExpertise = [
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

const infrastructureExpertise = [
  {
    icon: Wrench,
    title: "Building & Construction Products",
    description: "Deep research into construction equipment, structural materials, bio-based materials, insulation, and prefabricated construction.",
  },
  {
    icon: HardHat,
    title: "Multi-Methodology Research",
    description: "Combining qualitative, quantitative, and user experience (UX) research expertise with advanced research methodologies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Testing & Validation",
    description: "Rigorous and secure testing methodologies to ensure the safety, compliance, and viability of new construction materials and technologies.",
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
              Specialized knowledge in real estate and infrastructure research, including location assessment, feasibility testing, and building materials validation.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== REAL ESTATE SECTION ==================== */}
      <section className="py-12 border-b border-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-olive-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Real Estate Research
              </h2>
            </div>

            {/* Grid layout for Real Estate Image and Paragraphs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={servicesRealEstate}
                  alt="Real Estate Expertise"
                  className="w-full rounded-2xl shadow-xl max-h-96 object-cover"
                />
              </div>
              <div className="space-y-4">
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

            {/* Real Estate Sub-Cards */}
            <div className="grid md:grid-cols-3 gap-8 pt-6">
              {realEstateExpertise.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 card-elevated text-center"
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

      {/* ==================== INFRASTRUCTURE SECTION ==================== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center">
                <HardHat className="w-7 h-7 text-olive-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Infrastructure Research
              </h2>
            </div>

            {/* Grid layout for Infrastructure Image and Paragraphs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 lg:order-1 order-2">
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ampersand Profiles is a full-service infrastructure market research company helping building products. We partner with organizations across manufacturers of Construction Equipment, Construction Materials, Bio-based Materials, Building Materials, Fencing, Flooring Materials, Insulation Materials, Plumbing Materials, Roofing Materials, Structural Materials, Wall and Ceiling Materials, Windows and Doors, Construction Tech, and Prefabricated Construction.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Our team combines qualitative, quantitative, and UX research expertise with advanced methodologies and secure testing. We help brands, engineers, and building products manufacturers gain the intelligence needed to design, optimize, and market their offerings.
                </p>
              </div>
              <div className="lg:order-2 order-1">
                <img
                  src={servicesInfrastructure}
                  alt="Infrastructure & Building Products Expertise"
                  className="w-full rounded-2xl shadow-xl max-h-[380px] object-cover"
                />
              </div>
            </div>

            {/* Infrastructure Sub-Cards */}
            <div className="grid md:grid-cols-3 gap-8 pt-6">
              {infrastructureExpertise.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 card-elevated text-center"
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
