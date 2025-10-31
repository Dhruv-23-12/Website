import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnderMaintenance from '../components/UnderMaintenance';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <UnderMaintenance title="Portfolio page is under maintenance" />
      <Footer />
    </div>
  );
};

export default PortfolioPage;

