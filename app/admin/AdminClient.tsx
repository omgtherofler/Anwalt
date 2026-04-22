'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { A, aSans, aSerif, aMono } from '@/lib/theme';

// ── Login form ──────────────────────────────────────────────────────────────
export default function AdminLoginForm() {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) {
      router.refresh();
    } else {
      setError('Falsches Passwort.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontFamily: aMono, fontSize: 10, letterSpacing: '0.12em', color: A.ink3, marginBottom: 8 }}>
          PASSWORT
        </div>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          autoFocus
          required
          style={{
            width: '100%',
            border: 'none',
            borderBottom: `1px solid ${A.ink}`,
            background: 'transparent',
            padding: '10px 0',
            fontFamily: aSans,
            fontSize: 16,
            color: A.ink,
            outline: 'none',
          }}
        />
      </div>
      {error && (
        <div style={{ fontFamily: aSans, fontSize: 13, color: '#dc2626', marginBottom: 12 }}>
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '14px',
          background: A.ink,
          color: A.paper,
          border: 'none',
          fontFamily: aSans,
          fontSize: 14,
          cursor: loading ? 'not-allowed' : 'pointer',
          letterSpacing: 0.3,
        }}
      >
        {loading ? 'Wird geprüft …' : 'Anmelden →'}
      </button>
    </form>
  );
}

// ── Logout button ────────────────────────────────────────────────────────────
export function AdminLogoutBtn() {
  const router = useRouter();
  const logout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.refresh();
  };
  return (
    <button
      onClick={logout}
      style={{
        fontFamily: aSans,
        fontSize: 12,
        color: 'rgba(250,248,243,0.5)',
        background: 'transparent',
        border: '1px solid rgba(250,248,243,0.2)',
        padding: '6px 14px',
        cursor: 'pointer',
        letterSpacing: 0.2,
      }}
    >
      Abmelden
    </button>
  );
}

// ── Mark-as-read button ──────────────────────────────────────────────────────
export function AdminMarkReadBtn({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const mark = async () => {
    setLoading(true);
    await fetch('/api/admin/read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  };

  return (
    <button
      onClick={mark}
      disabled={loading}
      style={{
        fontFamily: aSans,
        fontSize: 11,
        color: A.ink2,
        background: 'transparent',
        border: `1px solid ${A.line}`,
        padding: '6px 12px',
        cursor: loading ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
      }}
    >
      {loading ? '…' : '✓ Gelesen'}
    </button>
  );
}
