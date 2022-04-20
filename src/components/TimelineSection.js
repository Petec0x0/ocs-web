const TimelineSection = () => {
	return (
		<div className="md:px-24">
			<section className="text-center p-8">
				<h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
					What you will learn{" "}
					<span className="text-primary">with us</span> in this
					Cybersecurity Training
				</h1>
			</section>
			{/* Timeline section */}
			<section className="px-12 pb-12">
				<div className="flex flex-col justify-center py-6 lg:py-12">
					<div className="w-full mx-auto lg:max-w-4xl">
						<div className="relative">
							{/* <!-- Vertical middle line--> */}
							<div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
							<div className="space-y-12 lg:space-y-8">
								{/* <!-- Left section --> */}
								<div>
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-start w-full mx-auto">
											<div className="w-full lg:w-1/2 lg:pr-8">
												<div className="p-4 bg-white rounded shadow-lg shadow-cyan-300 rounded-lg">
													<ul className="list-disc p-4">
														<li>
															The need for
															cybersecurity
														</li>
														<li>CIA Triad </li>
														<li>
															The art of
															protecting secrets
														</li>
														<li>
															The art of ensuring
															integrity 
														</li>
														<li>
															The art of ensuring
															availability 
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
											<span className="text-white">
												1
											</span>
										</div>
									</div>
								</div>

								{/* <!-- Right section --> */}
								<div>
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-end w-full mx-auto">
											<div className="w-full lg:w-1/2 lg:pl-8">
												<div className="p-4 bg-white rounded shadow-lg shadow-red-300 rounded-lg">
													<ul className="list-disc p-4">
														<li>
															Basic concepts of
															web security 
														</li>
														<li>
															Basic concepts of
															cloud security 
														</li>
														<li>
															Vulnerability and
															risk assessment 
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
											<span className="text-white">
												2
											</span>
										</div>
									</div>
								</div>

								{/* <!-- Left section --> */}
								<div>
									<div className="flex flex-col items-center">
										<div className="flex items-center justify-start w-full mx-auto">
											<div className="w-full lg:w-1/2 lg:pr-8">
												<div className="p-4 bg-white rounded shadow-lg shadow-yellow-300 rounded-lg">
													<ul className="list-disc p-4">
														<li>
															Cybersecurity
															framework
														</li>
														<li>
															Career path in
															cybersecurity
														</li>
														<li>Mentorship plan</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
											<span className="text-white">
												3
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TimelineSection;