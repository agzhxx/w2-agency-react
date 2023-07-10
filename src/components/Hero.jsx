import React from "react";
import HeaderImg from "../assets/images/header-img.png";
const Hero = () => {
  return (
    <div className="max-w-[710px] lg:max-w-[900px] xl:max-w-[1150px] mx-auto mb-14 mt-4 md:mt-8 lg:mt-24 text-white relative md:h-[47vw] xl:h-[41vw] z-0 ">
      <h1 className="text-center md:text-left text-4xl md:text-5xl xl:text-6xl uppercase font-bold">
        we help you to make
      </h1>
      <h1 className="text-center md:text-left text-4xl md:text-5xl xl:text-6xl uppercase font-bold">
        things happen
      </h1>
      <img
        src={HeaderImg}
        alt=""
        className="md:absolute right-0 top-0 w-[80vw] mx-auto md:w-[50vw] xl:w-[40vw]"
      />
      <div className="text-center md:text-left">
        <button className="contactUs-b uppercase text-2xl xl:text-3xl bg-white text-black p-3 rounded-2xl  md:mt-32 font-bold  w-[236px] md:w-auto">
          contact us now
        </button>
      </div>
    </div>
  );
};

export default Hero;
