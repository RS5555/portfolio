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

import Carousel from "react-grid-carousel";

const SkillScreen = () => {
  const icons = [
    { id: 3, src: mySvg2, alt: "React Native" },
    { id: 11, src: mySvg10, alt: "JavaScript" },
    { id: 1, src: mySvg, alt: "Node.js" },
    { id: 8, src: mySvg7, alt: "HTML" },
    { id: 10, src: mySvg9, alt: "CSS" },
    { id: 2, src: mySvg1, alt: "Express.js" },
    { id: 5, src: mySvg4, alt: "MongoDB" },
    { id: 4, src: mySvg3, alt: "Tailwind CSS" },
    { id: 9, src: mySvg8, alt: "Postman" },
    { id: 6, src: mySvg5, alt: "git" },
    { id: 7, src: mySvg6, alt: "gitHub" },
    { id: 12, src: mySvg11, alt: "BitBucket" },
  ];

  return (
    <main className="w-full h-[700px] text-gray-100 bg-zinc-900 pl-20 pr-20">
      <h1 className="text-white lg:text-3xl text-2xl font-bold pt-10">
        MY SKILLS
      </h1>
      <div className="">
        <Carousel cols={4} rows={1} gap={2} loop autoplay={2000}>
          {icons.map((icon) => (
            <Carousel.Item key={icon.id}>
              <div
                className="flex mx-auto justify-center items-center bg-zinc-900 h-[200px] w-[200px] shadow-md my-4 rounded-md"
                style={{ padding: "20px" }}
              >
                <img src={icon.src} alt={icon.alt} width="100" />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </main>
  );
};

export default SkillScreen;
