import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import gallery1 from "./Images/Gallery/gallery1.webp";
import gallery2 from "./Images/Gallery/gallery2.webp";
import gallery3 from "./Images/Gallery/gallery3.webp";
import gallery4 from "./Images/Gallery/gallery4.webp";
import gallery5 from "./Images/Gallery/gallery5.webp";
import gallery6 from "./Images/Gallery/gallery6.webp";
import gallery7 from "./Images/Gallery/gallery7.webp";
import gallery8 from "./Images/Gallery/gallery8.webp";
import gallery9 from "./Images/Gallery/gallery9.webp";
import gallery10 from "./Images/Gallery/gallery10.webp";
import gallery11 from "./Images/Gallery/gallery11.webp";
import gallery12 from "./Images/Gallery/gallery12.webp";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-[10vh]">
      <div className="container">
        <p className="text-center py-4" data-aos="fade-down">
          Explore our gallery and see how potted plants can bring life, warmth,
          and freshness to any space. From cozy homes to stylish offices, our
          plants add a natural touch that enhances every environment. Get
          inspired by these beautiful arrangements and imagine the possibilities
          for your own space!
        </p>
        <div
          className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-12 pt-4"
          data-aos="fade-left"
        >
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery1} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery2} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery3} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery4} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery5} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery6} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery7} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery8} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <img src={gallery9} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
          >
            <img src={gallery10} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
          >
            <img src={gallery11} alt="" className="max-w-[500px] h-[300px] " />
          </div>
          <div
            className="flex flex-col items-center w-full overflow-hidden shadow-md shadow-thick py-4"
            data-aos="flip-up"
          >
            <img src={gallery12} alt="" className="max-w-[500px] h-[300px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
