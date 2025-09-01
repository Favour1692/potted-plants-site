import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProdCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div
      className="md:mx-auto px-4 pt-8 pb-4 bg-[#e4e3e3] rounded-3xl flex flex-col gap-4 justify-center items-center"
      data-aos="flip-down"
      data-aos-delay="100"
    >
      <div className="flex justify-center">
        <img
          src={props.img}
          alt=""
          className="w-[200px] h-[200px] rounded-tl-[40px] rounded-br-[40px]"
        />
      </div>
      <div className="text-thick text-lg font-semibold">{props.children}</div>
    </div>
  );
};

export default ProdCard;
