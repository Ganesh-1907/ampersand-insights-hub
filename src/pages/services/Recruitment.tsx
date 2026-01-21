import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import servicesRecruitment from "@/assets/services-recruitment.jpg";

const process = [
  {
    step: "1",
    title: "Brief Review",
    description: "We review your brief and make sure that we understand it fully, then consult on the best screener questions to ensure that all necessary information is captured.",
  },
  {
    step: "2",
    title: "Initial Matching",
    description: "We begin by making an initial match using our in-house database or online data sources to gather a pool of potential respondents.",
  },
  {
    step: "3",
    title: "Verification",
    description: "Once we gather potential respondents, we contact them to verify that they meet your requirements and are keen to take part.",
  },
  {
    step: "4",
    title: "Profile Grid",
    description: "We enter their details and screener responses in an online profile grid which you can review at any time, allowing you to track our progress.",
  },
  {
    step: "5",
    title: "Secondary Screening",
    description: "Where beneficial, we can arrange for you to carry out secondary screening, either by phone in advance or when respondents arrive at the research venue.",
  },
];

const Recruitment = () => {
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
              Respondent{" "}
              <span className="text-primary">Recruitment</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Whether you've already developed a screener questionnaire, or you'd like us to develop one for you based on your recruitment brief, we'll find the right respondents for your market research project.
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
                src={servicesRecruitment}
                alt="Recruitment"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Systematic Recruitment Process
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles operates a systematic recruitment process using trained recruiters to source participants who match your requirements.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                In addition to finding participants who meet your specification, we always try to find participants who are enthusiastic and have a genuine interest in your market research project.
              </p>
              <ul className="space-y-3">
                {[
                  "Trained professional recruiters",
                  "In-house database and online sources",
                  "B2B and specialist profile recruitment",
                  "Real-time progress tracking",
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

      {/* Process Timeline */}
      <section className="py-24 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Our Recruitment Process
            </h2>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-background rounded-xl p-6 card-elevated"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
            Need the right respondents for your research?
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

export default Recruitment;
