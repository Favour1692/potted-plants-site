import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import Banner from "./Images/Products/Banner.jpg";
import Prod1 from "../Components/Prod1";
import Prod2 from "../Components/Prod2";
import Prod3 from "../Components/Prod3";
import Prod4 from "../Components/Prod4";
import Prod5 from "../Components/Prod5";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [click, setClick] = useState("indoor");
  const handleClick = () => {
    switch (click) {
      case "outdoor":
        return <Prod2 />;
      case "air":
        return <Prod3 />;
      case "hanging":
        return <Prod4 />;
      case "gift":
        return <Prod5 />;
      default:
        return <Prod1 />;
    }
  };

  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };

  const bgStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
  };

  return (
    <div className="mt-[10vh]">
      <div className="w-full h-[20vh]" style={bgStyle} data-aos="fade-down">
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center bg-black/50">
          <h2 className="text-5xl text-white" data-aos="fade-down" data-aos-delay="200">
            Products
          </h2>
        </div>
      </div>
      <div className="container">
        <p className="py-2" data-aos="fade-down" data-aos-delay="200">
          We provide a variety of plants for different purposes and settings, including indoor, outdoor, air purifying plants and plant gifts. Our plants are grown naturally and with love.
        </p>
        <div className="bg-[#272319] py-8 px-4 my-4 rounded-2xl text-secondary">
          <div>
            <h3 className="text-4xl text-white font-semibold font-subheadings" data-aos="fade-right">
              Explore our Collections
            </h3>
            <h3 className="font-subheadings text-white text-2xl">
              Select a category: <span className="md:hidden">{display ? <RiArrowDropUpLine onClick={handleDisplay} className="text-2xl" /> : <RiArrowDropDownLine onClick={handleDisplay} className="text-2xl" />} </span>
            </h3>
          </div>
          <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-12 items-center w-fit mx-auto font-2xl">
            <button onClick={() => setClick("indoor")}>Indoor Plants</button>
            <button onClick={() => setClick("outdoor")}>Outdoor Plants</button>
            <button onClick={() => setClick("air")}>Air purifying</button>
            <button onClick={() => setClick("hanging")}>Hanging Plants</button>
            <button onClick={() => setClick("gift")}>Gift Plants</button>
          </div>
          {display && (
            <div className="md:hidden flex flex-col gap-4 items-center w-fit mx-auto font-2xl">
              <button
                onClick={() => {
                  setClick("indoor");
                  handleDisplay();
                }}>
                Indoor Plants
              </button>
              <button
                onClick={() => {
                  setClick("outdoor");
                  handleDisplay();
                }}>
                Outdoor Plants
              </button>
              <button
                onClick={() => {
                  setClick("air");
                  handleDisplay();
                }}>
                Air purifying
              </button>
              <button
                onClick={() => {
                  setClick("hanging");
                  handleDisplay();
                }}>
                Hanging Plants
              </button>
              <button
                onClick={() => {
                  setClick("gift");
                  handleDisplay();
                }}>
                Gift Plants
              </button>
            </div>
          )}
          <div>{handleClick()}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
