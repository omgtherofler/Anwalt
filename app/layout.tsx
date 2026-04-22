// Root layout is a passthrough — html/body live in app/[lang]/layout.tsx
// so the lang attribute on <html> is always correct for SEO.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
