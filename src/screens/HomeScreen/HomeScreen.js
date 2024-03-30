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
  const handleDownload = () => {
    // Replace 'your-cv-file.pdf' with the actual file name of your CV
    const cvUrl = "https://cvserver-87ny.onrender.com/cv";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "your-cv-file.pdf"; // Set the default file name for download
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Clean up: remove the temporary link element from the document
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-full lg:flex flex-row bg-black lg:pt-20 lg:pl-20 lg:pr-20 p-10 pt-32">
      <div className="lg:w-[70%] w-full h-[550px] lg:h-[520px] flex flex-col items-start justify-center lg:text-start ">
        <div>
          <span className="lg:text-3xl text-2xl text-white">I'm</span>
        </div>
        <div>
          <h1 className="lg:text-5xl text-start text-4xl font-bold mb-3 text-white">
            Rohit Sawant
          </h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-600 text-transparent bg-clip-text lg:text-3xl text-2xl font-bold">
            <ReactTyped
              strings={[
                "Leverage Your Business",
                // "Designing with user-centric focus.",
                // "Weaving Innovation into User Interfaces",
                // "Elevating interfaces with precision.",
              ]}
              typeSpeed={50}
              loop
              backSpeed={10}
              cursorChar="."
              showCursor={true}
            />
          </h1>
        </div>
        <div className="lg:w-[95%] w-[100%] mb-10">
          <p className="lg:text-lg text-lg flex text-white text-justify">
            As a seasoned MERN Developer, I bring forth a rich tapestry of
            experience and technical prowess that resonates with innovation,
            collaboration, and an unwavering dedication to frontend and
            full-stack excellence. Throughout my career journey, I've
            meticulously honed my craft, navigating through the ever-evolving
            landscape of web development with an insatiable appetite for
            learning and a relentless pursuit of excellence.
          </p>
        </div>
        <div className="w-[95%] flex ">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-800 text-white font-bold py-2 px-4 rounded flex"
          >
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
                href="https://github.com/RS5555"
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
                href="https://www.linkedin.com/in/rohitvsawant/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} className="" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-[30%] w-full h-[300px] flex justify-center items-center animate-custom-bounce mt-40 lg:mt-20 ">
        <div className="lg:w-[340px] lg:h-[340px] w-[265px] h-[265px] h absolute bg-white rounded-full shadow-2xl">
          <img
            src={background}
            className="lg:w-[340px] lg:h-[340px] w-[265px] h-[265px] relative custom-spin-animation "
            alt=""
          />
        </div>

        <div className="rounded-full bg-gradient-to-br from-rose-600 relative to-purple-800 lg:h-[290px] lg:w-[290px] h-[230px] w-[230px] flex items-center justify-center">
          <div className="w-[230px] lg:w-[325px] absolute">
            <img src={profile} className=" w-[390px] " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
