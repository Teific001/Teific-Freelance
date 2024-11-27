import React from "react";
import Excellence from "../../Assets/images/Group 23.png";
import Collaboration from "../../Assets/images/Group 19.png";
import Sustainablility from "../../Assets/images/Group 22.png";
import Continous from "../../Assets/images/Frame 2.png";
import Social from "../../Assets/images/Group 24.png";

const TeificCharter = () => {
  return (
    <div className="bg-[#1D1D1F] flex flex-col gap-8 px-10 lg:px-32 py-7">
        <h2 className="text-3xl font-bold text-center lg:text-right">Teific Technology <span className="text-[#FBC93E]">Charter</span>  </h2>
      <div className="w-full flex justify-center "> 
        <div className="flex gap-7 overflow-x-auto">
          <img src={Excellence} alt="image" />
          <img src={Collaboration} alt="image" />
          <img src={Sustainablility} alt="image" />
          <img src={Continous} alt="image" />
          <img src={Social} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TeificCharter;
