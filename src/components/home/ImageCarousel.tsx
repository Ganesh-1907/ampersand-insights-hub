import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import globalResearch from "@/assets/global-research.jpg";
import servicesQuantitative from "@/assets/services-quantitative.jpg";
import servicesQualitative from "@/assets/services-qualitative.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const slides = [
  {
    image: globalResearch,
    title: "Global Research Network",
    description: "Multi-country and international research across South Asia",
  },
  {
    image: servicesQuantitative,
    title: "Data-Driven Insights",
    description: "Comprehensive quantitative research solutions",
  },
  {
    image: servicesQualitative,
    title: "Qualitative Excellence",
    description: "In-depth focus groups and expert moderation",
  },
  {
    image: aboutTeam,
    title: "Expert Team",
    description: "Dedicated professionals committed to your success",
  },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-24 bg-olive-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-olive-300 font-body text-sm font-semibold uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Research in Action
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full relative aspect-video"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                      {slide.title}
                    </h3>
                    <p className="font-body text-olive-200">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary-foreground w-8"
                    : "bg-olive-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
