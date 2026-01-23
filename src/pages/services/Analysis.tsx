import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText, BarChart3, PieChart } from "lucide-react";
import servicesAnalysis from "@/assets/services-analysis.jpg";

const services = [
  {
    icon: FileText,
    title: "Qualitative Analysis & Reporting",
    description: "When writing reports on qualitative research studies, we bring out the key messages and support our conclusions with relevant quotes. And of course, we include back-up information on the recruitment process, the respondents, and the dates and times of sessions.",
  },
  {
    icon: BarChart3,
    title: "Quantitative Data Analysis",
    description: "For quantitative market research studies, we can arrange a variety of data analyses ranging from simple tabulation of the raw data and descriptive statistics to cross-tabulations by client-defined groups and more advanced statistical techniques such as conjoint analysis.",
  },
  {
    icon: PieChart,
    title: "Custom Report Formats",
    description: "We can provide a range of report styles ranging from an executive briefing in PowerPoint to a detailed written report on all the findings. We take time to understand the purpose of the report and the audience and vary our approach accordingly.",
  },
];

const Analysis = () => {
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
              Analysis &{" "}
              <span className="text-primary">Reporting</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Comprehensive analysis with actionable insights delivered in clear, professional reports tailored to your audience.
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
                src={servicesAnalysis}
                alt="Analysis and Reporting"
                className="rounded-2xl shadow-xl w-full max-h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Insights That Drive Action
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                We take time to understand the purpose of the report and the audience and vary our approach accordingly. Whether you need a quick executive summary or a comprehensive detailed report, we deliver insights that matter.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our analysis goes beyond simple data presentation to provide actionable recommendations that help you make informed business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 card-elevated"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-olive-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-olive-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {service.description}
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
            Need comprehensive research analysis?
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

export default Analysis;
