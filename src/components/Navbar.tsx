import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ShieldCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Konfigurator", path: "/konfigurator" },
  { label: "Services", path: "/services" },
  { label: "Preisliste", path: "/preisliste" },
  { label: "FAQ", path: "/faq" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="font-display font-bold text-lg leading-tight">
            <span className="text-foreground">CHIPTUNING</span>
            <br />
            <span className="text-muted-foreground text-xs tracking-widest">FILE.DE</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/haendlerbereich">Händlerbereich</Link>
          </Button>
          <Button size="sm" className="bg-gradient-hero hover:opacity-90" asChild>
            <Link to="/konfigurator">Jetzt konfigurieren</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" className="bg-gradient-hero mt-2" asChild>
                <Link to="/konfigurator" onClick={() => setMobileOpen(false)}>
                  Jetzt konfigurieren
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
