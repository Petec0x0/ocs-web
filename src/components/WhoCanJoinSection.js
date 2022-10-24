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
        <p className="my-6 text-gray-600 text-justify md:mx-14">
          Replace the entire content of this section with this:
          Anyone can join this course irrespective of what they are doing currently.
          Our target candidates include Secondary school leavers,
          University graduates / undergraduates, working professionals in any
          field including Science, Technology, Engineering, Intelligence / Security services,
          Financial services, Legal services and others.
          Candidates participating in the training are expected to possess and
          fulfill the following requirements:
        </p>
        <ul className="my-6 text-gray-600 text-left list-disc list-inside md:mx-14">
          <li>Basic computer literacy</li>
          <li>General education up to school certificate level</li>
          <li>An Intenet-enabled computer or smart  mobile device</li>
          <li>Easy access to the Internet.</li>
          <li>Ability to Communicate (Read and Write) in English Language </li>
          <li>Dedicate  2hrs (12pm - 2pm) every Saturday to participate in instructor-led training </li>
          <li>Have a minimum of 15hrs free per week for research, reading of training materials and carrying out assignments.</li>
        </ul>
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
            Comprehensive Cybersecurity Training giving you everything about the basics and the core subject.
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
            Live, online and physical classes where you can receive lectures 
            as well as ask questions and receive answers. 
            You can also connect with mentors after classes to help your career.
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
