import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MottoSection } from "@/components/home/MottoSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ImageCarousel } from "@/components/home/ImageCarousel";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MottoSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ImageCarousel />
      <CTASection />
    </Layout>
  );
};

export default Index;
