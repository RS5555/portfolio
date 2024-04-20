// import React from "react";
// import "./HomeScreen.css";
// import profile from "../../assets/Rohit 3.png";
// import background from "../../assets/Background3.png";
// import { ReactTyped } from "react-typed";
// import { FiDownload } from "react-icons/fi";
// import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// export default function HomeScreen() {
//   const handleDownload = () => {
//     const cvUrl = "https://cvserver-87ny.onrender.com/cv";

//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.download = "your-cv-file.pdf";
//     document.body.appendChild(link);

//     link.click();

//     document.body.removeChild(link);
//   };

//   return (
//     <div
//       id="home"
//       className="w-full h-full lg:flex flex-row bg-black lg:pt-20 lg:pl-20 lg:pr-20 p-10 pt-32"
//     >
//       <div className="lg:w-[70%] w-full h-[550px] lg:h-[520px] flex flex-col items-start justify-center lg:text-start ">
//         <div>
//           <span className="lg:text-3xl text-2xl text-white">I'm</span>
//         </div>
//         <div>
//           <h1 className="lg:text-5xl text-start text-4xl font-bold mb-3 text-white">
//             Rohit Sawant
//           </h1>
//         </div>
//         <div>
//           <h1 className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-600 text-transparent bg-clip-text lg:text-3xl text-2xl font-bold">
//             <ReactTyped
//               strings={[
//                 "Leverage Your Business",
//                 // "Designing with user-centric focus.",
//                 // "Weaving Innovation into User Interfaces",
//                 // "Elevating interfaces with precision.",
//               ]}
//               typeSpeed={50}
//               loop
//               backSpeed={10}
//               cursorChar="."
//               showCursor={true}
//             />
//           </h1>
//         </div>
//         <div className="lg:w-[95%] w-[100%] mb-10">
//           <p className="lg:text-lg text-lg flex text-white text-justify">
//             As a seasoned MERN Developer, I bring forth a rich tapestry of
//             experience and technical prowess that resonates with innovation,
//             collaboration, and an unwavering dedication to frontend and
//             full-stack excellence. Throughout my career journey, I've
//             meticulously honed my craft, navigating through the ever-evolving
//             landscape of web development with an insatiable appetite for
//             learning and a relentless pursuit of excellence.
//           </p>
//         </div>
//         <div className="w-[95%] flex ">
//           <button
//             onClick={handleDownload}
//             className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-800 text-white font-bold py-2 px-4 rounded flex"
//           >
//             Download CV
//             <FiDownload size={22} className="ml-3" />
//           </button>
//         </div>
//         <div className="flex pt-8 lg:pt-16">
//           <div className="">
//             <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
//               <a
//                 href="https://www.instagram.com/_rohitsawant?igsh=MWdoeTF4eDlwYW4zNA=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram size={20} className="" />
//               </a>
//             </button>
//           </div>
//           <div className="ml-3">
//             <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
//               <a
//                 href="https://github.com/RS5555"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub size={20} className="" />
//               </a>
//             </button>
//           </div>
//           <div className="ml-3">
//             <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
//               <a
//                 href="https://www.linkedin.com/in/rohitvsawant/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn size={20} className="" />
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="lg:w-[30%] w-full h-[300px] flex justify-center items-center animate-custom-bounce mt-40 lg:mt-20 ">
//         <div className="lg:w-[340px] lg:h-[340px] w-[265px] h-[265px] h absolute bg-white rounded-full shadow-2xl">
//           <img
//             src={background}
//             className="lg:w-[340px] lg:h-[340px] w-[265px] h-[265px] relative custom-spin-animation "
//             alt=""
//           />
//         </div>

//         <div className="rounded-full bg-gradient-to-br from-rose-600 relative to-purple-800 lg:h-[290px] lg:w-[290px] h-[230px] w-[230px] flex items-center justify-center">
//           <div className="w-[230px] lg:w-[325px] absolute">
//             <img src={profile} className=" w-[390px] " alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









import React from "react";
import "./HomeScreen.css";
import profile from "../../assets/Rohit 3.png";
import background from "../../assets/Background3.png";
import { ReactTyped } from "react-typed";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from Framer Motion

export default function HomeScreen() {
  const handleDownload = () => {
    const cvUrl = "https://cvserver-87ny.onrender.com/cv";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "your-cv-file.pdf";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <motion.div // Wrap your main container with motion.div
      id="home"
      className="lg:w-screen lg:h-screen w-full h-full lg:flex flex-row items-center bg-black lg:pt-20 lg:pl-20 lg:pr-20 p-10 pt-32"
    >
      <motion.div // Apply motion.div to the container you want to animate
        className="lg:w-[65%] w-full h-[screen] lg:h-[full] flex flex-col items-start justify-center lg:text-start "
        initial={{ opacity: 0, y: -50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div>
          <span className="lg:text-3xl text-2xl text-white">I'm</span>
        </div>
        <div>
          <h1 className="lg:text-6xl text-start text-4xl font-bold mb-3 text-white">
            Rohit Sawant
          </h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-br from-rose-600 mb-3 to-fuchsia-600 text-transparent bg-clip-text lg:text-3xl text-2xl font-bold">
            <ReactTyped
              strings={["Leverage Your Business"]}
              typeSpeed={50}
              loop
              backSpeed={10}
              cursorChar="."
              showCursor={true}
            />
          </h1>
        </div>
        <div className="lg:w-[95%] w-[100%] mb-6">
          <p className="lg:text-lg text-lg flex text-white text-justify">
          As a seasoned MERN Developer, I bring a wealth of experience, technical prowess, and dedication to frontend and full-stack excellence. With a relentless pursuit of learning, I navigate the dynamic landscape of web development, seamlessly integrating MongoDB, Express.js, React.js, and Node.js to create robust applications. Collaborating effectively in interdisciplinary teams, I leverage diverse perspectives to drive innovation and articulate technical concepts clearly. My commitment to staying updated with the latest trends ensures I remain at the forefront of web development, continuously refining my skills and pushing the boundaries of what's possible.
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
        <div className="flex pt-8 lg:pt-6">
          <div className="">
            <button className="border-4 border-rose-600 text-blue-500 font-bold py-2 px-2 rounded-full">
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
      </motion.div>

      <motion.div // Apply motion.div to the container you want to animate
        className="lg:w-[35%] w-full h-[300px] flex justify-center items-center animate-custom-bounce mt-40 lg:mt-2 "
        initial={{ opacity: 0, x: 50 }} // Initial animation properties
        animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
      >
        <div className="lg:w-[400px] lg:h-[400px] w-[265px] h-[265px] h absolute bg-white rounded-full shadow-2xl">
          <img
            src={background}
            className="lg:w-[400px] lg:h-[400px] w-[265px] h-[265px] relative custom-spin-animation "
            alt=""
          />
        </div>

        <div className="rounded-full bg-gradient-to-br from-rose-600 relative to-purple-800 lg:h-[350px] lg:w-[350px] h-[230px] w-[230px] flex items-center justify-center">
          <div className="w-[250px] lg:w-[385px] absolute">
            <img src={profile} className=" w-[390px] " alt="" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
