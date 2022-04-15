import React from "react";
import NavBar from 'components/NavBar';
import HeroSection from 'components/Hero'

const Header = () => {
  return (
    <div className="px-8 md:px-24">
      <NavBar />
      {/* Hero Section Starts*/}
      <HeroSection />
      {/* Hero Section Ends*/}
    </div>
    );
}

export default Header;