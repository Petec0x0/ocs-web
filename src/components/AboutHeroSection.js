import React from 'react';
import hero_illustration from "images/hero-illustration-3.svg";

const AboutHeroSection = () => {
    return (
        <div
            id="about-hero"
            className="flex flex-col px-8 rounded-full md:px-24 md:flex-row xl:px-40"
        >
            <div className="flex flex-col md:mt-10 md:w-1/2">
                <h1 className="text-2xl font-extrabold font-mono my-8 md:text-4xl">
                    About <span className="text-primary">Us</span>
                </h1>
                <p className="mb-10 text-gray-800">
                    Oriental CyberSecurity Training and Initiative Programme
                    is a program established and organized by a team of
                    Nigerian Cyber Security experts based in Nigeria, Canada
                    and Europe to deliver a first-hand training and
                    mentorship programme on Information/Cyber security to
                    all interested Nigerians who are ready to make a career
                    in Cyber Security.
                </p>
                <p className="mb-10 text-gray-800">
                    The core benefit is for the participants to acquire
                    skills and to build professional networks that would
                    enable them to grow and build a career in the field.
                </p>
            </div>
            <div className="md:w-1/2">
                <img
                    className="w-full xl:mx-auto xl:w-9/12"
                    src={hero_illustration}
                    alt="Hero Illustration"
                />
            </div>
        </div>
    )
}

export default AboutHeroSection;