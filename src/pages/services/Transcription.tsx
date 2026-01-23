import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText, Video, Camera } from "lucide-react";
import servicesTranscription from "@/assets/services-transcription.jpg";

const services = [
  {
    icon: FileText,
    title: "Transcription & Note-Taking",
    description: "Even if you have a recording of every group or interview, we know it is often much faster to find the key insights and the best quotes in a set of written notes or a session transcript. Ampersand Profiles provides fast and accurate note-taking and transcription services at competitive rates.",
  },
  {
    icon: Video,
    title: "Professional Videography",
    description: "Most purpose-built research venues are equipped with fixed video cameras for streaming and recording sessions but a professional videographer will be able to record the session from alternative angles and zoom in to capture the expressions and behaviors of participants more clearly.",
  },
  {
    icon: Camera,
    title: "Video Editing",
    description: "We have relationships with experienced market research videographers in most locations where we operate. We can also arrange editing of recordings, such as producing a short video showing the highlights from each session.",
  },
];

const Transcription = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-olive-50">
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
              Transcription &{" "}
              <span className="text-primary">Videography</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Professional documentation services to capture every insight from your research sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={servicesTranscription}
                alt="Transcription and Videography"
                className="w-full rounded-2xl shadow-xl max-h-96 object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="font-body text-muted-foreground leading-relaxed">
                Ampersand Profiles provides fast, accurate, and confidential transcription services designed for qualitative and B2B market research. Our experienced team captures discussions clearly, consistently, and in formats that support effective analysis and reporting.
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Our Transcription Support Includes
                </h3>
                <ul className="list-disc list-inside space-y-2 font-body text-muted-foreground leading-relaxed">
                  <li>Accurate transcription of focus groups and in-depth interviews</li>
                  <li>Clear, well-structured session transcripts for easy review</li>
                  <li>Capture of key statements and relevant context</li>
                  <li>Support for both consumer and professional research studies</li>
                  <li>Reliable turnaround times at competitive rates</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 card-elevated"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
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
            Need transcription or videography services?
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

export default Transcription;
