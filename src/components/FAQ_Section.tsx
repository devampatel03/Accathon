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
  answer: string | React.ReactNode;
};

type Props = {
  heading: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

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
            className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:mb-8 lg:text-7xl"
            style={{ color: "#000000", textShadow: "3px 3px 4px #4494A6" }}
          >
            {heading}
          </h2>
        </div>

        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer}
              </AccordionContent>
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
          <div className="mt-6 border-none md:mt-8">
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
        "All undergraduate and postgraduate students from universities and colleges across India are eligible to participate. Each team must consist of 4 members, with atleast 2 students from a commerce/management background.",
    },
    {
      title: "Is registration mandatory? What is the registration fee?",
      answer:
        "Yes, registration is mandatory for all teams. The registration fee is ₹600 per team for Undergraduate students and ₹1000 per team for Postgraduate, and each team is allowed to register for only one track.",
    },
    {
      title: "What if I need to cancel my registration?",
      answer:
        "If you need to cancel your registration, please email sac_icnu@nirmauni.ac.in. Kindly note that the registration fee is non-refundable.",
    },
    {
      title: "Is registration fee refundable ?",
      answer:
        "Registration fees is refundable only if the event is cancelled by the organisers.",
    },
    {
      title:
        "Are non-Gujarat students eligible? Is accommodation provided in the second round?",
      answer:
        "Yes, the event is open to all undergraduate and postgraduate students across India, including non-Gujarat participants. For teams qualifying for the offline round, travel expenses( to the extend approved by organising team), accommodation, and meals will be reimbursed.",
    },
    {
      title: "What are the team requirements for the competition?",
      answer: (
        <>
          <p>• Teams must be formed before registration</p>
          <p>• Each team must have 4 members</p>
          <p>• Teams can include students from different colleges</p>
          <p>• A minimum of 2 members from commerce/management is mandatory</p>
          <p>• A participant can be a part of only one team</p>
        </>
      ),
    },
    {
      title: "Can postgraduate students form a team with undergraduate students?",
      answer: (
        <>
          <p>No.</p>
          <p>• Postgraduate students must form teams only with other postgraduate students</p>
          <p>• Undergraduate students must form teams only with undergraduate students</p>
          <p>Mixing undergraduate and postgraduate students in the same team is not permitted.</p>
        </>
      ),
    },
    {
      title: "What themes can students choose?",
      answer: (
        <>
          <p>• Postgraduate Track: Forensic Accounting and Fraud Detection</p>
          <p>• Undergraduate Track: Intelligent Financial Modelling and Stock Market Analysis</p>
        </>
      ),
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "",
  button: {
    title: "Contact Us: sac_icnu@nirmauni.ac.in",
    variant: "secondary",
  },
};
