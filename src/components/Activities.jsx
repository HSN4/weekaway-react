import React from "react";
import ImgActivities from "./ImgActivities";
import c from "../assets/c.jpg";
import b from "../assets/b.jpg";
import e from "../assets/e.jpg";
const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px] ">
      <ImgActivities name="Bora Bora" im={c} />
      <ImgActivities name="Palawan" im={b} />
      <ImgActivities name="Crete" im={e} />
    </div>
  );
};
export default Activities;
