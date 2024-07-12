import React from "react";
import Laptop from "../assets/laptop.jpg";

export const Feature = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#16a34a] font-bold'>FEATURED PROJECT</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Portfolio Website One Frontend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            beatae similique aperiam reiciendis deleniti temporibus dolor sed
            minus repellendus quae delectus, et nam doloremque eligendi aut
            necessitatibus quibusdam! Eveniet, molestiae.
          </p>
          <button className="text-[#16a34a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Read More</button>
        </div>
      </div>
    </div>
  );
};

