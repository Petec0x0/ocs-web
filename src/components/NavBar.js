import React, { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="flex justify-between py-10">
        <div className="">
          <h1 className="text-lg font-extrabold uppercase md:text-xl">
            Oriental Cybersecurity
          </h1>
        </div>
        <nav className="hidden py-2 px-4 font-bold text-gray-500 md:block">
          <ul className="flex space-x-5">
            <li>Home</li>
            <li>About</li>
            <li>Success Stories</li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <button className="rounded-full bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
            APPLY NOW
          </button>
        </div>
        {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            className={`${(isClicked) ? 'open':''} block hamburger md:hidden focus:outline-none mt-2`}
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
          className={`absolute ${(isClicked) ? 'flex':'hidden'} flex-col items-center self-end py-8 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Success Stories</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;