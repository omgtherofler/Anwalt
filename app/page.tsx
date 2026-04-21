import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Practice from '@/components/Practice';
import CV from '@/components/CV';
import Fees from '@/components/Fees';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Practice />
        <CV />
        <Fees />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
