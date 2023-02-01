import React from "react";
import { UilBullseye } from "@iconscout/react-unicons";

const Skills = () => {
  return (
    <section id="Skills" className="px-9 bg-[#000300] text-[#fff] w-full py-16">
      <h2 className="md:text-4xl text-2xl font-semibold text-center mt-12 mb-8">
        My Skills
      </h2>
      <div className=" grid md:grid-cols-2 gap-12 md:mx-16 py-6 px-12">
        <div className=" rounded-2xl bg-[#6c8dac] border-2 border-[#fff] shadow-lg text-white text py-9 px-20 hover:bg-transparent hover:border-[#6c8dac] hover:border-2 duration-500">
          <h2 className=" text-center mb-8 text-gray-300 font-[500] text-xl">
            Front-End Developmnet
          </h2>
          <div className="grid grid-cols-2 gap-y-8">
            <article>
              <UilBullseye />
              <h4>HTML </h4>
              <small className=" text-xs font-extralight"> Experienced</small>
            </article>
            <article>
              <UilBullseye />
              <h4>CSS </h4>
              <small className=" text-xs font-extralight"> Experienced</small>
            </article>
            <article>
              <UilBullseye />
              <h4>Javascript </h4>
              <small className=" text-xs font-extralight"> Intermediate</small>
            </article>
            <article>
              <UilBullseye />
              <h4>Tailwind </h4>
              <small className=" text-xs font-extralight"> Intermediate</small>
            </article>
            <article>
              <UilBullseye />
              <h4>React </h4>
              <small className=" text-xs font-extralight"> Intermediate</small>
            </article>
          </div>
        </div>
        <div className=" rounded-2xl bg-[#6c8dac] shadow-lg text-white text py-9 px-20 hover:bg-transparent hover:border-[#6c8dac] hover:border-2 duration-500">
          <h2 className=" text-center mb-8 text-gray-300 font-[500] text-xl">
            Back-End Developmnet
          </h2>
          <div className="grid grid-cols-2 gap-y-8">
            <article>
              <UilBullseye />
              <h4>Python </h4>
              <small className=" text-xs font-extralight"> Intermediate</small>
            </article>
            <article>
              <UilBullseye />
              <h4>Node Js </h4>
              <small className=" text-xs font-extralight"> Intermediate</small>
            </article>
            <article>
              <UilBullseye />
              <h4>MongoDB </h4>
              <small className=" text-xs font-extralight"> Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
