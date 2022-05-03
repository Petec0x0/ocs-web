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
						Oriental CyberSecurity Training and Initiative Programme
						is a program established and organized by a team of
						Nigerian Cyber Security experts based in Nigeria, Canada
						and Europe to deliver a first-hand training and
						mentorship programme on Information/Cyber security to
						all interested Nigerians who are ready to make a career
						in Cyber Security.
					</p>
					<p className="mb-10 text-gray-600">
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
			<div className="md:px-24">
				<section className="p-6 text-center">
					<h1 className="text-2xl font-extrabold font-mono md:text-3xl">
						Why Should <span className="text-primary">You</span>{" "}
						Care?
					</h1>
					<p className="my-6 text-gray-800">
						Information Security/Cybersecurity is one of the fastest
						growing and high paying professions in the world today,
						with a job growth rate projected at 32% between now and
						2028 according to the U.S. Bureau of Labour Statistics.
						Annual median salary is $103,590 as at May 2020 for
						entry level jobs of first degree with less than 5 years’
						experience. Digital Guardian further reports a 0%
						unemployment rate in the field with a projected 3.5
						million unfilled positions worldwide with the US,
						Europe, Australia, and India leading in the skills
						shortage.
					</p>
					<p className="my-6 text-gray-800">
						The increasing trend by organizations in migration to
						cloud-based infrastructure as orchestrated by the
						COVID-19 pandemic, and the dependence of companies,
						organizations, individuals and countries on automated
						and computerized systems have equally attracted the
						attention of cybercriminals who are bent on infiltrating
						and attacking such systems for political reasons,
						financial benefits, and other ulterior motives, thence
						driving the need for trained Cybersecurity professionals
						who can counter such attacks.
					</p>
					<p className="my-6 text-gray-800">
						As a result of this development, various professional
						roles have emerged, some of which include: Security
						Analyst, Security Assessor, Security Engineer,
						Information Security Consultant,  Penetration Tester,
						Incident Manager,  Information Security Specialist,
						Application Security Analyst,  Web Security Analyst,
						Cloud Security Analyst,  Network Security Engineer,
						Vulnerability Bounty Hunter,  etc.
					</p>
				</section>
			</div>
			<div className="bg-primary md:px-24">
				<section className="text-center p-6">
					<h1 className="text-3xl py-6 font-bold md:text-4xl">
						It's <span className="text-white">never too late</span> to start
					</h1>
					<p className="mb-8 text-lg md:mx-14">
						A very welcoming line about Oriental Cybersecurity
					</p>
					<a href="/#register">
						<button className="rounded-full bg-black text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
							APPLY NOW
						</button>
					</a>
				</section>
			</div>
		</>
	);
};

export default About;
