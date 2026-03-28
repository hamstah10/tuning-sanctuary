import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Award, Shield, Wrench } from "lucide-react";
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

const UeberUnsPage = () => {
  return (
    <Layout>
      <SEO title="Über uns – Chiptuningfile.de" description="Seit über 14 Jahren Ihr Partner für professionelles Chiptuning. Erfahrung, Qualität und persönlicher Service." />
      <section className="py-20 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Über uns</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">
            Erfahrung trifft Leidenschaft
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seit über 14 Jahren sind wir Ihr zuverlässiger Partner für professionelles Chiptuning.
            Unsere Erfahrung, kombiniert mit modernster Technik, garantiert erstklassige Ergebnisse.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Qualität aus <span className="text-gradient">Überzeugung</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Wir programmieren für alle Tools und alle Checksummen, die auf dem Markt befindlich sind.
                Unsere Files werden von erfahrenen Tunern erstellt und auf dem Prüfstand getestet.
              </p>
              <p className="text-muted-foreground mb-6">
                Anders als bei automatisierten Online-Portalen setzen wir auf persönlichen Kontakt
                und individuelle Betreuung. Jedes File wird manuell erstellt und an Ihr Fahrzeug angepasst.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "3.500+ Kunden" },
                  { icon: Award, label: "14+ Jahre Erfahrung" },
                  { icon: Shield, label: "Motorgarantie" },
                  { icon: Wrench, label: "Alle Tools & Checksummen" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Alle Checksummen werden unterstützt",
                "Motorgarantie + TÜV erhältlich",
                "Kein Standard-Online-Portal",
                "Persönlicher Kontakt garantiert",
                "Prüfstand getestete Files",
                "Rückstellung auf Serienstand möglich",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-2 p-4 rounded-lg border border-border bg-card"
                >
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Überzeugen Sie sich selbst</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Kontaktieren Sie uns und erfahren Sie, wie wir Ihrem Fahrzeug zu mehr Leistung verhelfen können.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
              <Link to="/kontakt">Kontakt aufnehmen <ArrowRight className="w-4 h-4" /></Link>
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

export default UeberUnsPage;
