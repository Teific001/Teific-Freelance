import React from "react";
import BulletPoint from "../../utils/BulletPoint";
import Circle from "../../Assets/images/circle.png";
import Square from "../../Assets/images/square.png";
import Quad from "../../Assets/images/quad.png";
import Diamond from "../../Assets/images/diamond.png";
import { slideAnimation } from "../../motion/motion";
import { motion } from "motion/react";

const TeificValues = () => {
  return (
    <div className="w-full lg:h-screen py-10 bg-[#1D1D1F]">
      <h2 className="my-10 lg:my-0 text-center lg:text-left text-3xl font-bold px-24">
        Teific Technology <span className="text-[#FBC93E]">Values</span>
      </h2>
      <div className="px-10 lg:px-36 flex w-full h-full  flex-col lg:flex-row-reverse gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once:true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("left")}
          className="lg:w-1/2 h-full flex flex-col  gap-2 justify-evenly items-center"
        >
          <div className="">
            <div className="flex">
              <img src={Diamond} alt="" className="w-32 h-32 lg:w-48 lg:h-48" />
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
          className="w-full lg:w-1/2 h-full flex flex-col justify-evenly lg:px-12 gap-10 lg:gap-0 "
        >
          <BulletPoint
            heading={"Innovation"}
            content={
              "We are committed to pushing the boundaries of technology and delivering innovative solutions that exceed expectations."
            }
          />
          <BulletPoint
            heading={"Customer Centricity"}
            content={
              " We prioritize our customers' needs and strive to provide exceptional products and services that enhance their lives. "
            }
          />
          <BulletPoint
            heading={"Integrity"}
            content={
              "We uphold the highest ethical standards in all our endeavors, building trust and credibility. "
            }
          />
         
        </motion.div>
      </div>
    </div>
  );
};

export default TeificValues;
