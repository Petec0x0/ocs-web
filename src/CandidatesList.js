import React, { useEffect, useState } from 'react';
import NavBar from "components/NavBar";
import Alert from 'components/Alert';
import ProgressBar from 'components/ProgressBar';
import waitingIllustration from 'images/waiting.svg';

const CandidatesList = () => {
    useEffect(() => {
        // restart the backend dyno if it is asleep
        fetch('/api/startup');
    }, [])

    const [isDataReady, setIsDataReady] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [alertMsg, setAlertMsg] = useState({ msg: '', color: '' });

    // states for storing form data
    const [formInputData, setFormInputData] = useState({
        email: '', password: ''
    });


    const handleFormInput = (e) => {
        setFormInputData({
            ...formInputData,
            [e.target.name]: e.target.value
        });
    }

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // make sure none of the inputs is empty
        if (formInputData.email === '' || formInputData.password === '') {
            setAlertMsg({ msg: "Please fill all the required fields", color: 'red' });
            setError(true);
            return false;
        }
        setError(false);
        setSubmitted(true);
        // send a post request to the server
        (async () => {
            const rawResponse = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formInputData.email,
                    password: formInputData.password
                })
            });
            const content = await rawResponse.json();
            // stop the progress bar
            setSubmitted(false);
            // check if there is an error in the response
            if (content.error) {
                setAlertMsg({ msg: content.message, color: 'red' });
                setError(true);
            } else {
                setIsAuthenticated(true);
            }
        })();
    }

    useEffect(() => {
        // make sure user is authenticated before sending request
        if (isAuthenticated) {
            // send a post request to the server to fetch customers
            (async () => {
                const rawResponse = await fetch('/api/candidate', {
                    method: 'GET',
                });
                const content = await rawResponse.json();

                // check if there is an error in the response
                if (content.error) {
                    alert(content.message);
                } else {
                    // update customers
                    setCandidates([...content.data])
                    // stop the progress bar
                    setIsDataReady(true);
                }
            })();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    return (
        <>
            <div className="px-8 md:px-24">
                <NavBar />
            </div>

            {/* <!-- component --> */}
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Email</th>
                                    <th className="px-4 py-3">Phone</th>
                                    <th className="px-4 py-3">Education Level</th>
                                    <th className="px-4 py-3">Higher Degree Level</th>
                                    <th className="px-4 py-3">Institution</th>
                                    <th className="px-4 py-3">Course of Study</th>
                                    <th className="px-4 py-3">Country</th>
                                    <th className="px-4 py-3">State</th>
                                    <th className="px-4 py-3">Attendance Choice</th>
                                    <th className="px-4 py-3">Payment Status</th>
                                    <th className="px-4 py-3">Payment Method</th>
                                    <th className="px-4 py-3">Pay Amount</th>
                                    <th className="px-4 py-3">Payment Receipt</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                                {
                                    // if data is not ready diplay spinners else diplay the table
                                    !isDataReady ? (
                                        <tr>
                                            <td>
                                                <ProgressBar />
                                            </td>
                                        </tr>
                                    ) : (
                                        // If there is no customer yet, display a message
                                        !(candidates === undefined || candidates.length === 0) ? (
                                            candidates.map((candidate, index) => {
                                                return (
                                                    <tr key={index} className="text-gray-700">
                                                        <td className="px-4 py-3 border">
                                                            <div className="flex items-center text-sm">
                                                                <div>
                                                                    <p className="font-semibold text-black">{candidate.candidatesName}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.email}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.phone}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.levelOfEducation}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.higherDegreeType}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.institution}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.courseOfStudy}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.country}</td>
                                                        <td className="px-4 py-3 text-ms font-semibold border">{candidate.stateOfResident}</td>
                                                        <td className="px-4 py-3 text-sm border">{candidate.locationType}</td>
                                                        <td
                                                            className={`px-4 py-3 text-white text-sm border ${(candidate.paymentStatus === "success") ? 'bg-green-500' : 'bg-yellow-300'}`}>
                                                            {candidate.paymentStatus}
                                                        </td>
                                                        <td className="px-4 py-3 text-sm border">{candidate.paymentMethod}</td>
                                                        <td className="px-4 py-3 text-sm border">₦{candidate.payAmount}</td>
                                                        <td className="px-4 py-3 text-sm border">
                                                            {
                                                                candidate.receipt ? 
                                                                <a className="text-blue-500" href={candidate.receipt.url}>View</a>
                                                                : ''
                                                            }
                                                        </td>
                                                        <td className="px-4 py-3 text-sm border">
                                                            {new Intl.DateTimeFormat("en-GB", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "2-digit"
                                                            }).format(new Date(`${candidate.createdAt}`))}
                                                        </td>
                                                    </tr>
                                                )
                                            })

                                        ) : ''

                                    )
                                }
                            </tbody>
                        </table>
                        {
                            (candidates === undefined || candidates.length === 0) ? (
                                <>
                                    <h3 className="text-center text-gray-600 p-4 text-lg">Registered candidates will appear here</h3>
                                    <div className="flex">
                                        <img className="self-center mx-auto" src={waitingIllustration} alt="illustration" />
                                    </div>
                                </>
                            ) : ''
                        }
                    </div>
                </div>
            </section>

            <div data-modal-show="true" aria-hidden="true" className={`${!isAuthenticated ? 'flex' : 'hidden'} modal bg-overlay flex flex-col justify-start items-center fixed z-50 h-full w-full inset-0 visible opacity-100 transition-all-300 overflow-auto`}>
                <div className="flex justify-center my-10 w-full">
                    <div className="scale-100 w-[400px] min-w-[250px] bg-gray-200 rounded-lg px-3 pb-3 pt-7 mx-3 md:m-5 relative">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="block font-bold text-xl">Security</span>
                            </div>
                            {
                                // show the alert message if the fields are left empty
                                (error) ? (
                                    <Alert errorMsg={alertMsg.msg} color={alertMsg.color} />
                                ) : ""
                            }
                            {
                                // show the progress bar if data is submited and being processed
                                (submitted) ? (
                                    <ProgressBar />
                                ) : ""
                            }
                            <div className="bg-white rounded-lg p-2 sm:p-5">
                                <div className="w-full text-xs">
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">Email Id <abbr title="required">*</abbr></label>
                                        <input type="email" onChange={handleFormInput} className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="email" />
                                    </div>
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">Password <abbr title="required">*</abbr></label>
                                        <input type="password" onChange={handleFormInput} className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="password" />
                                    </div>
                                </div>
                                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                    <button onClick={handleSubmit} className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Give me access</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                !isAuthenticated &&
                <div modal-backdrop="" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
            }
        </>
    )
}

export default CandidatesList;