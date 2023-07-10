import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ClientFeedback = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className=" max-w-[710px] lg:max-w-[980px] xl:max-w-[1350px] mx-auto   relative z-0 text-white ">
      <h1 className="pt-20 lg:pt-0 uppercase text-white text-center text-[7vw] lg:text-[6vw] font-bold leading-[40px] sm:leading-[60px] lg:leading-[90px] pb-5 sm:placeholder:pb-10 xl:pb-20 px-[6vw]">
        What clients think about us?
      </h1>
      <div className="hidden sm:flex overflow-hidden justify-between text-center ">
        <div className="review-box w-[29vw] xl:w-[27vw] rounded-[40px] p-4 xl:pb-8 border-white border mx-14 sm:mx-auto">
          <h1 className="text-[8vw] sm:text-[2vw] lg:text-[2.8vw] font-light">
            Review
          </h1>
          <div className="flex items-center ">
            <div className="">
              <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                «
              </div>
              <p className="text-[4vw] sm:text-[1.6vw] xl:text-[1.4vw] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pulvinar purus non magna dapibus imperdiet. Proin eros sem,
                commodo non efficitur nec, accumsan quis lectus. Nulla molestie
                velit lorem, sit amet consequat eros efficitur quis.
              </p>
              <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold rotate-180">
                «
              </div>
              <h1 className="font-bold text-[4vw] sm:text-[1.3vw] xl:text-[1vw]">
                Name Surname, company
              </h1>
            </div>
          </div>
        </div>
        <div className="review-box w-[29vw] xl:w-[27vw] rounded-[40px] p-4 xl:pb-8 border-white border mx-14 sm:mx-auto">
          <h1 className="text-[8vw] sm:text-[2vw] lg:text-[2.8vw] font-light">
            Review
          </h1>
          <div className="flex items-center h-auto">
            <div className="">
              <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                «
              </div>
              <p className="text-[4vw] sm:text-[1.2vw]">
                I am working with Alim’s team for about 3 years. For the 3
                years, guys created the design of all of my courses and posters
                on my page. The guys’ accountability is very high. If the
                deadline is set, there is nothing to worry about, cause
                everything will be done. Moreover, designers understand how to
                design at the first glance. Often, there are not many fixes to
                be made. I recommend these guys to everyone who needs quality
                design in a limited time.
              </p>
              <div className=" rotate-180 text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                «
              </div>
              <h1 className="font-bold text-[4vw] sm:text-[1.3vw] xl:text-[1vw]">
                Yernur Akzhol, MasterSAT
              </h1>
            </div>
          </div>
        </div>
        <div className="review-box w-[29vw] xl:w-[27vw] rounded-[40px] p-4 xl:pb-8 border-white border mx-14 sm:mx-auto ">
          <h1 className="text-[8vw] sm:text-[2vw] lg:text-[2.8vw] font-light">
            Review
          </h1>
          <div className="flex items-center">
            <div className="">
              <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                «
              </div>
              <p className=" text-[3vw] sm:text-[1.3vw]">
                I want to express my gratitude to Alim’s team for their work. I
                have been working with him 3 years, he is a very nice gentleman.
                Most importantly, I haven’t ever heard words like “I cannot,”
                “Impossible,” “I cannot do this”. It was possible to agree with
                him and even try something new! He is very communicative and
                versatile specialist. I recommend to work with him!
              </p>
              <div className=" rotate-180 text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                «
              </div>
              <h1 className="font-bold text-[4vw] sm:text-[1.3vw] xl:text-[1vw]">
                Rassimzhan, SabaqOnline
              </h1>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="sm:hidden overflow-hidden justify-between text-center px-12 ">
        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex"
        >
          <div className="review-box min-w-[100%] sm:w-[29vw] xl:w-[27vw] rounded-[40px] p-4 xl:pb-8 border-white border  sm:mx-auto">
            <h1 className="text-[8vw] sm:text-[2vw] lg:text-[2.8vw] font-light">
              Review
            </h1>
            <div className="flex items-center ">
              <div className="">
                <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                  «
                </div>
                <p className="text-[4vw] sm:text-[1.6vw] xl:text-[1.4vw] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  pulvinar purus non magna dapibus imperdiet. Proin eros sem,
                  commodo non efficitur nec, accumsan quis lectus. Nulla
                  molestie velit lorem, sit amet consequat eros efficitur quis.
                </p>
                <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold rotate-180">
                  «
                </div>
                <h1 className="font-bold text-[4vw] sm:text-[1.3vw] xl:text-[1vw]">
                  Name Surname, company
                </h1>
              </div>
            </div>
          </div>
          <div className="review-box min-w-[100%] sm:w-[29vw] xl:w-[27vw] rounded-[40px] p-4 xl:pb-8 border-white border mx-16 sm:mx-auto">
            <h1 className="text-[8vw] sm:text-[2vw] lg:text-[2.8vw] font-light">
              Review
            </h1>
            <div className="flex items-center h-auto">
              <div className="">
                <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                  «
                </div>
                <p className="text-[3vw] sm:text-[1.2vw]">
                  I am working with Alim’s team for about 3 years. For the 3
                  years, guys created the design of all of my courses and
                  posters on my page. The guys’ accountability is very high. If
                  the deadline is set, there is nothing to worry about, cause
                  everything will be done. Moreover, designers understand how to
                  design at the first glance. Often, there are not many fixes to
                  be made. I recommend these guys to everyone who needs quality
                  design in a limited time.
                </p>
                <div className=" rotate-180 text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                  «
                </div>
                <h1 className="font-bold text-[4vw] sm:text-[1.3vw] xl:text-[1vw]">
                  Yernur Akzhol, MasterSAT
                </h1>
              </div>
            </div>
          </div>
          <div className="review-box min-w-[100%] sm:w-[29vw] xl:w-[27vw] rounded-[40px] p-4 xl:pb-8 border-white border mx-16 sm:mx-auto ">
            <h1 className="text-[8vw] sm:text-[2vw] lg:text-[2.8vw] font-light">
              Review
            </h1>
            <div className="flex items-center">
              <div className="">
                <div className="text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                  «
                </div>
                <p className=" text-[3.5vw] sm:text-[1.3vw]">
                  I want to express my gratitude to Alim’s team for their work.
                  I have been working with him 3 years, he is a very nice
                  gentleman. Most importantly, I haven’t ever heard words like
                  “I cannot,” “Impossible,” “I cannot do this”. It was possible
                  to agree with him and even try something new! He is very
                  communicative and versatile specialist. I recommend to work
                  with him!
                </p>
                <div className=" rotate-180 text-[6vw] sm:text-[2vw] lg:text-[2.8vw] font-bold">
                  «
                </div>
                <h1 className="font-bold text-[4vw] sm:text-[1.3vw] xl:text-[1vw]">
                  Rassimzhan, SabaqOnline
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientFeedback;
