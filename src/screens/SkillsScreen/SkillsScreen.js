import React from "react";
import { ReactComponent as MySVG } from "../../assets/SkillsLogo/react-native-1.svg";
import { ReactComponent as MySVG1 } from "../../assets/SkillsLogo/git.svg";
import { ReactComponent as MySVG2 } from "../../assets/SkillsLogo/nodejs-1.svg";
import { ReactComponent as MySVG3 } from "../../assets/SkillsLogo/html-1.svg";
import { ReactComponent as MySVG4 } from "../../assets/SkillsLogo/express-109.svg";


export default function SkillsScreen() {
  return (
    <div className="w-full flex lg:h-[150px]">
      <div className="w-[10%] h-[full] flex-col">
        <div className="h-[50%] bg-black"></div>
        <div className="h-[50%] bg-zinc-900"></div>
      </div>
      <div className="lg:w-[80%] lg:h-[full] bg-black flex justify-evenly items-center shadow-xl shadow-white ">
        <div className="bg-zinc-800 w-[90px] flex justify-center">
          <MySVG className="lg:w-[60px]  lg:h-[100px]" />
        </div>
        <div className=" bg-zinc-800 w-[90px] flex justify-center" >
          <MySVG1 className="lg:w-[60px]  lg:h-[100px] " />
        </div>
        <div className="bg-zinc-800 w-[90px] flex justify-center">
          <MySVG2 className="lg:w-[60px]  lg:h-[100px]" />
        </div>
        <div className="bg-zinc-800 w-[90px] flex justify-center">
          <MySVG3 className="lg:w-[60px]  lg:h-[100px]" />
        </div>
        <div className="bg-zinc-800 w-[90px] flex justify-center">
          <MySVG4 className="lg:w-[60px]  lg:h-[100px]" />
        </div>
      </div>
      <div className="w-[10%] h-[full] flex-col">
        <div className="h-[50%] bg-black"></div>
        <div className="h-[50%] bg-zinc-900"></div>
      </div>
    </div>
  );
}
