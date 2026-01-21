import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import servicesQualitative from "@/assets/services-qualitative.jpg";

const services = [
  {
    title: "Recruitment",
    description: "Finding the right respondents for your market research project through systematic recruitment processes.",
  },
  {
    title: "Project Management",
    description: "Professional project management with a single point of contact throughout your research journey.",
  },
  {
    title: "Discussion Guide Design & Review",
    description: "Building flexible discussion guides and well-structured questionnaires for effective research.",
  },
  {
    title: "Questionnaire Design & Programming",
    description: "Expert questionnaire design and programming for quantitative surveys.",
  },
  {
    title: "Moderation",
    description: "Skilled moderators creating the right environment for insightful focus group discussions.",
  },
  {
    title: "Facility Selection & Management",
    description: "Selection and management of appropriate research facilities for your studies.",
  },
  {
    title: "Translation & Interpreting",
    description: "Professional translation and interpreting services for multi-language research.",
  },
  {
    title: "Transcription, Note-taking, Videography",
    description: "Fast and accurate transcription, professional note-taking, and videography services.",
  },
  {
    title: "Analysis & Reporting",
    description: "Comprehensive analysis with actionable insights delivered in clear, professional reports.",
  },
];

const QualitativeSolutions = () => {
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
              Qualitative{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Ampersand Profiles's core services are respondent recruitment and professional project management for qualitative and quantitative fieldwork. In addition, we provide a wide range of support services for your market research project.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Description Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={servicesQualitative}
                alt="Qualitative Research"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Comprehensive Qualitative Research
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles delivers comprehensive qualitative research solutions designed to uncover deep insights into attitudes, motivations, and behaviors that drive decision-making. At the core of our qualitative offering are expert respondent recruitment and professional project management, ensuring that every study is executed with precision, consistency, and care.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We support both qualitative and quantitative fieldwork by managing the entire research process—from sourcing the right participants to coordinating logistics and ensuring smooth project delivery. Our experienced team works closely with clients to maintain high research standards while adapting to the specific needs of each project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 card-elevated group hover:border-primary border border-transparent"
              >
                <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <CheckCircle className="w-5 h-5 text-olive-600 group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Ready for in-depth consumer insights?
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

export default QualitativeSolutions;
