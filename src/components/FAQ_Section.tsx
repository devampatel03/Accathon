import React from "react";
import {
    Button,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@relume_io/relume-ui";
  
  import type { ButtonProps } from "@relume_io/relume-ui";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    footerHeading: string;
    footerDescription: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type Faq2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq2 = (props: Faq2Props) => {
    const { heading, questions, footerHeading, footerDescription, button } = {
      ...Faq2Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="px-[5%] py-10">
        <div className="container">
        <div className="container mx-auto text-center">
          <h2
            className="rb-5 mb-5 text-4xl font-bold md:text-5xl md:mb-6 lg:text-7xl lg:mb-8"
            style={{ color: "#000000", textShadow: "3px 3px 4px #4494A6" }}
          >
            {heading}
          </h2>
          </div>
          <Accordion type="multiple">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="md:py-5 md:text-md">{question.title}</AccordionTrigger>
                <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 md:mt-18 lg:mt-20">
          <h4
            className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
            style={{ color: "#000000", textShadow: "2px 2px 6px #4494A6" }}
          >
            {footerHeading}
          </h4>
            <p className="md:text-md">{footerDescription}</p>
            <div className="mt-6 md:mt-8 border-none">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Faq2Defaults: Faq2Props = {
    heading: "FAQs",
    
    questions: [
  {
    title: "Who can participate and form a team?",
    answer:
      "All undergraduate and postgraduate students from universities and colleges across India are eligible to participate. Each team must consist of 4 members, with 2 students from a commerce/management background and 2 students from a technology background.",
  },
  {
    title: "Can mentors participate in the event?",
    answer:
      "Yes. Company employees and faculty members can participate as mentors, based on their relevant domain expertise.",
  },
  {
    title: "Is registration mandatory? What is the registration fee?",
    answer:
      "Yes, registration is mandatory for all teams. The registration fee is ₹600 per team, and each team is allowed to register for only one track.",
  },
  {
    title: "What if I need to cancel my registration?",
    answer:
      "If you need to cancel your registration, please email sac_icnu@nirmauni.ac.in. Kindly note that the registration fee is non-refundable.",
  },
  {
    title: "Are non-Gujarat students eligible? Is accommodation provided in the second round?",
    answer:
      "Yes, the event is open to all undergraduate and postgraduate students across India, including non-Gujarat participants. For teams qualifying for the offline round, travel expenses (sleeper class), accommodation, and meals will be reimbursed.",
  },
  {
    title: "What are the team requirements for the competition?",
    answer:
      "Teams must be formed before registration. Each team must have 4 members. Teams can include students from different colleges. A minimum of 2 members from commerce/management and 2 from technology is mandatory. A participant can be a part of only one team.",
  },
  {
    title: "Can postgraduate students form a team with undergraduate students?",
    answer:
      "No. Postgraduate students must form teams only with other postgraduate students, and undergraduate students must form teams only with undergraduate students. Mixing undergraduate and postgraduate students in the same team is not permitted.",
  },
  {
    title: "What themes can students choose?",
    answer:
      <>
      <p>
        Postgraduate Track: Forensic Accounting and Fraud Detection.
      </p>
      <p>
        Undergraduate Track: Intelligent Financial Modelling and Stock Market Analysis.
      </p>
      </>
  },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "",
    button: {
      title: "Contact Us: sac_icnu@nirmauni.ac.in",
      variant: "secondary",
    },
  };
  