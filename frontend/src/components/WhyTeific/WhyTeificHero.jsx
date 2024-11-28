import React from "react";
import WhyLogo from "../../Assets/images/whyteificbg.png";
import Circle from "../../Assets/images/Ellipse 219.png";
import Line from "../../Assets/images/Subtract.png";
import { slideAnimation } from "../../motion/motion";
import { motion } from "motion/react";
const WhyTeificHero = () => {
  return (
    <div className="flex lg:px-32  py-20 justify-center items-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
        variants={slideAnimation("left")}
        className="text-center lg:w-1/2 flex flex-col gap-4 px-10 justify-center lg:text-justify"
      >
        <h2 className="text-3xl font-bold">
          Why <span className="text-[#FBC93E]">Teific </span>Technology?
        </h2>
        <p>
          Teific Technology is your trusted partner for innovative solutions in
          the fields of customized drones, smart healthcare devices, and smart
          home products. We are committed to providing exceptional products and
          services that meet your unique needs, backed by our expertise and
          dedication to excellence.
        </p>
      </motion.div>
      <div className="hidden lg:block lg:w-1/2 mt-10 relative">
        <img src={WhyLogo} alt="whyteific" />
        <img
          src={Circle}
          alt="circle"
          className="absolute bottom-0 right-0 lg:w-[27%] animate-spinSlow"
        />

        {/* <div className="h-full">
          <img
            src={Line}
            alt="line"
            className="absolute w-[88vw] h-full top-20 -z-20 left-0  "
          />
        </div> */}
      </div>
    </div>
  );
};

export default WhyTeificHero;
