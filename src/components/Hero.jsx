import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="text-[#DAD7CD]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#588157] font-bold p-2">
          FULLSTACK SOFTWARE ENGINEER
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Oliver Taylor
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Code on Brother!
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Javascript", "ReactJS", "TailwindCSS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Learning to code through building projects.
        </p>
        <button className="bg-[#588157] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#283C32]">
          Get Started
        </button>
      </div>
    </div>
  );
};
