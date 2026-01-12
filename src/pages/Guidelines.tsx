import React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Footer4 } from '../components/Footer';

const rules = [
  'Each group must consist of 4 members (must include at least 2 members from Commerce or Management fields).',
  'Prize Money: Winner - ₹20,000 & Runner Up - ₹15,000.',
  'UG student groups should consist of only UG students.',
  'PG student groups should consist of only PG students.',
  'The Google Form must be filled by the Team Leader only, who must provide details of all team members.',
  'A screenshot of the payment must be attached to the Google Form and must also be mailed to kuldip.mali@nirmauni.ac.in and sac_icnu@nirmauni.ac.in.',
  'Themes: For UG Students - Intelligent Financial Modelling & Stock Market Analysis.',
  'Themes: For PG Students - Forensic Accounting and Fraud Detection.',
  'Round I (Online) will take place on 6th February, 2026 and Round II (Offline at Nirma University) will take place on 6th–7th March, 2026.',
  'Round I will be an online presentation of the possible solution to the problem statement given to the participants. Detailed guidelines will be provided 2 days prior to Round I.',
  'The time limit for the online presentation will be 15 minutes.',
  '10 teams will be shortlisted for Round II by the panel based on evaluation criteria (5 UG teams and 5 PG teams).',
  'Evaluation criteria include originality of the idea, level of complexity, clarity and comprehensiveness of the presentation in the prescribed format, feasibility, potential widespread impact, practicality, sustainability, user experience, and scope for future development.',
  'In Round II, participants are required to develop a Mobile App or Website related to the given problem statement in relation to the specific theme.',
  'The time provided for Round II development will be 12 hours in offline mode, after which final evaluation will take place.',
  'In Round II, teams must address the problem and its importance, proposed new solutions or technology, and the accompanying business model.',
  'It is mandatory for all participants to carry a valid college ID.',
  'To and fro travel (to the extent approved by the organising team), accommodation, and meals will be reimbursed for participants attending the offline round.',
  'Registration fees is refundable only if the event is cancelled by the organisers.'
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
