import React from "react";
import Typed from "react-typed";
import Form from "./Form/Form";

const Hero = () => {
  return (
    <div className="text-white py-32 h-[100vh] overflow-hidden" id="Home">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="max-w-[500px] mt-30 mx-10 w-50% text-center flex flex-col justify-start">
          <div classname="flex flex-row justify-between">
            <h1 className="font-bold p-4 md:p-10 text-xl md:text-3xl">
              I'm<span className="text-[#6be0e9] pl-2">Eyob</span>
            </h1>
            <Typed
              className="font-bold  text-[#6be0e9] p-4 md:p-10 text-xl md:text-3xl"
              strings={[
                "Website Developer",
                "UI/UX Designer",
                "Mobile App Developer",
              ]}
              typeSpeed={120}
              backSpeed={30}
              loop
            />
          </div>
          <p className="p-2 ">
            An Enthusiastic Website designer.Design smooth user-interfaces that
            promote user interaction with information and data.
          </p>

          <div className="m-8">
            <Form />
          </div>
        </div>

        <div className="mx-5">
          <img
            src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="AboutImage"
            className="w-full h-full object-cover mx-auto mt-5 md:my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
