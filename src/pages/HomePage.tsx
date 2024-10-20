
import * as React from 'react';
import { Navbar13 } from '../components/Navbar';
import { Footer4 } from '../components/Footer';
import { Header30 } from '../components/TaglineHeader';
import { Layout415 } from '../components/EventHighlight';
import { Header26 } from '../components/ProgramTimeline';
import { Layout135 } from '../components/RegisterNow';
import { Header78 } from '../components/Gallery';
import { Faq2 } from '../components/FAQ_Section';
import { Card } from '../components/ProfileCard';
import { Logo2 } from '../components/OrganiserLogo';

export const HomeComponent = () => {
  return (
    <>
        
         <Navbar13/>
         <Header30/>
         <Layout415/>
         <Header26/>
         <Logo2/>
         <Layout135/>
         <Header78/>
         <Faq2/>
         
         <Footer4/>
    </>
  )
}


