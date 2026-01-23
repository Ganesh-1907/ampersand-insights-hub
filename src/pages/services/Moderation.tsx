import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import servicesModeration from "@/assets/services-moderation.jpg";

const skills = [
  "Creating the right environment for the group",
  "Guiding discussions without asking leading questions",
  "Probing beyond initial answers with open-ended follow-ups",
  "Managing time to cover each topic in the right depth",
  "Ensuring dominant personalities don't take over",
  "Listening attentively to everyone's point of view",
  "Keeping discussions moving forward productively",
  "Maintaining participant engagement throughout",
];

const Moderation = () => {
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
              Professional{" "}
              <span className="text-primary">Moderation</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Expert moderators who create the right environment for insightful focus group discussions and deliver meaningful results.
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
                src={servicesModeration}
                alt="Professional Moderation"
                className="rounded-2xl shadow-xl w-full max-h-96 object-cover"
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-bold text-foreground">
                The Art of Skilled Moderation
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                A good moderator will create the right environment for the group, guide the discussion without asking leading questions, probe beyond the participants' initial answers by asking open-ended follow-up questions, and keep an eye on the time to ensure that each topic is covered in the right amount of depth.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Successful moderation of focus groups requires a great deal of skill and experience to create a comfortable atmosphere, ensure that dominant personalities don't take over the group, listen attentively to everyone's point of view and keep the discussion moving forward.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                A great moderator is enthusiastic about obtaining the group's insights and is able to keep the attention of participants so that at the end of 90 or 120 minutes everyone feels that the time was well spent and their opinion was valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Key Moderation Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4 card-elevated">
                  <CheckCircle className="w-5 h-5 text-olive-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Expert Moderator Selection
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ampro carefully selects the best moderators, with experience that aligns with the nature and topic of your research project. We will be happy to recommend the most appropriate individual for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Need an expert moderator for your research?
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

export default Moderation;
