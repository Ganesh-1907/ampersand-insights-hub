import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-terracotta-400/20 to-terracotta-600/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-warm-300/20 to-warm-500/10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-warm-100 font-body text-sm"
          >
            <Sparkles className="w-4 h-4 text-terracotta-300" />
            <span>Global Market Research Excellence</span>
          </motion.div>

          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Data-Driven Insights for
            <br />
            <span className="bg-gradient-to-r from-terracotta-300 via-terracotta-200 to-warm-200 bg-clip-text text-transparent">
              Impactful Decisions
            </span>
          </motion.h1>

          <motion.p 
            className="font-body text-lg md:text-xl text-warm-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            A global market research firm specializing in multi-country and
            international research. We provide splendid data for both quantitative
            and qualitative studies across South Asia.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button size="lg" className="group gradient-primary text-primary-foreground border-0 px-8 py-6 text-base rounded-full shadow-warm-lg hover:shadow-2xl transition-all duration-300" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base rounded-full border-warm-300/30 text-warm-100 hover:bg-warm-100/10 hover:text-warm-50 backdrop-blur-sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-warm-300/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-terracotta-300 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
