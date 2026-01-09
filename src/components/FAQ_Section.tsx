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
          "All undergraduate students from universities/colleges across India. Teams must consist of 4 members, with at least 2 from the commerce/management stream.",
      },
      {
        title: "Can mentors participate?",
        answer:
          "Company employees and faculty can act as mentors based on their domain expertise.",
      },
      {
        title: "Is registration mandatory and what's the fee?",
        answer:
          "Yes, it is mandatory for the team to register, and the registration fee is ₹600 per team. Only one track per team is allowed.",
      },
      {
        title: "What if I need to cancel my registration?",
        answer:
          "Email gopikajuneja@nirmauni.ac.in if you need to cancel. Note: No refunds for the registration fee.",
      },
      {
        title: "Are non-Gujarat students eligible, and is accommodation provided in the second round?",
        answer:
          "Yes, it’s open to all undergraduates across India. Travel (sleeper class), accommodation, and meals are reimbursed for participants in the offline round.",
      },
      {
        title: "Team Requirements needed for the competition?",
        answer:
          "Teams must be formed prior to registration, consisting of 4 members. Students from different colleges can form a team, with at least 2 from commerce/management.You can only be in one team.",
      },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "",
    button: {
      title: "Contact Us: sac_icnu@nirmauni.ac.in",
      variant: "secondary",
    },
  };
  