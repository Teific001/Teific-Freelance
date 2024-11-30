import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import Template from '../utils/Template';
import { HomePageContent } from '../static/data';
import Footer from '../components/Footer';
import Main from '../components/Main/Main';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {isMobile && (
        <div className="mobile-size">
          <Header />
          <Hero />
        </div>
      )}
      {
        !isMobile &&  <Main />
      }
     
      {HomePageContent.map((item) => (
        <Template
          key={item.id}
          id={item.id}
          bgText={item.bgText}
          heading={item.heading}
          content={item.content}
          imageUrl={item.imageUrl}
        />
      ))}
      <Footer />
    </div>
  );
};

export default HomePage;
