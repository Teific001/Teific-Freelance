import React from 'react'
import Bullet from '../Assets/images/Ellipse 220.png'
const BulletPoint = ({heading , content}) => {
  return (
    <div className='flex gap-6'>
     
        <img src={Bullet} alt='point' className='w-10 h-10 lg:w-16 lg:h-16 animate-spinSlow'/>
     
      <div>
        <h2 className='text-[#FBC93E] text-lg lg:text-2xl'>{heading}</h2>
        <p className='lg:text-lg text-justify'>{content}</p>
      </div>
      
    </div>
  )
}

export default BulletPoint
