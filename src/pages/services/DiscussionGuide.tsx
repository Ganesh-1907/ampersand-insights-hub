import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import servicesDiscussionGuide from "@/assets/services-discussion-guide.jpg";

const DiscussionGuide = () => {
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
              Discussion Guide{" "}
              <span className="text-primary">Design & Review</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Building flexible discussion guides and well-structured questionnaires that get you the right information from your respondents.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={servicesDiscussionGuide}
                alt="Discussion Guide Design"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Get the Right Information
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Having found the right respondents for your consumer or B2B market research, you need to make sure you get the right information from them.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our team can help you build a flexible discussion guide for your market research focus group or a well-structured questionnaire for your quantitative survey.
              </p>
              <ul className="space-y-3">
                {[
                  "Flexible discussion guides for focus groups",
                  "Well-structured questionnaires for surveys",
                  "B2B and consumer research expertise",
                  "Review and optimization of existing guides",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-olive-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Need help designing your discussion guide?
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

export default DiscussionGuide;
