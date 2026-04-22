import type { Metadata } from 'next';
import { A, aSans, aSerif, aMono } from '@/lib/theme';
import { getT } from '@/locales';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return { title: params.lang === 'en' ? 'Legal Notice — Kanzlei Kister' : 'Impressum — Kanzlei Kister' };
}

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <div id={id} style={{ borderTop: `1px solid ${A.line}`, paddingTop: 32, marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: aSerif,
          fontWeight: 400,
          fontSize: 28,
          color: A.ink,
          margin: '0 0 20px',
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h2>
      <div style={{ fontFamily: aSans, fontSize: 15, lineHeight: 1.75, color: A.ink2 }}>
        {children}
      </div>
    </div>
  );
}

export default function ImpressumPage({ params }: { params: { lang: string } }) {
  const de = params.lang !== 'en';
  const homeHref = `/${params.lang}`;

  return (
    <div style={{ background: A.bg, minHeight: '100vh' }}>
      <header
        style={{
          padding: '22px 64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${A.line}`,
          background: A.bg,
        }}
        className="header-section"
      >
        <a href={homeHref} style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, letterSpacing: -0.2, textDecoration: 'none' }}>
          Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
        </a>
        <a href={homeHref} style={{ fontFamily: aSans, fontSize: 13, color: A.ink2, textDecoration: 'none' }}>
          {de ? '← Zurück' : '← Back'}
        </a>
      </header>

      <main style={{ padding: '80px 64px', maxWidth: 860 }} className="section-padding">
        <div
          style={{
            fontFamily: aMono,
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: A.ink3,
            marginBottom: 24,
          }}
        >
          {de ? 'Rechtliches' : 'Legal'}
        </div>
        <h1
          style={{
            fontFamily: aSerif,
            fontWeight: 400,
            fontSize: 56,
            color: A.ink,
            margin: '0 0 60px',
            letterSpacing: -1,
          }}
        >
          {de ? 'Impressum' : 'Legal Notice'}
        </h1>

        <Section title={de ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}>
          <p>
            Igor Kister<br />
            {de ? 'Rechtsanwalt' : 'Attorney at Law'}<br />
            Elefantenweg 71<br />
            79110 Freiburg im Breisgau
          </p>
        </Section>

        <Section title={de ? 'Kontakt' : 'Contact'}>
          <p>
            {de ? 'Telefon' : 'Phone'}: <a href="tel:+4915560873381" style={{ color: A.accent }}>0155 60873381</a><br />
            E-Mail: <a href="mailto:Igor@kanzlei-kister.com" style={{ color: A.accent }}>Igor@kanzlei-kister.com</a>
          </p>
        </Section>

        <Section
          title={de ? 'Berufsbezeichnung und berufsrechtliche Regelungen' : 'Professional Title and Regulations'}
          id="berufsrecht"
        >
          <p>
            {de
              ? 'Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)'
              : 'Professional title: Rechtsanwalt (attorney at law, conferred in the Federal Republic of Germany)'}
            <br />
            {de ? 'Zuständige Rechtsanwaltskammer' : 'Responsible bar association'}: Rechtsanwaltskammer Freiburg<br />
            Poststraße 2, 79098 Freiburg im Breisgau<br />
            <a href="https://www.rak-freiburg.de" style={{ color: A.accent }}>www.rak-freiburg.de</a>
          </p>
          <p>{de ? 'Es gelten folgende berufsrechtliche Regelungen:' : 'The following professional regulations apply:'}</p>
          <ul>
            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
            <li>Fachanwaltsordnung (FAO)</li>
            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
            <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
          </ul>
          <p>
            {de ? 'Abrufbar unter' : 'Available at'}: <a href="https://www.brak.de" style={{ color: A.accent }}>www.brak.de</a>
          </p>
        </Section>

        <Section title={de ? 'Berufshaftpflichtversicherung' : 'Professional Liability Insurance'}>
          <p>
            andsafe Aktiengesellschaft<br />
            Provinzial-Allee 1<br />
            48159 Münster<br />
            <a href="https://www.andsafe.de" style={{ color: A.accent }}>www.andsafe.de</a>
          </p>
          <p>
            {de
              ? 'Räumlicher Geltungsbereich: Bundesrepublik Deutschland'
              : 'Territorial scope: Federal Republic of Germany'}
          </p>
        </Section>

        <Section title={de ? 'Umsatzsteuer' : 'VAT'}>
          <p>
            {de
              ? 'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).'
              : 'Pursuant to § 19 UStG (German VAT Act), no VAT is charged (small business exemption).'}
          </p>
        </Section>

        <Section title={de ? 'Streitschlichtung' : 'Dispute Resolution'}>
          <p>
            {de
              ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: '
              : 'The European Commission provides a platform for online dispute resolution (ODR): '}
            <a href="https://ec.europa.eu/consumers/odr" style={{ color: A.accent }}>
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            {de
              ? 'Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.'
              : 'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.'}
          </p>
        </Section>

        <Section title={de ? 'Haftung für Inhalte' : 'Liability for Content'}>
          <p>
            {de
              ? 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
              : 'As a service provider, we are responsible for our own content on these pages under general laws pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'}
          </p>
        </Section>

        <Section title={de ? 'Urheberrecht' : 'Copyright'}>
          <p>
            {de
              ? 'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
              : 'The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution, and any form of commercial use outside the limits of copyright law require the written consent of the respective author or creator.'}
          </p>
        </Section>
      </main>
    </div>
  );
}
