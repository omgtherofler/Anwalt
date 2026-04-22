export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { getSubmissions, type Submission } from '@/lib/submissions';
import { A, aSans, aSerif, aMono } from '@/lib/theme';
import AdminLoginForm, { AdminLogoutBtn, AdminMarkReadBtn } from './AdminClient';

function isAuthed(): boolean {
  const c = cookies();
  const pw = process.env.ADMIN_PASSWORD;
  return !!pw && c.get('admin_auth')?.value === pw;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const URGENCY_COLOR: Record<string, string> = {
  Normal: '#16a34a',
  Dringend: '#d97706',
  'Sehr dringend': '#dc2626',
  Urgent: '#d97706',
  'Very Urgent': '#dc2626',
};

export default function AdminPage() {
  const authed = isAuthed();

  if (!authed) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: A.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: 360 }}>
          <div
            style={{ fontFamily: aSerif, fontSize: 32, color: A.ink, marginBottom: 8, letterSpacing: -0.5 }}
          >
            Kanzlei <em>Kister</em>
          </div>
          <div
            style={{
              fontFamily: aMono,
              fontSize: 10,
              letterSpacing: '0.16em',
              color: A.ink3,
              marginBottom: 36,
            }}
          >
            ADMIN · ZUGANG ERFORDERLICH
          </div>
          <AdminLoginForm />
        </div>
      </div>
    );
  }

  const submissions = getSubmissions();
  const today = new Date().toDateString();
  const todayCount = submissions.filter(
    (s) => new Date(s.createdAt).toDateString() === today
  ).length;
  const urgentCount = submissions.filter(
    (s) => s.urgency === 'Sehr dringend' || s.urgency === 'Very Urgent'
  ).length;
  const unreadCount = submissions.filter((s) => !s.read).length;

  return (
    <div style={{ minHeight: '100vh', background: A.bg }}>
      {/* Header */}
      <header
        style={{
          padding: '18px 48px',
          background: A.ink,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
          <span style={{ fontFamily: aSerif, fontSize: 20, color: A.paper }}>
            Kanzlei <em>Kister</em>
          </span>
          <span
            style={{
              fontFamily: aMono,
              fontSize: 10,
              color: 'rgba(250,248,243,0.5)',
              letterSpacing: '0.16em',
            }}
          >
            ADMIN
          </span>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a
            href="/de"
            style={{
              fontFamily: aSans,
              fontSize: 13,
              color: 'rgba(250,248,243,0.6)',
              textDecoration: 'none',
            }}
          >
            ← Website
          </a>
          <AdminLogoutBtn />
        </div>
      </header>

      <main style={{ padding: '48px 48px 80px', maxWidth: 1280 }}>
        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            marginBottom: 48,
          }}
        >
          {[
            { label: 'Gesamt', value: submissions.length, highlight: false },
            { label: 'Heute', value: todayCount, highlight: false },
            { label: 'Ungelesen', value: unreadCount, highlight: unreadCount > 0 },
            { label: 'Sehr dringend', value: urgentCount, highlight: urgentCount > 0 },
          ].map(({ label, value, highlight }) => (
            <div
              key={label}
              style={{
                padding: '28px 24px',
                background: highlight ? A.ink : A.paper,
                border: `1px solid ${highlight ? A.ink : A.line}`,
              }}
            >
              <div
                style={{
                  fontFamily: aSerif,
                  fontSize: 52,
                  lineHeight: 1,
                  color: highlight ? A.paper : A.ink,
                  letterSpacing: -1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: aMono,
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: highlight ? 'rgba(250,248,243,0.6)' : A.ink3,
                  marginTop: 8,
                }}
              >
                {label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* Table heading */}
        <div
          style={{
            fontFamily: aMono,
            fontSize: 10,
            letterSpacing: '0.18em',
            color: A.ink3,
            marginBottom: 16,
          }}
        >
          ANFRAGEN
        </div>

        {submissions.length === 0 ? (
          <div
            style={{
              padding: '80px 0',
              textAlign: 'center',
              fontFamily: aSerif,
              fontSize: 24,
              color: A.ink3,
            }}
          >
            Noch keine Anfragen.
          </div>
        ) : (
          <div style={{ border: `1px solid ${A.line}` }}>
            {submissions.map((s, i) => (
              <div
                key={s.id}
                style={{
                  padding: '22px 28px',
                  borderBottom: i < submissions.length - 1 ? `1px solid ${A.line}` : 'none',
                  background: s.read ? A.bg : A.paper,
                  display: 'grid',
                  gridTemplateColumns: '160px 130px 150px 1fr auto',
                  gap: 20,
                  alignItems: 'start',
                }}
              >
                {/* Date + new badge */}
                <div>
                  <div style={{ fontFamily: aMono, fontSize: 11, color: A.ink3, letterSpacing: '0.06em' }}>
                    {formatDate(s.createdAt)}
                  </div>
                  {!s.read && (
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: 4,
                        padding: '2px 7px',
                        background: A.accent,
                        color: A.paper,
                        fontFamily: aMono,
                        fontSize: 9,
                        letterSpacing: '0.1em',
                      }}
                    >
                      NEU
                    </span>
                  )}
                </div>

                {/* Urgency */}
                <div
                  style={{
                    fontFamily: aSans,
                    fontSize: 12,
                    fontWeight: 600,
                    color: URGENCY_COLOR[s.urgency] ?? A.ink3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 2,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      background: URGENCY_COLOR[s.urgency] ?? A.ink3,
                      flexShrink: 0,
                    }}
                  />
                  {s.urgency}
                </div>

                {/* Area */}
                <div
                  style={{ fontFamily: aSans, fontSize: 13, color: A.ink, fontWeight: 500, marginTop: 2 }}
                >
                  {s.area}
                </div>

                {/* Name + email + message */}
                <div>
                  <div style={{ fontFamily: aSerif, fontSize: 17, color: A.ink }}>{s.name}</div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 3, flexWrap: 'wrap' }}>
                    <a
                      href={`mailto:${s.email}`}
                      style={{
                        fontFamily: aMono,
                        fontSize: 11,
                        color: A.accent,
                        textDecoration: 'none',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {s.email}
                    </a>
                    {s.phone && (
                      <span
                        style={{
                          fontFamily: aMono,
                          fontSize: 11,
                          color: A.ink3,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {s.phone}
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: aMono,
                        fontSize: 10,
                        color: A.ink3,
                        letterSpacing: '0.08em',
                      }}
                    >
                      [{s.lang?.toUpperCase()}]
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontFamily: aSans,
                      fontSize: 13,
                      color: A.ink2,
                      lineHeight: 1.55,
                    }}
                  >
                    {s.message.length > 220 ? s.message.slice(0, 220) + '…' : s.message}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                  <a
                    href={`mailto:${s.email}?subject=Re: Ihre Anfrage bei Kanzlei Kister`}
                    style={{
                      fontFamily: aSans,
                      fontSize: 12,
                      color: A.paper,
                      background: A.ink,
                      padding: '8px 16px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Antworten →
                  </a>
                  {!s.read && <AdminMarkReadBtn id={s.id} />}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
