import React from 'react'
import circle from '../../Assets/images/Ellipse 219.png'
const Loader = () => {
  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <img src={circle} alt='loader' className='animate-spinSlow w-14 md:w-28'/>
    </div>
  )
}

export default Loader
