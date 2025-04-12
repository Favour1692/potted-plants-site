import React from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-thick text-secondary py-4">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
        <div>Potted Plants</div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <Link to="/about" className="active:text-black md:hover:text-black">
            About
          </Link>
          <Link to="/products" className="active:text-black md:hover:text-black">
            Products
          </Link>
          <Link to="/contact" className="active:text-black md:hover:text-black">
            Contact
          </Link>
          <Link to="/gallery" className="active:text-black md:hover:text-black">
            Gallery
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Popular</h4>
          <Link to="/products" className="active:text-black md:hover:text-black">
            Indoor plants
          </Link>
          <Link to="/products" className="active:text-black md:hover:text-black">
            Outdoor plants
          </Link>
          <Link to="/products" className="active:text-black md:hover:text-black">
            Plant gifts
          </Link>
          <Link to="/products" className="active:text-black md:hover:text-black">
            Hanging plants
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Contact us</h4>
          <p>plantsellers@gmail.com</p>
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
