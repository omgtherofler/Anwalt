import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, consent } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Bitte alle Felder ausfüllen.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Bitte der Datenschutzerklärung zustimmen.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Bitte eine gültige E-Mail-Adresse eingeben.' }, { status: 400 });
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: [process.env.CONTACT_EMAIL || 'Igor.kister@posteo.de'],
        reply_to: email,
        subject: `Neue Anfrage über kanzlei-kister.com: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="margin-bottom: 24px;">Neue Kontaktanfrage</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 16px 8px 0; color: #666; white-space: nowrap; vertical-align: top;">Name</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 16px 8px 0; color: #666; white-space: nowrap; vertical-align: top;">E-Mail</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 16px 8px 0; color: #666; white-space: nowrap; vertical-align: top;">Anliegen</td>
                <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
        `,
      });
    } catch (err) {
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.' }, { status: 500 });
    }
  } else {
    console.log('Contact form submission (no RESEND_API_KEY set):', { name, email, message });
  }

  return NextResponse.json({ success: true });
}
