import React from "react";
import Laptop from "../assets/laptop.jpg";

const Feature = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" />
        <div>
          <p>FEATURED PROJECT</p>
          <h1>Portfolio Website One Frontend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            beatae similique aperiam reiciendis deleniti temporibus dolor sed
            minus repellendus quae delectus, et nam doloremque eligendi aut
            necessitatibus quibusdam! Eveniet, molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
