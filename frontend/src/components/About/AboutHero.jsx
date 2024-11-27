import React from "react";
import bg1 from "../../Assets/images/Group 1000000926.png";
import bg2 from "../../Assets/images/Group 1000000925.png";
import { slideAnimation } from "../../motion/motion";
import { motion } from "motion/react";
const AboutHero = () => {
  return (
    <div className="lg:h-screen relative -z-10  flex justify-center items-center">
      <div className="relative">
        {" "}
        <img src={bg1} alt="bg" className="bg-cover  w-full image light" />
        <img src={bg2} alt="bg" className="bg-cover  w-full no-light" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
        variants={slideAnimation("right")}
        className="w-full text-center  lg:w-1/3 absolute md:h-full lg:right-28 px-10 lg:text-justify text-balance flex flex-col top-0 gap-4  justify-center"
      >
        <h2 className="text-xl md:text-3xl font-bold">
          Organization <span className="text-[#FBC93E]">Overview</span>
        </h2>
        <p className="text-xs md:text-base">
          Teific Technology is a dynamic and innovative company specializing in
          customized drones, smart healthcare devices, and smart home products.
          With a focus on cutting-edge technology and personalized solutions, we
          are dedicated to improving lives and transforming industries. Our team
          of skilled professionals is passionate about creating products that
          are both functional and user-friendly. We combine our expertise in
          engineering, design, and technology to develop solutions that meet the
          evolving needs of our customers. Whether you're looking for a
          customized drone for aerial photography, a smart healthcare device to
          monitor your health, or a smart home system to enhance your living
          space, Teific Technology has the expertise to deliver the perfect
          solution.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutHero;
