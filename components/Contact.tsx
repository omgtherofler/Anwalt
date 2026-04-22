'use client';

import { useState, FormEvent } from 'react';
import { A, aSans, aSerif, aMono } from '@/lib/theme';
import type { Translations } from '@/locales';

type Props = { t: Translations['contact']; lang: string };

interface FormData {
  area: string;
  urgency: string;
  message: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

const EMPTY: FormData = {
  area: '',
  urgency: '',
  message: '',
  name: '',
  email: '',
  phone: '',
  consent: false,
};

const TOTAL_STEPS = 4;

export default function Contact({ t, lang }: Props) {
  const f = t.form;
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k: keyof FormData) => (v: string | boolean) =>
    setData((d) => ({ ...d, [k]: v }));

  // Validation per step
  const canProceed =
    step === 1
      ? !!data.area
      : step === 2
      ? data.message.trim().length > 10 && !!data.urgency
      : step === 3
      ? !!data.name.trim() && /\S+@\S+\.\S+/.test(data.email) && data.consent
      : true;

  const submit = async () => {
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang }),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || f.errorMsg);
        setStatus('error');
      } else {
        setStatus('success');
        setData(EMPTY);
        setStep(1);
      }
    } catch {
      setErrorMsg(f.errorMsg);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    border: 'none',
    borderBottom: `1px solid ${A.ink}`,
    background: 'transparent',
    padding: '10px 0',
    fontFamily: aSans,
    fontSize: 15,
    color: A.ink,
    outline: 'none',
  } as React.CSSProperties;

  const urgencyColor = (u: string) =>
    u === data.urgency
      ? A.ink
      : 'transparent';

  return (
    <section
      id="kontakt"
      style={{
        padding: '110px 0',
        background: A.ink,
        color: A.paper,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="section-v-padding snap-section"
    >
      {/* Decorative § */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -60,
          top: -80,
          fontFamily: aSerif,
          fontSize: 560,
          color: 'rgba(250,248,243,0.04)',
          lineHeight: 0.8,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        §
      </div>

      <div className="section-inner section-padding" style={{ position: 'relative' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 80 }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div>
            <div
              style={{
                fontFamily: aSans,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(250,248,243,0.6)',
                fontWeight: 500,
              }}
            >
              {t.eyebrow}
            </div>

            <h2
              style={{
                fontFamily: aSerif,
                fontWeight: 400,
                fontSize: 84,
                lineHeight: 0.98,
                color: A.paper,
                margin: '24px 0 40px',
                letterSpacing: -1.6,
              }}
              className="contact-title"
            >
              {t.titleLine1}
              <br />
              <span style={{ fontStyle: 'italic', color: A.accentSoft }}>{t.titleLine2}</span>
            </h2>

            <p
              style={{
                fontFamily: aSans,
                fontSize: 17,
                lineHeight: 1.6,
                color: 'rgba(250,248,243,0.75)',
                maxWidth: 480,
                margin: 0,
              }}
            >
              {t.subtitle}
            </p>

            <div
              style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}
              className="contact-info-grid"
            >
              {t.info.map((item, i) => (
                <div
                  key={i}
                  style={{ borderTop: '1px solid rgba(250,248,243,0.2)', paddingTop: 20 }}
                >
                  <div
                    style={{
                      fontFamily: aMono,
                      fontSize: 11,
                      color: 'rgba(250,248,243,0.55)',
                      letterSpacing: '0.12em',
                      marginBottom: 12,
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>
                  {item.lines.map((line, j) => (
                    <div
                      key={j}
                      style={{
                        fontFamily: j === 0 ? aSerif : aSans,
                        fontSize: j === 0 ? 20 : 14,
                        color: j === 0 ? A.paper : 'rgba(250,248,243,0.7)',
                        marginTop: j > 0 ? 6 : 0,
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right: multi-step form */}
          <div style={{ background: A.paper, color: A.ink, padding: '40px 40px 44px', alignSelf: 'start' }}>
            {/* Panel header */}
            <div
              style={{
                fontFamily: aSans,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: A.ink3,
                fontWeight: 500,
              }}
            >
              {f.panelLabel}
            </div>
            <div
              style={{ fontFamily: aSerif, fontSize: 32, margin: '12px 0 28px', letterSpacing: -0.4 }}
            >
              {f.panelTitle}
            </div>

            {/* Success state */}
            {status === 'success' ? (
              <div
                style={{
                  padding: '32px 24px',
                  background: A.bgAlt,
                  border: `1px solid ${A.line}`,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    background: A.accent,
                    color: A.paper,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: aSerif,
                    fontSize: 24,
                    margin: '0 auto 20px',
                  }}
                >
                  ✓
                </div>
                <div style={{ fontFamily: aSerif, fontSize: 28, color: A.ink, marginBottom: 12 }}>
                  {f.successTitle}
                </div>
                <div style={{ fontFamily: aSans, fontSize: 15, color: A.ink2, lineHeight: 1.6 }}>
                  {f.successBody}
                </div>
              </div>
            ) : (
              <>
                {/* Step progress */}
                <div style={{ marginBottom: 28 }}>
                  {/* Step bar */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
                    {f.steps.map((label, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: 2,
                          background: i < step ? A.ink : A.line,
                          transition: 'background 0.3s',
                        }}
                      />
                    ))}
                  </div>
                  {/* Step labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {f.steps.map((label, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: aMono,
                          fontSize: 9,
                          letterSpacing: '0.1em',
                          color: i === step - 1 ? A.ink : A.ink3,
                          textTransform: 'uppercase',
                          transition: 'color 0.2s',
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step counter */}
                <div
                  style={{
                    fontFamily: aMono,
                    fontSize: 10,
                    color: A.ink3,
                    letterSpacing: '0.1em',
                    marginBottom: 24,
                  }}
                >
                  {step} / {TOTAL_STEPS}
                </div>

                {/* ── STEP 1: Practice area ── */}
                {step === 1 && (
                  <div>
                    <div style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, marginBottom: 24, lineHeight: 1.2 }}>
                      {f.step1Heading}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {f.areas.map((area) => (
                        <button
                          key={area.value}
                          type="button"
                          onClick={() => set('area')(area.value)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px 16px',
                            border: `1px solid ${data.area === area.value ? A.ink : A.line}`,
                            background: data.area === area.value ? A.ink : 'transparent',
                            color: data.area === area.value ? A.paper : A.ink,
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s',
                          }}
                        >
                          <span style={{ fontFamily: aSans, fontSize: 14, fontWeight: 500 }}>
                            {area.label}
                          </span>
                          <span
                            style={{
                              fontFamily: aMono,
                              fontSize: 10,
                              letterSpacing: '0.08em',
                              color: data.area === area.value ? 'rgba(250,248,243,0.6)' : A.ink3,
                            }}
                          >
                            {area.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Matter ── */}
                {step === 2 && (
                  <div>
                    <div style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, marginBottom: 24, lineHeight: 1.2 }}>
                      {f.step2Heading}
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <div
                        style={{
                          fontFamily: aMono,
                          fontSize: 10,
                          letterSpacing: '0.12em',
                          color: A.ink3,
                          marginBottom: 8,
                        }}
                      >
                        {f.urgencyLabel.toUpperCase()}
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {f.urgencies.map((u) => (
                          <button
                            key={u.value}
                            type="button"
                            onClick={() => set('urgency')(u.value)}
                            style={{
                              flex: 1,
                              padding: '8px 0',
                              border: `1px solid ${data.urgency === u.value ? A.ink : A.line}`,
                              background: data.urgency === u.value ? A.ink : 'transparent',
                              color: data.urgency === u.value ? A.paper : A.ink,
                              fontFamily: aSans,
                              fontSize: 12,
                              cursor: 'pointer',
                              transition: 'all 0.15s',
                            }}
                          >
                            {u.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: aMono,
                        fontSize: 10,
                        letterSpacing: '0.12em',
                        color: A.ink3,
                        marginBottom: 8,
                      }}
                    >
                      ANLIEGEN
                    </div>
                    <textarea
                      placeholder={f.messagePlaceholder}
                      value={data.message}
                      onChange={(e) => set('message')(e.target.value)}
                      rows={5}
                      style={{
                        ...inputStyle,
                        display: 'block',
                        resize: 'none',
                        borderBottom: `1px solid ${A.ink}`,
                      }}
                    />
                  </div>
                )}

                {/* ── STEP 3: Contact ── */}
                {step === 3 && (
                  <div>
                    <div style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, marginBottom: 24, lineHeight: 1.2 }}>
                      {f.step3Heading}
                    </div>

                    {[
                      { key: 'name' as const, label: f.labels.name, placeholder: f.namePlaceholder, type: 'text' },
                      { key: 'email' as const, label: f.labels.email, placeholder: f.emailPlaceholder, type: 'email' },
                      { key: 'phone' as const, label: f.labels.phone, placeholder: f.phonePlaceholder, type: 'tel' },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key} style={{ marginBottom: 22 }}>
                        <div
                          style={{
                            fontFamily: aMono,
                            fontSize: 10,
                            letterSpacing: '0.12em',
                            color: A.ink3,
                            marginBottom: 8,
                          }}
                        >
                          {label.toUpperCase()}
                        </div>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={data[key] as string}
                          onChange={(e) => set(key)(e.target.value)}
                          required={key !== 'phone'}
                          style={inputStyle}
                        />
                      </div>
                    ))}

                    <label
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        marginTop: 20,
                        fontFamily: aSans,
                        fontSize: 12,
                        color: A.ink2,
                        cursor: 'pointer',
                        lineHeight: 1.5,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={data.consent}
                        onChange={(e) => set('consent')(e.target.checked)}
                        required
                        style={{ marginTop: 2, flexShrink: 0, width: 14, height: 14, accentColor: A.ink }}
                      />
                      {f.consentPre}
                      <a href={t.datenschutzHref} style={{ color: A.accent, textDecoration: 'underline' }}>
                        {f.consentLink}
                      </a>
                      {f.consentPost}
                    </label>
                  </div>
                )}

                {/* ── STEP 4: Review ── */}
                {step === 4 && (
                  <div>
                    <div style={{ fontFamily: aSerif, fontSize: 22, color: A.ink, marginBottom: 24, lineHeight: 1.2 }}>
                      {f.step4Heading}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                      {[
                        [f.labels.area, data.area],
                        [f.labels.urgency, data.urgency],
                        [f.labels.name, data.name],
                        [f.labels.email, data.email],
                        ...(data.phone ? [[f.labels.phone, data.phone]] : []),
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '100px 1fr',
                            gap: 12,
                            padding: '10px 0',
                            borderBottom: `1px solid ${A.line}`,
                            fontSize: 14,
                          }}
                        >
                          <span style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.1em', color: A.ink3, paddingTop: 2 }}>
                            {label.toUpperCase()}
                          </span>
                          <span style={{ fontFamily: aSans, color: A.ink }}>{value}</span>
                        </div>
                      ))}
                      {/* Message preview */}
                      <div style={{ padding: '10px 0', borderBottom: `1px solid ${A.line}` }}>
                        <span style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.1em', color: A.ink3, display: 'block', marginBottom: 6 }}>
                          {f.labels.message.toUpperCase()}
                        </span>
                        <span style={{ fontFamily: aSans, fontSize: 14, color: A.ink, lineHeight: 1.5 }}>
                          {data.message.length > 120 ? data.message.slice(0, 120) + '…' : data.message}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error message */}
                {status === 'error' && (
                  <div
                    style={{
                      marginTop: 16,
                      padding: '10px 14px',
                      background: '#fef2f2',
                      border: '1px solid #fca5a5',
                      fontFamily: aSans,
                      fontSize: 13,
                      color: '#991b1b',
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                {/* Navigation */}
                <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      style={{
                        padding: '14px 18px',
                        border: `1px solid ${A.line}`,
                        background: 'transparent',
                        color: A.ink2,
                        fontFamily: aSans,
                        fontSize: 14,
                        cursor: 'pointer',
                        transition: 'border-color 0.15s',
                      }}
                    >
                      {f.back}
                    </button>
                  )}
                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      disabled={!canProceed}
                      onClick={() => setStep((s) => s + 1)}
                      style={{
                        flex: 1,
                        padding: '14px 20px',
                        background: canProceed ? A.ink : A.ink3,
                        color: A.paper,
                        border: 'none',
                        fontFamily: aSans,
                        fontSize: 14,
                        cursor: canProceed ? 'pointer' : 'not-allowed',
                        letterSpacing: 0.3,
                        transition: 'background 0.15s',
                      }}
                    >
                      {f.next}
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={status === 'loading'}
                      onClick={submit}
                      style={{
                        flex: 1,
                        padding: '14px 20px',
                        background: status === 'loading' ? A.ink2 : A.accent,
                        color: A.paper,
                        border: 'none',
                        fontFamily: aSans,
                        fontSize: 14,
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        letterSpacing: 0.3,
                        transition: 'opacity 0.15s',
                      }}
                    >
                      {status === 'loading' ? f.submitting : f.submit}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
