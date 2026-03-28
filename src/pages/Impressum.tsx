import Layout from "@/components/Layout";

const ImpressumPage = () => {
  return (
    <Layout>
      <section className="py-20 pt-28">
        <div className="container max-w-3xl">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Rechtliches</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-8">Impressum</h1>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                André Recknagel<br />
                Chiptuningfile.de<br />
                Hauptstraße 231a<br />
                98529 Suhl<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Kontakt</h2>
              <p>
                Telefon: +49 (0) 123 456 78<br />
                E-Mail: andre@dyno-tuningfiles.de
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE [bitte eintragen]
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                André Recknagel<br />
                Hauptstraße 231a<br />
                98529 Suhl
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpressumPage;
