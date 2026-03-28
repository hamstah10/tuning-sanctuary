import Layout from "@/components/Layout";

const DatenschutzPage = () => {
  return (
    <Layout>
      <section className="py-20 pt-28">
        <div className="container max-w-3xl">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Rechtliches</span>
          <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-display font-semibold text-foreground mt-4 mb-1">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">2. Verantwortlicher</h2>
              <p>
                André Recknagel<br />
                Chiptuningfile.de<br />
                Hauptstraße 231a<br />
                98529 Suhl<br />
                Deutschland<br /><br />
                Telefon: +49 (0) 123 456 78<br />
                E-Mail: andre@dyno-tuningfiles.de
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="font-display font-semibold text-foreground mt-4 mb-1">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an
                uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="font-display font-semibold text-foreground mt-4 mb-1">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                <li>die Einschränkung der Verarbeitung zu verlangen</li>
                <li>Ihr Recht auf Datenübertragbarkeit auszuüben</li>
                <li>sich bei der zuständigen Aufsichtsbehörde zu beschweren</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">5. Cookies</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch
                notwendige Cookies eingesetzt, die für den Betrieb der Seite erforderlich sind.
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">6. Google Fonts (lokal)</h2>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts.
                Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet
                nicht statt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DatenschutzPage;
