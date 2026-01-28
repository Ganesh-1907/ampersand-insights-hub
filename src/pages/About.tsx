import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Lightbulb, Users, Handshake, Sparkles } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import globalResearch from "@/assets/global-research.jpg";
import { motion } from "framer-motion";


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
      <section className="pt-32 pb-12 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
           
            <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm mb-6"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>About Ampersand Profiles</span>
                        </motion.div>
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

      {/* Main Content (with highlights and floating card) */}
       <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl max-h-[520px] overflow-hidden shadow-warm-lg">
                <img
                  src={aboutTeam}
                  alt="Ampersand Profiles Team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-warm-lg hidden md:block">
                <div className="text-4xl font-display font-bold gradient-text">10+</div>
                <div className="text-sm font-body text-muted-foreground">Years Experience</div>
              </div>
              {/* Decorative Ring */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-full" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Trusted Partner in <span className="gradient-text">Market Research</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Ampersand Profiles was founded in 2015 as a market research firm specializing in data acquisition. From the start, our core business has been multi-country and international research, providing splendid data for both quantitative and qualitative market research studies across South Asia.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our value proposition is to be a reliable and cost-effective single point of access for data collection, synthesizing large multinational internal resources with professional project management services.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-foreground">Founded in 2015 with expertise in data acquisition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-foreground">Multi-country and international research specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-foreground">Reliable and cost-effective single point of access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-foreground">Professional project management services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
     <section className="py-16 relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />

  <div className="container mx-auto px-4 relative z-10">
    {/* Header */}
    <motion.div
      className="text-center max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
        What We Promise{" "}
        <span className="gradient-text">to Our Clients</span>
      </h2>

      <p className="text-muted-foreground text-lg leading-relaxed">
        Working with Ampersand Profiles helps you make impactful decisions
        faster and stay ahead of what’s next.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 place-items-center">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div
            className="relative w-[300px] h-[360px]
                       bg-card/95 backdrop-blur-2xl
                       border border-border/60
                       shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]
                       transition-all duration-500
                       hover:-translate-y-6
                       hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]
                       hover:rotate-[0.6deg]
                       vase-shape
                       p-10 flex flex-col items-center text-center"
          >
            {/* Light Sheen */}
            <div
              className="absolute inset-0 rounded-[32px]
                         bg-gradient-to-br from-white/40 via-white/10 to-transparent
                         opacity-70 pointer-events-none"
            />

            {/* Edge Highlight */}
            <div
              className="absolute inset-0 rounded-[32px]
                         ring-1 ring-white/20 pointer-events-none"
            />

            {/* Icon */}
            <div
              className="relative z-10 w-18 h-18 rounded-full bg-primary
                         flex items-center justify-center mb-8 shadow-xl"
            >
              <value.icon className="w-9 h-9 text-white" />
            </div>

            {/* Content */}
            <h3 className="relative z-10 text-2xl font-display font-semibold mb-4">
              {value.title}
            </h3>

            <p className="relative z-10 text-base text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Global Reach */}
      <section className="py-12">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      
      {/* Content */}
      <div className="space-y-6 order-2 lg:order-1 flex flex-col justify-center">
        <h2 className="font-display text-3xl font-bold text-foreground">
          International & Multi-Country Research
        </h2>

        <p className="font-body text-muted-foreground leading-relaxed">
          Our core strength lies in conducting multi-country and international
          research projects. We have built an extensive network across South
          Asia, enabling us to provide comprehensive insights across diverse
          markets.
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

        <Button variant="default" size="lg" asChild>
          <Link to="/contact" className="flex items-center gap-2">
            Partner With Us
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>

      {/* Image */}
      <div className="order-1 lg:order-2 h-full max-h-[400px]">
        <img
          src={globalResearch}
          alt="Global Research Network"
          className="rounded-2xl shadow-xl w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


    </Layout>
  );
};

export default About;
