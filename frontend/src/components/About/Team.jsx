import React from 'react';
import bg from '../../Assets/images/bgabouteam.png';
import BoxTeam from './BoxTeam';
import { LeadershipTeam, MentorTeam } from '../../static/data';

const Team = () => {
  return (
    <div
      className=" bg-cover bg-center flex flex-col gap-20 py-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" h-full flex flex-col justify-center items-center w-full gap-7">
        <h2 className="text-3xl font-bold mb-20">
          Leadership <span className="text-[#FBC93E]">Team</span>
        </h2>
        <div>
          <BoxTeam Team={LeadershipTeam} />
        </div>
      </div>

      <div className=" h-full flex flex-col justify-center items-center w-full gap-7">
        <h2 className="text-3xl font-bold mb-20">
          Mentor <span className="text-[#FBC93E]">Team</span>
        </h2>
        <div>
          <BoxTeam Team={MentorTeam} />
        </div>
      </div>
    </div>
  );
};

export default Team;
