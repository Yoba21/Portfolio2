import React from "react";
import UilCrop from "@iconscout/react-unicons/icons/uil-crop-alt";
import UilBrackets from "@iconscout/react-unicons/icons/uil-brackets-curly";
import UilGoogle from "@iconscout/react-unicons/icons/uil-google-play";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div
      className="w-full md:py-16 py-4 px-4 md:mt-16 bg-[#fff] md:h-full"
      id="Services"
    >
      <h1 className="md:text-4xl text-2xl py-2 px-3 font-bold text-center mt-12 mb-8">
        My Services
      </h1>
      <div className="max-w-[1300px] md:ml-20 md:py-9 px-8 grid md:grid-cols-3 gap-8">
        <div className="p-12 shadow-lg text-black md:text-sm text-xs rounded-md flex flex-col justify-between items-center bg-[#faf5f5]  hover:bg-[#6c8dac] duration-500 hover:text-black">
          <UilBrackets size={66} />
          <h2 className="md:text-3xl text-lg font-bold md:my-7 my-3">
            Web Design
          </h2>
          <p>
            Design & Develop Custom Software Solutions that Empower Businesses
            to stay ahead of their Competition.Analyze and Research the Market.
          </p>
          <NavLink to="/WebDesign" className="inline-block text-sm mt-5 ">
            Learn more ...
          </NavLink>
        </div>
        <div className="p-12 shadow-lg text-black md:text-sm text-xs rounded-md flex flex-col justify-between items-center bg-[#faf5f5] duration-500 hover:bg-[#6c8dac] hover:text-black">
          <UilCrop size={77} />
          <h2 className="md:text-3xl text-lg font-bold md:my-7 my-3">
            UI/Ux Design
          </h2>
          <p>
            Any part of a design that affects the user is UX design. I will help
            design custom user interfaces based on your business requirements.
          </p>
          <a href="/UI/UX Design" className="inline-block text-sm mt-5 ">
            Learn more ...
          </a>
        </div>
        <div className="p-12 shadow-lg text-black md:text-sm text-xs rounded-md flex flex-col justify-between items-center bg-[#faf5f5] duration-500 hover:bg-[#6c8dac] hover:text-black">
          <UilGoogle size={66} />
          <h2 className="md:text-3xl text-lg font-bold md:my-7 my-3">
            App Design
          </h2>
          <p>
            Develops and Customizes Custom Mobile Application Development
            Solutions for the Specific needs of any Business.and meet the curent
            target users.
          </p>
          <a href="/" className="inline-block text-sm mt-5 ">
            Learn more ...
          </a>
        </div>
        
        
      </div>
    </div>
  );
};

export default Service;
