import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const priceData = [
  { category: "PKW Benziner", s1: "399€", s2: "599€", s3: "899€", dpf: "—", vmax: "199€" },
  { category: "PKW Diesel", s1: "399€", s2: "599€", s3: "899€", dpf: "199€", vmax: "199€" },
  { category: "LKW / Transporter", s1: "499€", s2: "699€", s3: "—", dpf: "249€", vmax: "249€" },
  { category: "Motorrad", s1: "349€", s2: "549€", s3: "799€", dpf: "—", vmax: "149€" },
  { category: "Agrar / Baumaschinen", s1: "599€", s2: "799€", s3: "—", dpf: "299€", vmax: "—" },
  { category: "DSG / S-Tronic Tuning", s1: "299€", s2: "—", s3: "—", dpf: "—", vmax: "—" },
];

const dealerPrices = [
  { label: "Stage 1 PKW", original: "399€", dealer: "ab 249€" },
  { label: "Stage 2 PKW", original: "599€", dealer: "ab 399€" },
  { label: "DSG Tuning", original: "299€", dealer: "ab 199€" },
];

const PreislistePage = () => {
  return (
    <Layout>
      <section className="py-20 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Transparente Preise</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">Unsere Preisliste</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Faire und transparente Preise für alle Tuning-Services. Für genaue Preise nutzen Sie unseren Konfigurator.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-x-auto rounded-xl border border-border shadow-card"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="text-left p-4 font-display font-semibold">Fahrzeugkategorie</th>
                  <th className="p-4 font-display font-semibold">Stage 1<br /><span className="text-xs text-muted-foreground font-normal">ECU Optimierung</span></th>
                  <th className="p-4 font-display font-semibold">Stage 2<br /><span className="text-xs text-muted-foreground font-normal">Performance</span></th>
                  <th className="p-4 font-display font-semibold">Stage 3<br /><span className="text-xs text-muted-foreground font-normal">Maximum</span></th>
                  <th className="p-4 font-display font-semibold">DPF-Off<br /><span className="text-xs text-muted-foreground font-normal">Wettbewerb</span></th>
                  <th className="p-4 font-display font-semibold">V-Max<br /><span className="text-xs text-muted-foreground font-normal">Aufhebung</span></th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-card/50 transition-colors">
                    <td className="p-4 font-medium">{row.category}</td>
                    <td className="p-4 text-center text-primary font-semibold">{row.s1}</td>
                    <td className="p-4 text-center text-primary font-semibold">{row.s2}</td>
                    <td className="p-4 text-center text-primary font-semibold">{row.s3}</td>
                    <td className="p-4 text-center text-primary font-semibold">{row.dpf}</td>
                    <td className="p-4 text-center text-primary font-semibold">{row.vmax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Hinweis:</strong> Die angegebenen Preise sind Richtwerte. Der genaue Preis kann je nach Fahrzeug und gewünschter Konfiguration variieren.</p>
            <p><strong className="text-foreground">Wichtig:</strong> DPF-, EGR- und AdBlue-Deaktivierungen sind nur für Wettbewerbs- und Exportfahrzeuge bestimmt.</p>
          </div>
        </div>
      </section>

      {/* Dealer section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Für Händler & Partner</span>
            <h2 className="font-display text-3xl font-bold mt-2">Attraktive Händlerkonditionen</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Als registrierter Händler profitieren Sie von vergünstigten Preisen, einem Credit-System und unserem professionellen File-Service.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {dealerPrices.map((d, i) => (
              <div key={i} className="p-6 rounded-xl border border-border bg-background/50 text-center">
                <div className="text-sm text-muted-foreground mb-1">{d.label}</div>
                <div className="text-lg text-muted-foreground line-through">{d.original}</div>
                <div className="text-2xl font-bold text-gradient">{d.dealer}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-8">
            {["Vergünstigte Händlerpreise", "Flexibles Credit-System", "Schnelle Bearbeitung (30-60 Min)", "Persönlicher Ansprechpartner", "Zugang zum File-Service-Portal"].map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full border border-border bg-card">
                {item}
              </span>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center">* Händlerpreise abhängig von Abnahmemenge und Partnerschaft</p>

          <div className="text-center mt-8">
            <Button className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
              <Link to="/kontakt">Händler werden <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Individuelles Angebot gewünscht?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Kontaktieren Sie uns für ein maßgeschneidertes Angebot für Ihr Fahrzeug.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
              <Link to="/kontakt">Angebot anfragen <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/services">Services ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreislistePage;
