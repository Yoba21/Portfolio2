import React from "react";
import CV from "../Assets/CV.pdf";
import {
  UilEnvelope,
  UilPhone,
  UilInstagram,
  UilTelegram,
  UilLinkedin,
} from "@iconscout/react-unicons/";

const Contact = () => {
  return (
    <div
      className=" px-4 mt-12 bg-[#000300] text-[#fff] w-full py-16"
      id="Contact"
    >
      <div className="max-w-[1400px] mx-3 grid gap-4 md:grid-cols-2">
        <div className=" w-full ml-24 flex py-8 justify-between ">
          <div className=" items-start py-2">
            <h1 className=" md:text-5xl sm:text-3xl text-xl font-bold md:mt-5 md:mb-12">
              Contact Me
            </h1>
            <p className=" mt-8 flex gap-6 ">
              <UilEnvelope />
              Eyzzz86@gmail.com
            </p>
            <p className=" mt-8 flex gap-6">
              <UilPhone />
              +251921297530
            </p>
            <div className=" mt-8 ml-4 gap-5 flex items-center  ">
              <a
                href="https://www.instagram.com/yobaa____"
                className="hover:text-[#fa4646] hover:-translate-y-1.5 "
              >
                <UilInstagram size={35} />
              </a>
              <a
                href="https://t.me/YooYoo21"
                className="hover:text-[#3b879e] hover:-translate-y-1.5 hover:bg-[#fff] "
              >
                <UilTelegram size={35} />
              </a>
              <a
                href=" https://www.linkedin.com/in/eyob-zelalem-21420522b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfgQLk%2Ff5TwW3pohiTRkyqQ%3D%3D"
                className="hover:text-[#3b879e] hover:-translate-y-1.5 hover:bg-[#fff] "
              >
                <UilLinkedin size={35} />
              </a>
            </div>

            <a
              href={CV}
              download
              className=" mt-16 py-4 px-12 w-[80%] rounded-3xl bg-[#0f5e75] text-[#fff] inline-block duration-500 hover:rounded-md"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-[100%] py-8 px-4">
          <form className="" action="mailto:eyzzz86@gmail.com" method="GET">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full border-none rounded-md text-[#fff] bg-[#262626] py-4 m-4 text-xl"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full border-none rounded-md text-[#fff] bg-[#262626] py-4 m-4 text-xl"
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
              className="w-full border-none rounded-md text-[#fff] bg-[#262626] py-4 m-4 text-lg"
            />
            <button
              type="submit"
              className="mt-8 py-4 px-12 ml-4 w-[30%] rounded-full bg-[#0f5e75] text-[#fff] text-xl inline-block hover:bg-[#06e2f1] hover:rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
