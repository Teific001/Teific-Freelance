import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import Template from '../utils/Template'
import { HomePageContent } from '../static/data'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <Hero/>
      {
       HomePageContent.map((item)=>
        <Template key={item.id} id={item.id} bgText={item.bgText} heading={item.heading} content={item.content} imageUrl={item.imageUrl}/>
       )
      }
      <Footer/>
      
    </div>
  )
}

export default HomePage
