import React from "react";
import { useEffect } from "react";
import contactbanner from "./Images/Contact/contactbanner.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import farm1 from "./Images/Contact/farm1.jpg";
import farm2 from "./Images/Contact/farm2.jpg";
import showroom from "./Images/Contact/showroom.jpg";
import showroom2 from "./Images/Contact/showroom2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const bgStyle = {
    backgroundImage: `url(${contactbanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  };

  const cards = [
    {
      id: 1,
      logo: <MdEmail />,
      title: "Email",
      detail: "plantsellers@gmail.com",
      delay: "100",
    },
    {
      id: 2,
      logo: <FaPhone />,
      title: "Phone",
      detail: "+1 023 465 7821",
      delay: "200",
    },
    {
      id: 3,
      logo: <FaAddressBook />,
      title: "Address",
      detail: "Texas, USA",
      delay: "300",
    },
  ];
  const socials = [
    {
      id: 1,
      logo: <FaInstagramSquare />,
      detail: "potted_plants",
      delay: "100",
    },
    {
      id: 2,
      logo: <FaSquareXTwitter />,
      detail: "@pottedPlants",
      delay: "200",
    },
    {
      id: 3,
      logo: <FaFacebook />,
      detail: "Potted plants",
      delay: "300",
    },
  ];
  return (
    <div className="mt-[10vh]">
      <div className="w-full h-[20vh]" style={bgStyle} data-aos="fade-down">
        <div className="w-full h-full flex justify-center items-center bg-black/40">
          <h2 className="text-5xl text-white" data-aos="fade-down" data-aos-delay="200">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="container">
        <div>
          <h3 className="py-4" data-aos="fade-right">
            Reach out to us today
          </h3>
          <p className="py-4" data-aos="fade-up" data-aos-delay="100">
            Have questions or need help choosing the perfect plant? Reach out to us today—we’re happy to assist you with expert advice, order inquiries, or plant care tips.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:w-[80%] mx-auto">
            {cards.map((data) => (
              <div key={data.id} className="flex gap-8 sm:gap-4 py-4 px-8 sm:p-4 sm:bg-[#333] rounded-[10px] sm:text-secondary shadow-xl sm:shadow-none mx-auto sm:mx-0" data-aos="fade-left" data-aos-delay={data.delay}>
                <div className="flex items-center text-3xl">{data.logo}</div>
                <div className="flex flex-col ">
                  <div>{data.title}</div>
                  <div>{data.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <h3 className="py-4" data-aos="fade-right">
            Follow our socials
          </h3>
          <p className="py-4" data-aos="fade-up" data-aos-delay="100">
            Stay connected with us on social media for the latest plant care tips, new arrivals, and exclusive offers. Follow us today and join our growing community of plant lovers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:w-[80%] mx-auto">
            {socials.map((data) => (
              <div key={data.id} className="flex gap-8 sm:gap-4 py-4 px-8 sm:p-4 sm:bg-[#333] rounded-[10px] sm:text-secondary shadow-xl sm:shadow-none mx-auto sm:mx-0" data-aos="fade-left" data-aos-delay={data.delay}>
                <div className=" text-3xl">{data.logo}</div>
                <div>{data.detail}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="border-2 border-thick rounded-t-xl p-8" data-aos="fade-right">
            <h3 data-aos="fade-right" data-aos-delay="100">
              Visit our showroom
            </h3>
            <p className="py-4" data-aos="fade-up" data-aos-delay="200">
              Step into our showroom and explore a beautiful collection of lush, vibrant potted plants in person. Whether you're looking for the perfect plant to take home or just want some inspiration, our friendly team is ready to assist you. See
              the quality and care that go into every plant we grow, and get expert advice on how to care for them. Visit us today and bring home a piece of nature!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
              <div className="flex flex-col items-center justify-center">
                <img src={showroom} alt="" className="max-w-[80%] max-h-[400px] rounded-xl shadow-lg shadow-thick" data-aos="zoom-in" />
              </div>
              <div className="flex flex-col items-center">
                <img src={showroom2} alt="" className="max-w-[80%] max-h-[400px] rounded-xl shadow-lg shadow-thick" data-aos="zoom-in" data-aos-delay="200" />
              </div>
            </div>
          </div>
          <div className="border-2 border-thick p-8 rounded-b-xl" data-aos="fade-left">
            <h3 data-aos="fade-right" data-aos-delay="100">
              Visit our farm
            </h3>
            <p className="py-4" data-aos="fade-up" data-aos-delay="200">
              Experience the beauty of nature firsthand by visiting our farm, where we carefully grow and nurture each plant with love and expertise. Take a tour to see how our plants are cultivated from seedlings to the vibrant greenery that
              brightens homes and offices. Our team is happy to share insights on plant care and sustainability, making your visit both enjoyable and educational. Come explore our farm and take home a fresh, healthy plant straight from the source!
              <span className="block">Green Haven Farm 1725 Meadowbrook Lane Springfield, IL 62702</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 md:gap-0">
              <div className="flex flex-col items-center">
                <img src={farm1} alt="" className="max-w-[80%] max-h-[350px] rounded-xl shadow-lg shadow-thick" data-aos="zoom-in" />
              </div>
              <div className="flex flex-col items-center">
                <img src={farm2} alt="" className="max-w-[80%] max-h-[350px] rounded-xl shadow-lg shadow-thick" data-aos="zoom-in" data-aos-delay="200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
