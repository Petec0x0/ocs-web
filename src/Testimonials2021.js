import React, { useState } from 'react';
import NavBar from "components/NavBar";
import avatar_profile from "images/avatar_profile.png";
import { GaTestimony, Anon1, Anon2 } from './data/testimonies';
import publication_screenshot from 'images/publication-screenshot.png';

const Testimonials2021 = () => {
    const [isFullText1, setIsFullText1] = useState(false);

    return (
        <>
            <div className="px-8 md:px-24">
                <NavBar />
            </div>

            {/* <!-- component --> */}
            <div className="py-2 white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-2xl">Our students testimonial and <span className="text-primary">success stories</span> from 2021 edition</h2>
                    <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                        <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                            <div className="h-full flex flex-col justify-center space-y-4">
                                <img className="w-20 h-20 mx-auto rounded-full" src={avatar_profile} alt="user avatar" height="220" width="220" loading="lazy" />
                                <p className="text-gray-600"> <span className="font-serif">"</span>
                                    {
                                        isFullText1 ? (
                                            <>
                                                <GaTestimony />
                                                <br />
                                                <button
                                                    onClick={() =>
                                                        setIsFullText1(!isFullText1)
                                                    }
                                                    className="text-primary hover:text-sm"
                                                >
                                                    View Less
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                TESTIMONY ON MY CYBERSECURITY JOURNEY.
                                                <br />

                                                I will start by saying: May God Almighty bless the sponsors and promoters of the Oriental  Cybersecurity Training programme for transforming...
                                                <button
                                                    onClick={() =>
                                                        setIsFullText1(!isFullText1)
                                                    }
                                                    className="text-primary hover:text-sm"
                                                >
                                                    View More
                                                </button>
                                            </>
                                        )
                                    }

                                    <span className="font-serif">"</span>
                                </p>
                                <div>
                                    <h6 className="text-lg font-semibold leading-none">GA</h6>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img className="w-20 h-20 mx-auto rounded-full" src={avatar_profile} alt="user avatar" height="220" width="220" loading="lazy" />
                            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                <p className="text-gray-600"> <span className="font-serif">"</span>
                                    <Anon1 />
                                    <span className="font-serif">"</span>
                                </p>
                                <div>
                                    <h6 className="text-lg font-semibold leading-none">JD</h6>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                            <img className="w-20 h-20 mx-auto rounded-full" src={avatar_profile} alt="user avatar" height="220" width="220" loading="lazy" />
                            <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                                <p className="text-gray-600"> <span className="font-serif">"</span>
                                    <Anon2 />
                                    <span className="font-serif">"</span>
                                </p>
                                <div>
                                    <h6 className="text-lg font-semibold leading-none">ME</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- component --> */}
            < div className="flex justify-center items-center w-screen" >
                {/* <!-- COMPONENT CODE --> */}
                < div className="container mx-auto mt-10 mb-10 md:mb-40 md:px-20" >
                    <div className="hidden relative w-full my-4 md:w-9/12 mr-auto rounded-2xl shadow-2xl md:block">
                        <img alt="Card" src={publication_screenshot} className="max-w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="relative w-full md:-mt-96 xl:-mt-[30rem] lg:w-3/6 p-8 ml-auto bg-primary rounded-2xl z-50">
                        <div className="flex flex-col text-white">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
                            </div>
                            <p className="text-white my-5 px-2">
                                Another success story of the 2021 edition of the programme was the publication in April 2022 of a journal article co-authored by promoters of the Oriental Cybersecurity Training Programme, in a prestigious academic journal. Data for the report originated from the experiences the authors garnered from embarking on the experiment and the  feedback they got from the trainees.
                                Click on the link below to read the article:
                            </p>

                            <div className="flex justify-between pl-2">
                                <a href="https://link.springer.com/article/10.1007/s10639-022-11038-z">
                                    <button className="rounded-full bg-black text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
                                        View publication
                                    </button>
                                </a>
                                <i className="fas fa-quote-right text-2xl" />
                            </div>
                        </div>
                    </div>
                </div >
                {/* <!-- COMPONENT CODE --> */}
            </div >
        </>
    )
}

export default Testimonials2021;