const RegisterSection = () => {
	return (
		<div id="register" className="bg-primary md:px-24">
			<section className="flex flex-col p-8 md:p-20 md:flex-row">
				<div className="mx-auto md:w-1/3">
					<h1 className="text-3xl py-6 font-bold">
						How you can{" "}
						<span className="text-white">get started</span>
					</h1>
					<p className="text-gray-800 pb-6 md:pr-4">
						Complete this quick process of entering in your details
						and wait for our callback. We will give you personalized
						advice, answer all your queries and bring you a step
						closer to becoming a Cybersecurity expert.
					</p>
				</div>
				<div className="md:w-2/3">
					<form method="POST">
						<div className="mb-6">
							<input
								type="text"
								placeholder="Your Name"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
							/>
						</div>
						<div className="mb-6 md:inline">
							<input
								type="email"
								placeholder="Your Email"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
							/>
						</div>
						<div className="mb-6 md:inline">
							<input
								type="text"
								placeholder="Your Phone"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
							/>
						</div>
						<div className="mb-6 md:mt-6">
							<input
								type="text"
								placeholder="Institution"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
							/>
						</div>
						<div className="mb-6 md:inline">
							<input
								type="text"
								placeholder="Level of education"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
							/>
						</div>
						<div className="mb-6 md:inline">
							<input
								type="text"
								placeholder="Course of study"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
							/>
						</div>
						<hr className="md:mt-6" />
						<div className="mb-6 md:inline">
							<input
								type="email"
								placeholder="State of resident"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
							/>
						</div>
						<div className="mb-6 md:inline">
							<input
								type="text"
								placeholder="Programme loction"
								className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
							/>
						</div>
						<div className="md:mt-6">
							<button className="rounded-full uppercase bg-black text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
								Register
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default RegisterSection;