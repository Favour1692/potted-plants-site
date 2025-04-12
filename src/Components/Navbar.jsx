import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

function Navbar() {
  const Menu = [
    {
      id: 1,
      link: "/",
      title: "Home",
    },
    {
      id: 2,
      link: "/about",
      title: "About",
    },
    {
      id: 3,
      link: "/products",
      title: "Products",
    },
    {
      id: 4,
      link: "/contact",
      title: "Contact",
    },
    {
      id: 5,
      link: "/gallery",
      title: "Gallery",
    },
  ];

  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 50 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // className={color ? "header bg" : "header"} on the navbar

  return (
    <nav className={color ? "bg-thick shadow-lg" : "bg-transparent shadow-none"}>
      <div className="container flex justify-between items-center font-text">
        <div className="text-xl text-primary font-semibold font-headings">Potted plants</div>
        <div className="hidden md:flex gap-6 font-semibold text-lg">
          {Menu.map((data) => (
            <NavLink to={data.link} key={data.id} className={({ isActive }) => (isActive ? "text-primary shadow-[0_3px_0_#7c8363]" : "text-black shadow-none")}>
              {data.title}
            </NavLink>
          ))}
        </div>
        <Link to="/products">
          <button className="hidden md:block text-lg py-1 px-3 rounded-2xl bg-secondary hover:bg-primary hover:text-secondary duration-100 border-2">Place an order</button>
        </Link>
        {open ? <IoClose onClick={handleClick} className="text-xl md:hidden z-50" /> : <IoMenu onClick={handleClick} className="text-xl md:hidden z-50" />}

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.3,
              }}
              className="md:hidden absolute top-0 left-0 w-full h-[100vh] bg-[#333]/10 backdrop-blur-sm ">
              <div className="w-[60%] h-full flex flex-col gap-6 py-16 bg-[#333] items-center">
                {Menu.map((data) => (
                  <NavLink to={data.link} key={data.id} onClick={handleClick} className={({ isActive }) => (isActive ? "text-primary shadow-[0_3px_0_#7c8363]" : "text-[#ffefd5] shadow-none")}>
                    {data.title}
                  </NavLink>
                ))}
                <Link to="/products">
                  <button className="md:hidden text-lg py-1 px-3 rounded-2xl bg-secondary hover:bg-primary hover:text-secondary duration-100 border-2" onClick={handleClick}>
                    Place an order
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
