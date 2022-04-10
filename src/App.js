import React from 'react';
import hero_illustration from 'images/hero-illustration.svg';

function App() {
  return (
    <>
      <div className="px-8 md:px-24">
        <header className="flex justify-between py-10">
          <div className="">
            <h1 className="text-xl font-extrabold uppercase">
              Oriental Cyber Security
            </h1>
          </div>
          <nav className="hidden py-2 px-4 font-bold text-gray-500 md:block">
            <ul className="flex space-x-5">
              <li>Home</li>
              <li>Success Storie</li>
              <li>FAQ</li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <button className="rounded-full bg-primary text-white px-7 py-3 font-bold text-xs">
              APPLY NOW
            </button>
          </div>
        </header>

        {/* Hero Section Starts*/}
        <section className="flex flex-col-reverse md:flex-row">
          <div className="flex flex-col md:mt-10">
            <h1 className="text-2xl font-extrabold font-mono uppercase my-8 md:text-4xl">
              Become a Job Ready <span className="text-primary">Cyber Security</span> Expert
            </h1>
            <h3 className="font-bold font-mono uppercase mb-6">
              Learn how you can better protect your digital life
            </h3>
            <p className="mb-10 text-gray-600">
              Find out all you need to know about cyber security.
              Get a live one on one training by our industry experts and get your dream job!
            </p>
            <button className="mb-6 rounded-full bg-primary text-white px-7 py-3 font-bold text-xs w-1/2 md:w-1/4">
              APPLY NOW
            </button>
          </div>
          <div className="md:w-8/12">
            <img className="w-full" src={hero_illustration} alt="Hero Illustration" />
          </div>
        </section>
        {/* Hero Section EnSds*/}
      </div>

      <div className="bg-[#f7f7f7] px-8 md:px-24">
        <section >
          <div className="text-center p-6">
            <h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
              Who Can <span className="text-primary">Join</span> This Course
            </h1>
            <p className="mx-14 my-6 text-gray-600">
              Our target candidates includes Serving NYSC members,
              Recent graduates, as well as Third and Final year student of Nigeria Universities and Polytechnics.
              Preference will be given to Computer / Physical Science and Engineering.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
