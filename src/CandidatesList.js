import React, { useEffect, useState } from 'react';
import NavBar from "components/NavBar";
import ProgressBar from 'components/ProgressBar';
import waitingIllustration from 'images/waiting.svg';

const CandidatesList = () => {
    const [isDataReady, setIsDataReady] = useState(false);
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                                    <th className="px-4 py-3">Meeting Choice</th>
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
                                                        <td className="px-4 py-3 text-sm border">{candidate.locationType}</td>
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
        </>
    )
}

export default CandidatesList;