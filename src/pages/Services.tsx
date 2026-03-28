import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Wrench, Rocket, Flame, Wind, Zap, Volume2, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stages = [
  {
    icon: Gauge,
    tag: "ECU Optimierung",
    title: "Stage 1 Tuning",
    badge: "+15-20%",
    price: "ab 399€",
    desc: "Stage 1 ist der perfekte Einstieg in die Welt des Chiptunings. Durch Optimierung der ECU-Kennfelder erreichen wir eine spürbare Leistungssteigerung von 15-20%.",
    features: [
      "Keine Hardware-Änderung nötig",
      "Erhöhte Leistung & Drehmoment",
      "Verbesserter Kraftstoffverbrauch",
      "Rückstellung auf Serie möglich",
      "Motorgarantie erhältlich",
    ],
  },
  {
    icon: Wrench,
    tag: "Performance Upgrade",
    title: "Stage 2 Tuning",
    badge: "+25-30%",
    price: "ab 599€",
    popular: true,
    desc: "Stage 2 baut auf Stage 1 auf und nutzt das volle Potential Ihrer Hardware-Upgrades. Mit Sportluftfilter und Downpipe erreichen wir bis zu 30% mehr Leistung.",
    features: [
      "Inkl. Stage 1 Optimierung",
      "Anpassung an Hardware-Upgrades",
      "Sportluftfilter empfohlen",
      "Downpipe-Anpassung",
      "Prüfstand getestet",
    ],
  },
  {
    icon: Rocket,
    tag: "Maximum Power",
    title: "Stage 3 Tuning",
    badge: "+40%+",
    price: "ab 899€",
    desc: "Stage 3 ist für Enthusiasten, die das Maximum aus ihrem Fahrzeug herausholen wollen.",
    features: [
      "Inkl. Stage 1 & 2",
      "Turbo-Upgrade Anpassung",
      "Intercooler Abstimmung",
      "Individuelle Kennfelder",
      "Prüfstandtest inklusive",
    ],
  },
];

const additionalServices = [
  { icon: Flame, title: "DPF Deaktivierung", price: "ab 199€", desc: "Softwareseitige Deaktivierung des Dieselpartikelfilters für Wettbewerbs- und Exportfahrzeuge.", note: "Nur für Wettbewerb/Export" },
  { icon: Wind, title: "EGR Deaktivierung", price: "ab 149€", desc: "Abgasrückführung deaktivieren für bessere Performance und geringeren Verschleiß.", note: "Nur für Wettbewerb/Export" },
  { icon: Gauge, title: "V-Max Aufhebung", price: "ab 199€", desc: "Elektronische Geschwindigkeitsbegrenzung entfernen für maximale Endgeschwindigkeit.", note: "Eigenverantwortung" },
  { icon: Zap, title: "DSG / S-Tronic Tuning", price: "ab 299€", desc: "Optimierte Schaltzeiten, erhöhte Drehmomentfreigabe und verbessertes Ansprechverhalten.", note: "DQ200/250/500" },
  { icon: Volume2, title: "Pop & Bang", price: "ab 149€", desc: "Spektakuläres Auspuffknallen beim Gaswegnehmen. Für den besonderen Sound.", note: "Stage 1+ empfohlen" },
  { icon: Droplets, title: "AdBlue Deaktivierung", price: "ab 199€", desc: "SCR-System softwareseitig deaktivieren für Fahrzeuge außerhalb des Straßenverkehrs.", note: "Nur für Wettbewerb/Export" },
];

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services – Chiptuningfile.de" description="Stage 1-3 Tuning, DPF, EGR, DSG Optimierung und mehr. Professionelles Chiptuning für alle Fahrzeuge." />
      {/* Hero */}
      <section className="py-20 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Unsere Leistungen</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">
            Professionelles Chiptuning für alle Fahrzeuge
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Von Stage 1 bis Stage 3 – wir bieten maßgeschneiderte Lösungen für jedes Fahrzeug.
            Alle Files werden von erfahrenen Tunern erstellt und auf dem Prüfstand getestet.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["PKW Benziner", "PKW Diesel", "LKW / Transporter", "Motorräder", "Agrar / Baumaschinen", "Busse"].map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full text-sm border border-border bg-card hover:border-primary/40 transition-colors cursor-default">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Tuning Stufen</span>
            <h2 className="font-display text-3xl font-bold mt-2">Wählen Sie Ihre Performance-Stufe</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`rounded-2xl p-8 border bg-gradient-card shadow-card relative ${
                  stage.popular ? "border-primary shadow-glow" : "border-border"
                }`}
              >
                {stage.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-hero text-primary-foreground text-xs font-semibold">
                    Beliebt
                  </span>
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <stage.icon className="w-4 h-4 text-primary" />
                  {stage.tag}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{stage.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-gradient">{stage.badge}</span>
                  <span className="text-muted-foreground text-sm">Leistung</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{stage.desc}</p>
                <ul className="space-y-2 mb-6">
                  {stage.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-xl font-bold mb-4">{stage.price}</div>
                <Button className={`w-full gap-2 ${stage.popular ? "bg-gradient-hero hover:opacity-90" : ""}`} asChild>
                  <Link to="/kontakt">Jetzt konfigurieren <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Zusätzliche Services</span>
            <h2 className="font-display text-3xl font-bold mt-2">Weitere Optimierungen</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl border border-border bg-background/50 hover:border-primary/30 transition-all"
              >
                <s.icon className="w-6 h-6 text-primary mb-3" />
                <div className="text-lg font-bold text-gradient mb-1">{s.price}</div>
                <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{s.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Bereit für mehr Leistung?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Nutzen Sie unseren Konfigurator und erfahren Sie, welche Steigerung für Ihr Fahrzeug möglich ist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
              <Link to="/konfigurator">Konfigurator starten <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
