import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-olive-800 text-olive-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-primary-foreground">
                AMPERSAND
              </span>
              <span className="font-display text-xl font-light text-olive-300">
                PROFILES
              </span>
            </div>
            <p className="text-olive-200 font-body text-sm leading-relaxed">
              A global market research firm specializing in data acquisition,
              providing splendid data for both quantitative and qualitative
              market research studies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/services/quantitative"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Quantitative Solutions
              </Link>
              <Link
                to="/services/qualitative"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Qualitative Solutions
              </Link>
              <Link
                to="/services/project-management"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Project Management
              </Link>
              <Link
                to="/services/recruitment"
                className="text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                Recruitment
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-primary-foreground">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@ampersandprofiles.com"
                className="flex items-center gap-3 text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                <Mail size={16} className="text-olive-400" />
                info@ampersandprofiles.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-olive-200 hover:text-primary-foreground transition-colors font-body text-sm"
              >
                <Phone size={16} className="text-olive-400" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-olive-200 font-body text-sm">
                <MapPin size={16} className="text-olive-400 flex-shrink-0 mt-0.5" />
                <span>South Asia Regional Office</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-olive-300 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-olive-300 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-olive-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-olive-300 font-body text-sm">
            © {new Date().getFullYear()} Ampersand Profiles. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-olive-300 hover:text-primary-foreground transition-colors font-body text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-olive-300 hover:text-primary-foreground transition-colors font-body text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
