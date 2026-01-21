import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm border-b border-border",
        isScrolled ? "py-4" : "py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={cn(
                "font-display text-2xl font-bold tracking-tight transition-colors text-foreground"
              )}
            >
              AMPERSAND
            </span>
            <span
              className={cn(
                "font-display text-2xl font-light tracking-tight transition-colors text-muted-foreground"
              )}
            >
              PROFILES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm font-medium transition-colors hover:text-foreground relative py-1",
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground",
                  location.pathname === link.path &&
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground after:rounded-full"
                )}
              >
                {link.name}
              </Link>
            ))}
            {/* <Button variant="secondary" size="sm" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-2 py-4 bg-background rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 font-body text-sm font-medium transition-colors hover:bg-muted",
                  location.pathname === link.path
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            {/* <div className="px-4 pt-2">
              <Button variant="secondary" size="sm" className="w-full" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
