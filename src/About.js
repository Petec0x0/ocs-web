import React from "react";
import NavBar from "components/NavBar";
import Mentors from "components/Mentors";
import AboutHeroSection from "components/AboutHeroSection";
import WhyYouShouldCareSection from "components/WhyYouShouldCareSection";
import AboutFooter from "components/AboutFooter";
import success_illustration from "images/success-flatline.svg";


const About = () => {
	return (
		<>
			<div className="px-8 md:px-24">
				<NavBar />
			</div>
			<AboutHeroSection />
			<WhyYouShouldCareSection />
			<div className="bg-[#f7f7f7] md:px-24">
				<section className="flex flex-col py-8 px-7 md:flex-row">
					<h1 className="text-center text-2xl font-extrabold font-mono my-8 md:hidden">
						Programme <span className="text-primary">Deliverables</span>
					</h1>
					<div className="md:flex md:w-1/2">
						<img
							className="w-full self-center"
							src={success_illustration}
							alt="Career Illustration"
						/>
					</div>
					<div className="flex flex-col md:mt-10 md:w-1/2">
						<h1 className="hidden text-2xl font-extrabold font-mono my-8 md:block">
							Programme <span className="text-primary">Deliverables</span>
						</h1>
						<p className="mb-4 mt-4 text-left text-gray-750 md:mt-2 md:text-left">
							On successful completion of the programme, the candidate will earn the following awards / certificates:
						</p>
						<ul className="list-disc list-inside">
							<li className="mb-4 text-gray-600">
								Certificate of Completion signed by promoters of the programme.
							</li>
							<li className="mb-4 text-gray-600">
								Two badges of honour earned from a reputable Information Technology Company with Cybersecurity focus.
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div className="md:px-24">
				<section className="p-6">
					<h1 className="text-xl font-extrabold font-mono md:text-xl">
						Course <span className="text-primary">Delivery</span>{" "}
						Method
					</h1>
					<p className="my-6 text-gray-600 text-justify">
						The course will be delivered using our tested and reliable hybrid flexible(hyflex) method whereby candidates can choose to participate via in person (face to face) training or remotely via Zoom meeting link on meeting days.
					</p>
				</section>

				<section className="p-6">
					<h1 className="text-xl font-extrabold font-mono md:text-xl">
						Commencement and  <span className="text-primary">Duration</span>{" "}
						of The Programme
					</h1>
					<p className="my-6 text-gray-600 text-justify">
						The programme will hold for a period of 12 weeks starting from 11 June 2022, with lectures holding every Saturday from 12noon to 2pm.
					</p>
				</section>

				<section className="p-6">
					<h1 className="text-xl font-extrabold font-mono md:text-xl">
						Cost
					</h1>
					<p className="my-6 text-gray-600 text-justify">
						Our fee for this highly regarded and well packaged programme  is ₦14,500 per participant. Eventhough the maiden edition of the programme was delivered free of charge to all participants, the need to offset some of the high operating costs of hosting the course informs this token charge.  Otherwise, the training still represents an attempt by the sponsors and organizers to give back to the society.
					</p>
				</section>
			</div>
			<Mentors />
			<AboutFooter />
		</>
	);
};

export default About;
