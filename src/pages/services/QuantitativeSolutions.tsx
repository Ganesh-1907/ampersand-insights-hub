import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import servicesQuantitative from "@/assets/services-quantitative.jpg";

const solutions = [
  {
    title: "Market Segmentation",
    description: "Although new regional markets offer many opportunities for companies, they also entail risks. As a basis for business decisions, we segment the target markets according to jointly defined criteria. In this way, success factors can be derived and sales and marketing strategies can be developed.",
  },
  {
    title: "Competitor Analysis",
    description: "The strengths and weaknesses of one's own products and services often only emerge in comparison to the competition. Using different methodological approaches, we take a close look at our competitors and our customers and thus determine our own need for action in order to improve our market position.",
  },
  {
    title: "Expertise in B2B Survey",
    description: "Through extensive experience we have built a worldwide database of high net worth individuals and business professionals in various industries, such as IT-Management, Financial Services, just to name a few. Our B2B panels consist of validated and qualified decision makers at various levels and positions.",
  },
  {
    title: "Test Your New Concepts",
    description: "Test your new concepts and consolidate them. Identify the underlying reasons for adherence. Identify concrete areas for optimization. Helping to put it into action.",
  },
  {
    title: "Branding & Brand Tracking",
    description: "We take stock of the brand's attributes, consumer experiences and emotions generated. Once the benchmark is established, brand tracking determines the effectiveness of marketing efforts.",
  },
  {
    title: "Pre & Post Campaign Test",
    description: "Optimize the ROI of marketing and advertising actions, by evaluating brand association, memorization of key messages, purchase intent, changes in attitudes and behaviors.",
  },
  {
    title: "Notoriety Study",
    description: "As an indicator of brand visibility in the market, our spontaneous and assisted method of measuring awareness allows us to evaluate the effectiveness of marketing investments to increase brand recognition.",
  },
  {
    title: "Pricing Test",
    description: "An approach by the relative importance of each product attribute in the purchase decision to understand how the demand for the product varies according to the evolution of the price.",
  },
  {
    title: "NPS (Net Promoter Score)",
    description: "The Net Promoter Score is an indicator of how likely customers are to recommend the company, its products or services to other consumers. It measures customer loyalty and engagement with the brand.",
  },
  {
    title: "CSAT (Customer Satisfaction Score)",
    description: "The Customer Satisfaction Score is an indicator that measures overall customer satisfaction using a rating scale. The average score provided is an aggregate measure that allows comparison over time between different products or services.",
  },
];

const QuantitativeSolutions = () => {
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
              Quantitative{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Data-driven research methodologies that provide measurable insights for informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Description Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={servicesQuantitative}
                alt="Quantitative Research"
                className="rounded-2xl shadow-xl w-full max-h-96 object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Data-Driven Quantitative Research
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles delivers data-driven quantitative research solutions designed to provide measurable, reliable insights that support confident business decision-making. Our methodologies combine statistical rigor with practical interpretation, ensuring that data translates into clear strategic direction.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our quantitative solutions help organizations:
              </p>
              <ul className="list-disc pl-6 font-body text-muted-foreground space-y-2">
                <li>Measure market potential and customer demand</li>
                <li>Track brand performance and campaign effectiveness</li>
                <li>Evaluate pricing sensitivity and purchase drivers</li>
                <li>Benchmark performance against competitors</li>
                <li>Identify opportunities for growth and optimization</li>
              </ul>
             
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 card-elevated border-l-4 border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-olive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-olive-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Ready to leverage quantitative insights?
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

export default QuantitativeSolutions;
