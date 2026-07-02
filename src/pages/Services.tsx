import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/services/ServiceCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  BarChart3,
  Users,
  ClipboardList,
  UserCheck,
  FileText,
  Mic,
  Video,
  PieChart,
  Briefcase,
  Sparkles,
} from "lucide-react";

import servicesRealEstate from "@/assets/services-real-estate.jpg";
import servicesQuantitative from "@/assets/services-quantitative.jpg";
import servicesQualitative from "@/assets/services-qualitative.jpg";
import servicesProjectManagement from "@/assets/services-project-management.jpg";
import servicesRecruitment from "@/assets/services-recruitment.jpg";
import servicesDiscussionGuide from "@/assets/services-discussion-guide.jpg";
import servicesModeration from "@/assets/services-moderation.jpg";
import servicesTranscription from "@/assets/services-transcription.jpg";
import servicesAnalysis from "@/assets/services-analysis.jpg";
import globalResearch from "@/assets/global-research.jpg";

const services = [
  {
    icon: Briefcase,
    title: "Expertise",
    description:
      "Specialized knowledge in real estate and infrastructure research, feasibility testing, building products validation, and consumer insights.",
    image: globalResearch,
    link: "/services/expertise",
  },
  {
    icon: BarChart3,
    title: "Quantitative Solutions",
    description:
      "Market segmentation, competitor analysis, NPS, CSAT, branding studies, and pricing tests.",
    image: servicesQuantitative,
    link: "/services/quantitative",
  },
  {
    icon: Users,
    title: "Qualitative Solutions",
    description:
      "Focus groups, interviews, moderation, and in-depth consumer insight research.",
    image: servicesQualitative,
    link: "/services/qualitative",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Single point of contact with proactive communication throughout your research journey.",
    image: servicesProjectManagement,
    link: "/services/project-management",
  },
  {
    icon: UserCheck,
    title: "Recruitment",
    description:
      "Systematic recruitment process to find the right respondents for your market research.",
    image: servicesRecruitment,
    link: "/services/recruitment",
  },
  {
    icon: FileText,
    title: "Discussion Guide Design & Review",
    description:
      "Well-structured questionnaires and flexible discussion guides for effective research.",
    image: servicesDiscussionGuide,
    link: "/services/discussion-guide",
  },
  {
    icon: Mic,
    title: "Moderation",
    description:
      "Expert moderators creating the right environment for insightful focus group discussions.",
    image: servicesModeration,
    link: "/services/moderation",
  },
  {
    icon: Video,
    title: "Transcription & Videography",
    description:
      "Fast and accurate note-taking, transcription, and professional videography services.",
    image: servicesTranscription,
    link: "/services/transcription",
  },
  {
    icon: Building2,
    title: "Analysis & Reporting",
    description:
      "Comprehensive analysis with actionable insights delivered in clear, professional reports.",
    image: servicesAnalysis,
    link: "/services/analysis",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Research{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From data collection to actionable insights, we offer end-to-end
              market research services designed to help you make impactful
              business decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Alternating Rows */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const isImageLeft = index % 2 === 0;
              return (
                <div key={index} className="w-full flex justify-center">
                  <div
                    className={`flex flex-col w-full shadow-lg bg-card/75 border border-border/50 backdrop-blur-md overflow-hidden items-stretch rounded-3xl md:w-5/6 md:h-64 ${
                      isImageLeft
                        ? "md:flex-row md:rounded-l-full md:rounded-r-3xl"
                        : "md:flex-row-reverse md:rounded-r-full md:rounded-l-3xl"
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`w-full h-48 md:w-2/5 md:h-full flex items-center overflow-hidden ${
                        isImageLeft ? "md:rounded-l-full" : "md:rounded-r-full"
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Text */}
                    <div className="w-full md:w-3/5 flex flex-col justify-center px-6 py-8 md:py-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary shrink-0 animate-fade-in">
                          <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p
                        className="font-body text-muted-foreground text-sm sm:text-base mb-4 italic leading-relaxed"
                        style={{ fontFamily: "cursive, sans-serif" }}
                      >
                        {service.description}
                      </p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-1 text-primary font-medium hover:text-primary/80 transition-colors font-body text-sm font-semibold"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
