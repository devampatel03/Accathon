"use client";

import { useRef } from "react";
import {  useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: React.ReactNode;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  featureSections: FeatureSectionProps[];
};

export type Layout415Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout415 = (props: Layout415Props) => {
  const { tagline, heading, description, buttons, featureSections } = {
    ...Layout415Defaults,
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="px-[5%]">
      <div className="container relative h-[300svh] lg:h-[300vh]">
        <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-[100svh] md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            
          </div>
          <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
            {featureSections.map((section, index) => (
              <FeatureSection
                key={index}
                section={section}
                index={index}
                totalSections={featureSections.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

const FeatureSection = ({
  section,
  index,
  totalSections,
  scrollYProgress,
}: {
  section: FeatureSectionProps;
  index: number;
  totalSections: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const sectionScrollStart = index / totalSections;
  const sectionScrollEnd = (index + 1) / totalSections;

  const rotate = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    [0 + index * 3, -30],
  );
  const translateY = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vh", "-100vh"],
  );

  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vw", "-10vw"],
  );

  return (
    <motion.div
      className="absolute ml-6 mr-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:ml-0"
      style={{
        rotate: index === totalSections - 1 ? "9deg" : rotate,
        translateY: index === totalSections - 1 ? undefined : translateY,
        translateX: index === totalSections - 1 ? undefined : translateX,
        zIndex: `${totalSections - index}`,
      }}
    >
      <div className="rb-6 mb-6 md:mb-8">
        <img src={section.icon.src} alt={section.icon.alt} className="size-12" />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
      <p>{section.description}</p>
    </motion.div>
  );
};

export const Layout415Defaults: Layout415Props = {
  tagline: "",
  heading: "Let's dive into the event and why you should participate .",
  description:
    "",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  featureSections: [
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "",
      },
      title: "What is Accathon?",
      description:
        "Accathon is a nationwide competition to provide students with a collaborative platform to solve some of the pressing interdisciplinary problems the society and/or the industries face, and thus inculcate a culture of product innovation and a mindset of problem-solving.",
    },
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "",
      },
      title: "Why should I participate in Accathon?",
      description:
        "Accathon challenges participants to think outside the box and innovate real-world solutions, work with cutting-edge technology, and enhance their skills. Team-based format promotes collaboration, communication, and valuable networking opportunities. ",
    },
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "",
      },
      title: "Is this Hackathon online or offline?",
      description:
        "The First Round is online, while the Second (Final) Round will take place offline at Nirma University Campus. Accommodation and travel costs (sleeper class) will be reimbursed for participants in the offline round.",
    },
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "  ",
      },
      title: "Eligibility & Team Composition",
      description:
        "Undergraduate students from universities and colleges across India are welcome! Each team should have 4 members, with at least 2 from commerce or management. Each participant may only be part of one team. If you’re a working professional or faculty member, you can mentor a team based on your expertise!",
    },
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "  ",
      },
      title: "Registration Details",
      description:
        "Team registration is mandatory. Each team must have a designated leader, and only the team leader needs to sign up. The registration fee is ₹500 per team, non-refundable. Each team may register for only one track—so pick your focus and dive in!",
    },
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "  ",
      },
      title: "Prize Money",
      description: (
        <>
          Compete for exciting cash prizes!
          <br />
          • 1st Prize: ₹15,000
          <br />
          • 2nd Prize: ₹10,000
          <br />
          Winners will be awarded for each theme, so bring your best ideas!
        </>
      ),
    },
    
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "  ",
      },
      title: "Participation Perks",
      description:
        "Join us for an enriching experience! Beyond the prizes, participants can engage in brainstorming and collaborate with peers to tackle real-world challenges and create impactful ideas. Unleash your creativity!",
    },
    {
      icon: {
        src: "/Images/Accathon Logo.png",
        alt: "  ",
      },
      title: "Certificates & Submission",
      description:
        "Get recognized for your efforts! All active participants who submit and present their solutions will receive e-certificates. Final Round attendees will receive printed certificates. Plus, enjoy a hassle-free submission process—no scrutiny as long as you meet the eligibility criteria!",
    },
  ],
};
