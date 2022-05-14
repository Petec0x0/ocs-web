import React, { useState } from 'react';
import Swal from 'sweetalert2'
import ProgressBar from './ProgressBar';

const RegisterSection = () => {
   // states for storing form data
   const [formInputData, setFormInputData] = useState({
      candidatesName: '', email: '', phone: '', levelOfEducation: '',
      institution: '', courseOfStudy: '', stateOfResident: '', locationType: ''
   });
   // States for checking the errors
   const [submitted, setSubmitted] = useState(false);

   const handleFormInput = (e) => {
      setFormInputData({
         ...formInputData,
         [e.target.name]: e.target.value
      })
   }

   // Handling the form submission
   const handleSubmit = (e) => {
      e.preventDefault();
      // start the progress bar
      setSubmitted(true);
      // make sure none of the inputs is empty
      const isAnyFromEmpty = Object.values(formInputData).every(x => x === null || x === '');
      if (isAnyFromEmpty) {
         setSubmitted(false);
         Swal.fire({
            title: 'Error!',
            text: 'Please fill all the required fields',
            icon: 'error',
            confirmButtonText: 'Ok'
         })
      } else {
         // send form data as post request to the server
         (async () => {
            const rawResponse = await fetch('/api/candidate', {
               method: 'POST',
               headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(formInputData)
            });
            const content = await rawResponse.json();
            // stop the progress bar
            setSubmitted(false);
            // check if there is an error in the response
            if (content.error) {
               Swal.fire({
                  title: 'Error!',
                  text: content.message,
                  icon: 'error',
                  confirmButtonText: 'Ok'
               })
            } else {
               setFormInputData({
                  ...formInputData,
                  candidatesName: '', email: '', phone: '', levelOfEducation: '',
                  institution: '', courseOfStudy: '', stateOfResident: '', locationType: ''
               })
               Swal.fire({
                  title: 'Great!',
                  text: 'Registration Successful',
                  icon: 'success',
                  confirmButtonText: 'Cool'
               })
            }
         })();
      }
   }

   return (
      <div id="register" className="bg-primary md:px-24">
         <section className="flex flex-col p-8 md:p-20 md:flex-row">
            <div className="mx-auto md:w-1/3">
               <h1 className="text-3xl py-6 font-bold">
                  How you can{" "}
                  <span className="text-white">get started</span>
               </h1>
               <p className="text-gray-800 pb-6 md:pr-4">
                  Complete this quick process of entering your details and
                  wait for our callback. We will give you personalized
                  advice, answer all your queries and bring you a step
                  closer to becoming a Cybersecurity expert.
               </p>
            </div>
            <div className="md:w-2/3">
               <form method="POST">
                  <div className="mb-6">
                     <input
                        onChange={handleFormInput} value={formInputData['candidatesName']}
                        type="text"
                        name="candidatesName"
                        placeholder="Your Name"
                        className="
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
                  <div className="mb-6 md:inline">
                     <input
                        onChange={handleFormInput} value={formInputData['email']}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
                     />
                  </div>
                  <div className="mb-6 md:inline">
                     <input
                        onChange={handleFormInput} value={formInputData['phone']}
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
                     />
                  </div>
                  <div className="mb-6 md:mt-6">
                     <input
                        onChange={handleFormInput} value={formInputData['institution']}
                        type="text"
                        name="institution"
                        placeholder="Institution"
                        className="
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
                  <div className="mb-6 md:inline">
                     <input
                        onChange={handleFormInput} value={formInputData['levelOfEducation']}
                        type="text"
                        name="levelOfEducation"
                        placeholder="Level of education"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
                     />
                  </div>
                  <div className="mb-6 md:inline">
                     <input
                        onChange={handleFormInput} value={formInputData['courseOfStudy']}
                        type="text"
                        name="courseOfStudy"
                        placeholder="Course of study"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
                     />
                  </div>
                  <hr className="md:mt-6" />
                  <div className="mb-6 md:inline">
                     <input
                        onChange={handleFormInput} value={formInputData['stateOfResident']}
                        type="email"
                        name="stateOfResident"
                        placeholder="State of resident"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        "
                     />
                  </div>
                  <div className="mb-6 md:inline">
                     <select
                        onChange={handleFormInput}
                        defaultValue={formInputData['locationType']}
                        name="locationType"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        md:w-1/2
                        ">
                        <option disabled value="">Location choice</option>
                        <option value="Physical location">Physical location</option>
                        <option value="Remote">Remote</option>
                     </select>
                  </div>
                  {
                     // show the progress bar if data is submited and being processed
                     (submitted) ? (
                        <ProgressBar />
                     ) : ""
                  }
                  <div className="md:mt-6">
                     <button
                        onClick={handleSubmit}
                        className="rounded-full uppercase bg-black text-white px-7 py-3 font-bold text-xs hover:drop-shadow-lg">
                        Register
                     </button>
                  </div>
               </form>
            </div>
         </section>
         <p className="text-white text-center p-2"><a href="/candidates">View registered candidates</a></p>
      </div>
   );
};

export default RegisterSection;
