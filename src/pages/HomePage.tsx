
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

import { Logos3 } from '../components/Logos3';
import IntelliTechSection from '../components/IntelliTechCTA';

import IndustriesTargeted from '../components/IndustriesTargeted';
import CoreSecurityServices from '../components/CoreSecurityServices';
import WhyUsSection from '../components/WhyUsSection';
import TopThreatsSection from '../components/TopThreatsSection';
import BrochureDownloadSection from '../components/BrochureDownloadSection';
import CertificationSection from '../components/CertificationSection';
import FAQSection from '../components/FAQSection';
import Portfolio from '../components/Portfolio';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Logos3 />
      <TopThreatsSection />
     
      <IndustriesTargeted />
      <WhyUsSection />
      <IntelliTechSection />      
      <CoreSecurityServices />
      <CertificationSection />
      <BrochureDownloadSection />
      <Portfolio />
      <Gallery />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;

