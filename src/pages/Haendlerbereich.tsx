import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Clock, FolderOpen, Shield, Users, DollarSign, Upload, Cog, Download } from "lucide-react";
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

const benefits = [
  { icon: DollarSign, title: "Vergünstigte Preise", desc: "Profitieren Sie von attraktiven Händlerkonditionen und steigern Sie Ihre Marge." },
  { icon: CreditCard, title: "Credit-System", desc: "Flexibles Guthaben-System für schnelle und unkomplizierte Abwicklung." },
  { icon: Clock, title: "Schnelle Bearbeitung", desc: "Tuning-Files in 30-60 Minuten – für maximale Kundenzufriedenheit." },
  { icon: FolderOpen, title: "File-Management", desc: "Übersichtliches Portal zur Verwaltung aller Ihrer Aufträge und Files." },
  { icon: Shield, title: "Qualitätsgarantie", desc: "90% Prüfstand-getestete Files mit Motorgarantie-Option." },
  { icon: Users, title: "Persönlicher Support", desc: "Direkter Ansprechpartner für technische Fragen und Support." },
];

const processSteps = [
  { num: 1, title: "Original-File auslesen", desc: "Lesen Sie das Original-File Ihres Kundenfahrzeugs aus." },
  { num: 2, title: "Upload im Portal", desc: "Laden Sie das File in unserem Händler-Portal hoch." },
  { num: 3, title: "Bearbeitung", desc: "Unsere Experten optimieren das File nach Ihren Wünschen." },
  { num: 4, title: "Download", desc: "Laden Sie das fertige Tuning-File herunter und flashen Sie es." },
];

const stepIcons = [Cog, Upload, Cog, Download];

const scope = [
  "Alle Fahrzeugmarken unterstützt",
  "Alle gängigen Auslesegeräte kompatibel",
  "Alle Checksummen werden korrigiert",
  "Stage 1, 2, 3 Tuning verfügbar",
  "DPF/EGR/AdBlue Lösungen",
  "DSG/S-Tronic Optimierung",
  "V-Max Aufhebung",
  "Pop & Bang möglich",
];

const tools = ["Autotuner", "KESS", "K-TAG", "CMD Flash", "New Genius", "Flex", "PCM Flash"];

const stats = [
  { value: "30-60", label: "Min. Bearbeitungszeit" },
  { value: "500+", label: "Aktive Händler" },
  { value: "10k+", label: "Files pro Monat" },
  { value: "90%", label: "Prüfstand getestet" },
];

const HaendlerbereichPage = () => {
  return (
    <Layout>
      <SEO
        title="Händlerbereich – Chiptuningfile.de"
        description="Werden Sie Händler-Partner. Vergünstigte Preise, schnelle Bearbeitung und persönlicher Support für Ihren Tuning-Betrieb."
      />

      {/* Hero */}
      <section className="py-20 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">B2B Partner Programm</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">
            Werden Sie <span className="text-gradient">Händler-Partner</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Profitieren Sie von unserem professionellen File-Service-System. Vergünstigte Preise, schnelle Bearbeitung und persönlicher Support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
              <Link to="/kontakt">Jetzt registrieren <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#vorteile">Mehr erfahren</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Ihre Vorteile</span>
            <h2 className="font-display text-3xl font-bold mt-2">Warum Partner werden?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 border border-border bg-background/50 hover:border-primary/30 transition-all"
              >
                <b.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">So funktioniert's</span>
            <h2 className="font-display text-3xl font-bold mt-2">Der File-Service Prozess</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center p-6 border border-border bg-card"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                    {s.num}
                  </div>
                  <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Leistungsumfang</span>
            <h2 className="font-display text-3xl font-bold mt-2">Alles aus einer Hand</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Unser File-Service unterstützt alle gängigen Fahrzeuge und Auslesegeräte.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {scope.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-2 p-3 border border-border bg-background/50 text-sm"
              >
                <Shield className="w-4 h-4 text-primary shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>

          {/* Supported Tools */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display font-semibold text-xl text-center mb-6">Unterstützte Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {tools.map((tool) => (
                <span key={tool} className="px-4 py-2 border border-border bg-background/50 text-sm font-medium">
                  {tool}
                </span>
              ))}
              <span className="px-4 py-2 border border-border bg-background/50 text-sm text-muted-foreground">
                und mehr...
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Ihr Tool ist nicht dabei? <Link to="/kontakt" className="text-primary hover:underline">Kontaktieren Sie uns</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA with Stats */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-hero p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(0_0%_100%/0.1),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Bereit für die Partnerschaft?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Registrieren Sie sich jetzt und erhalten Sie Zugang zu unserem professionellen File-Service-System.
              </p>
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <Link to="/kontakt">Registrierung anfragen <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HaendlerbereichPage;
