import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="font-display font-bold text-lg leading-tight">
                <span className="text-foreground">CHIPTUNING</span>
                <br />
                <span className="text-muted-foreground text-xs tracking-widest">FILE.DE</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Seit über 14 Jahren professionelles Chiptuning für PKW, LKW und Nutzfahrzeuge.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Stage 1 Tuning</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Stage 2 Tuning</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Stage 3 Tuning</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">DSG Tuning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ueber-uns" className="hover:text-foreground transition-colors">Über uns</Link></li>
              <li><Link to="/preisliste" className="hover:text-foreground transition-colors">Preisliste</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/kontakt" className="hover:text-foreground transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                andre@dyno-tuningfiles.de
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +49 (0) 123 456 78
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Hauptstraße 231a, 98529 Suhl
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Chiptuningfile.de – Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/kontakt" className="hover:text-foreground transition-colors">Impressum</Link>
            <Link to="/kontakt" className="hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
