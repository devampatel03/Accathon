import React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Footer4 } from '../components/Footer';

const rules = [
    'Each group must consist of 4 members (2 from Commerce or Management fields and 2 from a technological background).',
    'UG student groups should consist of only UG students.',
    'PG student groups should consist of only PG students.',
    'The Google Form must be filled by the Team Leader only, who must provide details of all team members.',
    'A screenshot of the payment must be attached to the Google Form.',
    'Round I (Online) will take place on 6th February, 2026 and Round II (Offline at Nirma University) will take place on 6th–7th March, 2026.',
    'Round I will be an online presentation of the proposed solution to the problem statement. Detailed guidelines will be provided 2 days prior to Round I.',
    'The time limit for the online presentation will be 15 minutes.',
    'Evaluation criteria include originality of the idea, level of complexity, clarity and comprehensiveness of the presentation, feasibility, potential impact, practicality, sustainability, user experience, and scope for future development.',
    'In Round II, participants are required to develop a Mobile App or Website related to the given problem statement and theme.',
    'The time provided for Round II development will be 12 hours in offline mode, after which final evaluation will take place.',
    'In Round II, teams must address the problem significance, proposed solution or technology, and the accompanying business model.',
    'It is mandatory for all participants to carry a valid college ID.',
    'Travel, accommodation, and meals will be reimbursed for participants attending the offline round.'
];

export const GuidelinesComponent: React.FC = () => {
    return (
        <>
            <Navbar13 />

            <section className="px-[5%] mt-5 -mb-8 py-3 md:py-5 lg:py-8 bg-blue-100">
                <div className="container max-w-lg text-center">
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                        Rules & Regulations for ACCATHON
                    </h3>
                </div>
            </section>

            <section className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="bg-blue-200 p-12 rounded-3xl space-y-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-3">Themes</h4>
                            <ul className="list-disc list-inside space-y-2">
                                <li>UG Students: Intelligent Financial Modelling & Stock Market Analysis</li>
                                <li>PG Students: Forensic Accounting and Fraud Detection</li>
                            </ul>
                        </div>

                        <ul className="list-disc list-inside space-y-4 md:text-md">
                            {rules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Footer4 />
        </>
    );
};
