import career_illustration from "images/career-illustration.svg";

const CareerSection = () => {
	return (
		<div className="md:px-24">
			<section className="flex flex-col py-8 px-7 md:flex-row">
				<h1 className="text-center text-2xl font-extrabold font-mono my-8 md:hidden">
					How <span className="text-primary">amazing</span> a
					CyberSecurity career is
				</h1>
				<div className="md:flex md:w-1/2">
					<img
						className="w-full self-center"
						src={career_illustration}
						alt="Career Illustration"
					/>
				</div>
				<div className="flex flex-col md:mt-10 md:w-1/2">
					<h1 className="hidden text-2xl font-extrabold font-mono my-8 md:block">
						How <span className="text-primary">amazing</span> a
						CyberSecurity career is
					</h1>
					<h3 className="font-bold font-mono uppercase mb-4 mt-2 text-sm">
						Interesting Field
					</h3>
					<p className="mb-4 text-gray-600">
						Because of the importance of the work, the fast speed of
						change, the challenge of addressing problems, and the
						numerous career options available, the cybersecurity
						profession is engaging and enjoyable.
					</p>

					<h3 className="font-bold font-mono uppercase mb-4 mt-2 text-sm">
						Great Pay
					</h3>
					<p className="mb-4 text-gray-600">
						It is one of the most in-demand field in the world. And
						a high demand means a high pay.
					</p>

					<h3 className="font-bold font-mono uppercase mb-4 mt-2 text-sm">
						Secure digital lives
					</h3>
					<p className="mb-4 text-gray-600">
						You'll have the opporturnity to make sure digital life
						and data is protected.
					</p>
					<button className="mb-6 rounded-full bg-primary text-white px-7 py-3 font-bold text-xs w-1/2 hover:drop-shadow-lg md:w-1/3">
						APPLY NOW
					</button>
				</div>
			</section>
		</div>
	);
};

export default CareerSection;
