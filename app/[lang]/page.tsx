import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Practice from '@/components/Practice';
import CV from '@/components/CV';
import Fees from '@/components/Fees';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getT } from '@/locales';

export default function Home({ params }: { params: { lang: string } }) {
  const t = getT(params.lang);
  return (
    <>
      <Header t={t.header} lang={params.lang} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Practice t={t.practice} />
        <CV t={t.cv} />
        <Fees t={t.fees} />
        <Contact t={t.contact} lang={params.lang} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
