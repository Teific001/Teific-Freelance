import React, { useEffect, useState } from 'react'
import WhyTeificHero from '../components/WhyTeific/WhyTeificHero'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import ChooseTeific from '../components/WhyTeific/ChooseTeific.jsx'
import TeificValues from '../components/WhyTeific/TeificValues.jsx'
import TeificCharter from '../components/WhyTeific/TeificCharter.jsx'
const WhyTeificPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header position={isMobile}/>
      <WhyTeificHero/>
      <ChooseTeific/>
      <TeificValues/>
      <TeificCharter/>
      <Footer/>

    </div>
  )
}

export default WhyTeificPage
