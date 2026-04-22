import { de } from './de';
import { en } from './en';

export { de } from './de';
export { en } from './en';

export type Lang = 'de' | 'en';
export type Translations = typeof de;

export function getT(lang: string): Translations {
  return lang === 'en' ? (en as unknown as Translations) : de;
}
