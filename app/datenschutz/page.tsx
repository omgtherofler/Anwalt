import type { Metadata } from 'next';
import { A, aSans, aSerif, aMono } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Datenschutz — Kanzlei Kister',
};

export default function Datenschutz() {
  return (
    <div style={{ background: A.bg, minHeight: '100vh' }}>
      <header style={{
        padding: '22px 64px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: `1px solid ${A.line}`,
        background: A.bg,
      }} className="header-section">
        <a href="/" style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, letterSpacing: -0.2 }}>
          Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
        </a>
        <a href="/" style={{ fontFamily: aSans, fontSize: 13, color: A.ink2 }}>← Zurück</a>
      </header>

      <main style={{ padding: '80px 64px', maxWidth: 860 }} className="section-padding">
        <div style={{ fontFamily: aMono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: A.ink3, marginBottom: 24 }}>
          Rechtliches
        </div>
        <h1 style={{ fontFamily: aSerif, fontWeight: 400, fontSize: 56, color: A.ink, margin: '0 0 60px', letterSpacing: -1 }}>
          Datenschutzerklärung
        </h1>

        <Section title="Verantwortlicher">
          <p>
            Igor Kister, Rechtsanwalt<br />
            Elefantenweg 71, 79110 Freiburg im Breisgau<br />
            E-Mail: Igor@kanzlei-kister.com
          </p>
        </Section>

        <Section title="Grundsätzliches zur Datenverarbeitung">
          <p>
            Personenbezogene Daten werden nur im erforderlichen Umfang verarbeitet. Die Verarbeitung erfolgt
            ausschließlich auf Grundlage einer gesetzlichen Erlaubnis oder Ihrer Einwilligung (Art. 6 DSGVO).
          </p>
        </Section>

        <Section title="Kontaktformular">
          <p>
            Wenn Sie das Kontaktformular nutzen, werden die darin angegebenen Daten (Name, E-Mail-Adresse, Nachricht)
            zur Bearbeitung Ihrer Anfrage und für eventuelle Anschlussfragen gespeichert.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. a
            DSGVO (Einwilligung). Die Daten werden nicht an Dritte weitergegeben. Eine Löschung erfolgt, sobald
            die Anfrage abgeschlossen ist und keine gesetzliche Aufbewahrungspflicht besteht.
          </p>
        </Section>

        <Section title="Server-Logfiles">
          <p>
            Beim Besuch dieser Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert.
            Dies umfasst: IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version, Betriebssystem,
            Referrer-URL. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betrieb und Sicherheit).</p>
        </Section>

        <Section title="Hosting">
          <p>
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet.
            Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{' '}
            <a href="https://vercel.com/legal/privacy-policy" style={{ color: A.accent }}>
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </Section>

        <Section title="Ihre Rechte">
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p>
            Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
            Daten zu beschweren. Zuständig ist der{' '}
            <a href="https://www.baden-wuerttemberg.datenschutz.de" style={{ color: A.accent }}>
              Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg
            </a>.
          </p>
        </Section>

        <Section title="Anwaltliche Schweigepflicht">
          <p>
            Mandantendaten werden ausschließlich zur Durchführung des jeweiligen Mandatsverhältnisses verarbeitet
            und unterliegen der anwaltlichen Verschwiegenheitspflicht gemäß § 43a BRAO. Eine Weitergabe an Dritte
            erfolgt nur, soweit dies zur Mandatsbearbeitung erforderlich oder gesetzlich vorgeschrieben ist.
          </p>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: `1px solid ${A.line}`, paddingTop: 32, marginBottom: 40 }}>
      <h2 style={{ fontFamily: aSerif, fontWeight: 400, fontSize: 28, color: A.ink, margin: '0 0 20px', letterSpacing: -0.3 }}>
        {title}
      </h2>
      <div style={{ fontFamily: aSans, fontSize: 15, lineHeight: 1.7, color: A.ink2 }}>
        {children}
      </div>
    </div>
  );
}
