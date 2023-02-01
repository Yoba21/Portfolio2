import React from "react";

const Form = () => {
  return (
    <div>
      <form
        action="eyzzz86@gmail.com"
        method="GET"
        className="max-w-[380px] w-full relative inline-block overflow-hidden text-gray-500"
      >
        <input
          type="email"
          placeholder="Enter your Email"
          required
          className="inline-block w-full py-4 pl-4 pr-32 border-2 border-[#2388db] rounded-3xl outline-none"
        />
        <input
          type="submit"
          value="Email Me"
          className="inline-block border-none rounded-3xl cursor-pointer bg-[#2388db] absolute py-3 px-6 text-[#0e0c0c] top-1.5 right-1.5"
        />
      </form>
    </div>
  );
};

export default Form;
