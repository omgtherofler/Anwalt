import type { Metadata } from 'next';
import { A, aSans, aSerif, aMono } from '@/lib/theme';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  return {
    title: params.lang === 'en' ? 'Privacy Policy — Kanzlei Kister' : 'Datenschutz — Kanzlei Kister',
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: `1px solid ${A.line}`, paddingTop: 32, marginBottom: 40 }}>
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

export default function DatenschutzPage({ params }: { params: { lang: string } }) {
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
          {de ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        <Section title={de ? 'Verantwortlicher' : 'Data Controller'}>
          <p>
            Igor Kister, {de ? 'Rechtsanwalt' : 'Attorney at Law'}<br />
            Elefantenweg 71, 79110 Freiburg im Breisgau<br />
            E-Mail: <a href="mailto:Igor@kanzlei-kister.com" style={{ color: A.accent }}>Igor@kanzlei-kister.com</a>
          </p>
        </Section>

        <Section title={de ? 'Grundsätzliches zur Datenverarbeitung' : 'General Principles'}>
          <p>
            {de
              ? 'Personenbezogene Daten werden nur im erforderlichen Umfang verarbeitet. Die Verarbeitung erfolgt ausschließlich auf Grundlage einer gesetzlichen Erlaubnis oder Ihrer Einwilligung (Art. 6 DSGVO).'
              : 'Personal data is only processed to the extent necessary. Processing is carried out exclusively on the basis of a legal authorization or your consent (Art. 6 GDPR).'}
          </p>
        </Section>

        <Section title={de ? 'Kontaktformular / Mandantenanfrage' : 'Contact Form / Client Intake'}>
          <p>
            {de
              ? 'Wenn Sie das Kontaktformular oder die Mandantenanfrage nutzen, werden die darin angegebenen Daten (Name, E-Mail-Adresse, Telefon, Rechtsgebiet, Anliegen) zur Bearbeitung Ihrer Anfrage und für eventuelle Anschlussfragen gespeichert.'
              : 'When you use the contact form or client intake, the data you provide (name, email address, phone, practice area, matter) is stored for processing your request and any follow-up questions.'}
          </p>
          <p>
            {de
              ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Daten werden nicht an Dritte weitergegeben. Eine Löschung erfolgt, sobald die Anfrage abgeschlossen ist und keine gesetzliche Aufbewahrungspflicht besteht.'
              : 'Legal basis: Art. 6 para. 1 lit. b GDPR (pre-contractual measures) and Art. 6 para. 1 lit. a GDPR (consent). Data is not shared with third parties and is deleted once the inquiry is completed and no legal retention obligation exists.'}
          </p>
        </Section>

        <Section title={de ? 'Server-Logfiles' : 'Server Log Files'}>
          <p>
            {de
              ? 'Beim Besuch dieser Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert. Dies umfasst: IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und -version, Betriebssystem, Referrer-URL. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.'
              : 'When you visit this website, information is automatically stored in server log files. This includes: IP address, date and time of the request, browser type and version, operating system, referrer URL. This data is not merged with other data sources.'}
          </p>
          <p>
            {de
              ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Betrieb und Sicherheit).'
              : 'Legal basis: Art. 6 para. 1 lit. f GDPR (legitimate interest in operation and security).'}
          </p>
        </Section>

        <Section title="Hosting">
          <p>
            {de
              ? 'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.'
              : 'This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Vercel is certified under the EU-US Data Privacy Framework.'}{' '}
            <a href="https://vercel.com/legal/privacy-policy" style={{ color: A.accent }}>
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </Section>

        <Section title={de ? 'Ihre Rechte' : 'Your Rights'}>
          <p>
            {de
              ? 'Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:'
              : 'You have the following rights regarding your personal data:'}
          </p>
          <ul>
            {de ? (
              <>
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </>
            ) : (
              <>
                <li>Right of access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
              </>
            )}
          </ul>
          <p>
            {de ? (
              <>
                Zuständige Aufsichtsbehörde:{' '}
                <a href="https://www.baden-wuerttemberg.datenschutz.de" style={{ color: A.accent }}>
                  Landesbeauftragter für Datenschutz und Informationsfreiheit Baden-Württemberg
                </a>
              </>
            ) : (
              <>
                Competent supervisory authority:{' '}
                <a href="https://www.baden-wuerttemberg.datenschutz.de" style={{ color: A.accent }}>
                  State Commissioner for Data Protection and Freedom of Information Baden-Württemberg
                </a>
              </>
            )}
          </p>
        </Section>

        <Section title={de ? 'Anwaltliche Schweigepflicht' : 'Attorney-Client Privilege'}>
          <p>
            {de
              ? 'Mandantendaten werden ausschließlich zur Durchführung des jeweiligen Mandatsverhältnisses verarbeitet und unterliegen der anwaltlichen Verschwiegenheitspflicht gemäß § 43a BRAO. Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Mandatsbearbeitung erforderlich oder gesetzlich vorgeschrieben ist.'
              : 'Client data is processed exclusively for the purpose of the respective mandate and is subject to attorney-client privilege pursuant to § 43a BRAO (Federal Lawyers Act). Disclosure to third parties only occurs where necessary for handling the mandate or required by law.'}
          </p>
        </Section>
      </main>
    </div>
  );
}
