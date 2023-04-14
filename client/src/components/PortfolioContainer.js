import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects'
import Projecta from "./pages/Projecta";
import Projectb from "./pages/Projectb";
import Projectc from "./pages/Projectc";
import Projectd from "./pages/Projectd";
import Projecte from "./pages/Projecte";
import Projectf from "./pages/Projectf";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Projecta') {
      return <Projecta />
    }
    if (currentPage === 'Projectb') {
      return <Projectb />
    }
    if (currentPage === 'Projectc') {
      return <Projectc />
    }
    if (currentPage === 'Projectd') {
      return <Projectd />
    }
    if (currentPage === 'Projecte') {
      return <Projecte />
    }
    if (currentPage === 'Projectf') {
      return <Projectf />
    }
      if (currentPage === 'Resume') {
        return <Resume />
    }
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
