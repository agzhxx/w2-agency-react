import React from "react";
import AgzhanIcon from "../../assets/images/Agzhan.png";
import AlimIcon from "../../assets/images/Alim.png";
import OmirIcon from "../../assets/images/Omir.png";

const MeetTheTeam = () => {
  return (
    <div className=" max-w-[710px] lg:max-w-[900px] xl:max-w-[1150px] mx-auto   relative md:h-[47vw] xl:h-[41vw] z-0 ">
      <h1 className="uppercase text-white text-center text-[8vw] lg:text-[6vw] font-bold pb-5 pt-5 sm:pt-0 sm:pb-10">
        Meet the team
      </h1>
      <div className="sm:flex justify-between text-white text-center">
        <div className="pb-10">
          <img
            src={AlimIcon}
            alt=""
            className="w-[70vw] sm:w-[23vw] xl:w-full mx-auto"
          />
          <h1 className="text-[9vw] sm:text-[2.5vw] lg:text-[2vw] sm:pb-2">
            Alim Dinassylov
          </h1>
          <h1 className="text-[5vw] sm:text-[2vw] lg:text-[1.5vw] font-bold">
            Founder & CEO
          </h1>
        </div>
        <div className="pb-10">
          <img
            src={AgzhanIcon}
            alt=""
            className="w-[70vw] sm:w-[23vw] xl:w-full mx-auto"
          />
          <h1 className="text-[9vw] sm:text-[2.5vw] lg:text-[2vw] sm:pb-2">
            Agzhan Batyrbek
          </h1>
          <h1 className="text-[5vw] sm:text-[2vw] lg:text-[1.5vw] font-bold">
            Full Stack Developer
          </h1>
        </div>
        <div className="pb-10">
          <img
            src={OmirIcon}
            alt=""
            className="w-[70vw] sm:w-[23vw] xl:w-full mx-auto"
          />
          <h1 className="text-[9vw] sm:text-[2.5vw] lg:text-[2vw] sm:pb-2">
            Omir Solt
          </h1>
          <h1 className="text-[5vw] sm:text-[2vw] lg:text-[1.5vw] font-bold">
            Web Designer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
