import React, { useState } from "react";
import emeka_nwigwe from "images/emeka-nwigwe.jpg";
import gibson_mba from "images/avatar_profile.png";

const Mentors = () => {
	const [isFullTextEN, setIsFullTextEN] = useState(false);
	const [isFullTextGM, setIsFullTextGM] = useState(false);
	const [isFullTextUA, setIsFullTextUA] = useState(false);

	return (
		<div className="bg-[#f7f7f7] pb-6 md:px-24 xl:px-40">
			<section className="p-6">
				<h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
					Meet Your <span className="text-primary">Mentors</span>
				</h1>
				<p className="mt-6 text-gray-600">
					The Mentor at Oriental Cybersecurity has many years of
					industry experience in Cybersecurity and teaching. They make
					sure to train you in an engaging and fun way so that
					learning Cybersecurity will seem just like a cakewalk.
				</p>
			</section>
			<section>
				<div className="flex flex-col m-6 px-6 py-10 bg-white drop-shadow-xl rounded-lg md:flex-row">
					<div className="flex md:w-1/2">
						<img
							className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary"
							alt="mentor1"
							src={emeka_nwigwe}
						/>
					</div>
					<div className="text-center md:w-1/2 md:text-left">
						<h1 className="font-bold text-2xl text-center py-4 md:text-left">
							Emeka Nwigwe
						</h1>
						<h4 className="text-blue-600 font-bold">
							B.Sc., M.Sc., CISSP, CISA, CRISC, CDPSE, COBIT
						</h4>
						{isFullTextEN ? (
							<p className="my-8 text-gray-600">
								An Information Technology Professional with over
								30 years’ experience and has in the last 10
								years focused on Cybersecurity, helping
								organizations to achieve their enterprise
								objective of ensuring confidentiality, Integrity
								and availability of data and information
								systems. With specialty in IS Strategy, Controls
								and Governance, IT Compliance, Risk Management,
								Data Privacy, Payment Card Industry Data
								Security Standard (PCI DSS), IS Audit, Cyber
								Security, and Incident Response. Emeka is based
								in Canada.
								<br />
								<button
									onClick={() =>
										setIsFullTextEN(!isFullTextEN)
									}
									className="text-primary hover:text-sm"
								>
									View Less
								</button>
							</p>
						) : (
							<p className="my-8 text-gray-600">
								An Information Technology Professional with over
								30 years’ experience and has in the last 10
								years focused on Cybersecurity, helping
								organizations to achieve their enterprise
								objective of ensuring confidentiality, Integrity
								and availability of data and information
								systems. With specialty in IS Strategy, Controls
								and Governance, IT Compliance, Risk Management,
								Data Privacy, Payment Card Industry Data
								Security Standard (PCI DSS), IS Audit, Cyber
								Security, and Incident Response...
								<button
									onClick={() =>
										setIsFullTextEN(!isFullTextEN)
									}
									className="text-primary hover:text-sm"
								>
									View More
								</button>
							</p>
						)}
						<a rel="noopener noreferrer" href="https://www.linkedin.com/in/emeka-p-nwigwe-msc-cissp-cisa-crisc-cdpse-cobit5-ssyb-sfc-69b67219b/?originalSubdomain=ca" target="_blank">
							<button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
								View Linkedin
							</button>
						</a>
					</div>
				</div>

				<div className="flex flex-col m-6 px-6 py-10 bg-white drop-shadow-xl rounded-lg md:flex-row-reverse">
					<div className="flex md:w-1/2">
						<img
							className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary"
							alt="mentor1"
							src={gibson_mba}
						/>
					</div>
					<div className="text-center md:w-1/2 md:text-left md:pl-16">
						<h1 className="font-bold text-2xl text-center py-4 md:text-left">
							Gibson Mba
						</h1>
						<h4 className="text-red-600 font-bold">
							B.Sc., M. Sc., M.B.A
						</h4>
						{isFullTextGM ? (
							<>
								<p className="my-8 text-gray-600 text-left">
									Gibson holds an M. Sc. degree in Information
									Technology (Information Security
									Concentration); Master of Business
									Administration (Banking and Finance) and B.
									Sc. in Computer Science. He also attended
									the Senior Management Programme of the Lagos
									Business School (Pan-Atlantic University).
								</p>
								<p className="my-8 text-gray-600 text-left">
									He has had a distinguished career as a
									technology entrepreneur, a banker and Senior
									Information Technology Executive for a
									period spanning over 30 years. He is
									currently the MD/CEO of Foretrust Digital
									Consulting Ltd, a promising tech. start-up
									company he co-founded in 2014.
								</p>
								<p className="my-8 text-gray-600 text-left">
									Apart from helping companies and
									organizations to solve their IT needs using
									modern ICT tools and technologies, he has
									special interest in mentoring young people
									to engage in and hone their skills in modern
									IT tools and technologies. He has interest
									in many areas of IT including Data Sciences,
									Machine Learning, IT Security, etc.
									<br />
									<button
										onClick={() =>
											setIsFullTextGM(!isFullTextGM)
										}
										className="text-primary hover:text-sm"
									>
										View Less
									</button>
								</p>
							</>
						) : (
							<p className="my-8 text-gray-600">
								Gibson holds an M. Sc. degree in Information
								Technology (Information Security Concentration);
								Master of Business Administration (Banking and
								Finance) and B. Sc. in Computer Science. He also
								attended the Senior Management Programme of the
								Lagos Business School (Pan-Atlantic University).
								He has had a distinguished career as a
								technology entrepreneur, a banker and Senior
								Information Technology Executive for a period
								spanning over 30 years...
								<button
									onClick={() =>
										setIsFullTextGM(!isFullTextGM)
									}
									className="text-primary hover:text-sm"
								>
									View More
								</button>
							</p>
						)}
					</div>
				</div>

				<div className="flex flex-col m-6 px-6 py-10 bg-white drop-shadow-xl rounded-lg md:flex-row">
					<div className="flex md:w-1/2">
						<img
							className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary"
							alt="mentor1"
							src={gibson_mba}
						/>
					</div>
					<div className="text-center md:w-1/2 md:text-left">
						<h1 className="font-bold text-2xl text-center py-4 md:text-left">
							Uchenna Ajoku (IT Consultant)
						</h1>
						{/* <h4 className="text-blue-600 font-bold">
							B.Sc., M.Sc., CISSP, CISA, CRISC, CDPSE, COBIT
						</h4> */}
						{isFullTextUA ? (
							<>
								<p className="my-8 text-gray-600 text-left">
									Uche is a practicing Information Technology professional
									with experience spanning over 30 years in the banking and
									financial services industry. He started his technology career
									in 1988 as a junior systems engineer with one of the second
									generation pioneer IT firms in Nigeria.
									Uche thereafter started his banking career with Commerce
									Bank in 1992 as a user support engineer in both software and hardware.
									He progressed his banking career with NEXIM Bank in 1994
									where he supported banking applications and system administration.
									Subsequently, he joined First Securities Discount House (FSDH) – now
									FSDH Merchant Bank in 1996 and played various parts – support,
									system administration, network engineering, database administrator,
									software development, etc – supporting and deputizing for
									the Head of IT for FSDH and its two subsidiaries.
									He assumed the headship of the IT Department of the company
									in January 2014 after the pioneer Head of IT resigned.
									Uche served in this position until May 2019 when he resigned
									to pursue other endeavours around consulting and project management
									in the IT industry. During his tenure as Head of IT,
									Uche consolidated and built upon the achievements of
									his predecessor in achieving to leave a strong
									IT function in the institution. Some of Uche’s achievements are as follows

								</p>
								<ul className="my-6 text-gray-600 text-left list-disc list-inside md:mx-4">
									<li>Establishment of industry standard IT governance system.</li>
									<li>Establishment of an Information Security Management System in the organization including and helping the position of the Chief Information Security Officer (CISO) until the appointment of a dedicated CISO in line with the requirements of IT governance.</li>
									<li>Achievement of Certification ISO 27001, ISO 2000, ISO 22301, ITIL Standards</li>
									<li>Implementation of recognized framework in IT governance – COBIT, TOGAF, CMMI, PMBOK, PCI/DSS, etc.</li>
									<li>Implementation of CBN IT Standards Blueprint for Nigerian Banking Institutions</li>
									<li>Upgrade Business Continuity and Disaster Recovery practices including implementation of High Availability offsite replication of datacenter hosted with a top tier 3 service provider. </li>
									<li>Implementation of softwares for the bank, trading software, Payment solution, and Funds transfer solutions such as NIP, SWIFT, RTGS, Interswitch Solutions, and Card Services</li>
								</ul>
								<p className="my-8 text-gray-600 text-left">
									Uche holds a B. Eng. in Electronic and Computer Engineering,
									(Second Class Honours, Upper Division).
									He also attended the Senior Management Programme of the
									Lagos Business School (Pan-Atlantic University).
									He has attended many technical and managerial courses in Nigeria and abroad.
								</p>
								<p className="my-8 text-gray-600 text-left">
									Uche performed his National Youth Service (NYSC) at
									Government Technical College, Jebba North,
									Niger State where he taught Mathematics, Physics,
									Technical Drawing and Introductory Technology.
								</p>
								<p className="my-8 text-gray-600 text-left">
									He is an affiliate of the Project Management Institute, Nigeria Chapter
								</p>
								<button
									onClick={() =>
										setIsFullTextUA(!isFullTextUA)
									}
									className="text-primary hover:text-sm"
								>
									View Less
								</button>
							</>
						) : (
							<p className="my-8 text-gray-600">
								Uche is a practicing Information Technology professional
								with experience spanning over 30 years in the banking and
								financial services industry.
								He started his technology career in 1988 as a junior systems
								engineer with one of the second generation pioneer IT firms in Nigeria.
								Uche thereafter started his banking career with Commerce
								Bank in 1992 as a user support engineer in both software and hardware...
								<button
									onClick={() =>
										setIsFullTextUA(!isFullTextUA)
									}
									className="text-primary hover:text-sm"
								>
									View More
								</button>
							</p>
						)}
						{/* <a rel="noopener noreferrer" href="https://www.linkedin.com/in/emeka-p-nwigwe-msc-cissp-cisa-crisc-cdpse-cobit5-ssyb-sfc-69b67219b/?originalSubdomain=ca" target="_blank">
							<button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
								View Linkedin
							</button>
						</a> */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Mentors;
