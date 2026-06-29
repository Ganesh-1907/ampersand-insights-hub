import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isHomePage && !isScrolled
            ? "py-5 bg-transparent shadow-none"
            : "py-3 bg-white/90 shadow-warm border-b border-warm-100/10 backdrop-blur-md"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span
                className={cn(
                  "font-display text-2xl font-bold tracking-tight transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white" : "text-primary"
                )}
              >
                AMPERSAND
              </span>
              <span
                className={cn(
                  "font-display text-2xl font-light tracking-tight transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-warm-200" : "text-warm-500"
                )}
              >
                PROFILES
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-body text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full relative",
                    location.pathname === link.path
                      ? "text-white bg-primary animate-fade-in"
                      : isHomePage && !isScrolled
                      ? "text-warm-100 hover:text-white hover:bg-white/10"
                      : "text-primary hover:text-white hover:bg-primary/85"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 rounded-full transition-all duration-300",
                isHomePage && !isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-primary hover:bg-primary/80 hover:text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-black/25"
            />

            {/* Dropdown Card in Top-Right with Gaps */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[76px] right-4 z-50 w-[210px] md:hidden bg-warm-900 rounded-2xl border border-white/10 flex flex-col p-4 shadow-2xl gap-3"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-display text-sm font-bold tracking-wide transition-all duration-300 relative inline-block py-2 px-3 rounded-lg",
                      location.pathname === link.path
                        ? "text-white bg-primary"
                        : "text-warm-200 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Bottom details */}
              <div className="border-t border-white/10 pt-2.5 text-warm-300">
                <div className="text-[10px] font-body">
                  <p className="text-white font-semibold mb-0.5">GET IN TOUCH</p>
                  <a
                    href="mailto:info@ampersandprofiles.com"
                    className="hover:text-primary transition-colors text-[10px] block font-body"
                  >
                    info@ampersandprofiles.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
