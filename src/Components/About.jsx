import React from "react";
import avaar from "../Assets/avaar.png";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="About">
      <div className="max-w-[1300px]  mx-3  grid md:gap-12 md:mx-auto md:grid-cols-2">
        <img
          src={avaar}
          alt="AboutImage"
          className="w-[400px] mx-auto mt-5 md:my-auto"
        />
        <div className="flex flex-col justify-center mt-12">
          <h1 className="md:text-4xl text-xl py-2 px-3 font-bold">About Me</h1>
          <p className="md:my-8 text-xs md:text-base mx-4 my-4 md:font-serif">
            I'm Capable of working with a variety of technology and software
            solutions, and managing databases.Hard-working web developer with a
            flair for creating elegant solutions in the least amount of time.I
            am incredibly organized and very detail oriented,I rarely make
            errors and know what even a small mistake can mean to a project.And
            also i can provide a clean code and Passionate about software
            architecture and cloud computing.
          </p>
          <a
            href="#Contact"
            className="bg-black rounded-md w-[200px] font-medium my-6 mx-auto py-3 text-[#2388db] text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
