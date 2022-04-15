import React from 'react';
import hero_illustration from 'images/hero-illustration.svg';
import ilustration_1 from 'images/ilustration-1.svg';
import ilustration_2 from 'images/ilustration-2.svg';
import ilustration_3 from 'images/ilustration-3.svg';
import emeka_nwigwe from 'images/emeka-nwigwe.jpg';
import livinus_obiora from 'images/livinus-obiora.jpg';
import gibson_mba from 'images/avatar_profile.png';


function App() {
  return (
    <>
      <div className="px-8 md:px-24">
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

        {/* Hero Section Starts*/}
        <section className="flex flex-col-reverse md:flex-row">
          <div className="flex flex-col md:mt-10">
            <h1 className="text-2xl font-extrabold font-mono uppercase my-8 md:text-4xl">
              Become a Job Ready <span className="text-primary">Cybersecurity</span> Expert
            </h1>
            <h3 className="font-bold font-mono uppercase mb-6">
              Learn how you can better protect digital life
            </h3>
            <p className="mb-10 text-gray-600">
              Find out all you need to know about Cybersecurity.
              Get a live one on one training by our industry experts and get your dream job!
            </p>
            <button className="mb-6 rounded-full bg-primary text-white px-7 py-3 font-bold text-xs w-1/2 hover:drop-shadow-lg md:w-1/4">
              APPLY NOW
            </button>
          </div>
          <div className="md:w-8/12">
            <img className="w-full" src={hero_illustration} alt="Hero Illustration" />
          </div>
        </section>
        {/* Hero Section Ends*/}
      </div>

      <div className="bg-[#f7f7f7] md:px-24">
        <section className="text-center p-6">
          <h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
            Who Can <span className="text-primary">Join</span> This Training
          </h1>
          <p className="my-6 text-gray-600 md:mx-14">
            Anyone can join this course irrespective of what they are doing currently. Our target candidates includes Serving NYSC members,
            Recent graduates, as well as Third and Final year student of Nigeria Universities and Polytechnics.
            Preference will be given to Computer / Physical Science and Engineering.
          </p>
          <p className="text-primary rounded-full bg-white px-3 py-3 font-bold hover:text-lg md:w-1/3 md:mx-auto">
            Learn more about this training
          </p>
        </section>

        <section className="flex flex-col md:flex-row text-center p-6">
          <div className="flex-1 p-3">
            <img className="w-8/12 mx-auto" src={ilustration_1} alt="Ilustration-1" />
            <h2 className="font-bold m-2">Comprehensive training</h2>
            <p className="text-gray-600">
              A full-fledged comprehensive Cybersecurity Training,
              giving your everything about the basics and core subject.
            </p>
          </div>

          <div className="flex-1 p-3">
            <img className="w-8/12 mx-auto" src={ilustration_2} alt="Ilustration-2" />
            <h2 className="font-bold m-2">Interact with mentors</h2>
            <p className="text-gray-600">
              Live online and Physical classes where you can ask doubts and queries.
              You can also connect with mentors after classes to help your career.
            </p>
          </div>

          <div className="flex-1 p-3">
            <img className="w-8/12 mx-auto" src={ilustration_3} alt="Ilustration-3" />
            <h2 className="font-bold m-2">Your dream job</h2>
            <p className="text-gray-600">
              We'll be there till the end, helping you get a job you always deserved.
              We've got your back.
            </p>
          </div>
        </section>
      </div>

      <div className="md:px-24">
        <section className="text-center p-8">
          <h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
            What you will learn <span className="text-primary">with us</span> in this
            Cybersecurity Training
          </h1>
        </section>
        {/* Timeline section */}
        <section className="px-12 pb-12">
          <div class="flex flex-col justify-center py-6 lg:py-12">
            <div class="w-full mx-auto lg:max-w-4xl">

              <div class="relative">

                {/* <!-- Vertical middle line--> */}
                <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
                <div class="space-y-12 lg:space-y-8">
                  {/* <!-- Left section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-start w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pr-8">
                          <div class="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                            <ul class="list-disc p-4">
                              <li>The need for cybersecurity</li>
                              <li>CIA Triad </li>
                              <li>The art of protecting secrets</li>
                              <li>The art of ensuring integrity </li>
                              <li>The art of ensuring availability </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">1</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-end w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pl-8">
                          <div class="p-4 bg-white rounded shadow-lg shadow-red-300">
                            <ul class="list-disc p-4">
                              <li>Basic concepts of web security </li>
                              <li>Basic concepts of cloud security </li>
                              <li>Vulnerability and risk assessment </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">2</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Left section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-start w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pr-8">
                          <div class="p-4 bg-white rounded shadow-lg shadow-yellow-300">
                            <ul class="list-disc p-4">
                              <li>Cybersecurity framework</li>
                              <li>Career path in cybersecurity</li>
                              <li>Mentorship plan</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#f7f7f7] md:px-24">
        <section className="p-6">
          <h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
            Meet Your <span className="text-primary">Mentors</span>
          </h1>
          <p className="mt-6 text-gray-600">
            The Mentor at Oriental Cybersecurity have many years of industry experience
            in Cybersecurity and teaching. They make sure to train you in an engaging
            and fun way so that learning Cybersecurity will seem just like a cakewalk.
          </p>
        </section>
        <section>
          <div className="flex flex-col m-6 px-6 py-16 bg-white drop-shadow-xl md:flex-row">
            <div className="flex md:w-1/2">
              <img className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary" alt="mentor1" src={emeka_nwigwe} />
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="font-bold text-2xl text-center py-4 md:text-left">Emeka Nwigwe</h1>
              <h4 className="text-blue-600 font-bold">B.Sc., M.Sc., CISSP, CISA, CRISC, CDPSE, COBIT</h4>
              <p className="my-8 text-gray-600">
                An Information Technology Professional with over 30 years’ experience and has in the last 10 years
                focused on Cybersecurity, helping organizations to achieve their enterprise objective of ensuring confidentiality,
                Integrity and availability of data and information systems. With specialty in IS Strategy, Controls and Governance,
                IT Compliance, Risk Management, Data Privacy,
                Payment Card Industry Data Security Standard (PCI DSS), IS Audit,
                Cyber Security, and Incident Response. Emeka is based in Canada.
              </p>
              <button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
                View Linkedin
              </button>
            </div>
          </div>

          <div className="flex flex-col m-6 px-6 py-16 bg-white drop-shadow-xl md:flex-row-reverse">
            <div className="flex md:w-1/2">
              <img className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary" alt="mentor1" src={livinus_obiora} />
            </div>
            <div className="text-center md:w-1/2 md:text-left md:pl-16">
              <h1 className="font-bold text-2xl text-center py-4 md:text-left">Livinus Obiora Nweke</h1>
              <h4 className="text-red-600 font-bold">HND, B.Sc., M.Sc., PhD in view</h4>
              <p className="my-8 text-gray-600">
                A PhD Candidate with the Department of Information Security and Communication Technology (IIK)
                at the Norwegian University of Science and Technology (NTNU) Gjøvik, Norway.
                Prior to joining NTNU, Obiora received his M.Sc. Degree (First Class) in Computer Science
                from the Faculty of Ingegneria dell'Informazione, Informatica e Statistica, Sapienza Università di Roma, Italy.
                He also worked briefly as a Customer Support Engineer with the Next-Generation Firewall Team at Cisco Inc.
                Krakow, Poland. His research interests include, but are not limited to infrastructure security,
                privacy and data protection, and information security.
                He has published over 20 peer-reviewed articles at prestigious international conferences and journals.
              </p>
              <button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
                View Linkedin
              </button>
            </div>
          </div>

          <div className="flex flex-col m-6 px-6 py-16 bg-white drop-shadow-xl md:flex-row">
            <div className="flex md:w-1/2">
              <img className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary" alt="mentor1" src={gibson_mba} />
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="font-bold text-2xl text-center py-4 md:text-left">Gibson Mba</h1>
              <h4 className="text-blue-600 font-bold">B.Sc., M. Sc., M.B.A</h4>
              <p className="my-8 text-gray-600">
                Gibson holds an M. Sc. degree in Information Technology (Information Security Concentration);
                Master of Business Administration (Banking and Finance) and B. Sc. in Computer Science.
                He also attended the Senior Management Programme of the Lagos Business School (Pan-Atlantic University).

                He has had a distinguished career as a technology entrepreneur, a banker and Senior Information Technology
                Executive for a period spanning over 30 years. He is currently the MD/CEO of Foretrust Digital Consulting Ltd,
                a promising tech. start-up company he co-founded in 2014.

                Apart from helping companies and organizations to solve their IT needs using modern ICT tools and technologies, 
                he has special interest in mentoring young people to engage in and hone their skills in modern IT tools and 
                technologies. He has interest in many areas of IT including Data Sciences, Machine Learning, IT Security, etc.
              </p>
              <button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
                View Linkedin
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
