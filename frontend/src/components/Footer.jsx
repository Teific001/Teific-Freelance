import React, { useEffect } from "react";
import Logo from "../Assets/images/Logo.png";
import { FooterData } from "../static/data";
import { Link, useLocation } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import {motion} from 'motion/react'
import {slideAnimation} from '../motion/motion.js'
const Footer = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return (
    <div className="px-10 lg:px-24 text-center lg:text-left overflow-hidden">
      <motion.div  initial="initial"
  whileInView="animate"
  exit="exit"
  viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
  variants={slideAnimation('up')} className="flex  flex-col lg:flex-row gap-10 justify-between py-10 items-center border-b  border-[#FFFFFF3D] ">
        <div className="text-3xl">
          {" "}
          Join our newsletter to <br className="hidden lg:block" /> keep up to date with us!
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row gap-10 lg:gap-0 ">
            <div className="flex justify-center items-center relative">
            <BiUser className="absolute left-4 text-[#FFFFFFB8]" /> 
            <input
            type="email"
            className="px-10 py-2 rounded-full text-white bg-black border  border-[#FFFFFF3D] w-80"
            placeholder="Enter your Email"
          />
            </div>
        
          <button className="bg-[#FBC93E] text-black px-7 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </motion.div>
      <motion.div  initial="initial"
  whileInView="animate"
  exit="exit"
  viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
  variants={slideAnimation('up')} className="flex flex-col  gap-10 lg:gap-0 lg:flex-row w-full py-10 items-center border-b  border-[#FFFFFF3D] ">
        <div className="w-full  items-center lg:items-start lg:w-1/2 flex flex-col gap-4">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <h2 className="text-2xl">Teific Technology Pvt. Ltd</h2>
          <h3 className="text-[#FBC93ECC]">
            <i>Empowering ease of your life</i>
          </h3>
        </div>
        <div className="w-full lg:w-1/2  flex flex-col  gap-10 lg:gap-0 lg:flex-row justify-between">
        {
            FooterData.map((item)=>
             <ul className="flex flex-col gap-3">
                <li className="text-[#FBC93ECC]">{item.title}</li>
                {
                    item.links.map((innerItem)=><Link to={innerItem.url}><li>{innerItem.name}</li></Link>)
                }
             </ul>
            )
        }
        </div>
      </motion.div>
      {/* Address and Contact */}
      <motion.div  initial="initial"
  whileInView="animate"
  exit="exit"
  viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
  variants={slideAnimation('up')} className="py-16 flex flex-col  gap-10 lg:gap-0 lg:flex-row w-full justify-between text-[#FFFFFFCC] "> 
        <div className="lg:w-1/3  flex flex-col gap-7 text-left">
            <h4 className="text-[#FBC93ECC]">Registered Office Address
            </h4>
            <p>Sector- 2, Rajendra Nagar, Ghaziabad, (U.P)201005.</p>
        </div>
        <div className="text-left">
            <ul>
                <li><span className="text-[#FBC93ECC]">Tel No:</span> +91 9971105343
                </li>
                <li>Contact Person: Manager - Customer Services
                </li>
                <li className="text-[#FBC93ECC]">For Customer Support please write to : </li>
                <li>support@teific.in</li>
            </ul>
        </div>

      </motion.div>
      <motion.div  className="text-left flex justify-between flex-col  gap-10 lg:gap-0 lg:flex-row pb-12 text-[#FFFFFFCC]">
        <div>© 2024 Teific Technology Pvt. Ltd</div>
        <div>
            <ul className="flex text-xs md:text-base gap-5 flex-row md:gap-8 flex-wrap">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Warranty</li>
            </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
