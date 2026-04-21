// Variante A — Editorial-Serif, warm, elegant
// Palette: warmes Off-White, Anthrazit, gedämpfter Bordeaux-Akzent
// Typografie: Instrument Serif (Display) + Inter (Body)

const A = {
  bg: '#f1efe9',
  bgAlt: '#e8e5dc',
  ink: '#1f1d1a',
  ink2: '#54504a',
  ink3: '#8a857c',
  line: 'rgba(31,29,26,0.14)',
  accent: '#6e2a2a',   // gedämpfter Bordeaux
  accentSoft: '#a36a5a',
  paper: '#faf8f3',
};

const aSerif = `"Instrument Serif", "Source Serif Pro", Georgia, serif`;
const aSans  = `"Inter", ui-sans-serif, system-ui, sans-serif`;
const aMono  = `"JetBrains Mono", ui-monospace, monospace`;

// Little utility: serifed caps-eyebrow
const Eyebrow = ({ children, color = A.ink3 }) => (
  <div style={{
    fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
    textTransform: 'uppercase', color, fontWeight: 500,
  }}>{children}</div>
);

const RuleNum = ({ n }) => (
  <span style={{ fontFamily: aMono, fontSize: 11, letterSpacing: '0.1em', color: A.ink3 }}>{n}</span>
);

// ─────────────────────────── Header ───────────────────────────
const HeaderA = () => (
  <header style={{
    padding: '22px 64px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', borderBottom: `1px solid ${A.line}`,
    background: A.bg, position: 'sticky', top: 0, zIndex: 10,
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
      <div style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, letterSpacing: -0.2 }}>
        Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
      </div>
    </div>
    <nav style={{ display: 'flex', gap: 34, fontFamily: aSans, fontSize: 14, color: A.ink2 }}>
      {['Profil', 'Rechtsgebiete', 'Erfahrungen', 'Honorar', 'Kontakt'].map(x => (
        <a key={x} style={{ cursor: 'pointer' }}>{x}</a>
      ))}
    </nav>
    <a style={{
      fontFamily: aSans, fontSize: 13, color: A.paper, background: A.ink,
      padding: '10px 18px', borderRadius: 2, cursor: 'pointer', letterSpacing: 0.1,
    }}>Erstgespräch anfragen →</a>
  </header>
);

