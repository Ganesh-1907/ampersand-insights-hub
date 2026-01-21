import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Lightbulb, Users, Handshake } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import globalResearch from "@/assets/global-research.jpg";

const values = [
  {
    icon: Target,
    title: "Impactful",
    description: "The information that Ampro provides is impactful, and will have a positive impact on the base line for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "The work we deliver is innovative and based on the latest advances in technology, we are acrobatic and creative.",
  },
  {
    icon: Users,
    title: "Expert",
    description: "Our team is encompassing of experts who apply their knowledge to provide you with clear direction, and insightful information.",
  },
  {
    icon: Handshake,
    title: "Engaged & Advisory",
    description: "We are proactive, and when working with us, the spirit of partnership and shared responsibility is inherent.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
              About Ampersand Profiles
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Partner in{" "}
              <span className="text-primary">Market Research Excellence</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Founded in 2015, Ampersand Profiles has established itself as a leading market research firm specializing in data acquisition and multi-country research across South Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={aboutTeam}
                alt="Ampersand Profiles Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-display font-bold">2015</div>
                <div className="text-sm font-body text-olive-100">Founded</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles was founded in 2015 as a market research firm specializing in data acquisition; in other words, from the start our core business has been multi-country and international research.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We provide splendid data for both quantitative and qualitative market research studies across South Asia. Our value proposition is to be a reliable and cost effective single point of access for data collection, synthesizes large multinational internal resources with professional project management services.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampro provides you with hypercritical information at speed. We apply our vast experience to clients, so you can move forward with confidence. Our spirit of innovation and focus on technology fused with expertise makes us different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
              Our Promise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What We Promise to Our Clients
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Working with Ampro will help you make impactful decisions faster and keep you ahead of what's next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-xl p-6 card-elevated text-center">
                <div className="w-14 h-14 mx-auto bg-olive-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-olive-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
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

      {/* Global Reach */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-display text-3xl font-bold text-foreground">
                International & Multi-Country Research
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our core strength lies in conducting multi-country and international research projects. We have built an extensive network across South Asia, enabling us to provide comprehensive insights across diverse markets.
              </p>
              <ul className="space-y-3">
                {[
                  "Extensive regional network across South Asia",
                  "Multi-language research capabilities",
                  "Local expertise with global standards",
                  "Consistent methodology across markets",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-olive-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="olive" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Partner With Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={globalResearch}
                alt="Global Research Network"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
