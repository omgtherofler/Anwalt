import type { Metadata } from 'next';
import { A, aSans, aSerif, aMono } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Impressum — Kanzlei Kister',
};

export default function Impressum() {
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
          Impressum
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>
            Igor Kister<br />
            Rechtsanwalt<br />
            Elefantenweg 71<br />
            79110 Freiburg im Breisgau
          </p>
        </Section>

        <Section title="Kontakt">
          <p>E-Mail: <a href="mailto:kanzlei@kister-law.de" style={{ color: A.accent }}>kanzlei@kister-law.de</a></p>
        </Section>

        <Section title="Berufsbezeichnung und berufsrechtliche Regelungen" id="berufsrecht">
          <p>
            Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)<br />
            Zuständige Rechtsanwaltskammer: Rechtsanwaltskammer Freiburg<br />
            Poststraße 2, 79098 Freiburg im Breisgau<br />
            <a href="https://www.rak-freiburg.de" style={{ color: A.accent }}>www.rak-freiburg.de</a>
          </p>
          <p>Es gelten folgende berufsrechtliche Regelungen:</p>
          <ul>
            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
            <li>Fachanwaltsordnung (FAO)</li>
            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
            <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
          </ul>
          <p>
            Abrufbar unter: <a href="https://www.brak.de" style={{ color: A.accent }}>www.brak.de</a>
          </p>
        </Section>

        <Section title="Berufshaftpflichtversicherung">
          <p>
            <em style={{ color: A.ink3 }}>Angaben zur Berufshaftpflichtversicherung (Versicherer, Anschrift, räumlicher Geltungsbereich) werden ergänzt.</em>
          </p>
        </Section>

        <Section title="Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" style={{ color: A.accent }}>
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir
            nicht verpflichtet und nicht bereit.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <div id={id} style={{ borderTop: `1px solid ${A.line}`, paddingTop: 32, marginBottom: 40 }}>
      <h2 style={{ fontFamily: aSerif, fontWeight: 400, fontSize: 28, color: A.ink, margin: '0 0 20px', letterSpacing: -0.3 }}>
        {title}
      </h2>
      <div style={{ fontFamily: aSans, fontSize: 15, lineHeight: 1.7, color: A.ink2 }}>
        {children}
      </div>
    </div>
  );
}
