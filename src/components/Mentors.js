import React, { useState } from "react";
import emeka_nwigwe from "images/emeka-nwigwe.jpg";
import livinus_obiora from "images/livinus-obiora.jpg";
import gibson_mba from "images/avatar_profile.png";

const Mentors = () => {
	const [isFullTextEN, setIsFullTextEN] = useState(false);
	const [isFullTextLO, setIsFullTextLO] = useState(false);
	const [isFullTextGM, setIsFullTextGM] = useState(false);

	return (
		<div className="bg-[#f7f7f7] pb-6 md:px-24">
			<section className="p-6">
				<h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
					Meet Your <span className="text-primary">Mentors</span>
				</h1>
				<p className="mt-6 text-gray-600">
					The Mentor at Oriental Cybersecurity have many years of
					industry experience in Cybersecurity and teaching. They make
					sure to train you in an engaging and fun way so that
					learning Cybersecurity will seem just like a cakewalk.
				</p>
			</section>
			<section>
				<div className="flex flex-col m-6 px-6 py-10 bg-white drop-shadow-xl md:flex-row">
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

						<button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
							View Linkedin
						</button>
					</div>
				</div>

				<div className="flex flex-col m-6 px-6 py-10 bg-white drop-shadow-xl md:flex-row-reverse">
					<div className="flex md:w-1/2">
						<img
							className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary"
							alt="mentor1"
							src={livinus_obiora}
						/>
					</div>
					<div className="text-center md:w-1/2 md:text-left md:pl-16">
						<h1 className="font-bold text-2xl text-center py-4 md:text-left">
							Livinus Obiora Nweke
						</h1>
						<h4 className="text-red-600 font-bold">
							HND, B.Sc., M.Sc., PhD in view
						</h4>
						{isFullTextLO ? (
							<p className="my-8 text-gray-600">
								A PhD Candidate with the Department of
								Information Security and Communication
								Technology (IIK) at the Norwegian University of
								Science and Technology (NTNU) Gjøvik, Norway.
								Prior to joining NTNU, Obiora received his M.Sc.
								Degree (First Class) in Computer Science from
								the Faculty of Ingegneria dell'Informazione,
								Informatica e Statistica, Sapienza Università di
								Roma, Italy. He also worked briefly as a
								Customer Support Engineer with the
								Next-Generation Firewall Team at Cisco Inc.
								Krakow, Poland. His research interests include,
								but are not limited to infrastructure security,
								privacy and data protection, and information
								security. He has published over 20 peer-reviewed
								articles at prestigious international
								conferences and journals.
								<br />
								<button
									onClick={() =>
										setIsFullTextLO(!isFullTextLO)
									}
									className="text-primary hover:text-sm"
								>
									View Less
								</button>
							</p>
						) : (
							<p className="my-8 text-gray-600">
								A PhD Candidate with the Department of
								Information Security and Communication
								Technology (IIK) at the Norwegian University of
								Science and Technology (NTNU) Gjøvik, Norway.
								Prior to joining NTNU, Obiora received his M.Sc.
								Degree (First Class) in Computer Science from
								the Faculty of Ingegneria dell'Informazione,
								Informatica e Statistica, Sapienza Università di
								Roma, Italy...
								<button
									onClick={() =>
										setIsFullTextLO(!isFullTextLO)
									}
									className="text-primary hover:text-sm"
								>
									View more
								</button>
							</p>
						)}

						<button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
							View Linkedin
						</button>
					</div>
				</div>

				<div className="flex flex-col m-6 px-6 py-10 bg-white drop-shadow-xl md:flex-row">
					<div className="flex md:w-1/2">
						<img
							className="self-center mx-auto rounded-full border-x-8 w-1/2 border-primary"
							alt="mentor1"
							src={gibson_mba}
						/>
					</div>
					<div className="text-center md:w-1/2 md:text-left">
						<h1 className="font-bold text-2xl text-center py-4 md:text-left">
							Gibson Mba
						</h1>
						<h4 className="text-blue-600 font-bold">
							B.Sc., M. Sc., M.B.A
						</h4>
						{isFullTextGM ? (
							<>
								<p className="my-8 text-gray-600">
									Gibson holds an M. Sc. degree in Information
									Technology (Information Security
									Concentration); Master of Business
									Administration (Banking and Finance) and B.
									Sc. in Computer Science. He also attended
									the Senior Management Programme of the Lagos
									Business School (Pan-Atlantic University).
								</p>
								<p className="my-8 text-gray-600">
									He has had a distinguished career as a
									technology entrepreneur, a banker and Senior
									Information Technology Executive for a
									period spanning over 30 years. He is
									currently the MD/CEO of Foretrust Digital
									Consulting Ltd, a promising tech. start-up
									company he co-founded in 2014.
								</p>
								<p className="my-8 text-gray-600">
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

						<button className="rounded-full uppercase bg-primary text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
							View Linkedin
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Mentors;
