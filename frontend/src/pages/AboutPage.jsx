import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutHero from '../components/About/AboutHero'
import DirectorSection from '../components/About/DirectorSection'
import Team from '../components/About/Team'
const AboutPage = () => {
  return (
    <div>
     <Header position={true}/>
     <AboutHero/>
     <DirectorSection/>
     <Team/>
    <Footer/>
    </div>
  )
}

export default AboutPage
