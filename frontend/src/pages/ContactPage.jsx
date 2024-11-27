import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact/Contact'

const ContactPage = () => {
  return (
    <div>
      <Header position={true}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage
