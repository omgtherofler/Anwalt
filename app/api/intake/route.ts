import { NextRequest, NextResponse } from 'next/server';
import { saveSubmission } from '@/lib/submissions';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const URGENCY_EMOJI: Record<string, string> = {
  Normal: '🟢',
  Dringend: '🟡',
  'Sehr dringend': '🔴',
  Urgent: '🟡',
  'Very Urgent': '🔴',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { area, urgency, message, name, email, phone, lang, consent } = body;

    // Validate
    if (!area || !urgency || !message?.trim() || !name?.trim() || !email || !consent) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail.' }, { status: 400 });
    }

    // Save to disk
    const entry = saveSubmission({ area, urgency, message, name, email, phone: phone || '', lang: lang || 'de' });
    const urgencyIcon = URGENCY_EMOJI[urgency] ?? '⚪';
    const isDE = lang !== 'en';

    // Build email HTML
    const htmlBody = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><title>Neue Mandantenanfrage</title></head>
<body style="font-family:Georgia,serif;background:#f1efe9;margin:0;padding:40px 20px">
  <div style="max-width:600px;margin:0 auto;background:#faf8f3;border:1px solid rgba(31,29,26,0.14)">

    <div style="padding:32px 40px;border-bottom:1px solid rgba(31,29,26,0.14);background:#1f1d1a">
      <div style="font-family:Georgia,serif;font-size:28px;color:#faf8f3;letter-spacing:-0.5px">
        Kanzlei <em>Kister</em>
      </div>
      <div style="font-family:monospace;font-size:11px;color:rgba(250,248,243,0.6);letter-spacing:0.12em;margin-top:6px">
        NEUE MANDANTENANFRAGE ${urgencyIcon}
      </div>
    </div>

    <div style="padding:32px 40px">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c;width:120px">RECHTSGEBIET</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:Georgia,serif;font-size:18px;color:#1f1d1a">${area}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c">DRINGLICHKEIT</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:Georgia,serif;font-size:16px;color:#1f1d1a">${urgencyIcon} ${urgency}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c">NAME</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:Georgia,serif;font-size:16px;color:#1f1d1a">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c">E-MAIL</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:14px;color:#6e2a2a"><a href="mailto:${email}" style="color:#6e2a2a">${email}</a></td>
        </tr>
        ${phone ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c">TELEFON</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:14px;color:#1f1d1a">${phone}</td>
        </tr>` : ''}
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c">SPRACHE</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(31,29,26,0.1);font-family:monospace;font-size:12px;color:#8a857c">${lang?.toUpperCase()}</td>
        </tr>
      </table>

      <div style="margin-top:28px">
        <div style="font-family:monospace;font-size:10px;letter-spacing:0.12em;color:#8a857c;margin-bottom:12px">ANLIEGEN</div>
        <div style="background:#e8e5dc;padding:20px 24px;font-family:Georgia,serif;font-size:16px;line-height:1.65;color:#1f1d1a;white-space:pre-wrap">${message}</div>
      </div>

      <div style="margin-top:32px;text-align:center">
        <a href="mailto:${email}?subject=Re: Ihre Anfrage bei Kanzlei Kister"
           style="display:inline-block;padding:14px 28px;background:#1f1d1a;color:#faf8f3;font-family:Georgia,serif;font-size:14px;text-decoration:none;letter-spacing:0.2px">
          Direkt antworten →
        </a>
      </div>
    </div>

    <div style="padding:20px 40px;border-top:1px solid rgba(31,29,26,0.14);font-family:monospace;font-size:10px;color:#8a857c;letter-spacing:0.1em;display:flex;justify-content:space-between">
      <span>KANZLEI-KISTER.COM</span>
      <span>${new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })} · ${new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  </div>
</body>
</html>`;

    if (resend) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'noreply@kanzlei-kister.com',
        to: 'Igor@kanzlei-kister.com',
        reply_to: email,
        subject: `${urgencyIcon} Neue Anfrage — ${area} — ${name}`,
        html: htmlBody,
      });
    } else {
      console.log('[intake] No RESEND_API_KEY — email not sent:', { name, email, area, urgency });
    }

    return NextResponse.json({ success: true, id: entry.id });
  } catch (err) {
    console.error('[intake] Error:', err);
    return NextResponse.json({ error: 'Serverfehler.' }, { status: 500 });
  }
}
