import React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Footer4 } from '../components/Footer';

import { Header1 } from '../components/AboutInfo';


export const GuidelinesComponent: React.FC<{}> = () => {
    return (
        <>
    
        <Navbar13/>
        <section id="relume" className="px-[5%] mt-5 -mb-8 py-3 md:py-5 lg:py-8 bg-blue-100">
        <div className="container max-w-lg text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">Rules & Regulations for ACCATHON 2.0
          </h3>
          
        </div>
      </section>
    
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className=" gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="bg-blue-200 p-12 rounded-3xl">
          {/* <h1
              className="mb-5 text-4xl font-bold md:text-6xl lg:text-8xl text-center"
              style={{ color: "black", textShadow: "5px 5px 6px #868b9a" }}
            >
              headinf
            </h1> */}
            <p className="md:text-md">
                                • The number of members required per group is 4.<br/><br/>
                                • There must be at least 2 members from Commerce or Management fields.<br/><br/>
                                • The Google form has to be filled by the Team Leader only who will have to provide all the details of the other team members.<br/><br/>
                                • A screenshot of the payment must also be attached to the Google form.<br/><br/>
                                • The last day for registration will be 15th December, 2024.<br/><br/>
                                • The Theme for the event will be common for both rounds which are:<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;(i) GST and<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;(ii) Forensic Accounting<br/>
                                    Students can select the theme of Interest at the time of registration.<br/><br/>
                                • Round I (Online) will take place on 4th January 2025 and Round II at (Nirma University) will take place on 23-24th January 2025.<br/><br/>
                                • Round I will be an online presentation of the possible solution to the problem statement given to the students. The Specific topic will be provided 2 days prior to Round I.<br/><br/>
                                • The time limit for the online presentations will be 15 minutes.<br/><br/>
                                • 5 teams per theme will be shortlisted for Round II by the panel based on the evaluation criteria.<br/><br/>
                                • The criteria would be the originality of the idea, its level of complexity, the clarity and comprehensiveness of the presentation in the prescribed format, its feasibility, potential widespread impact, practicality, sustainability, user experience, and the possibility of future development.<br/><br/>
                                • In Round II the participants are required to develop a Mobile App or Website related to the problem statement in relation to the specific theme.<br/><br/>
                                • The time provided for this would be 14 hours in Offline mode. Post 14 hours, the final evaluation will take place.<br/><br/>
                                • In Round II the teams are required to address the problem and its importance, new solutions or technology being offered, and the business model that accompanies it.<br/><br/>
                                • It is mandatory for all participants to possess a college ID for participation in Accathon.<br/><br/>
                                • To and fro travel (sleeper class), accommodation, and meals would be reimbursed for the participants attending the offline round.<br/>
                            </p>
          </div>
          
        </div>
      </div>
    </section>
        <Footer4/>
        </>
    )
};

