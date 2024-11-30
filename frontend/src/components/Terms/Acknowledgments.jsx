import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Acknowledgments = () => {
  return (
    <div>
      <Header/>
      <div className="my-36">
        <div className="w-full items-center flex justify-center ">
          <div className="w-full px-10 md:w-1/2 flex flex-col gap-10">
            <h2 className="text-[#FBC93ECC] text-3xl md:text-6xl font-bold ">
            Acknowledgments
            </h2>
            <div>
            <ul className="list-decimal  md:text-2xl flex flex-col gap-4 ">
  <li>Keshav Raina</li>
  <li>Harsh Jain</li>
  <li>Mohammad Muzammil</li>
  <li>Kumudshekhar Sharma</li>
  <li>Aryan Saini</li>
  <li>Prerit Rastogi</li>
  <li>Vaibhav Markandeya Singh</li>
  <li>Pragya Pandey</li>
  <li>RIYA ROY</li>
  <li>Sampada Agarwal</li>
  <li>Parvendra Singh</li>
  <li>Tikendra Pal</li>
</ul>
            </div>
        

        </div>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Acknowledgments
