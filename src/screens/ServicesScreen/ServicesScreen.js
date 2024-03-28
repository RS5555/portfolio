import React from "react";
import "./Services.css";
export default function ServicesScreen() {
  return (
    <div className=" ">
      <div className="lg:h-[500px] w-full lg:flex lg:justify-evenly items-center space-y-14">
        <div className="card mx-auto lg:mx-0 mt-14">
          <p className="heading">UI/UX Design</p>
          <p>
            Create a beutiful and useful UI display for ease of use of the
            application of user
          </p>
          {/* <p>Uiverse</p> */}
        </div>
        <div className="card mx-auto lg:mx-0 mt-14">
          <p className="heading">Web Programming</p>
          <p>
            Build a quality website with the best technology and optimization on
            search engine.
          </p>
          {/* <p>Uiverse</p> */}
        </div>
        <div className="card mx-auto lg:mx-0 mt-14">
          <p className="heading">Mobile App Development</p>
          <p>
            Create an app from your own business for a more professional
            business performance.
          </p>
          {/* <p>Uiverse</p> */}
        </div>
      </div>
    </div>
  );
}
