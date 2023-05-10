import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from '../pages/About';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const RenderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <RenderPage />
    </div>
  );
}
