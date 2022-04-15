import React from "react";
import Header from "components/Header";
import WhoCanJoinSection from "components/WhoCanJoinSection";
import TimelineSection from "components/TimelineSection";
import Mentors from "components/Mentors";
import Testimonial from 'components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <WhoCanJoinSection />
      <TimelineSection />
      <Mentors />
      <Testimonial />
    </>
  );
}

export default App;
