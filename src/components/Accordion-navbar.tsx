"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

function AccordionNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onBtClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        id="accordion-navbar"
        className="lg:hidden fixed px-10 py-4 bg-white rounded-xl mt-4 w-[90vw] shadow-xl flex justify-between items-center align-middle"
      >
        <div id="navbar-logo" className="">
          <img src="/assets/logo.png" alt="logo" className="w-30" />
        </div>

        <div className="">
          <button type="button" className="cursor-pointer" onClick={onBtClick}>
            <Menu size={30}></Menu>
          </button>
        </div>
      </nav>

      {/* Conditional Action if Press Button => true */}
      {isOpen && (
        <div id="list-accordion" className="fixed bg-white mt-24 w-[90vw] rounded-xl shadow-xl  px-10 py-4 opacity-98 lg:hidden">
          <ul className="flex flex-col items-center gap-5 text-lg">
            <li className="select-none">
              <a href="#home">Home</a>
            </li>
            <li className="select-none">
              <a href="#expertise">Expertise</a>
            </li>
            <li className="select-none">
              <a href="#about-me">About</a>
            </li>
            <li className="select-none">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="select-none">
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default AccordionNavbar;
