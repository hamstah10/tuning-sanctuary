import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was bringt Chiptuning bei meinem Fahrzeug?",
    a: "Je nach Motor und Stage sind spürbar mehr Leistung, besseres Ansprechverhalten und in vielen Fällen ein optimierter Durchzug möglich.",
  },
  {
    q: "Ist ein Stage 1 Tuning ohne Hardware-Umbauten möglich?",
    a: "Ja. Stage 1 basiert in der Regel auf einer reinen Softwareoptimierung und benötigt normalerweise keine zusätzlichen Hardware-Änderungen.",
  },
  {
    q: "Wie schnell erhalte ich mein Tuning-File?",
    a: "Die typische Bearbeitungszeit liegt bei 30 bis 60 Minuten. Der genaue Zeitraum hängt vom Fahrzeug und vom Leistungsumfang ab.",
  },
  {
    q: "Sind auch DSG-, DPF- oder AGR-Lösungen verfügbar?",
    a: "Ja. Neben klassischen Leistungsstufen bieten wir auch DSG-/S-Tronic-Optimierungen sowie weitere Sonderlösungen an.",
  },
  {
    q: "Kann ich als Werkstatt oder Händler Partner werden?",
    a: "Ja. Über den Händlerbereich können Partnerkonditionen, Support und die Zusammenarbeit mit dem File-Service angefragt werden.",
  },
];

const topics = [
  { title: "Allgemein", items: ["Was ist Chiptuning?", "Ist es sicher?", "Wie lange dauert es?"] },
  { title: "Leistung", items: ["Stage 1 vs Stage 2", "Welche Steigerung?", "Hardware nötig?"] },
  { title: "Service", items: ["Händler werden", "Garantie?", "Rückstellung möglich?"] },
];

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="FAQ – Chiptuningfile.de" description="Häufig gestellte Fragen zu Chiptuning, Leistungsstufen und unserem Service." />
      <section className="py-20 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Häufig gestellte Fragen</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">FAQ – Alles was Sie wissen müssen</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um Chiptuning, unsere Services und den Bestellprozess.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Themen</span>
            <h2 className="font-display text-3xl font-bold mt-2">Beliebte Themenbereiche</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {topics.map((topic, i) => (
              <div key={i} className="p-6 rounded-xl border border-border bg-background/50">
                <h3 className="font-display font-semibold text-lg mb-3">{topic.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {topic.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Noch Fragen?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Unser Team steht Ihnen gerne für weitere Fragen zur Verfügung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 gap-2" asChild>
              <Link to="/kontakt">Kontakt aufnehmen <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/konfigurator">Konfigurator starten</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
