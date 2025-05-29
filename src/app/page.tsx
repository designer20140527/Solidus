import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StrengthCarousel from '@/components/StrengthCarousel';
import SolidChoiceCarousel from '@/components/SolidChoiceCarousel';
import SolidusMechanism from '@/components/SolidusMechanism';
import SolidTokenomics from '@/components/SolidTokenomics';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';
import BorderFrame from '@/components/BorderFrame';

export default function Home() {
  return (
    <>
      <BorderFrame />
      <Header />
      <main id="top">
        <Hero />
        <StrengthCarousel />
        <SolidChoiceCarousel />
        <SolidusMechanism />
        <SolidTokenomics />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
