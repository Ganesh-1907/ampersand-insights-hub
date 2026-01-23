import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, MessageSquare, Users, Shield, HeartHandshake } from "lucide-react";
import servicesProjectManagement from "@/assets/services-project-management.jpg";

const features = [
  {
    icon: MessageSquare,
    title: "Communication First",
    description: "We believe that the secret of success is effective communication. From commissioning to billing, one of our directors is involved throughout every project.",
  },
  {
    icon: Users,
    title: "Single Point of Contact",
    description: "We provide an organised and friendly project manager who acts as a single point of contact, even when you are conducting international market research across many countries.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "The project manager proactively works with our in-house recruiters and external partners to ensure that your project is delivered to the highest possible standard.",
  },
  {
    icon: HeartHandshake,
    title: "Trust & Transparency",
    description: "We believe in transparency and building relationships with our clients that are based on trust. If we encounter a problem, we will let you know right away and take immediate action.",
  },
];

const process = [
  "Project briefing and scope definition",
  "Partner selection and coordination",
  "Regular progress updates",
  "Quality monitoring and assurance",
  "Issue resolution and support",
  "Client feedback integration",
];

const ProjectManagement = () => {
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
              Project{" "}
              <span className="text-primary">Management</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Our approach to project management is built on effective communication, transparency, and a commitment to delivering the highest quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={servicesProjectManagement}
                alt="Project Management"
                className="rounded-2xl shadow-xl w-full max-h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Excellence in Every Project
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles makes it a priority to work with the best partners. We hand select the best of the best in order to ensure that we deliver consistency across all markets, and we regularly review the performance of our partners.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                At the end of each project we also encourage our clients to provide feedback on what went well and any areas for improvement. We take this feedback seriously and are constantly seeking to refine our processes and learn from each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 card-elevated"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Our Project Management Process
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {process.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-olive-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-body text-foreground">{step}</span>
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
            Ready for seamless project management?
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

export default ProjectManagement;
