import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, CheckCircle, Star, Gauge, Wrench, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroCar from "@/assets/hero-car.jpg";
import { useEffect, useRef, useState } from "react";

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const years = useCountUp(14);
  const tested = useCountUp(90);
  const customers = useCountUp(3500);
  const minutes = useCountUp(30);

  return (
    <Layout>
      <SEO title="Chiptuningfile.de – Professionelles Chiptuning seit über 14 Jahren" description="Seit über 14 Jahren optimieren wir Datenstände für PKW, LKW und Nutzfahrzeuge. Stage 1-3 Tuning mit Prüfstand-getesteten Files." />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCar}
            alt="Sportwagen bei Sonnenuntergang"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary" />
              Professionelles Chiptuning
            </span>

            <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              Mehr Leistung.
              <br />
              <span className="text-gradient">Mehr Performance.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Seit über 14 Jahren optimieren wir Datenstände für PKW, LKW und
              Nutzfahrzeuge. Professioneller File-Service mit Prüfstand-getesteten
              Tuning-Files.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
                <Link to="/konfigurator">
                  Konfigurator starten <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/services">
                  Services ansehen <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" /> Motorgarantie
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" /> TÜV erhältlich
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> 90% Prüfstand getestet
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { ref: years.ref, count: years.count, suffix: "+", label: "Jahre Erfahrung" },
            { ref: tested.ref, count: tested.count, suffix: "%", label: "Prüfstand getestet" },
            { ref: customers.ref, count: customers.count, suffix: "+", label: "Zufriedene Kunden" },
            { ref: minutes.ref, count: minutes.count, suffix: " Min", label: "Bearbeitungszeit" },
          ].map((stat, i) => (
            <div key={i} ref={stat.ref} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-gradient">
                {stat.count}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Unsere Leistungen</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Professionelles Chiptuning für Ihr Fahrzeug
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Von Stage 1 bis Stage 3 bieten wir maßgeschneiderte Lösungen für maximale Performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Gauge,
                title: "Stage 1 Tuning",
                desc: "Optimierte ECU-Kennfelder für mehr Leistung ohne Hardware-Änderungen.",
                badge: "+15-20%",
              },
              {
                icon: Wrench,
                title: "Stage 2 Tuning",
                desc: "Erweiterte Optimierung mit Sportluftfilter und Downpipe-Anpassung.",
                badge: "+25-30%",
              },
              {
                icon: Cog,
                title: "DPF / EGR",
                desc: "Deaktivierung für Wettbewerbs- und Exportfahrzeuge.",
                badge: "Custom",
              },
              {
                icon: Star,
                title: "DSG Tuning",
                desc: "Optimierte Schaltzeiten und erhöhte Drehmomentfreigabe.",
                badge: "Performance",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to="/services"
                  className="block p-6 bg-gradient-card border border-border hover:border-primary/40 transition-all group shadow-card"
                >
                  <service.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary">
                    {service.badge}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/services">Alle Services ansehen <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Warum Chiptuningfile.de?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Qualität und Erfahrung die überzeugt
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Wir programmieren für alle Tools und alle Checksummen, die auf dem Markt befindlich sind.
              Unsere Files werden von erfahrenen Tunern erstellt und auf dem Prüfstand getestet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                className="flex items-start gap-3 p-4 border border-border bg-background/50"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-hero p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(0_0%_100%/0.1),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Bereit für mehr Performance?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Nutzen Sie unseren Konfigurator und erfahren Sie, welche Leistungssteigerung für Ihr Fahrzeug möglich ist.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link to="/konfigurator">Konfigurator starten <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2" asChild>
                  <Link to="/kontakt">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Kundenstimmen</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                text: "Perfekter Service! Stage 1 hat meinen 330d von 265 auf 310 PS gebracht. Absolut saubere Arbeit.",
                name: "Michael S.",
                car: "BMW 330d",
              },
              {
                text: "Schnelle Bearbeitung und spürbarer Unterschied. Das Auto fährt sich jetzt viel agiler.",
                name: "Thomas K.",
                car: "Audi A4 2.0 TDI",
              },
              {
                text: "Als Händler nutze ich den File-Service regelmäßig. Zuverlässig, schnell und top Qualität.",
                name: "Stefan M.",
                car: "VW Golf GTI",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-gradient-card border border-border shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.car}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
