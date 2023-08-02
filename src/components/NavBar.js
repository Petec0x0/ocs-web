import React, { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="flex justify-between py-10">
        <div className="">
          <a href="/#">
            <h1 className="text-sm font-extrabold uppercase lg:text-lg">
              ORIENTAL CYBERSECURITY TRAINING PROGRAMME 
            </h1>
          </a>
        </div>
        <nav className="hidden py-2 px-4 font-bold text-gray-500 md:block">
          <ul className="flex space-x-5">
            <li className="hover:text-gray-900">
              <a href="/#">Home</a>
            </li>
            <li className="hover:text-gray-900">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-gray-900">
              <a href="/#testimonials">Success Stories</a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <a href="/#register">
            <button className="rounded-full bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
              APPLY NOW
            </button>
          </a>
        </div>
        {/* <!-- Hamburger Icon --> */}
        <button
          id="menu-btn"
          className={`${isClicked ? "open" : ""
            } block hamburger md:hidden focus:outline-none mt-2`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </header>
      {/* <!-- Mobile Menu --> */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute ${isClicked ? "flex" : "hidden"
            } flex-col items-center self-end py-8 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="/#">Home</a>
          <a href="/about">About</a>
          <a href="/#testimonials">Success Stories</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
