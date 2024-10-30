import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";

export const Card: React.FC<{ name: string; image: string; role: string; linkedin: string }> = ({ name, image, role, linkedin }) => {
    return (
        <>
            <div className="group before:hover: scale-90 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#2ca6f1] via-[#A4C7E0] to-[#5A8BB7] before:absolute before:top-0 w-80 h-72 relative bg-[#f5e4cfd5] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden shadow-lg">
                
                {/* Profile Image */}
                <div className=" w-36 h-36 mt-8 rounded-full border-4 border-[#FFFFFF] z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-10 transition-all duration-500 overflow-hidden">
                    <img src={image} className="w-full h-full object-cover" alt={`${name} profile`} />
                </div>

                {/* Name and Role */}
                <div className="z-10 group-hover:-translate-y-4 transition-all duration-500">
                    <span className="text-2xl font-semibold text-[#032547]">{name}</span>
                    <p className="text-[#2e3542]">{role}</p>
                </div>

                {/* Connect Button (Initially Hidden) */}
                <a className="bg-[#0077B5] px-4 py-1 mb-3 text-white rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 hover:bg-[#005983] flex items-center gap-2" href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                    Connect
                </a>
            </div>
        </>
    );
};



















