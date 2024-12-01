import React, { useState } from "react";
import BulletPoint from "../../utils/BulletPoint";
import image from "../../Assets/images/contactushero.png";
import { slideAnimation } from "../../motion/motion";
import { motion } from "motion/react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullName, email, phoneNumber, organizationName, description);

    if (!fullName || !email | !phoneNumber) {
      setError("Enter Details Please!");
      return;
    }

    try {
   
      await axios.post(
         process.env.REACT_APP_BACKEND_URL +"getintouch",
        {
          fullName,
          email,
          phoneNumber,
          organizationName,
          description,
        },
        { withCredentials: true }
      );

      setDescription("");
      setFullName("");
      setError("");
      setEmail("");
      setOrganizationName("");
      setPhoneNumber("");

      toast.success("Successfully Submitted")

   
    } catch (error) {
      console.log(error);
      if(error.response){
        setError(error.response.data.message);
      }else{
       toast.error("Something Went Wrong")
      }
      
    }
  };

  return (
    <div className="px-10 lg:px-20 flex flex-col gap-6 lg:gap-16 mb-10 mt-24">
      <div className="w-full flex">
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("left")}
          className="w-full lg:w-1/2 lg:px-24 flex justify-center "
        >
          <BulletPoint
            heading={"B2B (Business-to-Business) "}
            content={
              "Teific Technology offers a comprehensive range of B2B solutions tailored to meet the unique needs of businesses across various industries. From customized drones for aerial inspections to advanced smart healthcare devices for medical facilities, our innovative products and services empower businesses to improve efficiency, reduce costs, and drive growth. "
            }
          />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("right")}
          className="hidden w-[40%] lg:flex justify-center items-center"
        >
          <img src={image} alt="logo" />
        </motion.div>
      </div>

      <div id="section1"  className="flex lg:flex-row flex-col gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("left")}
          className="lg:w-1/2 lg:px-24 flex flex-col  lg:mt-10 gap-6"
        >
          <BulletPoint
            heading={"B2C (Business-to-Consumer)"}
            content={
              "Our B2C offerings are designed to enhance the lives of individuals by providing cutting-edge technology at affordable prices. From high-quality consumer drones for recreational use to smart health devices for personal wellness, our products offer convenience, reliability, and exceptional value."
            }
          />
          <BulletPoint
            heading={"B2G (Business-to-Government)"}
            content={
              "Teific Technology is committed to supporting government initiatives and contributing to public welfare. We offer a range of B2G solutions, including customized drones for government agencies, smart city technologies, and tailored product development to address specific government needs. Our goal is to leverage our expertise to develop innovative solutions that benefit society and drive positive change."
            }
          />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
          variants={slideAnimation("right")}
          className="bg-[#193A4B4D] rounded-3xl px-5 lg:px-10 lg:w-[40%] py-10 flex flex-col gap-6 justify-center  "
        >
          <h2 className="text-2xl lg:text-4xl font-bold">
            Get in <span className="text-[#FBC93E]">Touch</span>
          </h2>
          <p className="lg:text-bs text-xs">
            Have a question, need assistance, or want to learn more about our
            products and services? We're here to help! <br />
            Feel free to contact us using the information below.
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3 outline-none"
              placeholder="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3 outline-none"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3 outline-none"
              placeholder="Phone Number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3 outline-none"
              placeholder="Organization Name"
              type="text"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3 outline-none"
              placeholder="Let’s talk about your idea"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {error && <p className="text-red-700">* {error}</p>}
            <input
              type="submit"
              value="SUBMIT"
              className="bg-[#FBC93E] w-full py-3 rounded-xl mt-6"
            />
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
