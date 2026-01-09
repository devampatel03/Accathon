import React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Footer4 } from '../components/Footer';

export const GuidelinesComponent: React.FC<{}> = () => {
    return (
        <>
            <Navbar13 />

            <section className="px-[5%] mt-5 -mb-8 py-3 md:py-5 lg:py-8 bg-blue-100">
                <div className="container max-w-lg text-center">
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                        Rules & Regulations for ACCATHON 2.0
                    </h3>
                </div>
            </section>

            <section className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="bg-blue-200 p-12 rounded-3xl">
                        <p className="md:text-md">
                            • The number of members required per group is 4 (2 members from Commerce or Management fields and 2 from technological background).<br /><br />

                            • The Google form has to be filled by the Team Leader only who will have to provide all the details of the other team members.<br /><br />

                            • A screenshot of the payment must also be attached to the Google form.<br /><br />

                            • The last day for registration will be 26th January, 2025.<br /><br />

                            • The Theme for the event will be:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;For UG: Intelligent Financial Modelling and Stock Market Analysis<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;For PG: Forensic Accounting and Fraud Detection<br /><br />

                            • Round I (Online) will take place on 6th February 2025 and Round II at (Nirma University) will take place on 6th – 7th March 2025.<br /><br />

                            • Round I will be an online presentation of the possible solution to the problem statement given to the students. The specific topic will be provided 2 days prior to Round I.<br /><br />

                            • The time limit for the online presentations will be 15 minutes.<br /><br />

                            • 5 teams per theme will be shortlisted for Round II by the panel based on the evaluation criteria (5 from UG and 5 from PG).<br /><br />

                            • The criteria would be the originality of the idea, its level of complexity, the clarity and comprehensiveness of the presentation in the prescribed format, its feasibility, potential widespread impact, practicality, sustainability, user experience, and the possibility of future development.<br /><br />

                            • In Round II the participants are required to develop a Mobile App or Website related to the problem statement in relation to the specific theme.<br /><br />

                            • The time provided for this would be 12 hours in Offline mode. Post 12 hours, the final evaluation will take place.<br /><br />

                            • In Round II the teams are required to address the problem and its importance, new solutions or technology being offered, and the business model that accompanies it.<br /><br />

                            • It is mandatory for all participants to possess a college ID for participation in Accathon.<br /><br />

                            • To and fro travel, accommodation, and meals would be reimbursed for the participants attending the offline round.
                        </p>
                    </div>
                </div>
            </section>

            <Footer4 />
        </>
    );
};
