import React from "react";
import NavBar from "./NavBar";

const WebDesign = () => {
  return (
    <>
      <NavBar />
      <div className="w-full bg-white py-16 px-4" id="WebDesign">
        <h1 className="md:text-4xl text-xl py-2 px-3 font-bold text-center md:mx-auto md:font-serif">
          Web Design
        </h1>
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-[1200px] rounded-t-3xl bg-slate-400">
          <img src="" alt="" />
          <p className="md:my-8 text-xs md:text-base mx-4 my-4 md:font-serif">
            By default, an active class is added to a component when it is
            active. This provides the same simple styling mechanism for most
            users who are upgrading from v5
          </p>
        </div>
      </div>
    </>
  );
};

export default WebDesign;
