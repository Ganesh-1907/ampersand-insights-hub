import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  "Founded in 2015 with expertise in data acquisition",
  "Multi-country and international research specialists",
  "Reliable and cost-effective single point of access",
  "Professional project management services",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-terracotta-200/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-warm-lg">
              <img
                src={aboutTeam}
                alt="Ampersand Profiles Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-warm-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-display font-bold gradient-text">10+</div>
              <div className="text-sm font-body text-muted-foreground">Years Experience</div>
            </motion.div>
            
            {/* Decorative Ring */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Trusted Partner in{" "}
                <span className="gradient-text">Market Research</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Ampersand Profiles was founded in 2015 as a market research firm
              specializing in data acquisition. From the start, our core business
              has been multi-country and international research, providing
              splendid data for both quantitative and qualitative market research
              studies across South Asia.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed">
              Our value proposition is to be a reliable and cost-effective single
              point of access for data collection, synthesizing large multinational
              internal resources with professional project management services.
            </p>

            <ul className="space-y-4 pt-2">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-body text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="group gradient-primary text-primary-foreground rounded-full px-8 shadow-warm hover:shadow-warm-lg transition-all duration-300" asChild>
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
