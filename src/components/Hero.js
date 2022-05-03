import hero_illustration from "images/hero-illustration.svg";

const HeroSection = () => {
	return (
		<section className="flex flex-col-reverse md:flex-row">
			<div className="flex flex-col md:mt-10 md:w-1/2">
				<h1 className="text-2xl font-extrabold font-mono my-8 md:text-2xl">
					Start your journey to becoming a <span className="text-primary">Cyber Security</span> expert  right here -- a profession that guarantees easy job and mega pay.
				</h1>
				<h3 className="font-bold font-mono uppercase mb-6">
					Learn how you can better protect digital life
				</h3>
				<p className="mb-10 text-gray-600">
					Find out all you need to know about Cybersecurity. Get live
					one on one training by our industry experts and get your
					dream job!
				</p>
				<a className="mb-6" href="/#register">
					<button className="rounded-full bg-primary text-white px-7 py-3 font-bold text-xs w-1/2 hover:drop-shadow-lg md:w-1/4">
						APPLY NOW
					</button>
				</a>
			</div>
			<div className="md:w-1/2">
				<img
					className="w-full"
					src={hero_illustration}
					alt="Hero Illustration"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
