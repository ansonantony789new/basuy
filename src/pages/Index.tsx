import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ImpactAreasSection } from '@/components/home/ImpactAreasSection';
import { WorkSection } from '@/components/home/WorkSection';
import { ImpactStats } from '@/components/home/ImpactStats';
import { GetInvolvedSection } from '@/components/home/GetInvolvedSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { IndiaMapSection } from '@/components/home/IndiaMapSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ImpactAreasSection />
      <ImpactStats />
      <WorkSection />
      <GetInvolvedSection />
      <TestimonialsSection />
      <IndiaMapSection />
    </Layout>
  );
};

export default Index;
