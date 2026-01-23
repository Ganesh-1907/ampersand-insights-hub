import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-warm-900 text-warm-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-terracotta-600/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-warm-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-primary-foreground">
                AMPERSAND
              </span>
              <span className="font-display text-2xl font-light text-warm-400">
                PROFILES
              </span>
            </div>
            <p className="text-warm-300 font-body text-sm leading-relaxed">
              A global market research firm specializing in data acquisition,
              providing splendid data for both quantitative and qualitative
              market research studies.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-warm-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-warm-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-2 text-warm-300 hover:text-primary-foreground transition-colors font-body text-sm"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Quantitative Solutions", path: "/services/quantitative" },
                { name: "Qualitative Solutions", path: "/services/qualitative" },
                { name: "Project Management", path: "/services/project-management" },
                { name: "Recruitment", path: "/services/recruitment" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-2 text-warm-300 hover:text-primary-foreground transition-colors font-body text-sm"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@ampersandprofiles.com"
                className="flex items-center gap-3 text-warm-300 hover:text-primary-foreground transition-colors font-body text-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-warm-800 group-hover:bg-primary flex items-center justify-center transition-colors">
                  <Mail size={16} />
                </div>
                info@ampersandprofiles.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-warm-300 hover:text-primary-foreground transition-colors font-body text-sm group"
              >
                <div className="w-10 h-10 rounded-full bg-warm-800 group-hover:bg-primary flex items-center justify-center transition-colors">
                  <Phone size={16} />
                </div>
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-warm-300 font-body text-sm">
                <div className="w-10 h-10 rounded-full bg-warm-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="pt-2">Kanakapura Road, Bangalore</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-400 font-body text-sm">
              © {new Date().getFullYear()} Ampersand Profiles. All rights reserved.
            </p>
            <p className="text-warm-500 font-body text-sm">
              Developed by Build Your Vision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
