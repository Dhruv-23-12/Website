import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import IntelliTechCTA from "@/components/IntelliTechCTA";
import CoreSecurityServices from "@/components/CoreSecurityServices";
import CertificationSection from "@/components/CertificationSection";
import BrochureDownloadSection from "@/components/BrochureDownloadSection";
import IndustriesTargetedSection from "@/components/IndustriesTargetedSection";
import IndustriesGridSection from "@/components/IndustriesGridSection";
import TopThreatsSection from '../components/TopThreatsSection';
import { Logos3 } from '@/components/ui/logos3';
import IndustryPartners from '@/components/IndustryPartners';
import FAQSection from '@/components/FAQSection';
import WaveBackground from '@/components/WaveBackground';
import SecurityMetricsSection from '@/components/SecurityMetricsSection';

export default function Home() {
  return (
    <>
      <WaveBackground />
      <Header />
      <HeroSection />
      <IndustryPartners />
      <IntelliTechCTA />
      <SecurityMetricsSection />
      <IndustriesTargetedSection />
      <IndustriesGridSection /> 
      <TopThreatsSection />
      <Logos3 />
      <CoreSecurityServices />
      <CertificationSection />
      <BrochureDownloadSection />
      <FAQSection />
      <Footer />
    </>
  );
}
