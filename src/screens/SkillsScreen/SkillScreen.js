import React from "react";
import mySvg from "../../assets/SVG/nodejs-1.svg";
import mySvg1 from "../../assets/SVG/express-109.svg";
import mySvg2 from "../../assets/SVG/react-2.svg";
import mySvg3 from "../../assets/SVG/tailwind-css-1.svg";
import mySvg4 from "../../assets/SVG/mongodb-icon-2.svg";
import mySvg5 from "../../assets/SVG/git.svg";
import mySvg6 from "../../assets/SVG/github-icon-1.svg";
import mySvg7 from "../../assets/SVG/html-1.svg";
import mySvg8 from "../../assets/SVG/postman.svg";
import mySvg9 from "../../assets/SVG/css-3.svg";
import mySvg10 from "../../assets/SVG/javascript-1.svg";
import mySvg11 from "../../assets/SVG/bitbucket-blue.svg";
import "./SkillScreen.css";

import Carousel from "react-grid-carousel";
import { height } from "@mui/system";

const SkillScreen = () => {
  const icons = [
    { id: 3, src: mySvg2, alt: "React Native" },
    { id: 11, src: mySvg10, alt: "JavaScript" },
    { id: 8, src: mySvg7, alt: "HTML" },
    { id: 1, src: mySvg, alt: "Node.js" },
  ];

  const icons1 = [
    { id: 10, src: mySvg9, alt: "CSS" },
    { id: 2, src: mySvg1, alt: "Express.js" },
    { id: 5, src: mySvg4, alt: "MongoDB" },
    { id: 4, src: mySvg3, alt: "Tailwind CSS" },
  ];

  const icons2 = [
    { id: 9, src: mySvg8, alt: "Postman" },
    { id: 6, src: mySvg5, alt: "git" },
    { id: 7, src: mySvg6, alt: "gitHub" },
    { id: 12, src: mySvg11, alt: "BitBucket" },
  ];

  const gradientStyle = {
    background: "radial-gradient(circle, #d40267, #18181B)",
    // height: "600px",
    // width: "1000px",
  };

  return (
    <main id="skills" className="w-full h-[800px] text-gray-100 bg-zinc-900 lg:pl-20 lg:pr-20 ">
      <h1 className="text-white lg:text-3xl text-2xl font-bold pt-10 mb-20">
        MY SKILLS
      </h1>

      <div className="lg:flex lg:justify-center">
        <div
          style={gradientStyle}
          className="lg:h-[600px] lg:w-[1000px] h-[160px] w-[full] absolute "
        ></div>
      </div>
      <div className="flex justify-center lg:flex-col ">
        <div className="lg:flex lg:justify-center mb-[1.5px] relative">
          <div className="lg:flex lg:flex-row ">
            {icons.map((item, index) => (
              <div className="cardSkill lg:w-[270px] lg:h-[200px] h-[full] w-[110px] mx-[2px] lg:mx-[0.7px]">
                <div className="cardSkill2 lg:w-[270px] lg:h-[200px] h-[150px] w-[110px] flex justify-center items-center bg-zinc-900">
                  <img src={item.src} alt={item.alt} width="80" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:justify-center mb-[1.5px] relative">
          <div className="lg:flex lg:flex-row ">
            {icons1.map((item, index) => (
              <div className="cardSkill lg:w-[270px] lg:h-[200px] h-[full] w-[110px] mx-[2px] lg:mx-[0.7px]">
                <div className="cardSkill2 lg:w-[270px] lg:h-[200px] h-[150px] w-[110px] flex justify-center items-center bg-zinc-900  ">
                  <img src={item.src} alt={item.alt} width="80" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:justify-center mb-[1.5px] relative">
          <div className="lg:flex lg:flex-row ">
            {icons2.map((item, index) => (
              <div className="cardSkill lg:w-[270px] lg:h-[200px] h-[full] w-[110px] mx-[2px] lg:mx-[0.7px]">
                <div className="cardSkill2 lg:w-[270px] lg:h-[200px] h-[150px] w-[110px] flex justify-center items-center bg-zinc-900  ">
                  <img src={item.src} alt={item.alt} width="80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center mb-[0.7px] relative">
        <div className="flex flex-row ">
          {icons1.map((item, index) => (
            <div className="cardSkill w-[270px] h-[200px] mx-[0.7px]">
              <div className="cardSkill2 w-[270px] h-[200px] flex justify-center items-center bg-zinc-900  ">
                <img src={item.src} alt={item.alt} width="80" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-[0.7px] relative">
        <div className="flex flex-row ">
          {icons2.map((item, index) => (
            <div className="cardSkill w-[270px] h-[200px] mx-[0.7px]">
              <div className="cardSkill2 w-[270px] h-[200px] flex justify-center items-center bg-zinc-900  ">
                <img src={item.src} alt={item.alt} width="80" />
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </main>
  );
};

export default SkillScreen;

{
  /* <div className="">
        <Carousel cols={4} rows={1} gap={2} loop autoplay={2000}>
          {icons4.map((icon) => (
            <Carousel.Item key={icon.id}>
              <div
                className="flex flex-col mx-auto justify-center items-center bg-zinc-900 h-[200px] w-[200px] shadow-md my-4 rounded-md"
                style={{ padding: "20px" }}
              >
                <div className="w-[150px] h-[150px] flex justify-center items-center">
                  <img src={icon.src} alt={icon.alt} width="100" />
                </div>
                <div>
                  <p className="text-center">{icon.alt}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */
}

// const icons4 = [
//   { id: 3, src: mySvg2, alt: "React Native" },
//   { id: 11, src: mySvg10, alt: "JavaScript" },
//   { id: 1, src: mySvg, alt: "Node.js" },
//   { id: 8, src: mySvg7, alt: "HTML" },
//   { id: 10, src: mySvg9, alt: "CSS" },
//   { id: 2, src: mySvg1, alt: "Express.js" },
//   { id: 5, src: mySvg4, alt: "MongoDB" },
//   { id: 4, src: mySvg3, alt: "Tailwind CSS" },
//   { id: 9, src: mySvg8, alt: "Postman" },
//   { id: 6, src: mySvg5, alt: "git" },
//   { id: 7, src: mySvg6, alt: "gitHub" },
//   { id: 12, src: mySvg11, alt: "BitBucket" },
// ];
