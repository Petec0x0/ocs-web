import React from 'react';

const AboutFooter = () => {
    return (
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
    )
}

export default AboutFooter;