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
            : "py-3 bg-white/90 dark:bg-zinc-950/90 shadow-warm dark:shadow-black/40 border-b border-warm-100/10 dark:border-white/10 backdrop-blur-md"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/ap_new_logo.png"
                alt="Ampersand Profiles"
                className="h-16 w-auto object-contain rounded"
              />
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
                      ? "text-primary-foreground bg-primary animate-fade-in"
                      : isHomePage && !isScrolled
                      ? "text-foreground/80 dark:text-warm-100 hover:text-foreground dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
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
                  ? "text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                  : "text-foreground hover:bg-muted"
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
              className="fixed inset-0 z-40 md:hidden bg-black/25 dark:bg-black/50"
            />

            {/* Dropdown Card in Top-Right with Gaps */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[76px] right-4 z-50 w-[210px] md:hidden bg-card rounded-2xl border border-border flex flex-col p-4 shadow-2xl gap-3"
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
                        ? "text-primary-foreground bg-primary"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Bottom details */}
              <div className="border-t border-border pt-2.5 text-muted-foreground">
                <div className="text-[10px] font-body">
                  <p className="text-foreground font-semibold mb-0.5">GET IN TOUCH</p>
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
