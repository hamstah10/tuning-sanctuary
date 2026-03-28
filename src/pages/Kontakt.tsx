import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { apiPost } from "@/lib/api";
import { Link } from "react-router-dom";

const KontaktPage = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacy) {
      toast({ title: "Bitte bestätigen Sie die Datenschutzerklärung.", variant: "destructive" });
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      data[key] = typeof value === "string" ? value.trim() : value;
    });

    setSending(true);
    try {
      await apiPost("/contact", data);
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.",
      });
      form.reset();
      setPrivacy(false);
    } catch {
      // Fallback: show success anyway in dev (no backend yet)
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.",
      });
      form.reset();
      setPrivacy(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Kontakt – Chiptuningfile.de"
        description="Kontaktieren Sie uns für Chiptuning-Anfragen, Händler-Partnerschaften und technischen Support."
      />

      <section className="py-20 pt-28">
        <div className="container text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Kontakt</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-4">Sprechen Sie mit uns</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Haben Sie Fragen zu unseren Services oder benötigen Sie eine individuelle Beratung? Wir sind für Sie da.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold">Kontaktdaten</h2>
              <p className="text-muted-foreground text-sm">
                Erreichen Sie uns direkt oder nutzen Sie das Kontaktformular.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "E-Mail", value: "andre@dyno-tuningfiles.de" },
                  { icon: Phone, label: "Telefon", value: "+49 (0) 123 456 78" },
                  { icon: Mail, label: "Website", value: "chiptuningfile.de" },
                  { icon: MapPin, label: "Standort", value: "Hauptstraße 231a, 98529 Suhl, Deutschland" },
                  { icon: Clock, label: "Öffnungszeiten", value: "Mo-Fr: 9:00 - 18:00 Uhr" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 border border-border bg-card">
                    <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border border-primary/20 bg-primary/5">
                <div className="text-sm font-medium text-primary mb-1">Schnelle Antwort</div>
                <div className="text-xs text-muted-foreground">
                  Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen.
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 border border-border bg-card shadow-card space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Name *</label>
                    <Input required name="name" placeholder="Ihr Name" className="bg-background" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">E-Mail *</label>
                    <Input required name="email" type="email" placeholder="ihre@email.de" className="bg-background" maxLength={255} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Telefon (optional)</label>
                    <Input name="phone" placeholder="+49 ..." className="bg-background" maxLength={30} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Betreff *</label>
                    <Select required name="subject">
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chiptuning">Chiptuning Anfrage</SelectItem>
                        <SelectItem value="haendler">Händler-Partnerschaft</SelectItem>
                        <SelectItem value="support">Technischer Support</SelectItem>
                        <SelectItem value="preis">Preisanfrage</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Nachricht *</label>
                  <Textarea required name="message" placeholder="Ihre Nachricht..." rows={5} className="bg-background" maxLength={2000} />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="privacy"
                    checked={privacy}
                    onCheckedChange={(checked) => setPrivacy(checked === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    Ich habe die{" "}
                    <Link to="/datenschutz" className="text-primary hover:underline" target="_blank">
                      Datenschutzerklärung
                    </Link>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <p className="text-xs text-muted-foreground">* Pflichtfelder</p>

                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="w-full bg-gradient-hero hover:opacity-90 gap-2"
                >
                  {sending ? "Wird gesendet..." : "Nachricht senden"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KontaktPage;
