import ilustration_1 from "images/ilustration-1.svg";
import ilustration_2 from "images/ilustration-2.svg";
import ilustration_3 from "images/ilustration-3.svg";

const WhoCanJoinSection = () => {
  return (
    <div className="bg-[#f7f7f7] md:px-24">
      <section className="text-center p-6">
        <h1 className="text-2xl font-extrabold font-mono uppercase md:text-3xl">
          Who Can <span className="text-primary">Join</span> This Training
        </h1>
        <p className="my-6 text-gray-600 md:mx-14">
          Anyone can join this course irrespective of what they are doing
          currently. Our target candidates includes serving NYSC members, recent
          graduates, as well as third and final year student of Nigeria
          Universities and Polytechnics. Preference will be given to Computer /
          Physical Science and Engineering.
        </p>
        <p className="text-primary rounded-full px-3 py-3 font-bold hover:text-lg md:w-1/3 md:mx-auto">
          <a href="/about">Learn more about this training</a>
        </p>
      </section>

      <section className="flex flex-col md:flex-row text-center p-6">
        <div className="flex-1 p-3">
          <img
            className="w-8/12 mx-auto"
            src={ilustration_1}
            alt="Ilustration-1"
          />
          <h2 className="font-bold m-2">Comprehensive training</h2>
          <p className="text-gray-600">
            A full-fledged comprehensive Cybersecurity Training, giving your
            everything about the basics and core subject.
          </p>
        </div>

        <div className="flex-1 p-3">
          <img
            className="w-8/12 mx-auto"
            src={ilustration_2}
            alt="Ilustration-2"
          />
          <h2 className="font-bold m-2">Interact with mentors</h2>
          <p className="text-gray-600">
            Live online and Physical classes where you can ask doubts and
            queries. You can also connect with mentors after classes to help
            your career.
          </p>
        </div>

        <div className="flex-1 p-3">
          <img
            className="w-8/12 mx-auto"
            src={ilustration_3}
            alt="Ilustration-3"
          />
          <h2 className="font-bold m-2">Your dream job</h2>
          <p className="text-gray-600">
            We'll be there till the end, helping you get a job you always
            deserved. We've got your back.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhoCanJoinSection;
