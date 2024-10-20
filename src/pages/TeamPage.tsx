import * as React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Card } from '../components/ProfileCard';
import { Footer4 } from '../components/Footer';

interface TeamComponentProps {
  faculty: Array<{ name: string; role: string; image: string; linkedin: string }>;
  team: Array<{ name: string; role: string; image: string; linkedin: string }>;
}

export const TeamComponent: React.FC<TeamComponentProps> = (props) => {
  const { faculty, team } = props;

  return (
    <>
      <Navbar13 />

      

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="relume" className="px-[5%] -mt-8 mb-10 py-3 md:py-5 lg:py-8 bg-blue-100">
          <div className="container max-w-lg -ml-5">
          <h3 className="text-3xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">Faculty Committee</h3>
          
          </div>
        </section>
          <div className="grid grid-cols-1 ml-28 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> 
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

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="relume" className="px-[5%] -mt-8 mb-10 py-3 md:py-5 lg:py-8 bg-blue-100">
          <div className="container max-w-lg -ml-5">
          <h3 className="text-3xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">Student Committee</h3>
          
          </div>
        </section>
          <div className="grid grid-cols-1 ml-28 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> {/* Added custom-grid */}
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
  faculty: [
    {
      name: 'Dr Udai Paliwal',
      role: 'Dean and Director, ICNU',
      image: '../../public/Images/dr_udai_paliwal.jpeg',
      linkedin: 'https://www.linkedin.com/in/prof-udai-paliwal-55aa709a/',
    },
    {
      name: 'Dr Sanjay Bhayani',
      role: 'General Secretary, Indian Accounting Association',
      image: '../../public/Images/dr_sanjay_bhayani.jpeg',
      linkedin: 'https://www.linkedin.com/in/sanjay-bhayani-505b901a0/',
    },
    {
      name: 'Prof Gaurang Rawal',
      role: 'Associate Professor, ITNU',
      image: '../../public/Images/prof_gaurang_raval.jpg',
      linkedin: 'https://www.linkedin.com/in/gaurang-raval-919b0017/',
    },
    {
      name: 'Prof Jitendra Bhatia',
      role: 'Associate Professor, ITNU',
      image: '../../public/Images/prof_jitendra_bhatia.jpeg',
      linkedin: 'https://www.linkedin.com/in/jitendrabbhatia/',
    },
    {
      name: 'Prof Gopika Juneja',
      role: 'Assistant Professor, ICNU',
      image: '../../public/Images/prof_gopika_juneja.jpeg',
      linkedin: 'https://www.linkedin.com/in/gopika-juneja-a6534b156/',
    },
    {
      name: 'Prof Sunil Gautam',
      role: 'Assistant Professor, ITNU',
      image: '../../public/Images/prof_sunil_gautam.jpeg',
      linkedin: 'https://www.linkedin.com/in/sunil-g-a02658246/',
    },
  ],
  team: [
    {
      name: 'Devam Patel',
      role: 'ITNU',
      image: '../../public/Images/Devam_Patel.jpg',
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
      image: '/Images/Keshini_Trivedi.png',
      linkedin: 'https://www.linkedin.com/in/keshini-trivedi/',
    },
    {
      name: 'Jainish Gandhi',
      role: 'ITNU',
      image: '/Images/Jainish_Gandhi.png',
      linkedin: 'https://www.linkedin.com/in/jainish-gandhi/',
    },
    {
      name: 'Hetavi Patel',
      role: 'ITNU',
      image: '/Images/Accathon Logo.png',
      linkedin: 'https://www.linkedin.com/',
    },
  ],
};








