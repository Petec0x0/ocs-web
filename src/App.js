import React from "react";
import Header from "components/Header";
import WhoCanJoinSection from "components/WhoCanJoinSection";
import TimelineSection from "components/TimelineSection";
import Mentors from "components/Mentors";
import Testimonial from "components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <WhoCanJoinSection />
      <TimelineSection />
      <Mentors />
      <Testimonial />
      <div className="bg-primary md:px-24">
        <section className="flex flex-col p-8 md:p-20 md:flex-row">
          <div className="mx-auto md:w-1/2">
            <h1 className="text-3xl py-6 font-bold">
              How you can <span className="text-white">get started</span>
            </h1>
            <p className="text-gray-800 pb-6">
              Complete this quick process of entering in your details and wait
              for our callback. We will give you personalized advice, answer all
              your queries and bring you a step closer to becoming a
              Cybersecurity expert.
            </p>
          </div>
          <div className="md:w-1/2">
            <form>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="
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
              <div class="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  class="
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
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  class="
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
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="State of resident"
                  class="
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
              <div>
                <button className="rounded-full uppercase bg-black text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
                  Register
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
