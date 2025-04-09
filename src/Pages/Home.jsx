import React from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import Card from "../Components/Card";
import Testimonials from "../Components/Testimonials";
import landing from "./Images/Home/landing.jpg";
import banner2 from "./Images/Home/banner2.jpg";
import banner4 from "./Images/Home/banner4.jpg";
import banner3 from "./Images/Home/banner3.jpg";
import { PiPottedPlant } from "react-icons/pi";
import { IoPricetagOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import banner from "./Images/Home/banner.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const bgStyle = {
    backgroundImage: `url(${landing})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };
  const decorate = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };
  const circleImg = {
    backgroundImage: `url(${banner2})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };
  const circleImg2 = {
    backgroundImage: `url(${banner4})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };

  const data = [
    {
      id: 1,
      logo: <PiPottedPlant />,
      title: "Healthy plants",
      text: "Our potted plants are carefully nurtured to ensure they are vibrant, healthy, and ready to thrive in your space",
      delay: "50",
    },
    {
      id: 2,
      logo: <IoPricetagOutline />,
      title: "Affordable prices",
      text: "We offer beautiful, high-quality potted plants at affordable prices, making it easy for everyone to enjoy the beauty of nature",
      delay: "100",
    },
    {
      id: 3,
      logo: <CiDeliveryTruck />,
      title: "Swift delivery",
      text: "We provide swift and reliable delivery, ensuring your potted plants arrive fresh and ready to thrive",
      delay: "200",
    },
    {
      id: 4,
      logo: <RiCustomerServiceLine />,
      title: "Great customer service",
      text: "Our friendly customer service team is always ready to assist you with any questions or plant care tips",
      delay: "300",
    },
  ];

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="container pt-[15vh] bg-secondary">
          {/* banner1 */}
          <div className="w-full h-[70vh]" style={bgStyle} data-aos="fade-down">
            <div className="w-full h-full bg-black/40 flex flex-col justify-center items-center gap-4 text-[#d4f1e9]">
              <h1 className="text-5xl xl:text-6xl font-semibold tracking-tight text-center text-secondary" data-aos="fade-up" data-aos-delay="100">
                Beautiful Nature and Lush Greenery
              </h1>
              <p className="text-center text-lg md:text-xl font-semibold" data-aos="fade-up" data-aos-delay="200">
                Explore our diverse collection of indoor and outdoor potted plants designed to enhance any environment
              </p>
              <Link to="/products">
                <button className="uppercase mt-4 px-3 py-2 bg-[#d4f1e9] text-thick hover:bg-primary hover:text-[#d4f1e9] font-semibold text-lg rounded-md" data-aos="flip-up" data-aos-delay="300">
                  Shop all
                </button>
              </Link>
            </div>
          </div>

          {/* banner3 */}
          <Card />

          {/* banner2 */}
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 py-4 px-8 bg-secondary gap-8 md:gap-4">
            {/* text content */}
            <div className="flex flex-col justify-center gap-4 text-center md:text-start relative text-black px-8" data-aos="fade-right">
              <h1 className="z-10 font-semibold" data-aos="fade-up" data-aos-delay="200">
                Breathe Life into Your Space With our Plants
              </h1>
              <p className="z-10 text-brown my-4" data-aos="fade-up" data-aos-delay="200">
                Transform your space with lush, vibrant greenery! Our carefully selected potted plants add life, freshness, and a touch of nature to any home or office. Not only do they enhance your décor, but they also purify the air and boost your
                mood. Whether you're a seasoned plant lover or a beginner, we have the perfect plant for you. Start growing your indoor oasis today!
              </p>
              <div className="text-left">
                <Link to="/about">
                  <button className="bg-thick text-white py-2 px-3 rounded-xl mx-auto hover:bg-primary/90" data-aos="fade-right" data-aos-delay="200">
                    Learn more about us
                  </button>
                </Link>
              </div>
              <div className="flex w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-full overflow-hidden absolute bottom-4 right-4" style={circleImg}>
                <div className="w-full h-full bg-[#333]/40"></div>
              </div>
              <div className="flex w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] xl:w-[200px] xl:h-[200px] rounded-full overflow-hidden absolute top-4 left-4" style={circleImg2}>
                <div className="w-full h-full bg-[#333]/40"></div>
              </div>
            </div>
            {/* image */}
            <div className="flex flex-col justify-center items-center pt-4 md:py-0" data-aos="zoom-in-left">
              <img src={banner3} alt="" className="w-[80%] rounded-xl" />
            </div>
          </div>

          {/* banner4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-4 py-8 px-4" data-aos="fade-left">
            {data.map((data) => (
              <div key={data.id} className="flex flex-col items-center justify-center gap-2 bg-white shadow-[3px_3px_5px_#333] md:shadow-none md:hover:shadow-[3px_3px_5px_#333] p-6 rounded-xl" data-aos="fade-left" data-aos-delay={data.delay}>
                <div className="flex justify-center items-center gap-8">
                  <div className="text-[3rem] font-bold text-thick">{data.logo}</div>
                  <span className="text-lg">{data.title}</span>
                </div>
                <p className="" data-aos="fade-up">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
          {/* banner5 */}
          <div className="relative h-[70vh] w-full py-4" style={decorate} data-aos="zoom-in">
            <p className="absolute bottom-16 right-6" data-aos="fade-up" data-aos-delay="200">
              Style your spaces and decorate your home and office with beautiful potted plants
              <span className="block text-center">
                <Link to="/gallery">
                  <button className="bg-thick text-white py-2 px-3 rounded-xl hover:bg-primary/90" data-aos="fade-left" data-aos-delay="200">
                    View our gallery
                  </button>
                </Link>
              </span>
            </p>
            <p className="absolute top-10 right-10 w-[20%]" data-aos="fade-up" data-aos-delay="200">
              Potted plants bring warmth, freshness, and a natural touch to any space, making it more inviting and visually appealing.
            </p>
          </div>

          {/* testimonials */}
          <Testimonials />

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 py-8" data-aos="fade-right">
            <div className="flex flex-col justify-center items-start xl:items-center mx-8">
              <div className="flex-col gap-8 justify-center items-center text-xl text-thick tracking-wider" data-aos="fade-up">
                <div className="flex flex-col gap-2">
                  <p>
                    Contact us via email at:
                    <a href="#" data-aos="fade-up" data-aos-delay="200">
                      plantsellers@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
                    Follow our socials:
                  </p>
                  <div className="flex gap-6 text-3xl text-thick" data-aos="fade-up" data-aos-delay="200">
                    <FaFacebook className="hover:text-thick/90" />
                    <FaInstagramSquare className="hover:text-thick/90" />
                    <FaSquareXTwitter className="hover:text-thick/90" />
                  </div>
                </div>
              </div>
              <div className="text-start my-4">
                <Link to="/contact">
                  <button className="bg-thick text-white py-1 px-2 rounded-xl hover:bg-primary/90" data-aos="fade-right" data-aos-delay="200">
                    Visit us
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 pt-4" data-aos="fade-left">
              <p className="text-lg text-thick font-semibold" data-aos="fade-up" data-aos-delay="200">
                Fill the form below to contact us
              </p>
              <form action="#" className="w-full mx-8 p-4">
                <div className="w-full flex gap-4 mb-4">
                  <input type="text" placeholder="First Name" name="firstName" required autoComplete="on" className="p-2 border-1 border-gray-300 focus:border-primary text-thick w-1/2" data-aos="fade-left" />
                  <input type="text" placeholder="Last Name" name="lastName" required autoComplete="on" className="p-2 border-1 border-gray-300 focus:border-primary text-thick w-1/2" data-aos="fade-left" data-aos-delay="100" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="email" name="email" required autoComplete="on" className="p-2 border-1 border-gray-300 focus:border-primary text-thick w-full" data-aos="fade-left" data-aos-delay="200" />
                </div>
                <div>
                  <textarea name="remark" placeholder="request or query" required className="w-full" data-aos="fade-left" data-aos-delay="300"></textarea>
                </div>
                <div>
                  <button className="w-full bg-primary text-secondary p-2 mt-4 hover:bg-thick" data-aos="fade-left" data-aos-delay="400">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
