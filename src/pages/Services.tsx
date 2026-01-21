import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/services/ServiceCard";
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
    description: "Specialized knowledge in real estate, location assessment, feasibility testing, and consumer preferences.",
    image: globalResearch,
    link: "/services/expertise",
  },
  {
    icon: PieChart,
    title: "Solutions",
    description: "Comprehensive quantitative and qualitative research solutions tailored to your business needs.",
    image: servicesQuantitative,
    link: "/services/solutions",
  },
  {
    icon: BarChart3,
    title: "Quantitative Solutions",
    description: "Market segmentation, competitor analysis, NPS, CSAT, branding studies, and pricing tests.",
    image: servicesQuantitative,
    link: "/services/quantitative",
  },
  {
    icon: Users,
    title: "Qualitative Solutions",
    description: "Focus groups, interviews, moderation, and in-depth consumer insight research.",
    image: servicesQualitative,
    link: "/services/qualitative",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Single point of contact with proactive communication throughout your research journey.",
    image: servicesProjectManagement,
    link: "/services/project-management",
  },
  {
    icon: UserCheck,
    title: "Recruitment",
    description: "Systematic recruitment process to find the right respondents for your market research.",
    image: servicesRecruitment,
    link: "/services/recruitment",
  },
  {
    icon: FileText,
    title: "Discussion Guide Design & Review",
    description: "Well-structured questionnaires and flexible discussion guides for effective research.",
    image: servicesDiscussionGuide,
    link: "/services/discussion-guide",
  },
  {
    icon: Mic,
    title: "Moderation",
    description: "Expert moderators creating the right environment for insightful focus group discussions.",
    image: servicesModeration,
    link: "/services/moderation",
  },
  {
    icon: Video,
    title: "Transcription & Videography",
    description: "Fast and accurate note-taking, transcription, and professional videography services.",
    image: servicesTranscription,
    link: "/services/transcription",
  },
  {
    icon: Building2,
    title: "Analysis & Reporting",
    description: "Comprehensive analysis with actionable insights delivered in clear, professional reports.",
    image: servicesAnalysis,
    link: "/services/analysis",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-olive-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-olive-500 font-body text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Research{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              From data collection to actionable insights, we offer end-to-end market research services designed to help you make impactful business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
