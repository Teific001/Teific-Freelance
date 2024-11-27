import React from 'react'
import WhyTeificHero from '../components/WhyTeific/WhyTeificHero'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import ChooseTeific from '../components/WhyTeific/ChooseTeific.jsx'
import TeificValues from '../components/WhyTeific/TeificValues.jsx'
import TeificCharter from '../components/WhyTeific/TeificCharter.jsx'
const WhyTeificPage = () => {
  return (
    <div>
      <Header position={false}/>
      <WhyTeificHero/>
      <ChooseTeific/>
      <TeificValues/>
      <TeificCharter/>
      <Footer/>

    </div>
  )
}

export default WhyTeificPage
