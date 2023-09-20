"use client";

import Image from "next/image";
import aboutMe from "../../assets/aboutMe.svg";
import react from "../../assets/skill-icons_react-dark.svg";
import node from "../../assets/Group 13.svg";
import python from "../../assets/devicon_python.svg";
import figma from "../../assets/logos_figma.svg";
import { Background_2 } from "../background/feed_2";

interface Props {
  isDarkMode: boolean | undefined;
}

export function Body_2({ isDarkMode }: Props) {
  return (
    <div>
      <div className="flex justify-between mt-60 min-[1600px]:mr-[20rem] min-[1080px]:mr-[10rem] items-center" id="feed2">
        <div className="flex justify-between ml-28 min-[1600px]:mt-20 min-[1080px]:mt-0 leading-none">
          <div className="flex-col gap-10">
            <h1 className={`${isDarkMode?"text-violet-800":"text-BlueH"} min-[1600px]:text-[5rem] font-lSpartan font-lg h-min min-[1080px]:text-[3rem]`}>
              Aboute Me
            </h1>
            <p className={`${isDarkMode?"text-white": "text-BlueH"} text-[1.25rem] font-lSpartan font-[500] h-min w-[40rem] mt-8`}>
              Hello! I&apos;m an Electrical Engineering student with a lifelong
              passion for programming, a passion that began in high school and
              evolved into a promising career. My current specialization is in
              software development, and my favorite terrain is the JavaScript
              environment. With solid experience in React and Node.js, I have
              worked on creating innovative and functional web applications.
              This intersection between electrical engineering and programming
              offers exciting opportunities for innovation, and I look forward
              to continuing to explore the boundaries of this incredible
              interconnection. If you share this enthusiasm or want to exchange
              ideas, I&apos;m always open to connections and new learning adventures
              in this ever-evolving world.
            </p>
          </div>
        </div>
        <Image
          src={aboutMe}
          alt="Picture of the author"
          className="mt-0 w-[20rem]"
        />
      </div>
      <div className={`${isDarkMode?"text-violet-400":"text-BlueH"}  w-[99vw] flex justify-center font-lSpartan text-[2rem] mt-14`}>
        Tecnologias que Utilizo
      </div>
      <div className="flex w-[99vw] justify-center">
        <div className="flex items-center w-11/12 h-auto justify-center gap-40 bg-green-500 bg-opacity-20 backdrop-blur-2xl rounded text-white p-6  mt-10">
          <Image
            src={react}
            alt="Instagram Logo"
            className="w-24 transition-all duration-300 hover:scale-125"
          />
          <Image
            src={node}
            alt="Instagram Logo"
            className="w-24 transition-all duration-300 hover:scale-125"
          />
          <Image
            src={python}
            alt="Instagram Logo"
            className="w-24 transition-all duration-300 hover:scale-125"
          />
          <Image
            src={figma}
            alt="Instagram Logo"
            className="w-16 transition-all duration-300 hover:scale-125"
          />
        </div>
      </div>
      <Background_2 />
    </div>
  );
}
