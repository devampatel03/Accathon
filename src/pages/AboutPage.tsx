import React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Footer4 } from '../components/Footer';

import { Header1 } from '../components/AboutInfo';

interface AboutComponentProps {
    organiser: Array<{ heading: string; description: string; image: string}>;
}

export const AboutComponent: React.FC<AboutComponentProps> = (props) => {
    const { organiser } = props;
    return (
        <>
    
        <Navbar13/>
        <section id="relume" className="px-[5%] mt-5 -mb-8 py-3 md:py-5 lg:py-8 bg-blue-100">
        <div className="container max-w-lg text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">About Our Organisers</h3>
          
        </div>
      </section>
        <div>
        {organiser.map((member)=>(
            <Header1 heading={member.heading} description={member.description} image={{src:member.image}}/>
        ))}
        </div>
        <Footer4/>
        </>
    )
};

export const AboutComponentDefaults: AboutComponentProps = {
    organiser: [
        {
            heading: "IAA",
            description: "The Indian Accounting Association (IAA) serves as a key platform for academicians, professionals, and practitioners from various sectors. Founded on March 15, 1969, and inaugurated on February 14, 1970, the IAA promotes accounting knowledge and research both in India and abroad. It is a member of the International Association of Accounting Education and Research (IAAER) and is respected by the American Accounting Association (AAA).IAA operates 57 branches across India with over 7300 life members and an affiliate Research Foundation in Kolkata. It publishes the biannual 'Indian Journal of Accounting' and offers awards like the IAA Young Research Award and IAA fellowship. The Association provides Life and Annual Memberships for individuals and institutions, attracting numerous delegates from India and beyond to its conferences.",
            image:"/Images/IAA_Logo.svg"
        },
        {
            heading: "Nirma University",
            description: "Nirma University, Ahmedabad, is a research-focused, student-centric, multidisciplinary, not-for-profit university. It holds an NAAC A+ grade and has been named a Centre of Excellence by the Gujarat Government. Established in 2003 under a special Act by the Gujarat State Legislative Assembly and recognized by the UGC, Nirma University boasts state-of-the-art infrastructure supporting academics, culture, sports, and more. It offers diverse undergraduate, postgraduate, and doctoral programs with a strong emphasis on experiential learning, research, and industry collaboration, attracting students from across India and abroad.",
            image:"/Images/Nirma_logo.jpg"
        },
        {
            heading: "Instiute of Technology",
            description: "The Institute is renowned for its robust academic programs, quality teaching, and fostering overall personality development. It blends young and experienced faculties committed to teaching and research, offering multidisciplinary programs in Engineering and Technology. Known for discipline, ethics, and quality education, the Institute is a part of Nirma University (NAAC ‘A+’ in 2022). Ranked between 100 to 150 by NIRF among 4000+ engineering colleges, it consistently tops state rankings and is in the Top 15 self-financed colleges nationally. All BTech programs are NBA accredited (Tier-I). Implementing the National Education Policy 2020, the curriculum includes health, environment, and sustainable living applications to enhance youth employability.",
            image:"/Images/ITNU_Logo.jpg"
        },
        {
            heading: "Instiute of Commerce",
            description: "Established in 2016, the Institute of Commerce symbolises the principles of brilliance, excellence and professionalism. It imparts top-class education in the fields of Accounting as well as Banking, Financial Services and Insurance (BFSI). The Institute believes in serious academic pursuit by means of a prudent mix of relevance and rigour in its curriculum design and delivery to impart relevant skills, knowledge and ideas through intellectually stimulating debates and discussions, innovative teaching pedagogies and exposure to relevant industry practice at all levels. The campus infrastructure and amenities are comparable to any reputed university around the world. It hosts fully equipped classrooms where focused discussions, interactive study sessions, role plays, presentations, case studies, and practical sessions are held.",
            image:"/Images/ICNU_logo.png"
        },
        {
            heading: "ACCA",
            description: "The Association of Chartered Certified Accountants (ACCA) is a globally recognized professional accountancy body, founded in 1904 to broaden access to the profession. It supports over 247,000 members and 526,000 future members in 181 countries. ACCA provides forward-thinking qualifications, continuous learning, and insights valued by employers in every sector. Its vision is to develop the accountancy profession needed worldwide, partnering with policymakers, educators, and other bodies to drive a sustainable future.",
            image:"/Images/ACCA_Logo.png"
        },

        

    ]
};
