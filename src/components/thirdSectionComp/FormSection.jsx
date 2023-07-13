import React from "react";

const FormSection = () => {
  return (
    <div className="w-full text-white text-center">
      <h1 className=" uppercase text-[7vw] lg:text-[6vw] font-bold pt-12 sm:pt-20 pb-10 sm:pb-16">
        Interested?
      </h1>
      <div className="review-box max-w-[90%] sm:max-w-[710px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto   relative  z-0 rounded-[40px]">
        <h1 className=" uppercase text-[7vw] lg:text-[4.5vw] py-3 sm:py-5">
          Contact us
        </h1>
        <form
          action=""
          className="px-8 sm:px-12 lg:px-16  text-[3vw] sm:text-[2.4vw] lg:text-[1.4vw] font-bold"
        >
          <div className=" sm:flex justify-between sm:mb-5">
            <div className="sm:w-[45%] text-left mb-3 sm:mb-0">
              <label htmlFor="" className="block tex-left pb-1 ">
                Full Name
              </label>
              <input type="text" className="w-full form-input" />
            </div>
            <div className="sm:w-[45%] text-left mb-3 sm:mb-0">
              <label htmlFor="" className="block text-left pb-1">
                Email
              </label>
              <input type="text" className="w-full form-input" />
            </div>
          </div>
          <div className=" w-full text-left mb-3 sm:mb-5">
            <label htmlFor="" className="block text-left pb-1">
              Subject
            </label>
            <input type="text" className="w-full form-input" />
          </div>
          <div className="w-full text-left mb-3 sm:mb-5">
            <label htmlFor="" className="block text-left pb-1">
              Message
            </label>
            {/* <input type="text" className="w-full form-input h-[400%]" /> */}
            <textarea
              name=""
              id=""
              rows="8"
              className="w-full form-input h-[400%]"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" submit-b px-10 sm:px-16 py-1 sm:py-2 mb-4 sm:mb-7 text-[3vw] sm:text-[2.4vw] lg:text-[1.7vw] border-white border-[2px] rounded-2xl bg-white text-[#8919BE]"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
