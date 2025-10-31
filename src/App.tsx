import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductShowcasePage from './pages/ProductShowcasePage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import AssessmentReviewPage from './pages/AssessmentReviewPage';
import OrganizationalTrainingPage from './pages/OrganizationalTrainingPage';
import ResearchDevelopmentAutomationPage from './pages/ResearchDevelopmentAutomationPage';
import CyberSOCPage from './pages/CyberSOCPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CXOMapPage from './pages/CXOMapPage';
import CXOMap1Page from './pages/CXOMap1Page';
import CXOMap2Page from './pages/CXOMap2Page';

// Scroll to top on each route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product-showcase" element={<ProductShowcasePage />} />
        <Route path="/cxo-map" element={<CXOMapPage />} />
        <Route path="/cxo-map-1" element={<CXOMap1Page />} />
        <Route path="/cxo-map-2" element={<CXOMap2Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element=  {<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/assessment-review" element={<AssessmentReviewPage />} />
        <Route path="/organizational-training" element={<OrganizationalTrainingPage />} />
        <Route path="/research-development-automation" element={<ResearchDevelopmentAutomationPage />} />
        <Route path="/cyber-soc" element={<CyberSOCPage />} />
      </Routes>
    </Router>
  );
}

export default App;