import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import missionImg from "@/assets/mission-audience-connect.png";

export function MottoSection() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* Left Column: Mission Content */}
          <motion.div
            className="md:col-span-7 space-y-4 order-1 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] font-body">
                Our Mission
              </span>
            </div>

            {/* Mission Statement Header */}
            <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
              Connecting Brands and Audiences
            </h3>

            {/* Motto / Mission Text */}
            <div className="relative pl-6 md:pl-8 border-l-4 border-primary/40 py-2">
              <Quote className="absolute top-0 left-0 w-6 h-6 text-primary/10 -translate-x-2 -translate-y-3 pointer-events-none rotate-180" />
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
                "We connect with your audience for better develop your product/service offering and selling strategy to meet your audience's demands."
              </p>
            </div>

            {/* Subtle brand dots decoration */}
            <div className="flex items-center gap-2 pt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-8 h-0.5 rounded-full bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>

          </motion.div>

          {/* Right Column: Circular Image */}
          <motion.div
            className="md:col-span-5 flex justify-center items-center relative order-2 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Circular Image Container */}
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-300 hover:scale-105 group">
              <img
                src={missionImg}
                alt="Ampersand Profiles Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Decorative concentric rings */}
            <div className="absolute -inset-3 border border-primary/10 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
            <div className="absolute -inset-6 border border-dashed border-primary/5 rounded-full pointer-events-none animate-[spin_120s_linear_infinite]" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
