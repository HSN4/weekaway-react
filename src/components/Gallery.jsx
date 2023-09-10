import React from "react";
import hero from "../assets/hero.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16 ">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover " src={hero} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover " src={hero} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover " src={hero} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover " src={hero} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover " src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
