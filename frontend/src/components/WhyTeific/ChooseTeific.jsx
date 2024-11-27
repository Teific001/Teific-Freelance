import React from "react";
import BulletPoint from "../../utils/BulletPoint";
import Circle from "../../Assets/images/circle.png";
import Square from "../../Assets/images/square.png";
import Quad from "../../Assets/images/quad.png";
import Diamond from "../../Assets/images/diamond.png";
import { slideAnimation } from "../../motion/motion";
import { motion } from "motion/react";
const ChooseTeific = () => {
  return (
    <div id="section1" className="w-full lg:h-screen py-10 bg-[#1D1D1F]">
      <h2 className="my-10 lg:my-0 text-3xl font-bold px-24 text-center lg:text-left">
        Here's why you should choose{" "}
        <span className="text-[#FBC93E]">Teific</span>
      </h2>
      <div className="px-10  lg:px-36 flex gap-10 lg:gap-16  lg:flex-row flex-col w-full h-full justify-center items-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("left")}
          className="  lg:w-1/2 h-full gap-10 lg:gap-2 flex flex-col items-center  justify-evenly"
        >
          <BulletPoint
            heading={"Customization"}
            content={
              "Our products are tailored to your specific requirements, ensuring optimal performance and functionality."
            }
          />
          <div className="">
            <div className="flex">
              <img
                src={Diamond}
                alt=""
                className=" w-32 h-32 lg:w-48 lg:h-48"
              />
              <img src={Square} alt="" className="w-32 h-32 lg:w-48 lg:h-48" />
            </div>
            <div className="flex">
              <img src={Quad} alt="" className="w-32 h-32 lg:w-48 lg:h-48" />
              <img src={Circle} alt="" className="w-32 h-32 lg:w-48 lg:h-48" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("right")}
          className="lg:w-1/2 h-full flex flex-col justify-evenly  gap-10 lg:gap-0"
        >
          <BulletPoint
            heading={"Innovation"}
            content={
              "We stay at the forefront of technology, offering cutting-edge solutions that enhance your lifestyle."
            }
          />
          <BulletPoint
            heading={"Quality"}
            content={
              "Our products are built with the highest quality standards, guaranteeing reliability and durability. "
            }
          />
          <BulletPoint
            heading={"Expertise"}
            content={
              "Our team of experts has extensive knowledge and experience in their respective fields, ensuring top-notch service. "
            }
          />
          <BulletPoint
            heading={"Customer Satisfaction"}
            content={
              "We prioritize customer satisfaction and strive to provide exceptional support throughout your journey."
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseTeific;
