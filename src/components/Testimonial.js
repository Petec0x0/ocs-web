const Testimonial = () => {
	return (
		<div className="md:px-24">
			<section className="text-center p-6">
				<h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
					What Do <span className="text-primary">Our Students</span>{" "}
					Have to Say About Us?
				</h1>
				<p className="my-6 text-gray-600 md:mx-14">
					Our students love the hyflex approach of learning theory
					with practical knowledge of working on assignments.
				</p>
			</section>

			<section>
				<div className="carousel relative shadow-2xl bg-white">
					<div className="carousel-inner relative overflow-hidden w-full">
						{/* <!--Slide 1--> */}
						<input
							className="carousel-open hidden"
							type="radio"
							id="carousel-1"
							name="carousel"
							aria-hidden="true"
							hidden=""
							defaultChecked
						/>
						<div className="carousel-item absolute opacity-0">
							{/* <div className="block h-full w-full text-white text-5xl text-center">Slide 1</div> */}
							<div className="mx-auto max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
								<div className="flex justify-center md:justify-end -mt-16">
									<img
										className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
										alt="student-pic"
										src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
									/>
								</div>
								<div className="text-center md:text-left">
									<h2 className="text-gray-800 text-3xl font-semibold">
										{/* Design Tools */}
									</h2>
									<p className="mt-2 text-gray-600">
										odio quaerat nam ex commodi hic,
										suscipit in a veritatis pariatur minus
										consequuntur!
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quae dolores deserunt
										ea doloremque natus error, rerum quas
									</p>
								</div>
								<div className="flex justify-end mt-4">
									<a
										href="/"
										className="text-xl font-medium text-indigo-500"
									>
										John Doe
									</a>
								</div>
							</div>
						</div>
						<label
							htmlFor="carousel-3"
							className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
						>
							‹
						</label>
						<label
							htmlFor="carousel-2"
							className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
						>
							›
						</label>

						{/* <!--Slide 2--> */}
						<input
							className="carousel-open hidden"
							type="radio"
							id="carousel-2"
							name="carousel"
							aria-hidden="true"
							hidden=""
						/>
						<div className="carousel-item absolute opacity-0">
							{/* <div className="block h-full w-full text-white text-5xl text-center">Slide 2</div> */}
							<div className="mx-auto max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
								<div className="flex justify-center md:justify-end -mt-16">
									<img
										className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
										alt="student-pic"
										src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
									/>
								</div>
								<div className="text-center md:text-left">
									<h2 className="text-gray-800 text-3xl font-semibold">
										{/* Design Tools */}
									</h2>
									<p className="mt-2 text-gray-600">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quae dolores deserunt
										ea doloremque natus error, rerum quas
										odio quaerat nam ex commodi hic,
										suscipit in a veritatis pariatur minus
										consequuntur!
									</p>
								</div>
								<div className="flex justify-end mt-4">
									<a
										href="/"
										className="text-xl font-medium text-indigo-500"
									>
										Paul Mark
									</a>
								</div>
							</div>
						</div>
						<label
							htmlFor="carousel-1"
							className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
						>
							‹
						</label>
						<label
							htmlFor="carousel-3"
							className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
						>
							›
						</label>

						{/* <!--Slide 3--> */}
						<input
							className="carousel-open hidden"
							type="radio"
							id="carousel-3"
							name="carousel"
							aria-hidden="true"
							hidden=""
						/>
						<div className="carousel-item absolute opacity-0">
							{/* <div className="block h-full w-full text-white text-5xl text-center">Slide 3</div> */}
							<div className="mx-auto max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
								<div className="flex justify-center md:justify-end -mt-16">
									<img
										className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
										alt="student-pic"
										src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
									/>
								</div>
								<div className="text-center md:text-left">
									<h2 className="text-gray-800 text-3xl font-semibold">
										{/* Design Tools */}
									</h2>
									<p className="mt-2 text-gray-600">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quae dolores deserunt
										ea doloremque natus error, rerum quas
										odio quaerat nam ex commodi hic,
										suscipit in a veritatis pariatur minus
										consequuntur!
									</p>
								</div>
								<div className="flex justify-end mt-4">
									<a
										href="/"
										className="text-xl font-medium text-indigo-500"
									>
										Jane Doe
									</a>
								</div>
							</div>
						</div>
						<label
							htmlFor="carousel-2"
							className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
						>
							‹
						</label>
						<label
							htmlFor="carousel-1"
							className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
						>
							›
						</label>

						{/* <!-- Add additional indicators htmlFor each slide--> */}
						<ol className="carousel-indicators">
							<li className="inline-block mr-3">
								<label
									htmlFor="carousel-1"
									className="carousel-bullet cursor-pointer block text-4xl text-black hover:text-primary"
								>
									•
								</label>
							</li>
							<li className="inline-block mr-3">
								<label
									htmlFor="carousel-2"
									className="carousel-bullet cursor-pointer block text-4xl text-black hover:text-primary"
								>
									•
								</label>
							</li>
							<li className="inline-block mr-3">
								<label
									htmlFor="carousel-3"
									className="carousel-bullet cursor-pointer block text-4xl text-black hover:text-primary"
								>
									•
								</label>
							</li>
						</ol>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Testimonial;