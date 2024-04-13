import React from "react";
import "./Services.css";
import ComputerIcon from "@mui/icons-material/Computer";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export default function ServicesScreen() {
  return (
    <div className=" bg-black">
      <div className="lg:w-full pl-20 pr-20 pt-14 ">
        <div className="w-full">
          <h1 className="bg-gradient-to-br from-rose-600 mb-2  to-fuchsia-600 text-transparent bg-clip-text lg:text-3xl text-2xl font-bold">
            What Can I Do For Your Needs
          </h1>
          <p className="text-white text-center text-sm">
            {/* Welcome to 'What Can I Do For Your Needs.' Explore a comprehensive
            range of services tailored to elevate your digital presence. From
            crafting intuitive mobile and web applications to designing
            captivating UI/UX experiences, I'm dedicated to bringing your ideas
            to life with innovation and precision. */}
            WHAT I WILL DO FOR YOU
          </p>
        </div>
      </div>
      <div className="lg:h-[350px] lg:w-[full] bg-black lg:flex lg:justify-evenly items-center flex flex-col lg:flex-row overflow-auto">
        <section className="container mb-4 lg:mb-0">
          <div className="card bg-zinc-900">
            <div className="content">
              <p className="logo">
                <DesignServicesIcon fontSize="large" />
              </p>
              <div className="h6">UI/UX Design</div>
              <div className="hover_content">
                <p>
                  Our captivating interfaces blend creativity with usability,
                  fostering lasting connections and enhancing user engagement
                  across platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-4 lg:mb-0">
          <div className="card bg-zinc-900">
            <div className="content">
              <p className="logo">
                <ComputerIcon fontSize="large" />
              </p>
              <div className="h6">Web Development</div>
              <div className="hover_content">
                <p>
                  Empower your business with seamless and scalable web
                  solutions, designed to thrive in the digital landscape and
                  drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-4 lg:mb-0">
          <div className="card bg-zinc-900">
            <div className="content">
              <p className="logo">
                <PhonelinkSetupIcon fontSize="large" />
              </p>
              <div className="h6">Mobile App Development</div>
              <div className="hover_content">
                <p>
                  We specialize in crafting tailored iOS and Android apps that
                  elevate user experiences, captivating and engaging your
                  audience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
