export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { markRead } from '@/lib/submissions';
import { cookies } from 'next/headers';

function isAuthed() {
  const c = cookies();
  return c.get('admin_auth')?.value === process.env.ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!isAuthed()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await req.json();
  markRead(id);
  return NextResponse.json({ ok: true });
}
