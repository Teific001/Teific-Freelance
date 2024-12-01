import React, { useState } from "react";
import logo from "../Assets/images/Logo.png";
import { HeaderNav } from "../static/data";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import {motion} from 'motion/react'
import { slideAnimation } from "../motion/motion";
import {Toaster} from 'react-hot-toast'
const Header = ({ position }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={` ${
        position ? "my-7" : "absolute top-7 "
      } z-[1000000000] w-full flex justify-between lg:items-center lg:px-36 px-7 `}
    >
      <Toaster/>
      <Link to="/">
        {" "}
        <img src={logo} alt="logo" className="w-10 lg:w-full " />
      </Link>
      <div
        className={`lg:flex bg-gradient-to-t from-[#FFFFFF24] to-[#FFFFFF00] ${
          active
            ? "flex justify-center flex-col items-center text-center bg-black"
            : "hidden"
        } lg:px-10 py-4 rounded-2xl absolute z-50 top-0 left-0 w-full lg:w-auto lg:static `}
      >
        {active && (
          <div className="w-full flex justify-end px-10 ">
            <RxCross1
              className=""
              size={30}
              onClick={() => setActive(!active)}
            />
          </div>
        )}
        <ul className={`flex flex-col lg:flex-row gap-10 `}>
          {HeaderNav.map((item) => (
            <Link to={item.link}>
              <motion.li initial="initial"
  whileInView="animate"
  exit="exit"
  viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
  variants={slideAnimation('up')}>{item.content}</motion.li>
            </Link>
          ))}
        </ul>
      </div>
      <a href="#section1">
      <div className=" hidden lg:block bg-gradient-to-t from-[#FFFFFF24] to-[#FFFFFF00] px-10 py-4 rounded-2xl">
       <span className="">Explore Now</span>
      </div>
      </a>
      {active ? (
        <RxCross1
          className="p-0"
          size={30}
          onClick={() => setActive(!active)}
        />
      ) : (
        <BsList
          size={40}
          className="lg:hidden"
          onClick={() => setActive(!active)}
        />
      )}
    </div>
  );
};

export default Header;
