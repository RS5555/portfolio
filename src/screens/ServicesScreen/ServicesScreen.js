import React from "react";
import "./Services.css";
export default function ServicesScreen() {
  return (
    <div className="bg-black p-20">
      <div className="w-[full] flex justify-evenly">
        <div className="w-[50%]">
          <p className="text-4xl text-left text-white font-bold mb-5">
            What Can I Do For Your Needs
          </p>
          <p className="text-lg text-left text-white">
            I offer a range of digital services tailored to elevate your online
            presence. From captivating UI/UX designs to powerful web programming
            and innovative mobile app development, I specialize in crafting
            tailored solutions that bring your vision to life.
          </p>
        </div>
        <div className="w-[50%]">
          <p className="text-xl text-white font-bold">
            What Can I Do For Your Needs
          </p>
        </div>
      </div>
      <div className="w-[full] h-[500px] flex justify-evenly items-center ">
        <div className="container">
          <div className="card">
            <div className="front">
              <p className="text-xl font-bold">UI/UX Design</p>
              {/* <p className="follow">Follow me for more...</p> */}
            </div>
            <div className="back">
              {/* <p className="heading">UI/UX Design</p> */}
              <div className="w-[85%]">
                <p className="follow text-center">
                  Craft captivating digital experiences with our expert UI/UX
                  design services. We blend creativity and functionality to
                  deliver intuitive and visually appealing interfaces that
                  resonate with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="front">
              <p className="text-xl font-bold">Web Programming</p>
              {/* <p className="follow">Follow me for more...</p> */}
            </div>
            <div className="back">
              {/* <p className="heading">UI/UX Design</p> */}
              <div className="w-[85%]">
                <p className=" text-center">
                  Power up your online presence with our web programming
                  expertise. Our developers build scalable, secure, and
                  feature-rich web applications tailored to your needs, ensuring
                  a seamless digital experience for users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="front">
              <p className="text-xl font-bold">
                Mobile Application Development
              </p>
              {/* <p className="follow">Follow me for more...</p> */}
            </div>
            <div className="back">
              {/* <p className="heading">UI/UX Design</p> */}
              <div className="follow w-[85%]">
                <p className="text-center">
                  Harness the potential of mobile technology with our bespoke
                  app development. From iOS to Android and cross-platform
                  solutions, we create high-performance, user-friendly mobile
                  apps that captivate and engage your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
