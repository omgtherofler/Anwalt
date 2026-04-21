import { A, aSans, aSerif, aMono } from '@/lib/theme';

const practiceAreas = [
  {
    n: '01',
    t: 'Vertragsrecht',
    d: 'Gestaltung, Prüfung und Verhandlung von Verträgen — vom AGB-Set über Kooperations- und Lizenzverträge bis zur individuellen Einzelregelung.',
    tags: ['AGB', 'Kooperation', 'Lizenz', 'Geheimhaltung'],
  },
  {
    n: '02',
    t: 'Commercial',
    d: 'Liefer- und Einkaufsbeziehungen im B2B-Kontext: Rahmenverträge, Lieferketten, Claims-Management, Haftungs- und Gewährleistungsregime.',
    tags: ['Rahmenverträge', 'Claims', 'Haftung', 'Incoterms'],
  },
  {
    n: '03',
    t: 'Allgemeines Zivilrecht',
    d: 'Rechtliche Begleitung in Alltag und Ausnahmesituation — Schuldrecht, Sachenrecht, Durchsetzung von Ansprüchen, außergerichtlich und vor Gericht.',
    tags: ['Schuldrecht', 'Durchsetzung', 'Vergleich'],
  },
  {
    n: '04',
    t: 'Baurecht',
    d: 'Private Baurechtstreitigkeiten, VOB/B- und BGB-Werkverträge, Abnahme, Mängelhaftung und Nachtragsmanagement für Bauherren und Auftragnehmer.',
    tags: ['VOB/B', 'Werkvertrag', 'Mängel', 'Nachtrag'],
  },
];

export default function Practice() {
  return (
    <section
      id="rechtsgebiete"
      style={{ padding: '110px 64px', background: A.bg }}
      className="section-padding section-v-padding snap-section"
    >
      <div className="section-inner">
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}
        className="practice-header"
      >
        <div>
          <div style={{
            fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: A.ink3, fontWeight: 500,
          }}>
            § 03 · Rechtsgebiete
          </div>
          <h2
            style={{
              fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
              color: A.ink, margin: '24px 0 0', letterSpacing: -1, maxWidth: 700,
            }}
            className="section-title"
          >
            Vier Gebiete, <span style={{ fontStyle: 'italic' }}>in die Tiefe</span>.
          </h2>
        </div>
        <div style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, maxWidth: 320, lineHeight: 1.6 }}>
          Ich beschränke mich auf das, was ich täglich mache. Für alles
          Darüberhinausgehende vermittle ich gerne an vertraute Kolleg:innen.
        </div>
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${A.ink}` }}
        className="practice-grid"
      >
        {practiceAreas.map((p, i) => (
          <div
            key={p.n}
            style={{
              padding: '40px 40px 48px',
              borderRight: i % 2 === 0 ? `1px solid ${A.line}` : 'none',
              borderBottom: i < 2 ? `1px solid ${A.line}` : 'none',
              background: A.bg,
              transition: 'background 0.2s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: aMono, fontSize: 11, letterSpacing: '0.1em', color: A.ink3 }}>
                § {p.n}
              </span>
              <span style={{ fontFamily: aSerif, fontSize: 18, color: A.accent }}>↗</span>
            </div>
            <h3
              style={{
                fontFamily: aSerif, fontWeight: 400, fontSize: 42, color: A.ink,
                margin: '14px 0 18px', letterSpacing: -0.6,
              }}
              className="practice-title"
            >
              {p.t}
            </h3>
            <p style={{ fontFamily: aSans, fontSize: 15, lineHeight: 1.65, color: A.ink2, maxWidth: 520, margin: 0 }}>
              {p.d}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
              {p.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: aMono, fontSize: 11, letterSpacing: '0.05em',
                    color: A.ink2, padding: '4px 10px', border: `1px solid ${A.line}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
