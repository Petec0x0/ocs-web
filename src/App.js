import React, {useEffect} from "react";
import Header from "components/Header";
import WhoCanJoinSection from "components/WhoCanJoinSection";
// import TimelineSection from "components/TimelineSection";
// import Mentors from "components/Mentors";
import Testimonial from "components/Testimonial";
import RegisterSection from "components/RegisterSection";
import CareerSection from "components/CareerSection";


function App() {
  useEffect(() => {
    fetch('/api/candidate');
  },[])

  return (
    <>
      <Header />
      <hr />
      <div className="md:px-24">
        <section className="text-center p-6">
          <h1 className="text-xl font-extrabold font-mono uppercase md:text-2xl">
            THE GROWING NEED FOR <span className="text-primary">CYBERSECURITY</span> PROFESSIONALS
          </h1>
          <p className=" text-gray-800 font-bold text-lg md:mx-14">
            Why you need to embrace the field
          </p>
          <p className="my-6 text-gray-600 text-justify md:mx-14">
            Information Security/Cybersecurity is one of the fastest growing
            and high paying professions in the world today,
            with a job growth rate projected at 32% between now and 2028 according to the U.S.
            Bureau of Labour Statistics. Annual median salary is $103,590 as at May 2020 for
            entry level jobs of first degree with less than 5 years’ experience.
            Digital Guardian further reports a 0% unemployment rate in the field
            with a projected 3.5 million unfilled positions worldwide with the US,
            Europe, Australia, and India leading in the skills shortage.
          </p>
          <p className="my-6 text-gray-600 text-justify md:mx-14">
            The increasing trend by organizations in migration to cloud-based infrastructure 
            as orchestrated by the COVID-19 pandemic, and the dependence of companies, organizations, 
            ndividuals and countries on automated and computerized systems have equally attracted the 
            attention of cybercriminals who are bent on infiltrating and attacking such systems for political reasons, 
            financial benefits, and other ulterior motives, 
            thence driving the need for trained Cybersecurity professionals who can counter such attacks.
          </p>
          <p className="my-6 text-gray-600 text-justify md:mx-14">
            As a result of this development, various professional roles have emerged, some of which include: 
            Security Analyst, Security Assessor, Security Engineer,  Information Security Consultant,  
            Penetration Tester,  Incident Manager,  Information Security Specialist,  
            Application Security Analyst,  Web Security Analyst,  Cloud Security Analyst,  
            Network Security Engineer, Vulnerability Bounty Hunter,  etc.
          </p>
        </section>
      </div>
      <WhoCanJoinSection />
      {/* <TimelineSection /> */}
      {/* <Mentors /> */}
      <Testimonial />
      <RegisterSection />
      <CareerSection />
    </>
  );
}

export default App;
