import React from "react";
import NavBar from "components/NavBar";
import hero_illustration from "images/hero-illustration-3.svg";

const About = () => {
	return (
		<>
			<div className="px-8 md:px-24">
				<NavBar />
			</div>
			<div
				id="about-hero"
				className="flex flex-col px-8 rounded-full md:px-24 md:flex-row xl:px-40"
			>
				<div className="flex flex-col md:mt-10 md:w-1/2">
					<h1 className="text-2xl font-extrabold font-mono my-8 md:text-4xl">
						About <span className="text-primary">Us</span>
					</h1>
					<p className="mb-10 text-gray-600">
						We are boosting passion, training and mentoring people
						into one of the fastest growing and high paying
						professions in the world today
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
		</>
	);
};

export default About;
