import React, { useState } from "react";
import profile from "../../assets/AboutPhoto.png";

export default function AboutScreen() {
  const [mainSkill, setMainSkill] = useState(true);
  const [education, setEducation] = useState(false);

  const handleMainSkills = () => {
    setMainSkill(true);
    setEducation(false);
  };

  const handleEducation = () => {
    setMainSkill(false);
    setEducation(true);
  };

  return (
    <div className="w-full h-full lg:flex flex-row bg-slate-200 lg:p-20 p-10">
      <div className="lg:w-[50%] lg:h-auto h-[250px] mt-10 flex flex-col justify-end items-center relative">
        <div className="bg-white lg:w-[80%] lg:h-[75%] w-[80%] h-[75%] absolute bottom-0 flex justify-center items-center">
          {/* White background div */}
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <img
            src={profile}
            className="lg:h-4/5 lg:w-4/5 h-[80%] w-[80%] mx-auto"
            alt="Profile"
          />
        </div>
      </div>

      <div className="lg:w-[50%] mt-10">
        <h3 className="text-left text-xl font-bold relative">
          <span className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-800 text-transparent bg-clip-text">
            About Me
          </span>
        </h3>
        <h3 className="lg:text-4xl text-4xl font-bold mb-3 text-left mt-6">
          1.3 Year's Experience on Frontend Developer
        </h3>
        <p className=" text-justify text-gray-500 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          ea. Autem unde blanditiis, qui totam alias dicta explicabo nesciunt
          minima deserunt excepturi sed, nostrum et, quia maxime dolores
          similique corporis.
        </p>
        <div className="flex mt-6">
          <button
            onClick={handleMainSkills}
            className={`mb-3 py-2 px-4 rounded flex shadow-md ${
              mainSkill
                ? "bg-gradient-to-br from-rose-600 to-fuchsia-800 text-white font-bold"
                : "bg-neutral-100 text-gray-700 hover:bg-gray-400 hover:shadow-lg"
            }`}
          >
            Main Skills
          </button>
          <button
            onClick={handleEducation}
            className={`ml-5 mb-3 py-2 px-4 rounded flex shadow-md ${
              education
                ? "bg-gradient-to-br from-rose-600 to-fuchsia-800 text-white font-bold"
                : "bg-neutral-100  text-gray-700 hover:bg-gray-400 hover:shadow-lg"
            }`}
          >
            Education
          </button>
        </div>
        <div className="mt-2">
          {mainSkill ? (
            <div className="lg:w-[100%] lg:h-[300px] overflow-auto">
              <div>
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                    Leadership in Frontend Management
                  </span>
                </h3>
                <p className=" text-start text-gray-500 ">
                  Experienced in leading frontend initiatives, managing projects
                  from start to finish, and ensuring smooth and timely delivery
                  of frontend features.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                    Frontend Development Principles
                  </span>
                </h3>
                <p className=" text-start text-gray-500 ">
                  Solid understanding of frontend principles like UI design,
                  responsive layouts, and performance optimization for creating
                  high-quality, user-friendly applications.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                    ReactJS and React Native Proficiency
                  </span>
                </h3>
                <p className=" text-start text-gray-500 ">
                  Skilled in developing web and mobile applications using
                  ReactJS and React Native, with a deep understanding of their
                  core concepts and best practices.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                    HTML, CSS, and JavaScript Mastery
                  </span>
                </h3>
                <p className=" text-start text-gray-500 ">
                  Proficient in using HTML, CSS, and JavaScript to develop
                  interactive and visually appealing user interfaces, with a
                  focus on writing clean and modern code.
                </p>
              </div>
            </div>
          ) : (
            <div className="lg:w-[100%] lg:h-[300px]">
              <div>
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                    B.E. (Computer Engineering)
                  </span>
                </h3>
                <p className=" text-justify text-gray-500 ">
                  Siddhant College of Engineering
                </p>
                <p className=" text-justify text-gray-500 ">CGPA: 8.97CGPA</p>
                <p className=" text-justify text-gray-500 ">
                  Pass. Year(2019-2022)
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                  Diploma (Computer Engineering)
                  </span>
                </h3>
                <p className=" text-justify text-gray-500 ">
                Dr. D. Y. Patil Polytechnic, Akurdi
                </p>
                <p className=" text-justify text-gray-500 ">Percentage: 67.25%</p>
                <p className=" text-justify text-gray-500 ">
                Pass. Year(2016-2019)
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br from-rose-600 to-fuchsia-800 text-transparent bg-clip-text">
                  SCC
                  </span>
                </h3>
                <p className=" text-justify text-gray-500 ">
                Shree Mhalsakant Vidyalaya, Akurdi
                </p>
                <p className=" text-justify text-gray-500 ">Percentage: 79.60%</p>
                <p className=" text-justify text-gray-500 ">
                Pass. Year(2015-2016)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
