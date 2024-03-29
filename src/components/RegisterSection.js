import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { usePaystackPayment } from 'react-paystack'
import ProgressBar from './ProgressBar';

const RegisterSection = () => {
   // states htmlFor storing form data
   const [formInputData, setFormInputData] = useState({
      candidatesName: '', email: '', phone: '', levelOfEducation: '',
      institution: '', courseOfStudy: '', stateOfResidence: '', locationType: [],
      gender: '', higherDegreeType: '', country: '', otherLevelOfEducation: '',
      OtherhigherDegreeType: ''
   });
   // States htmlFor checking the errors
   const [submitted, setSubmitted] = useState(false);
   const [isEmailInUse, setEmailInUse] = useState(false);
   const [paymentMethod, setPaymentMethod] = useState("");
   const [bankTransferReady, setBankTransferReady] = useState(false);

   const handleFormInput = (e) => {
      if (e.target.name === "levelOfEducation" && e.target.value === "Secondary School") {
         setFormInputData({
            ...formInputData,
            [e.target.name]: e.target.value,
            courseOfStudy: "Null"
         });
      } else {
         setFormInputData({
            ...formInputData,
            [e.target.name]: e.target.value
         });
      }
   }

   const [uploadedReceiptImg, setUploadedReceiptImg] = useState();
   const [submittedReceipt, setSubmittedReceipt] = useState(false);
   const handleReceiptUpload = (e) => {
      setUploadedReceiptImg(e.target.files[0]);
   }

   const handleSubmitReceiptUpload = (e) => {
      e.preventDefault();
      if (!uploadedReceiptImg){
         Swal.fire({
            title: 'Error!',
            text: 'No file selected',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
      }
      setSubmittedReceipt(true);
      const reader = new FileReader();
      reader.readAsDataURL(uploadedReceiptImg);
      reader.onloadend = () => {
         uploadReceipt(reader.result);
      };
      reader.onerror = () => {
         setSubmittedReceipt(false);
         Swal.fire({
            title: 'Error!',
            text: 'Something went wrong',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
      };
   }

   const uploadReceipt = (base64EncodedImage) => {
      /**
       * Send post request to the server to confirm 
       * email address have been used
       */
      (async () => {
         const rawResponse = await fetch('/api/upload-receipt', {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               receipt: base64EncodedImage,
               email: formInputData.email
            })
         });
         const content = await rawResponse.json();
         setSubmittedReceipt(false);
         if (content.error) {
            Swal.fire({
               title: 'Error!',
               text: 'Something went wrong',
               icon: 'error',
               confirmButtonText: 'Ok'
            });
         } else {
            Swal.fire({
               title: 'Success!',
               text: content.message,
               icon: 'success',
               confirmButtonText: 'Ok'
            });
            setUploadedReceiptImg(null);
            setBankTransferReady(!bankTransferReady);
         }

      })();
   }

   const handleSelectLocationType = (e) => {
      if (e.target.checked && !formInputData.locationType.includes(e.target.value)) {
         setFormInputData({
            ...formInputData,
            locationType: [
               ...formInputData.locationType,
               e.target.value
            ]
         });
      }

      if (!e.target.checked && formInputData.locationType.includes(e.target.value)) {
         const newLocations = formInputData.locationType.filter((location) => location !== e.target.value);

         setFormInputData({
            ...formInputData,
            locationType: [...newLocations]
         });
      }
   }

   // Paystack public key
   const publicKey = "pk_live_7339dd1522fc5fec5dc85dd9bfee3dabcde13cfd";
   const paymentConfig = {
      email: formInputData.email,
      amount: (14500) * 100,
      metadata: {
         name: formInputData.candidatesName,
         phone: formInputData.phone,
      },
      publicKey
   };
   // Initailize Paystack
   const initializePayment = usePaystackPayment(paymentConfig);

   // Handling the form submission
   const handleSubmit = (e) => {
      e.preventDefault();

      // make sure compulsory inputs are not empty
      if (formInputData.candidatesName === '' ||
         formInputData.email === '' || formInputData.phone === '' ||
         formInputData.levelOfEducation === '' || formInputData.courseOfStudy === '' ||
         formInputData.country === '' || formInputData.gender === '') {
         setSubmitted(false);
         Swal.fire({
            title: 'Error!',
            text: 'Please fill all the required fields',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
         return false;
      }
      // validate email address
      if (!validateEmail(formInputData.email)) {
         setSubmitted(false);
         Swal.fire({
            title: 'Error!',
            text: 'Invalid email address',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
         return false;
      }

      // validate whether email is in use or not
      if (isEmailInUse) {
         setSubmitted(false);
         Swal.fire({
            title: 'Error!',
            text: 'Email address already in use by another candidate',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
         return false;
      }

      // validate preferred method of attendance \
      if (!formInputData.locationType.length) {
         setSubmitted(false);
         Swal.fire({
            title: 'Error!',
            text: 'Select a preferred method of attendance',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
         return false;
      }

      if (formInputData.locationType.includes('Physical @ Lagos') &&
         formInputData.locationType.includes('Physical @ Enugu')) {
         setSubmitted(false);
         Swal.fire({
            title: 'Error!',
            text: 'You cannot select two physical locations at a time',
            icon: 'error',
            confirmButtonText: 'Ok'
         });
         return false;
      }

      // make sure a level of education is specified if none is selected 
      // from the list
      if (formInputData.levelOfEducation === 'Other') {
         if (formInputData.otherLevelOfEducation) {
            setFormInputData({
               ...formInputData,
               levelOfEducation: formInputData.otherLevelOfEducation
            });
         } else {
            Swal.fire({
               title: 'Error!',
               text: 'Please give details of your highest education level',
               icon: 'error',
               confirmButtonText: 'Ok'
            });
            return false;
         }
      }

      // make sure a higher degree type is specified if none is selected 
      // from the list
      if (formInputData.higherDegreeType === 'Other') {
         if (formInputData.OtherhigherDegreeType) {
            setFormInputData({
               ...formInputData,
               higherDegreeType: formInputData.OtherhigherDegreeType
            });
         } else {
            Swal.fire({
               title: 'Error!',
               text: 'Please give details of your higher degree type',
               icon: 'error',
               confirmButtonText: 'Ok'
            });
            return false;
         }
      }

      // make sure candidate selects state of residence if country is nigeria.
      if (formInputData.country === "Nigeria") {
         if (!formInputData.stateOfResidence) {
            Swal.fire({
               title: 'Error!',
               text: 'Please select state of residence.',
               icon: 'error',
               confirmButtonText: 'Ok'
            });
            return false;
         }
      }

      if (!submitted) {
         // start the progress bar
         setSubmitted(true);
         return false;
      }

      // check if candidate selected a payment method
      if (!paymentMethod) {
         alert("Please select a payment method to proceed");
         return false;
      }


      const storeDataToDB = (reference) => {
         // send form data as post request to the server
         (async () => {
            const rawResponse = await fetch('/api/candidate', {
               method: 'POST',
               headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                  ...formInputData,
                  levelOfEducation: (formInputData.levelOfEducation === "Other") ?
                     formInputData.otherLevelOfEducation : formInputData.levelOfEducation,
                  paymentMethod: (reference.paymentMethod) ? reference.paymentMethod : "Card Payment",
                  paymentStatus: reference.status,
                  payAmount: 14500
               })
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
                  candidatesName: '', phone: '', levelOfEducation: '',
                  institution: '', courseOfStudy: '', stateOfResidence: '', locationType: '',
                  gender: '', higherDegreeType: '', country: ''
               })
               if (paymentMethod === "Card Payment") {
                  Swal.fire({
                     title: 'Great!',
                     text: 'Registration Successful',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                  })
               } else {
                  setBankTransferReady(true);
               }

            }
         })();
      }

      // Initailize Paystack if payment is by card
      if (paymentMethod === 'Card Payment') {
         initializePayment(storeDataToDB, () => alert('Payment Cancelled'))
      } else {
         // create a new transaction reference if the user is paying with bank transfer
         const reference = {
            reference: `TF${(new Date()).getTime().toString()}`,
            status: 'Pending',
            paymentMethod: 'Bank Transfer'
         };
         storeDataToDB(reference);
      }

   }

   const validateEmail = (email) => {
      return String(email)
         .toLowerCase()
         .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         );
   };

   const checkEmailInUseStatus = (e) => {
      if (!e.target.value) {
         // exit
         return false;
      }
      /**
       * Send post request to the server to confirm 
       * email address have been used
       */
      (async () => {
         const rawResponse = await fetch('/api/verify-email', {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: e.target.value
            })
         });
         const content = await rawResponse.json();
         if (content.error) {
            setEmailInUse(true);
            alert(content.message);
         } else {
            setEmailInUse(false);
         }

      })();
   }

   return (
      <div id="register" className="bg-primary lg:px-24">
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
               <p className="font-bold mb-3">
                  With ₦14,500, reserve your spot today.
               </p>
            </div>
            <div className="md:w-2/3">
               <form method="POST">
                  <div className="mb-6">
                     <label className="font-semibold text-gray-600 py-2">Full Name<abbr title="required" className="text-red-500">*</abbr></label>
                     <input
                        onChange={handleFormInput} value={formInputData['candidatesName']}
                        title="Enter your full name"
                        type="text"
                        name="candidatesName"
                        placeholder="Full Name"
                        className="
                        w-full
                        rounded-lg
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
                  <div className="mb-6">
                     <label className="font-semibold text-gray-600 py-2">Email Address<abbr title="required" className="text-red-500">*</abbr></label>
                     <input
                        onChange={handleFormInput} value={formInputData['email']}
                        onBlur={checkEmailInUseStatus}
                        title="Enter your email address"
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        className="
                        w-full
                        rounded-lg
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
                  <div className="mb-6">
                     <label className="font-semibold text-gray-600 py-2">Phone<abbr title="required" className="text-red-500">*</abbr></label>
                     <input
                        onChange={handleFormInput} value={formInputData['phone']}
                        title="Enter your phone number (WhatsApp)"
                        type="text"
                        name="phone"
                        placeholder="Phone No. (WhatsApp)"
                        className="
                        w-full
                        rounded-lg
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
                  <div className="mb-6 md:mt-6">
                     <label className="font-semibold text-gray-600 py-2">Gender<abbr title="required" className="text-red-500">*</abbr></label>
                     <select
                        onChange={handleFormInput}
                        value={formInputData['gender']}
                        type="text"
                        name="gender"
                        className="
                        w-full
                        rounded-lg
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                     >
                        <option disabled value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                  </div>
                  <div className="mb-6">
                     <label className="font-semibold text-gray-600 py-2">Highest level of education<abbr title="required" className="text-red-500">*</abbr></label>
                     <select
                        onChange={handleFormInput}
                        value={formInputData['levelOfEducation']}
                        title="Select your highest level of education"
                        type="text"
                        name="levelOfEducation"
                        className="
                        w-full
                        rounded-lg
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                     >
                        <option disabled value="">Highest level of education</option>
                        <option value="Secondary School">Secondary School</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="First Degree">First Degree</option>
                        <option value="Higher Degree">Higher Degree</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>
                  {
                     // show only when level of education is higher degree
                     (formInputData.levelOfEducation === "Higher Degree") ?
                        <div className="mb-6">
                           <select
                              onChange={handleFormInput}
                              value={formInputData['higherDegreeType']}
                              title="Select higher degree type"
                              type="text"
                              name="higherDegreeType"
                              className="
                                 w-full
                                 rounded-lg
                                 py-3
                                 px-[14px]
                                 text-body-color text-base
                                 border border-[f0f0f0]
                                 outline-none
                                 focus-visible:shadow-none
                                 focus:border-primary
                              "
                           >
                              <option disabled value="">Select higher degree type</option>
                              <option value="Masters">Masters</option>
                              <option value="Doctorate">Doctorate</option>
                              <option value="Other">Other</option>
                           </select>
                        </div> : ''
                  }

                  {
                     // Let candidate specify a level of education not on the list
                     // when "Other" is specified.
                     (formInputData.levelOfEducation === "Other") ?
                        <div className="mb-6 md:mt-6">
                           <input
                              onChange={handleFormInput}
                              title="Specify the your level of education not in the list above"
                              type="text"
                              name="otherLevelOfEducation"
                              placeholder="Give details of other education"
                              className="
                                 w-full
                                 rounded-lg
                                 py-3
                                 px-[14px]
                                 text-body-color text-base
                                 border border-[f0f0f0]
                                 outline-none
                                 focus-visible:shadow-none
                                 focus:border-primary
                                 "
                           />
                        </div> : ''
                  }

                  {
                     // Let candidate specify a level of education not on the list
                     // when "Other" is specified.
                     (formInputData.higherDegreeType === "Other") ?
                        <div className="mb-6 md:mt-6">
                           <input
                              onChange={handleFormInput}
                              title="Specify the type of higher degree in the list above"
                              type="text"
                              name="OtherhigherDegreeType"
                              placeholder="Give details of other higher degree type"
                              className="
                                 w-full
                                 rounded-lg
                                 py-3
                                 px-[14px]
                                 text-body-color text-base
                                 border border-[f0f0f0]
                                 outline-none
                                 focus-visible:shadow-none
                                 focus:border-primary
                                 "
                           />
                        </div> : ''
                  }

                  {
                     // show only when level of education not secondary school
                     !(formInputData.levelOfEducation === "" ||
                        formInputData.levelOfEducation === "Secondary School") ?
                        <div className="mb-6">
                           <label className="font-semibold text-gray-600 py-2">Course of study<abbr title="required" className="text-red-500">*</abbr></label>
                           <input
                              onChange={handleFormInput} value={formInputData['courseOfStudy']}
                              title="Enter your course of study"
                              type="text"
                              name="courseOfStudy"
                              placeholder="Course of study"
                              className="
                                 w-full
                                 rounded-lg
                                 py-3
                                 px-[14px]
                                 text-body-color text-base
                                 border border-[f0f0f0]
                                 outline-none
                                 focus-visible:shadow-none
                                 focus:border-primary
                                 "
                           />
                        </div> : ''
                  }

                  <div className="mb-6 md:mt-6">
                     <input
                        onChange={handleFormInput} value={formInputData['institution']}
                        type="text"
                        name="institution"
                        placeholder="Last School / Institution Attended (optional)"
                        className="
                        w-full
                        rounded-lg
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
                  <div className="mb-6 md:mt-6">
                     <label className="font-semibold text-gray-600 py-2">Country of residence<abbr title="required" className="text-red-500">*</abbr></label>
                     <select
                        onChange={handleFormInput}
                        value={formInputData['country']}
                        type="text"
                        name="country"
                        className="
                        w-full
                        rounded-lg
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                     >
                        <option disabled value="">Select country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                        <option value="Korea, Republic of">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                     </select>
                  </div>
                  {
                     // show state of residence only when country is nigeria
                     (formInputData.country === "Nigeria") ?
                        <div className="mb-6">
                           <label className="font-semibold text-gray-600 py-2">State of residence<abbr title="required" className="text-red-500">*</abbr></label>
                           <select
                              onChange={handleFormInput} value={formInputData['stateOfResidence']}
                              type="email"
                              name="stateOfResidence"
                              className="
                                 w-full
                                 rounded-lg
                                 py-3
                                 px-[14px]
                                 text-body-color text-base
                                 border border-[f0f0f0]
                                 outline-none
                                 focus-visible:shadow-none
                                 focus:border-primary
                                 "
                           >
                              <option disabled value="">Select state of residence</option>
                              <option value="ABUJA FCT">ABUJA FCT</option>
                              <option value="ABIA">ABIA</option>
                              <option value="ADAMAWA">ADAMAWA</option>
                              <option value="AKWA IBOM">AKWA IBOM</option>
                              <option value="ANAMBRA">ANAMBRA</option>
                              <option value="BAUCHI">BAUCHI</option>
                              <option value="BAYELSA">BAYELSA</option>
                              <option value="BENUE">BENUE</option>
                              <option value="BORNO">BORNO</option>
                              <option value="CROSS RIVER">CROSS RIVER</option>
                              <option value="DELTA">DELTA</option>
                              <option value="EBONYI">EBONYI</option>
                              <option value="EDO">EDO</option>
                              <option value="EKITI">EKITI</option>
                              <option value="ENUGU">ENUGU</option>
                              <option value="GOMBE">GOMBE</option>
                              <option value="IMO">IMO</option>
                              <option value="JIGAWA">JIGAWA</option>
                              <option value="KADUNA">KADUNA</option>
                              <option value="KANO">KANO</option>
                              <option value="KATSINA">KATSINA</option>
                              <option value="KEBBI">KEBBI</option>
                              <option value="KOGI">KOGI</option>
                              <option value="KWARA">KWARA</option>
                              <option value="LAGOS">LAGOS</option>
                              <option value="NASSARAWA">NASSARAWA</option>
                              <option value="NIGER">NIGER</option>
                              <option value="OGUN">OGUN</option>
                              <option value="ONDO">ONDO</option>
                              <option value="OSUN">OSUN</option>
                              <option value="OYO">OYO</option>
                              <option value="PLATEAU">PLATEAU</option>
                              <option value="RIVERS">RIVERS</option>
                              <option value="SOKOTO">SOKOTO</option>
                              <option value="TARABA">TARABA</option>
                              <option value="YOBE">YOBE</option>
                              <option value="ZAMFARA">ZAMFARA</option>
                           </select>
                        </div> : ''
                  }

                  <div className="mb-6">
                     <label className="font-semibold text-gray-600 py-2" title="How do you want to participate in this programme">Preferred mode of attendance<abbr title="required" className="text-red-500">*</abbr></label>
                     <div className="flex items-center">
                        <input onChange={handleSelectLocationType} id="checked-checkbox" type="checkbox" value="Remote via Zoom" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500  focus:ring-2" />
                        <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900">Remote via Zoom</label>
                     </div>
                     <div className="flex items-center">
                        <input onChange={handleSelectLocationType} id="checked-checkbox" type="checkbox" value="Physical @ Lagos" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500  focus:ring-2" />
                        <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900">Physical at the Enugu office</label>
                     </div>
                     <div className="flex items-center">
                        <input onChange={handleSelectLocationType} id="checked-checkbox" type="checkbox" value="Physical @ Enugu" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500  focus:ring-2" />
                        <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900">Physical at the Lagos office</label>
                     </div>
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
                        Proceed with Payment
                     </button>
                  </div>
               </form>
            </div>
         </section >

         <div data-modal-show="true" aria-hidden="true" className={`${submitted ? 'flex' : 'hidden'} modal bg-overlay flex flex-col justify-start items-center fixed z-50 h-full w-full inset-0 visible opacity-100 transition-all-300 overflow-auto`}>
            <div className="flex justify-center my-10 w-full">
               <div className="scale-100 w-[400px] min-w-[250px] bg-gray-200 rounded-lg px-3 pb-3 pt-7 mx-3 md:m-5 relative">
                  <div className="flex flex-col gap-5">
                     <h1 className="text-green-600 text-sm font-bold tracking-normal leading-tight">Choose your payment method to proceed with payment</h1>
                     <small className="text-gray-500">Total: </small>
                     <span className="text-4xl text-center font-medium tracking-tight text-gray-500">₦14,500</span>
                     <div className="flex space-x-5 justify-center">
                        <a href="#paystack">
                           <button onClick={() => setPaymentMethod("Card Payment")} className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-2 border-2 hover:border-primary focus:border-primary">
                              <div className="logo">
                                 <ul className="flex">
                                    <li className="mx-2">
                                       <b><small>Debit/Credit card</small></b>
                                       <img className="w-36" src="https://www.clipartmax.com/png/middle/255-2550378_credit-card-logo-credit-card-icons-png.png" alt="" />
                                    </li>
                                 </ul>
                              </div>
                           </button>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="#bank-transfer" download>
                           <button onClick={() => setPaymentMethod("Bank Transfer")} className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-2 border-2 hover:border-primary focus:border-primary">
                              <div className="text">
                                 <p className="text-xs font-semibold text-gray-900 p-3">Bank Transfer</p>
                              </div>
                           </button>
                        </a>
                     </div>
                     <button
                        onClick={handleSubmit}
                        className="submit-button px-4 py-3 rounded-full bg-blue-300 text-teal-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                        Pay now
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {
            submitted &&
            <div modal-backdrop="" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
         }


         <div data-modal-show="true" aria-hidden="true" className={`${bankTransferReady ? 'flex' : 'hidden'} modal bg-overlay flex flex-col justify-start items-center fixed z-50 h-full w-full inset-0 visible opacity-100 transition-all-300 overflow-auto`}>
            <div className="flex justify-center my-10 w-full">
               <div className="scale-100 w-[600px] min-w-[250px] bg-gray-200 rounded-lg px-3 pb-3 pt-7 mx-3 md:m-5 relative">
                  <button onClick={() => setBankTransferReady(!bankTransferReady)} className="absolute top-0 right-0 sm:text-white sm:bg-primary sm:hover:bg-teal-500 transition-all-300 sm:top-[-10px] sm:right-[-10px] sm:rounded-lg p-2">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                     </svg>
                  </button>
                  <div className="flex flex-col gap-5">
                     <h1 className="text-green-700 text-lg text-center font-bold tracking-normal leading-tight">
                        Local Bank Transfer (Fee: ₦14,500)
                     </h1>
                     <div className="grow ml-6">
                        <p className="font-bold mb-1">Bank Name</p>
                        <p className="text-gray-500"> Zenith bank</p>
                     </div>
                     <div className="grow ml-6">
                        <p className="font-bold mb-1">Accout Name</p>
                        <p className="text-gray-500">Foretrust Digital Consulting Ltd</p>
                     </div>
                     <div className="grow ml-6">
                        <p className="font-bold mb-1">Account Number</p>
                        <p className="text-gray-500">1014784795</p>
                     </div>

                     <div className="mx-6 rounded-md border border-gray-100 bg-white p-4 shadow-md">
                        <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer" style={{ backgroundImage: `url(${uploadedReceiptImg ? URL.createObjectURL(uploadedReceiptImg) : ''})` }}>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-teal-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                           </svg>
                           <span className="text-gray-600 font-medium">Select payment receipt</span>
                        </label>
                        <input onChange={handleReceiptUpload} id="upload" type="file" className="hidden" />
                        {
                           // show the progress bar if data is submited and being processed
                           (submittedReceipt) ? (
                              <ProgressBar />
                           ) : ""
                        }
                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                           <button onClick={handleSubmitReceiptUpload} className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button>
                        </div>
                     </div>

                     <p className="ml-6 mt-8">Payment receipts with your email as description can also be sent to
                        <a href="mailto:info@foretrustgroup.com" className="text-blue-500"> info@foretrustgroup.com</a>
                        <br />
                        Or WhatsApp <a href="https://api.whatsapp.com/send?phone=2348033034250" className="text-green-500"> +234 803 303 4250</a>
                     </p>
                     <button onClick={() => { alert("Registration successful with payment verification pending"); setBankTransferReady(!bankTransferReady) }} className="btn-close-modal btn-effect w-max ml-auto bg-primary text-white uppercase font-bold rounded-lg p-2 px-3" href="/#">
                        <span className="text-center">Save & Exit</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {
            bankTransferReady &&
            <div modal-backdrop="" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
         }
      </div >
   );
};

export default RegisterSection;
