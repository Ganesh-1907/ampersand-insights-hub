import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  "Founded in 2015 with expertise in data acquisition",
  "Multi-country and international research specialists",
  "Reliable and cost-effective single point of access",
  "Professional project management services",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutTeam}
                alt="Ampersand Profiles Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-bold">10+</div>
              <div className="text-sm font-body text-olive-100">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Your Trusted Partner in{" "}
                <span className="text-primary">Market Research</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              Ampersand Profiles was founded in 2015 as a market research firm
              specializing in data acquisition. From the start, our core business
              has been multi-country and international research, providing
              splendid data for both quantitative and qualitative market research
              studies across South Asia.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              Our value proposition is to be a reliable and cost-effective single
              point of access for data collection, synthesizing large multinational
              internal resources with professional project management services.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="olive" size="lg" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