// ─────────────────────────── Hero ───────────────────────────
const HeroA = () => (
  <section style={{ padding: '90px 64px 110px', background: A.bg, position: 'relative' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <span style={{ width: 36, height: 1, background: A.ink }} />
          <Eyebrow color={A.ink2}>Rechtsanwaltskanzlei · Freiburg im Breisgau</Eyebrow>
        </div>
        <h1 style={{
          fontFamily: aSerif, fontWeight: 400, fontSize: 92, lineHeight: 0.98,
          color: A.ink, margin: 0, letterSpacing: -2,
        }}>
          Recht, das<br/>
          den <span style={{ fontStyle: 'italic', color: A.accent }}>Maschinenraum</span><br/>
          versteht.
        </h1>
        <p style={{
          fontFamily: aSans, fontSize: 18, lineHeight: 1.55, color: A.ink2,
          maxWidth: 520, marginTop: 40,
        }}>
          Igor Kister berät Unternehmen und Privatpersonen in Vertrags-,
          Commercial-, Zivil- und Baurecht. Pragmatische Beratung mit Blick
          für wirtschaftliche Zusammenhänge — klar, verlässlich, ohne
          überflüssige Paragrafenprosa.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 44 }}>
          <a style={{
            fontFamily: aSans, fontSize: 14, color: A.paper, background: A.ink,
            padding: '14px 22px', borderRadius: 2, cursor: 'pointer',
          }}>Erstgespräch vereinbaren</a>
          <a style={{
            fontFamily: aSans, fontSize: 14, color: A.ink, border: `1px solid ${A.ink}`,
            padding: '13px 22px', borderRadius: 2, cursor: 'pointer', background: 'transparent',
          }}>Rechtsgebiete ansehen</a>
        </div>
      </div>

      {/* Rechte Spalte: typografische "Visitenkarte" */}
      <div style={{ position: 'relative', paddingTop: 40 }}>
        <div style={{
          background: A.paper, border: `1px solid ${A.line}`, padding: '44px 40px',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: -12, left: 32, background: A.bg, padding: '0 10px' }}>
            <Eyebrow>Kanzlei</Eyebrow>
          </div>
          <div style={{ fontFamily: aSerif, fontSize: 44, color: A.ink, lineHeight: 1.05, letterSpacing: -0.8 }}>
            Igor Kister
          </div>
          <div style={{ fontFamily: aSerif, fontStyle: 'italic', fontSize: 20, color: A.accent, marginTop: 4 }}>
            Rechtsanwalt
          </div>

          <div style={{ height: 1, background: A.line, margin: '32px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', rowGap: 14, fontFamily: aSans, fontSize: 14 }}>
            <div style={{ color: A.ink3 }}>Schwerpunkte</div>
            <div style={{ color: A.ink }}>Vertragsrecht · Commercial · Baurecht · Zivilrecht</div>
            <div style={{ color: A.ink3 }}>Mandanten</div>
            <div style={{ color: A.ink }}>Unternehmen und Privatpersonen</div>
            <div style={{ color: A.ink3 }}>Sprachen</div>
            <div style={{ color: A.ink }}>Deutsch · Englisch · Russisch</div>
            <div style={{ color: A.ink3 }}>Zulassung</div>
            <div style={{ color: A.ink }}>Rechtsanwaltskammer Freiburg</div>
          </div>

          <div style={{ height: 1, background: A.line, margin: '32px 0' }} />

          <div style={{ fontFamily: aMono, fontSize: 11, color: A.ink3, letterSpacing: '0.08em', lineHeight: 1.8 }}>
            KAISER-JOSEPH-STRASSE 00 · 79098 FREIBURG I. BR.<br/>
            +49 761 000 00 00 · KANZLEI@KISTER-LAW.DE
          </div>
        </div>

      </div>
    </div>

  </section>
);

