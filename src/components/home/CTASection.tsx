import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-olive-400/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive-400/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make Data-Driven Decisions?
          </h2>
          <p className="font-body text-lg text-olive-100 mb-8 leading-relaxed">
            Partner with Ampersand Profiles and gain the insights you need to
            stay ahead in your market. Let's discuss how we can help transform
            your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-primary-foreground hover:bg-olive-600/30"
              asChild
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
