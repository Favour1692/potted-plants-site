import React from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-thick text-secondary py-4">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        <div className="flex flex-col gap-4">
          <p className="text-xl text-primary font-semibold font-headings">
            Potted plants
          </p>
          <p>
            We offer beautiful, high-quality potted plants at affordable prices.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <Link
            to="/about"
            className="active:text-primary md:hover:text-primary"
          >
            About
          </Link>
          <Link
            to="/products"
            className="active:text-primary md:hover:text-primary"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="active:text-primary md:hover:text-primary"
          >
            Contact
          </Link>
          <Link
            to="/gallery"
            className="active:text-primary md:hover:text-primary"
          >
            Gallery
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Popular</h4>
          <Link
            to="/products"
            className="active:text-primary md:hover:text-primary"
          >
            Indoor plants
          </Link>
          <Link
            to="/products"
            className="active:text-primary md:hover:text-primary"
          >
            Outdoor plants
          </Link>
          <Link
            to="/products"
            className="active:text-primary md:hover:text-primary"
          >
            Plant gifts
          </Link>
          <Link
            to="/products"
            className="active:text-primary md:hover:text-primary"
          >
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
              <FaFacebook className="hover:text-primary" />
              <FaInstagramSquare className="hover:text-primary" />
              <FaSquareXTwitter className="hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
