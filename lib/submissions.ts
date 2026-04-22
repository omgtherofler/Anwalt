import fs from 'fs';
import path from 'path';

export interface Submission {
  id: string;
  createdAt: string;
  area: string;
  urgency: string;
  message: string;
  name: string;
  email: string;
  phone?: string;
  lang: string;
  read: boolean;
}

function getDataPath(): string {
  // On Vercel use /tmp; locally use data/ in project root
  if (process.env.DATA_PATH) return process.env.DATA_PATH;
  if (process.env.VERCEL) return '/tmp/submissions.json';
  return path.join(process.cwd(), 'data', 'submissions.json');
}

function ensureFile(filePath: string): void {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]', 'utf-8');
}

export function getSubmissions(): Submission[] {
  try {
    const p = getDataPath();
    ensureFile(p);
    const raw = fs.readFileSync(p, 'utf-8');
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

export function saveSubmission(data: Omit<Submission, 'id' | 'createdAt' | 'read'>): Submission {
  const submissions = getSubmissions();
  const entry: Submission = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    read: false,
  };
  submissions.unshift(entry);
  const p = getDataPath();
  ensureFile(p);
  fs.writeFileSync(p, JSON.stringify(submissions, null, 2), 'utf-8');
  return entry;
}

export function markRead(id: string): void {
  const submissions = getSubmissions();
  const idx = submissions.findIndex((s) => s.id === id);
  if (idx !== -1) {
    submissions[idx].read = true;
    const p = getDataPath();
    fs.writeFileSync(p, JSON.stringify(submissions, null, 2), 'utf-8');
  }
}
