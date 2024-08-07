import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#16a34a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Github</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'> 
        {!nav ? (
          <AiOutlineCloseCircle size="30" />
        ) : (
          <AiOutlineMenu size="30" />
        )}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#283C32] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#16a34a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-[#283C32]-600">Contact</li>
          <li className="p-4">Github</li>
        </ul>
      </div>
    </div>
  );
};

