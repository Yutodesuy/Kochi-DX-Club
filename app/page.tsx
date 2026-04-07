import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import DxPrimer from '@/components/sections/DxPrimer';
import Mission from '@/components/sections/Mission';
import Project from '@/components/sections/Project';
import FocusAreas from '@/components/sections/FocusAreas';
import Join from '@/components/sections/Join';
import Footer from '@/components/Footer';

// GoogleフォームのURLが決まったらここに設定する
export const FORM_URL = '';

export default function HomePage() {
  return (
    <>
      <Header formUrl={FORM_URL} />
      <main id="main">
        <Hero />
        <DxPrimer />
        <Mission />
        <Project />
        <FocusAreas />
        <Join formUrl={FORM_URL} />
      </main>
      <Footer />
    </>
  );
}
