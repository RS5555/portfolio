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
    <div className="w-full h-full lg:flex flex-row bg-zinc-900 lg:pb-20 p-10">
      <div className="lg:mb-10 lg:w-[50%] lg:h-auto h-[250px]  flex flex-col justify-end items-center relative">
        <div className="bg-slate-800 lg:w-[80%] lg:h-[75%] w-[80%] h-[75%] absolute bottom-0 flex justify-center items-center">
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

      <div className="lg:w-[50%] ">
        <h3 className="lg:text-left text-center text-xl font-bold relative">
          <span className="text-white mb-3">
            About Me
          </span>
        </h3>
        <h3 className="lg:text-4xl text-4xl font-bold  text-left lg:mt-3 mt-6 bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-600 text-transparent bg-clip-text">
          1.3 Year's Experience on Frontend Developer
        </h3>
        <p className=" text-justify text-lg text-white mt-6">
          Experienced Frontend React Developer specializing in optimizing user
          experiences. Skilled in ReactJS, React Native, and frontend
          technologies. Proven track record of driving project success and
          boosting user satisfaction. Strong collaborator. Ready to innovate and
          elevate projects.
        </p>
        <div className="flex mt-6">
          <button
            onClick={handleMainSkills}
            className={`mb-3 py-2 px-4 rounded flex shadow-md ${
              mainSkill
                ? "bg-gradient-to-br from-rose-600 to-fuchsia-600 text-white font-bold"
                : "bg-neutral-100 text-gray-700 hover:bg-gray-400 hover:shadow-lg"
            }`}
          >
            Main Skills
          </button>
          <button
            onClick={handleEducation}
            className={`ml-5 mb-3 py-2 px-4 rounded flex shadow-md ${
              education
                ? "bg-gradient-to-br from-rose-600 to-fuchsia-600 text-white font-bold"
                : "bg-neutral-100  text-gray-700 hover:bg-gray-400 hover:shadow-lg"
            }`}
          >
            Education
          </button>
        </div>
        <div className="mt-2">
          {mainSkill ? (
            <div className="lg:w-[100%] lg:h-[300px] ">
              <div>
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br text-lg from-rose-600 to-fuchsia-600 text-transparent bg-clip-text">
                    Leadership in Frontend Management
                  </span>
                </h3>
                <p className=" text-start text-lg text-white ">
                  Experienced in leading frontend initiatives, managing projects
                  from start to finish, and ensuring smooth and timely delivery
                  of frontend features.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br text-lg from-rose-600 to-fuchsia-600 text-transparent bg-clip-text">
                    Frontend Development Principles
                  </span>
                </h3>
                <p className=" text-start text-lg text-white ">
                  Solid understanding of frontend principles like UI design,
                  responsive layouts, and performance optimization for creating
                  high-quality, user-friendly applications.
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br text-lg from-rose-600 to-fuchsia-600 text-transparent bg-clip-text">
                    ReactJS and React Native Proficiency
                  </span>
                </h3>
                <p className=" text-start text-lg text-white ">
                  Skilled in developing web and mobile applications using
                  ReactJS and React Native, with a deep understanding of their
                  core concepts and best practices.
                </p>
              </div>
              {/* <div className="mt-5">
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
              </div> */}
            </div>
          ) : (
            <div className="lg:w-[100%] lg:h-[300px]">
              <div>
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br text-lg from-rose-600 to-fuchsia-600 text-transparent bg-clip-text">
                    B.E. (Computer Engineering)
                  </span>
                </h3>
                <p className=" text-justify text-lg text-white ">
                  Siddhant College of Engineering
                </p>
                <p className=" text-justify text-lg text-white ">CGPA: 8.97CGPA</p>
                <p className=" text-justify text-lg text-white ">
                  Pass. Year(2019-2022)
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br text-lg from-rose-600 to-fuchsia-600 text-transparent bg-clip-text">
                    Diploma (Computer Engineering)
                  </span>
                </h3>
                <p className=" text-justify text-lg text-white ">
                  Dr. D. Y. Patil Polytechnic, Akurdi
                </p>
                <p className=" text-justify text-lg text-white ">
                  Percentage: 67.25%
                </p>
                <p className=" text-justify text-lg text-white ">
                  Pass. Year(2016-2019)
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-left text-sm relative font-bold">
                  <span className="bg-gradient-to-br text-lg from-rose-600 to-fuchsia-600 text-transparent bg-clip-text">
                    SCC
                  </span>
                </h3>
                <p className=" text-justify text-lg text-white ">
                  Shree Mhalsakant Vidyalaya, Akurdi
                </p>
                <p className=" text-justify text-lg text-white ">
                  Percentage: 79.60%
                </p>
                <p className=" text-justify text-lg text-white ">
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
