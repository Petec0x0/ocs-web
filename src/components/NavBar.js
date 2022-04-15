const NavBar = () => {
  return (
    <header className="flex justify-between py-10">
      <div className="">
        <h1 className="text-xl font-extrabold uppercase">
          Oriental Cybersecurity
        </h1>
      </div>
      <nav className="hidden py-2 px-4 font-bold text-gray-500 md:block">
        <ul className="flex space-x-5">
          <li>Home</li>
          <li>About</li>
          <li>Success Storie</li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <button className="rounded-full bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
          APPLY NOW
        </button>
      </div>
    </header>
  );
};

export default NavBar;