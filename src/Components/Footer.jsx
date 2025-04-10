import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-thick text-secondary py-4">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div>Potted Plants</div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <a href="" className="active:text-black md:hover:text-black">
            About
          </a>
          <a href="" className="active:text-black md:hover:text-black">
            Products
          </a>
          <a href="" className="active:text-black md:hover:text-black">
            Contact
          </a>
          <a href="" className="active:text-black md:hover:text-black">
            New Arrivals
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Popular</h4>
          <a href="" className="active:text-black md:hover:text-black">
            Indoor plants
          </a>
          <a href="" className="active:text-black md:hover:text-black">
            Outdoor plants
          </a>
          <a href="" className="active:text-black md:hover:text-black">
            Plant gifts
          </a>
          <a href="" className="active:text-black md:hover:text-black">
            Custom plants
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Contact us</h4>
          <a href="" className="active:text-black md:hover:text-black">
            plantsellers@gmail.com
          </a>
          <p>
            Visit our showroom: <br /> plantsAVe, Texas city, USA
          </p>
          <div className="flex flex-col gap-2">
            <p>Follow our socials:</p>
            <div className="flex gap-x-6 text-xl text-white">
              <FaFacebook className="hover:text-black/90" />
              <FaInstagramSquare className="hover:text-black/90" />
              <FaSquareXTwitter className="hover:text-black/90" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
