import React from "react";
import "./HomeScreen.css";
import profile from "../../assets/Rohit 3.png";
import background from "../../assets/Background3.png";
import { ReactTyped } from "react-typed";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div className="w-full h-full lg:flex flex-row bg-slate-100 lg:pt-20 lg:pl-20 lg:pr-20 p-10">
      <div className="lg:w-[70%] w-full h-[550px] lg:h-[520px] flex flex-col items-start justify-center lg:text-start ">
        <div>
          <span className="lg:text-sm text-sm font-bold text-gray-500">
            WELCOME TO MY WORLD
          </span>
        </div>
        <div>
          <h1 className="lg:text-5xl text-5xl font-bold mb-3">Hi I'm Rohit</h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-800 text-transparent bg-clip-text lg:text-3xl text-2xl font-bold">
            <ReactTyped
              strings={[
                "Leverage Your Business",
                "Seamless Solution",
                "Designer",
              ]}
              typeSpeed={50}
              loop
              backSpeed={10}
              cursorChar="."
              showCursor={true}
            />
          </h1>
        </div>
        <div className="w-[95%] mb-10">
          <p className="lg:text-sm text-sm flex text-gray-500 text-justify">
            I thrive in collaborative environments, where I actively contribute
            ideas and solutions to drive project success. My strong
            understanding of mobile development principles, coupled with my
            problem-solving skills, enables me to tackle challenges efficiently
            and deliver high-quality solutions within tight deadlines.
          </p>
        </div>
        <div className="w-[95%] flex ">
          <button className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-800 text-white font-bold py-2 px-4 rounded flex">
            Download CV
            <FiDownload size={22} className="ml-3" />
          </button>
        </div>
        <div className="flex pt-8 lg:pt-16">
          <div className="">
            <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
              {/* <Link to='https://www.instagram.com'/> */}
              <a
                href="https://www.instagram.com/_rohitsawant?igsh=MWdoeTF4eDlwYW4zNA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} className="" />
              </a>
            </button>
          </div>
          <div className="ml-3">
            <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaGithub size={20} className="" />
              </a>
            </button>
          </div>
          <div className="ml-3">
            <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaLinkedinIn size={20} className="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-[30%] w-full h-full flex justify-center items-center animate-custom-bounce mt-20 lg:mt-20 ">
        <div className="lg:w-[370px] lg:h-[370px] w-[265px] h-[265px] h absolute bg-white rounded-full shadow-2xl">
          <img
            src={background}
            className="lg:w-[370px] lg:h-[370px] w-[265px] h-[265px] relative custom-spin-animation "
            alt=""
          />
        </div>

        <div className="rounded-full bg-gradient-to-br from-rose-600 relative to-purple-800 lg:h-[320px] lg:w-[320px] h-[230px] w-[230px] flex items-center justify-center">
          <div className="w-[260px] lg:w-[355px] absolute">
            <img src={profile} className=" w-[390px] " alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

