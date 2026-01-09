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
      image: '/Images/06 K. R. Sharma.jpg',
      linkedin: '',
    },
    {
      name: 'Prof. K. V. Achalapati',
      role: 'Past President, Indian Accounting Association',
      image: '/Images/achlapati sir.jpg',
      linkedin: '',
    },
    {
      name: 'Prof. G. Soral',
      role: 'Past President, Indian Accounting Association',
      image: '/Images/Soral Sir.jpg',
      linkedin: '',
    },
    {
      name: ' Prof. Sanjay Bhayani',
      role: 'General Secretary, Indian Accounting Association',
      image: '/Images/dr_sanjay_bhayani.jpeg',
      linkedin: 'https://www.linkedin.com/in/sanjay-bhayani-505b901a0/',
    }
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
      name: 'Dr. CS Karishma Butani',
      role: 'Assistant Professor, ITNU',
      image: '/Images/karishma_bhutani.jpeg',
      linkedin: 'https://www.linkedin.com/in/dr-cs-karishma-butani-3b647295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Prof. Bhoomi Parikh ',
      role: 'Assistant Professor, ITNU',
      image: '/Images/bhoomi_parikh.jpeg',
      linkedin: 'https://www.linkedin.com/in/bhoomi-parikh-41a435266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ],
  team: [
    {
      name: 'Priyamvada Jain',
      role: 'ICNU',
      image: '/Images/priyamvada_jain.jpeg',
      linkedin: 'https://www.linkedin.com/in/jainpriyamvada?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Nandini Lila',
      role: 'ICNU',
      image: '/Images/nandini_lila.jpeg',
      linkedin: 'https://www.linkedin.com/in/nandini-lila-74385325a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Manvendra Singh Solanki',
      role: 'ICNU',
      image: '/Images/manvendra_singh.jpeg',
      linkedin: 'https://www.linkedin.com/in/manvendra-singh-solanki-650590296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Karvy Joshi',
      role: 'ICNU',
      image: '/Images/karvya_joshi.jpeg',
      linkedin: 'https://www.linkedin.com/in/karvy-joshi-97a65429b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Prakhar Parikh',
      role: 'ITNU',
      image: '/Images/Prakhar Parikh.jpg',
      linkedin: 'https://www.linkedin.com/in/prakhar-parikh',
    }
  ],
};








