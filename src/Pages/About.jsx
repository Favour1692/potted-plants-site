import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import aboutImg from "./Images/About/aboutImg.jpg";
import ourstory from "./Images/About/ourstory.jpg";
import ourstory2 from "./Images/About/ourstory2.jpg";
import ourtarget from "./Images/About/ourtarget.jpg";
import expert1 from "./Images/About/expert1.jpg";
import expert2 from "./Images/About/expert2.jpg";
import expert3 from "./Images/About/expert3.jpg";
import expert4 from "./Images/About/expert4.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const bgStyle = {
    backgroundImage: `url(${aboutImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="mt-[10vh] text-black">
        <div className="w-full h-[20vh]" style={bgStyle} data-aos="fade-down">
          <div className="w-full h-full bg-black/50 flex justify-center items-center">
            <h2 className="text-5xl text-white" data-aos="fade-down" data-aos-delay="200">
              About Us
            </h2>
          </div>
        </div>
        <div className="container">
          {/* our story */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:text-left py-8 gap-4">
            <div className="flex flex-col gap-5 justify-center">
              <h3 className="text-center md:text-left" data-aos="fade-right">
                Our Story
              </h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Our journey began with a simple love for greenery and a passion for bringing nature into everyday spaces. With our own farm, we carefully grow and nurture each plant to ensure the highest quality and freshness. We believe that
                everyone deserves the joy of beautiful, thriving plants, so we set out to make them accessible, affordable, and easy to care for. Today, we take pride in helping homes and offices come to life with vibrant greenery, delivering
                happiness one plant at a time!
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full pr-4">
                <img src={ourstory} alt="" className="max-w-[60%] h-[300px] rounded-2xl" data-aos="zoom-in-left" />
                <img src={ourstory2} alt="" className="max-w-[70%] md:hidden lg:block h-[300px] rounded-2xl" data-aos="zoom-in-left" data-aos-delay="100" />
              </div>
            </div>
          </div>
          {/* our target */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-4">
            <div className="order-2 md:order-1 flex justify-center">
              <img src={ourtarget} alt="" className="max-w-[80%] rounded-2xl" data-aos="zoom-in-right" />
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-5 justify-center">
              <h3 className="text-center md:text-left" data-aos="fade-left">
                Our Target
              </h3>
              <p data-aos="fade-up" data-aos-delay="100">
                Our goal is to make it easy for everyone to enjoy the beauty and benefits of potted plants, whether at home, in the office, or any indoor space. We cater to both plant lovers and beginners, offering a variety of easy-to-care-for,
                high-quality plants at affordable prices. With our own farm, we ensure that every plant is nurtured with care before reaching your doorstep. By providing swift delivery and excellent customer support, we ensure a seamless experience
                from selection to care, helping our customers bring nature closer to their lives.
              </p>
            </div>
          </div>
          {/* success story */}
          <div>
            <h3 data-aos="fade-right">Our proven success</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:max-w-[80%] w-full md:mx-auto gap-4">
              <div className="flex flex-col md:items-center">
                <h3 className="font-subheadings tracking-wider">Happy customers</h3>
                <div className="text-xl md:text-2xl text-brown text-center md:text-left">
                  <CountUp end={500} duration={5} enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} />+
                </div>
              </div>
              <div className="flex flex-col md:items-center">
                <h3 className="font-subheadings tracking-wider">Plants delivered</h3>
                <div className="text-xl md:text-2xl text-brown text-center md:text-left">
                  <CountUp end={1000} duration={5} enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} />+
                </div>
              </div>
              <div className="flex flex-col md:items-center">
                <h3 className="font-subheadings tracking-wider">Plant varieties</h3>
                <div className="text-xl md:text-2xl text-brown text-center md:text-left">
                  <CountUp end={200} duration={5} enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} />+
                </div>
              </div>
              <div className="flex flex-col md:items-center">
                <h3 className="font-subheadings tracking-wider">Repeat Customers</h3>
                <div className="text-xl md:text-2xl text-brown text-center md:text-left">
                  <CountUp end={300} duration={5} enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} />+
                </div>
              </div>
            </div>
          </div>
          {/* Experts */}
          <div className="py-4 md:py-12">
            <h3 data-aos="fade-right">Meet our experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
              <div className="flex flex-col items-center max-w-[100%] overflow-hidden mx-auto relative" data-aos="flip-down">
                <img src={expert1} alt="" className="max-w-[500px]" />
                <p className="absolute bottom-5 text-center bg-[#333]/40 text-white p-[5px]">Luke Harrison</p>
              </div>
              <div className="flex flex-col items-center max-w-[100%] overflow-hidden mx-auto relative" data-aos="flip-down" data-aos-delay="100">
                <img src={expert2} alt="" className="max-w-[500px]" />
                <p className="absolute bottom-5 text-center bg-[#333]/40 text-white p-[5px]">Olivia Bennett</p>
              </div>
              <div className="flex flex-col items-center max-w-[100%] overflow-hidden mx-auto relative" data-aos="flip-down" data-aos-delay="200">
                <img src={expert3} alt="" className="max-w-[500px]" />
                <p className="absolute bottom-5 text-center bg-[#333]/40 text-white p-[5px]">Sophia Mitchell</p>
              </div>
              <div className="flex flex-col items-center max-w-[100%] overflow-hidden mx-auto relative" data-aos="flip-down" data-aos-delay="300">
                <img src={expert4} alt="" className="max-w-[500px]" />
                <p className="absolute bottom-5 text-center bg-[#333]/40 text-white p-[5px]">Emily Carter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