// ─────────────────────────── Über mich ───────────────────────────
const AboutA = () => (
  <section style={{ padding: '110px 64px', background: A.bgAlt, borderTop: `1px solid ${A.line}` }}>
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 80 }}>
      <div>
        <Eyebrow>§ 02 · Zur Person</Eyebrow>
        {/* Portrait-Platzhalter */}
        <div style={{
          marginTop: 28, width: 200, aspectRatio: '3/4', background: `
            repeating-linear-gradient(135deg, ${A.ink} 0px, ${A.ink} 1px, transparent 1px, transparent 8px),
            ${A.paper}`,
          border: `1px solid ${A.line}`, position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 12, border: `1px dashed ${A.ink3}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(250,248,243,0.85)',
          }}>
            <div style={{ fontFamily: aMono, fontSize: 10, color: A.ink3, letterSpacing: '0.12em' }}>PORTRAIT</div>
            <div style={{ fontFamily: aMono, fontSize: 9, color: A.ink3, marginTop: 4 }}>→ hi-res foto, 3:4</div>
          </div>
        </div>
        <div style={{ marginTop: 14, fontFamily: aMono, fontSize: 10, color: A.ink3, letterSpacing: '0.1em' }}>
          FIG. 01 — IGOR KISTER, RA
        </div>
      </div>

      <div style={{ paddingTop: 28 }}>
        <h2 style={{
          fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
          color: A.ink, margin: 0, letterSpacing: -1,
        }}>
          Recht, das in der<br/>
          <span style={{ fontStyle: 'italic', color: A.accent }}>Praxis bestehen muss</span>.
        </h2>
        <div style={{
          marginTop: 40, fontFamily: aSerif, fontSize: 22, lineHeight: 1.55,
          color: A.ink, maxWidth: 680,
        }}>
          Ich berate Unternehmen und Privat­personen in Fragen, die selten
          nur juristisch sind — sondern meist auch wirtschaftlich, operativ
          und menschlich. Klarheit geht mir über formale Eleganz; verhandelbare
          Verträge über abschreckende Klausel­türme.
        </div>
        <div style={{
          marginTop: 32, fontFamily: aSans, fontSize: 15, lineHeight: 1.7,
          color: A.ink2, maxWidth: 620, columnCount: 2, columnGap: 40,
        }}>
          Daneben arbeite ich als Syndikus­rechts­anwalt in der Industrie.
          Dieser zweite Blickwinkel — aus dem Inneren eines Unternehmens heraus —
          fließt unaufdringlich in meine Mandats­arbeit ein. Die Folge ist
          Beratung, die Risiken nicht nur auflistet, sondern priorisiert, und
          Kommunikation, die ohne Floskeln auskommt.
        </div>

        <div style={{ marginTop: 44, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {['Klarheit vor Jargon', 'Risiko priorisieren, nicht katalogisieren', 'Erreichbar, auch werktags', 'Festpreis, wo möglich'].map((x, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: aSans, fontSize: 14, color: A.ink }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: A.accent }} />
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────── Rechtsgebiete ───────────────────────────
const practiceAreas = [
  {
    n: '01',
    t: 'Vertragsrecht',
    d: 'Gestaltung, Prüfung und Verhandlung von Verträgen — vom AGB-Set über Kooperations- und Lizenz­verträge bis zur individuellen Einzel­regelung.',
    tags: ['AGB', 'Kooperation', 'Lizenz', 'Geheimhaltung'],
  },
  {
    n: '02',
    t: 'Commercial',
    d: 'Liefer- und Einkaufs­beziehungen im B2B-Kontext: Rahmen­verträge, Lieferketten, Claims-Management, Haftungs- und Gewährleistungs­regime.',
    tags: ['Rahmenverträge', 'Claims', 'Haftung', 'Incoterms'],
  },
  {
    n: '03',
    t: 'Allgemeines Zivilrecht',
    d: 'Rechtliche Begleitung in Alltag und Ausnahme­situation — Schuld­recht, Sachen­recht, Durch­setzung von Ansprüchen, außer­gericht­lich und vor Gericht.',
    tags: ['Schuldrecht', 'Durchsetzung', 'Vergleich'],
  },
  {
    n: '04',
    t: 'Baurecht',
    d: 'Private Baurechts­streitig­keiten, VOB/B- und BGB-Werkverträge, Abnahme, Mängel­haftung und Nachtrags­management für Bauherren und Auftragnehmer.',
    tags: ['VOB/B', 'Werkvertrag', 'Mängel', 'Nachtrag'],
  },
];

const PracticeA = () => (
  <section style={{ padding: '110px 64px', background: A.bg }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
      <div>
        <Eyebrow>§ 03 · Rechtsgebiete</Eyebrow>
        <h2 style={{
          fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
          color: A.ink, margin: '24px 0 0', letterSpacing: -1, maxWidth: 700,
        }}>
          Vier Gebiete, <span style={{ fontStyle: 'italic' }}>in die Tiefe</span>.
        </h2>
      </div>
      <div style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, maxWidth: 320, lineHeight: 1.6 }}>
        Ich beschränke mich auf das, was ich täglich mache. Für alles
        Darüber­hinaus­gehende vermittle ich gerne an vertraute Kolleg:innen.
      </div>
    </div>

    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid ${A.ink}`,
    }}>
      {practiceAreas.map((p, i) => (
        <div key={p.n} style={{
          padding: '40px 40px 48px',
          borderRight: i % 2 === 0 ? `1px solid ${A.line}` : 'none',
          borderBottom: i < 2 ? `1px solid ${A.line}` : 'none',
          position: 'relative', background: A.bg,
          cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <RuleNum n={`§ ${p.n}`} />
            <span style={{ fontFamily: aSerif, fontSize: 18, color: A.accent }}>↗</span>
          </div>
          <h3 style={{
            fontFamily: aSerif, fontWeight: 400, fontSize: 42, color: A.ink,
            margin: '14px 0 18px', letterSpacing: -0.6,
          }}>{p.t}</h3>
          <p style={{ fontFamily: aSans, fontSize: 15, lineHeight: 1.65, color: A.ink2, maxWidth: 520 }}>{p.d}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
            {p.tags.map(t => (
              <span key={t} style={{
                fontFamily: aMono, fontSize: 11, letterSpacing: '0.05em',
                color: A.ink2, padding: '4px 10px', border: `1px solid ${A.line}`,
              }}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─────────────────────────── Werdegang ───────────────────────────
const cv = [
  ['2018 — heute', 'Rechtsanwalt', 'Zulassung RAK Freiburg · eigene Mandate'],
  ['2020 — heute', 'Syndikusrechtsanwalt', 'Industrieunternehmen · Commercial & Contracts'],
  ['2016 — 2018', 'Rechtsanwalt', 'Wirtschaftskanzlei, Bereich Commercial'],
  ['2014 — 2016', 'Referendariat', 'Stationen in Industrie und Kanzlei'],
  ['2008 — 2014', 'Studium der Rechtswissenschaften', 'Schwerpunkt Wirtschaftsrecht'],
];

const CVA = () => (
  <section style={{ padding: '110px 64px', background: A.paper, borderTop: `1px solid ${A.line}` }}>
    <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80 }}>
      <div>
        <Eyebrow>§ 04 · Erfahrungen</Eyebrow>
        <h2 style={{
          fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
          color: A.ink, margin: '24px 0 0', letterSpacing: -1,
        }}>Ausbildung<br/>&amp; <span style={{ fontStyle: 'italic' }}>Erfahrungen</span></h2>
        <p style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, marginTop: 24, lineHeight: 1.6 }}>
          Eine chronologische Kurzfassung. Details und Publikations­liste auf Anfrage.
        </p>
      </div>

      <div>
        {cv.map((row, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr', gap: 40,
            padding: '28px 0', borderTop: `1px solid ${A.line}`,
            borderBottom: i === cv.length - 1 ? `1px solid ${A.line}` : 'none',
            alignItems: 'baseline',
          }}>
            <div style={{ fontFamily: aMono, fontSize: 12, color: A.ink3, letterSpacing: '0.08em' }}>{row[0]}</div>
            <div>
              <div style={{ fontFamily: aSerif, fontSize: 26, color: A.ink, lineHeight: 1.2 }}>{row[1]}</div>
              <div style={{ fontFamily: aSans, fontSize: 14, color: A.ink2, marginTop: 6 }}>{row[2]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────── Honorar ───────────────────────────
const FeesA = () => (
  <section style={{ padding: '110px 64px', background: A.bgAlt }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 70 }}>
        <Eyebrow>§ 05 · Honorar</Eyebrow>
        <h2 style={{
          fontFamily: aSerif, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
          color: A.ink, margin: '24px 0 20px', letterSpacing: -1,
        }}>
          Transparent. <span style={{ fontStyle: 'italic' }}>Kein Überraschungs­moment.</span>
        </h2>
        <p style={{ fontFamily: aSans, fontSize: 16, color: A.ink2, maxWidth: 620, margin: '0 auto', lineHeight: 1.6 }}>
          Je nach Mandatstyp biete ich Festpreis, Stundensatz oder die
          gesetzliche RVG-Vergütung an. Die Wahl besprechen wir offen — vor dem
          ersten Schritt.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${A.ink}` }}>
        {[
          { t: 'Erstgespräch', p: '150 €', u: 'zzgl. USt · bis 60 Min.', d: 'Einschätzung Ihres Anliegens, mögliche Strategien, Aufwand. Kein Kleingedrucktes.', b: false },
          { t: 'Festpreis', p: 'ab 450 €', u: 'pro Vorgang · zzgl. USt', d: 'Vertragsprüfung, AGB-Anpassung, einmalige Mandate mit klarem Umfang. Sie wissen vorher, was kommt.', b: true },
          { t: 'Stundensatz', p: '290 €', u: 'pro Zeitstunde · zzgl. USt', d: 'Für laufende Beratung und Mandate, deren Umfang sich erst im Verfahren zeigt.', b: false },
        ].map((c, i) => (
          <div key={i} style={{
            padding: '40px 32px', borderRight: i < 2 ? `1px solid ${A.line}` : 'none',
            background: c.b ? A.ink : 'transparent', color: c.b ? A.paper : A.ink,
            position: 'relative',
          }}>
            {c.b && (
              <div style={{
                position: 'absolute', top: -10, left: 32, background: A.accent,
                fontFamily: aMono, fontSize: 10, color: A.paper, letterSpacing: '0.12em',
                padding: '4px 10px',
              }}>EMPFOHLEN</div>
            )}
            <Eyebrow color={c.b ? 'rgba(250,248,243,0.6)' : A.ink3}>{c.t}</Eyebrow>
            <div style={{
              fontFamily: aSerif, fontSize: 56, lineHeight: 1, marginTop: 24,
              color: c.b ? A.paper : A.ink, letterSpacing: -1.2,
            }}>{c.p}</div>
            <div style={{ fontFamily: aMono, fontSize: 11, marginTop: 8, color: c.b ? 'rgba(250,248,243,0.6)' : A.ink3, letterSpacing: '0.08em' }}>{c.u}</div>
            <div style={{
              height: 1, margin: '28px 0', background: c.b ? 'rgba(250,248,243,0.18)' : A.line,
            }} />
            <p style={{ fontFamily: aSans, fontSize: 14, lineHeight: 1.65, color: c.b ? 'rgba(250,248,243,0.8)' : A.ink2 }}>{c.d}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 32, padding: '20px 24px', background: A.paper, border: `1px solid ${A.line}`,
        display: 'flex', gap: 20, alignItems: 'center',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 18, background: A.accent,
          color: A.paper, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: aSerif, fontSize: 18, flexShrink: 0,
        }}>§</div>
        <div style={{ fontFamily: aSans, fontSize: 14, lineHeight: 1.6, color: A.ink2 }}>
          Bei gerichtlichen Verfahren erfolgt die Abrechnung nach RVG. Eine Rechts­schutz­versicherung
          deckt häufig große Teile der Kosten — ich prüfe das für Sie kostenfrei.
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────── Kontakt ───────────────────────────
const ContactA = () => (
  <section style={{ padding: '110px 64px', background: A.ink, color: A.paper, position: 'relative', overflow: 'hidden' }}>
    {/* dekoratives riesiges § im Hintergrund */}
    <div aria-hidden style={{
      position: 'absolute', right: -60, top: -80, fontFamily: aSerif,
      fontSize: 560, color: 'rgba(250,248,243,0.04)', lineHeight: 0.8, pointerEvents: 'none',
    }}>§</div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 80, position: 'relative' }}>
      <div>
        <Eyebrow color="rgba(250,248,243,0.6)">§ 06 · Kontakt</Eyebrow>
        <h2 style={{
          fontFamily: aSerif, fontWeight: 400, fontSize: 84, lineHeight: 0.98,
          color: A.paper, margin: '24px 0 40px', letterSpacing: -1.6,
        }}>
          Reden<br/>
          <span style={{ fontStyle: 'italic', color: A.accentSoft }}>wir darüber.</span>
        </h2>
        <p style={{ fontFamily: aSans, fontSize: 17, lineHeight: 1.6, color: 'rgba(250,248,243,0.75)', maxWidth: 480 }}>
          Eine E-Mail, ein Anruf oder ein kurzes Formular — wählen Sie den Weg,
          der Ihnen am ehesten liegt. Ich melde mich innerhalb von zwei Werktagen.
        </p>

        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {[
            ['Direktkontakt', 'kanzlei@kister-law.de', '+49 711 000 00 00'],
            ['Postanschrift', 'Kaiser-Joseph-Straße 00', '79098 Freiburg i. Br.'],
            ['Bürozeiten', 'Mo – Fr, 09:00 – 18:00', 'Termine auf Anfrage'],
            ['Sprachen', 'Deutsch · Englisch · Russisch', ''],
          ].map(([h, a, b], i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(250,248,243,0.2)', paddingTop: 20 }}>
              <div style={{ fontFamily: aMono, fontSize: 11, color: 'rgba(250,248,243,0.55)', letterSpacing: '0.12em', marginBottom: 12 }}>{h.toUpperCase()}</div>
              <div style={{ fontFamily: aSerif, fontSize: 20, color: A.paper }}>{a}</div>
              {b && <div style={{ fontFamily: aSans, fontSize: 14, color: 'rgba(250,248,243,0.7)', marginTop: 6 }}>{b}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Formular-Karte */}
      <div style={{
        background: A.paper, color: A.ink, padding: 40,
        alignSelf: 'start',
      }}>
        <Eyebrow>Anfrage</Eyebrow>
        <div style={{ fontFamily: aSerif, fontSize: 32, margin: '14px 0 28px', letterSpacing: -0.4 }}>
          Erstgespräch anfragen
        </div>
        {[
          ['Name', 'Vor- und Nachname'],
          ['E-Mail', 'ihre@email.de'],
          ['Anliegen', 'Kurze Beschreibung, worum es geht …', true],
        ].map(([l, p, big], i) => (
          <div key={i} style={{ marginBottom: 22 }}>
            <div style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.12em', color: A.ink3, marginBottom: 8 }}>{l.toUpperCase()}</div>
            <div style={{
              borderBottom: `1px solid ${A.ink}`, padding: '10px 0',
              fontFamily: aSans, fontSize: 15, color: A.ink3, minHeight: big ? 90 : 'auto',
            }}>{p}</div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 24, fontFamily: aSans, fontSize: 12, color: A.ink2 }}>
          <span style={{ width: 14, height: 14, border: `1px solid ${A.ink}` }} />
          Ich stimme der Verarbeitung meiner Daten gemäß Datenschutzerklärung zu.
        </div>
        <button style={{
          marginTop: 28, width: '100%', padding: '16px 20px',
          background: A.ink, color: A.paper, border: 'none', cursor: 'pointer',
          fontFamily: aSans, fontSize: 14, letterSpacing: 0.4,
        }}>Anfrage senden →</button>
      </div>
    </div>
  </section>
);

// ─────────────────────────── Footer ───────────────────────────
const FooterA = () => (
  <footer style={{ padding: '50px 64px 36px', background: A.bg, borderTop: `1px solid ${A.line}` }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end' }}>
      <div>
        <div style={{ fontFamily: aSerif, fontSize: 28, color: A.ink, letterSpacing: -0.3 }}>
          Kanzlei <span style={{ fontStyle: 'italic' }}>Kister</span>
        </div>
        <div style={{ fontFamily: aMono, fontSize: 11, color: A.ink3, letterSpacing: '0.1em', marginTop: 8 }}>
          IGOR KISTER · RECHTSANWALT · FREIBURG IM BREISGAU
        </div>
      </div>
      <div style={{ display: 'flex', gap: 28, fontFamily: aSans, fontSize: 13, color: A.ink2 }}>
        <a>Impressum</a><a>Datenschutz</a><a>Berufsrechtliche Hinweise</a>
      </div>
    </div>
    <div style={{
      marginTop: 28, paddingTop: 20, borderTop: `1px solid ${A.line}`,
      fontFamily: aMono, fontSize: 10, color: A.ink3, letterSpacing: '0.1em',
      display: 'flex', justifyContent: 'space-between',
    }}>
      <span>© 2026 IGOR KISTER</span>
      <span>DESIGN N° 01 / EDITORIAL SERIF</span>
    </div>
  </footer>
);

// ─────────────────────────── Composition ───────────────────────────
const VariantA = () => (
  <div style={{ background: A.bg, fontFamily: aSans, color: A.ink, width: 1440 }}>
    {/* Google Font imports inline for this scope */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    `}</style>
    <HeaderA />
    <HeroA />
    <AboutA />
    <PracticeA />
    <CVA />
    <FeesA />
    <ContactA />
    <FooterA />
  </div>
);

window.VariantA = VariantA;
