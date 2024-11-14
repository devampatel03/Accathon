import * as React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Card } from '../components/ProfileCard';
import { Footer4 } from '../components/Footer';

interface TeamComponentProps {
  advisors: Array<{ name: string; role: string; image: string; linkedin: string }>;
  convener: Array<{ name: string; role: string; image: string; linkedin: string }>;
  faculty: Array<{ name: string; role: string; image: string; linkedin: string }>;
  team: Array<{ name: string; role: string; image: string; linkedin: string }>;
}

export const TeamComponent: React.FC<TeamComponentProps> = (props) => {
  const { advisors,convener,faculty, team } = props;

  return (
    <>
      <Navbar13 />

      {/* advisors */}

      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <section id="relume" className="px-[10%] -mt-8 mb-10 py-3 md:py-5 lg:py-8 bg-blue-200 ">
        <div className="container max-w-full text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">Advisors </h3>
          
        </div>
        </section>
          <div className="grid grid-cols-1 ml-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> 
            {advisors.map((member) => (
              <Card
                key={member.name}
                name={member.name}
                image={member.image}
                role={member.role}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* accathon convener */}

      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <section id="relume" className="px-[10%] -mt-8 mb-10 py-3 md:py-5 lg:py-8 bg-blue-200 ">
        <div className="container max-w-full text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">Accathon Convener</h3>
          
        </div>
        </section>
          <div className="grid grid-cols-1 ml-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> 
            {convener.map((member) => (
              <Card
                key={member.name}
                name={member.name}
                image={member.image}
                role={member.role}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* faculty */}

      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <section id="relume" className="px-[10%] -mt-8 mb-10 py-3 md:py-5 lg:py-8 bg-blue-200 ">
        <div className="container max-w-full text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">Faculty Committee</h3>
          
        </div>
        </section>
          <div className="grid grid-cols-1 ml-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> 
            {faculty.map((member) => (
              <Card
                key={member.name}
                name={member.name}
                image={member.image}
                role={member.role}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* student  */}

      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <section id="relume" className="px-[5%] -mt-8 mb-10 py-3 w-full md:py-5 lg:py-8 bg-blue-200 ">
          {/* <div className="container max-w-lg -ml-5">
          <h3 className="text-3xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">Student Committee</h3>
          
          </div> */}
          <div className="container max-w-full text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">Student Committee</h3>
          
        </div>
        </section>
          <div className="grid grid-cols-1 ml-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> 
            {team.map((member) => (
              <Card
                key={member.name}
                name={member.name}
                image={member.image}
                role={member.role}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer4/>
    </>
  );
};

export const TeamComponentDefaults: TeamComponentProps = {

  advisors: [
    {
      name: 'Prof. K. R. Sharma ',
      role: 'Past President, Indian Accounting Association',
      image: '',
      linkedin: '',
    },
    {
      name: 'Prof. K. V. Achalapati',
      role: 'Past President, Indian Accounting Association',
      image: '',
      linkedin: '',
    },
    {
      name: 'Prof. G. Soral',
      role: 'Past President, Indian Accounting Association',
      image: '',
      linkedin: '',
    },
    {
      name: 'Prof. V. Appa Rao',
      role: 'President, Indian Accounting Association',
      image: '',
      linkedin: '',
    },
    {
      name: ' Prof. Sanjay Bhayani',
      role: 'General Secretary, Indian Accounting Association',
      image: '/Images/dr_sanjay_bhayani.jpeg',
      linkedin: 'https://www.linkedin.com/in/sanjay-bhayani-505b901a0/',
    },
    {
      name: 'Prof. Anil Kumar',
      role: 'University of Delhi, Delhi',
      image: '/Images/anil_kumar.png',
      linkedin: 'https://www.linkedin.com/in/anil-kumar-srcc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Prof. Arindam Das',
      role: 'University of Bhurdwan, West Bengal',
      image: '/Images/arindam_das.png',
      linkedin: 'https://www.linkedin.com/in/dr-arindam-das-1b4b7620?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Prof. Biju Terrence ',
      role: 'University of Kerala, Thiruvananthapurm',
      image: '/Images/biju_terrence.jpg',
      linkedin: 'https://www.linkedin.com/in/prof-biju-terrence-a273271b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Dr. Dharen Kumar Pandey',
      role: 'Indian Institute of Management Sambalpur',
      image: '/Images/dharen_kumar_pandey.jpg',
      linkedin: 'https://www.linkedin.com/in/dr-dharen-kumar-pandey-52aa93b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    
  ],
  convener: [
    {
      name: 'Dr Udai Paliwal',
      role: 'Dean and Director, ICNU',
      image: '/Images/dr_udai_paliwal.jpeg',
      linkedin: 'https://www.linkedin.com/in/prof-udai-paliwal-55aa709a/',
    },
  ],
  faculty: [
    
    {
      name: 'Dr Saurin Parikh',
      role: 'Associate Professor, ITNU',
      image: '/Images/Saurin_Parikh.jpg',
      linkedin: 'https://www.linkedin.com/in/saurin-parikh-a60a8a5a',
    },
    {
      name: 'Dr Sunil Gautam',
      role: 'Assistant Professor, ITNU',
      image: '/Images/prof_sunil_gautam.jpeg',
      linkedin: 'https://www.linkedin.com/in/sunil-g-a02658246/',
    },
    {
      name: 'Dr Rajan Datt',
      role: 'Assistant Professor, ITNU',
      image: '/Images/Rajan_Dutt.jpg',
      linkedin: 'https://in.linkedin.com/in/dr-rajan-datt-b823171a',
    },
    {
      name: 'Prof. Gopika Juneja',
      role: 'Assistant Professor, ICNU',
      image: '/Images/prof_gopika_juneja.jpeg',
      linkedin: 'https://www.linkedin.com/in/gopika-juneja-a6534b156/',
    },

  ],
  team: [
    {
      name: 'Gungun Gangwani',
      role: 'ICNU',
      image: '/Images/Gungun Gangwani.jpg',
      linkedin: 'https://www.linkedin.com/in/gungun-gangwani-692a71217?',
    },
    {
      name: 'Palak Sharma',
      role: 'ICNU',
      image: '/Images/Palak Sharma.jpg',
      linkedin: 'https://www.linkedin.com/in/palak-sharma-7a6494247?',
    },
    {
      name: 'Vedika Aggarwal',
      role: 'ICNU',
      image: '/Images/Vedika Aggarwal .jpg',
      linkedin: 'https://www.linkedin.com/in/vedika-aggarwal-aab10424b?',
    },
    {
      name: 'Joy Vadsmiya',
      role: 'ICNU',
      image: '/Images/Joy Vadsmiya.jpg',
      linkedin: 'https://www.linkedin.com/in/joy-vadsmiya-0267011b7?',
    },
    {
      name: 'Ayush Savnani',
      role: 'ICNU',
      image: '/Images/Ayush Savnani.jpg',
      linkedin: 'https://www.linkedin.com/in/ayush-savnani-39959a267?',
    },
    {
      name: 'Mehul Godha',
      role: 'ICNU',
      image: '/Images/Mehul Godha.jpg',
      linkedin: 'https://www.linkedin.com/in/mehul-godha-0aab48267?',
    },
    {
      name: 'Shaurya Jain',
      role: 'ICNU',
      image: '/Images/Shaurya Jain.jpg',
      linkedin: 'https://www.linkedin.com/in/shaurya-jain-017186284?',
    },
    {
      name: 'Devam Patel',
      role: 'ITNU',
      image: '/Images/Devam_Patel.jpg',
      linkedin: 'https://www.linkedin.com/in/devam-patel-216112271/',
    },
    {
      name: 'Jash Dadhaniya',
      role: 'ITNU',
      image: '/Images/Jash_Dadhaniya.png',
      linkedin: 'https://www.linkedin.com/in/jash-dadhaniya-aa4b63258/',
    },
    {
      name: 'Keshini Trivedi',
      role: 'ITNU',
      image: '/Images/Keshini_Trivedi.jpg',
      linkedin: 'https://www.linkedin.com/in/keshini-trivedi/',
    },
    {
      name: 'Jainish Gandhi',
      role: 'ITNU',
      image: '/Images/Jainish_Gandhi.jpg',
      linkedin: 'https://www.linkedin.com/in/jainish-gandhi/',
    },
    {
      name: 'Hetavi Patel',
      role: 'ITNU',
      image: '/Images/Hetavi_Patel.jpg',
      linkedin: 'https://www.linkedin.com/',
    },
  ],
};








