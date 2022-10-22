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
          Anyone can join this course irrespective of what they are doing currently.
          Our target candidates include Secondary school leavers, University graduates and undergraduates, and working professionals in any field including Science and Engineering, Intelligence security services, Financial services, and Legal services.
          The qualification to participate in the course include basic computer literacy,
          general education up to school certificate level, and
          digital sciences and access to a computer or smart  mobile device to access the Internet.
        </p>
        {/* <p className="text-primary rounded-full px-3 py-3 font-bold text-xl md:w-8/12 md:mx-auto">
          <a href="/about">About This Training  -- Oriental Cybersecurity Training and Mentorship Programme</a>
        </p>
        <p className="my-6 text-gray-600 text-justify md:mx-14">
          Oriental CyberSecurity Training and Mentorship Programme is a programme established and organized by a team of Nigerian Cybersecurity experts based in Nigeria, Canada and Europe to deliver a first-hand training and mentorship programme on Information/Cybersecurity to  interested Nigerians who are ready to acquire basic skills on info/Cybersecurity to enable them protect and defend themselves and organizations against cyber attacks and possibly begin the journey of making a career in the interesting and highly rewarding field  of Info/Cybersecurity.
          The core benefit is for the participants to acquire skills and to build professional networks that would enable them to grow and build a career in the field.
        </p>
        <a className="mb-6" href="/about">
					<button className="rounded-full bg-primary text-white px-7 py-3 font-bold text-xs w-1/2 hover:drop-shadow-lg md:w-1/4">
						Learn More
					</button>
				</a> */}
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
