import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import RecruitBanner from '@/components/sections/RecruitBanner';
import Mission from '@/components/sections/Mission';
import Project from '@/components/sections/Project';
import FocusAreas from '@/components/sections/FocusAreas';
import Workflow from '@/components/sections/Workflow';
import Timeline from '@/components/sections/Timeline';
import Join from '@/components/sections/Join';
import Footer from '@/components/Footer';

// 応募フォームのURLが決まったらここに設定する
export const FORM_URL = '';

export default function HomePage() {
  return (
    <>
      <Header formUrl={FORM_URL} />
      <main id="main">
        <Hero formUrl={FORM_URL} />
        <RecruitBanner formUrl={FORM_URL} />
        <Mission />
        <Project />
        <FocusAreas />
        <Workflow />
        <Timeline />
        <Join formUrl={FORM_URL} />
      </main>
      <Footer />
    </>
  );
}
