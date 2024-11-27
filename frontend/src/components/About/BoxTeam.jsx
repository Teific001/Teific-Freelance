import React from 'react'
import {motion} from 'motion/react'
import { slideAnimation } from '../../motion/motion'
import {Link} from 'react-router-dom'
const BoxTeam = ({Team}) => {
  return (
    <div className='flex gap-20 lg:gap-10 w-full flex-wrap justify-center items-center' >

   
    {
      Team.map((item)=>{
       return <Link to={item.link}>
       <motion.div className=''initial="initial"
       whileInView="animate"
       exit="exit"
       viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
       variants={slideAnimation('up')}>
        <div className=' border-[1.4rem] border-[#FBC93E] w-64 h-64 relative flex justify-center'>
            <img src={item.imageUrl} alt='team-member' className={` absolute bottom-0  ${item.flag?"w-52 h-52 " : "h-80 "} `}/>
        </div>
        <div className='bg-[#FBC93E] flex flex-col justify-center items-center text-black pb-7 '>
           <h3 className={'font-bold '}>{item.name}</h3>
           <p>{item.designation}</p>
        </div>
      
    </motion.div>
       </Link> 
      })
    }
    
    </div>
  )
}

export default BoxTeam
