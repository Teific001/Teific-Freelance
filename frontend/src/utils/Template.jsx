import React from "react";
import ThreeModel from "../components/Home/ThreeModel";
import { motion } from "motion/react";
import { slideAnimation } from "../motion/motion";
const Template = ({ id, bgText, heading, content, imageUrl }) => {
  return (
    <div id={id && "section1"} className="w-full lg:h-screen my-10 relative">
      <h2 className="animate-marquee text-6xl lg:text-[10rem] font-bold text-center absolute whitespace-nowrap w-full -z-[10] text-[#FFFFFF33] mt-10 ">
        {bgText.slice(0, 1)}
        <span className="text-[#FBC93E33]">{bgText[1]}</span>

        {bgText.slice(2)}
      </h2>
      <div
        className={`h-full  flex flex-col gap-10 lg:gap-0 ${
          id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } `}
      >
        {/* Left Div */}
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={id%2? slideAnimation("right"):slideAnimation("left")}
          className="w-full lg:w-1/2 h-full  flex flex-col justify-center px-10  lg:px-28 gap-4"
        >
          <h2 className="text-[#FBC93E] text-2xl text-center lg:text-left lg:text-5xl font-bold  lg:leading-relaxed pr-9">
            {heading}{" "}
          </h2>
          <p className=" lg:text-2xl tracking-wide  text-justify"> {content}</p>
        </motion.div>
        {/* Right Div  */}
        <div className=" w-full lg:w-1/2 h-full  flex justify-center items-center ">
          
            <ThreeModel  id={id}/>
          
        </div>
      </div>
    </div>
  );
};

export default Template;
