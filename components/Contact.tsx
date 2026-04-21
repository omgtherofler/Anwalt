'use client';

import { useState, FormEvent } from 'react';
import { A, aSans, aSerif, aMono } from '@/lib/theme';

const inputStyle = {
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${A.ink}`,
  background: 'transparent',
  padding: '10px 0',
  fontFamily: `"Inter", ui-sans-serif, system-ui, sans-serif`,
  fontSize: 15,
  color: A.ink,
  outline: 'none',
  resize: 'none' as const,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Unbekannter Fehler.');
        setStatus('error');
      } else {
        setStatus('success');
        setForm({ name: '', email: '', message: '', consent: false });
      }
    } catch {
      setErrorMsg('Verbindungsfehler. Bitte versuchen Sie es erneut.');
      setStatus('error');
    }
  };

  return (
    <section
      id="kontakt"
      style={{
        padding: '110px 64px',
        background: A.ink,
        color: A.paper,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-padding section-v-padding snap-section"
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', right: -60, top: -80, fontFamily: aSerif,
          fontSize: 560, color: 'rgba(250,248,243,0.04)', lineHeight: 0.8, pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        §
      </div>

      <div className="section-inner" style={{ position: 'relative' }}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 80 }}
        className="contact-grid"
      >
        <div>
          <div style={{
            fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(250,248,243,0.6)', fontWeight: 500,
          }}>
            § 06 · Kontakt
          </div>

          <h2
            style={{
              fontFamily: aSerif, fontWeight: 400, fontSize: 84, lineHeight: 0.98,
              color: A.paper, margin: '24px 0 40px', letterSpacing: -1.6,
            }}
            className="contact-title"
          >
            Reden<br />
            <span style={{ fontStyle: 'italic', color: A.accentSoft }}>wir darüber.</span>
          </h2>

          <p style={{
            fontFamily: aSans, fontSize: 17, lineHeight: 1.6,
            color: 'rgba(250,248,243,0.75)', maxWidth: 480, margin: 0,
          }}>
            Eine E-Mail, ein Anruf oder ein kurzes Formular — wählen Sie den Weg,
            der Ihnen am ehesten liegt. Ich melde mich innerhalb von zwei Werktagen.
          </p>

          <div
            style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}
            className="contact-info-grid"
          >
            {[
              ['Direktkontakt', 'Igor@kanzlei-kister.com', '0155 60873381'],
              ['Postanschrift', 'Elefantenweg 71', '79110 Freiburg i. Br.'],
              ['Bürozeiten', 'Mo – Fr, 09:00 – 18:00', 'Termine auf Anfrage'],
              ['Sprachen', 'Deutsch · Englisch · Russisch', ''],
            ].map(([h, a, b], i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(250,248,243,0.2)', paddingTop: 20 }}>
                <div style={{
                  fontFamily: aMono, fontSize: 11, color: 'rgba(250,248,243,0.55)',
                  letterSpacing: '0.12em', marginBottom: 12,
                }}>
                  {h.toUpperCase()}
                </div>
                <div style={{ fontFamily: aSerif, fontSize: 20, color: A.paper }}>{a}</div>
                {b && <div style={{ fontFamily: aSans, fontSize: 14, color: 'rgba(250,248,243,0.7)', marginTop: 6 }}>{b}</div>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: A.paper, color: A.ink, padding: 40, alignSelf: 'start' }}>
          <div style={{
            fontFamily: aSans, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: A.ink3, fontWeight: 500,
          }}>
            Anfrage
          </div>
          <div style={{ fontFamily: aSerif, fontSize: 32, margin: '14px 0 28px', letterSpacing: -0.4 }}>
            Erstgespräch anfragen
          </div>

          {status === 'success' ? (
            <div style={{
              padding: '32px 24px', background: A.bgAlt, border: `1px solid ${A.line}`,
              fontFamily: aSans, fontSize: 15, lineHeight: 1.6, color: A.ink,
            }}>
              <div style={{ fontFamily: aSerif, fontSize: 24, marginBottom: 12 }}>Vielen Dank.</div>
              Ihre Anfrage ist eingegangen. Ich melde mich innerhalb von zwei Werktagen.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.12em', color: A.ink3, marginBottom: 8 }}>
                  NAME
                </div>
                <input
                  type="text"
                  placeholder="Vor- und Nachname"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.12em', color: A.ink3, marginBottom: 8 }}>
                  E-MAIL
                </div>
                <input
                  type="email"
                  placeholder="ihre@email.de"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.12em', color: A.ink3, marginBottom: 8 }}>
                  ANLIEGEN
                </div>
                <textarea
                  placeholder="Kurze Beschreibung, worum es geht …"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={4}
                  style={{ ...inputStyle, display: 'block' }}
                />
              </div>

              <label style={{
                display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 24,
                fontFamily: aSans, fontSize: 12, color: A.ink2, cursor: 'pointer',
              }}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                  required
                  style={{ marginTop: 2, flexShrink: 0, width: 14, height: 14, accentColor: A.ink }}
                />
                Ich stimme der Verarbeitung meiner Daten gemäß{' '}
                <a href="/datenschutz" style={{ color: A.accent, textDecoration: 'underline' }}>
                  Datenschutzerklärung
                </a>{' '}
                zu.
              </label>

              {status === 'error' && (
                <div style={{
                  marginTop: 16, padding: '10px 14px', background: '#fef2f2',
                  border: '1px solid #fca5a5', fontFamily: aSans, fontSize: 13, color: '#991b1b',
                }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  marginTop: 28, width: '100%', padding: '16px 20px',
                  background: status === 'loading' ? A.ink2 : A.ink,
                  color: A.paper, border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontFamily: aSans, fontSize: 14, letterSpacing: 0.4,
                  transition: 'opacity 0.15s',
                }}
              >
                {status === 'loading' ? 'Wird gesendet …' : 'Anfrage senden →'}
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
