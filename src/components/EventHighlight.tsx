"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import type { ButtonProps } from "@relume_io/relume-ui";

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
  heading: React.ReactNode;
  description: string;
  buttons: ButtonProps[];
  featureSections: FeatureSectionProps[];
};

export type Layout415Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout415 = (props: Layout415Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout415Defaults,
    ...props,
  } as Props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="px-[5%] py-16">
      <div className="container grid grid-cols-1 items-center gap-x-20 gap-y-16 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featureSections.map((section, index) => (
                <div key={index} className="min-w-full flex justify-center px-1">
                  <FeatureSection section={section} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
          >
            <RxChevronLeft size={28} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
          >
            <RxChevronRight size={28} />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === selectedIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ section }: { section: FeatureSectionProps }) => {
  return (
    <div className="w-full max-w-md border border-border-primary bg-background-primary p-8">
      <div className="mb-6">
        <img src={section.icon.src} alt={section.icon.alt} className="size-12" />
      </div>

      <h3
        className="mb-4 text-2xl font-bold md:text-3xl"
        style={{ color: "#023859", textShadow: "2px 2px 25px #025E73" }}
      >
        {section.title}
      </h3>

      <p className="whitespace-pre-line">{section.description}</p>
    </div>
  );
};

export const Layout415Defaults: Layout415Props = {
  tagline: "",
  heading: (
    <span style={{ color: "white", textShadow: "10px 10px 4px #023859" }}>
      Let's dive into the event and why you should participate.
    </span>
  ),
  description: "",
  buttons: [],
  featureSections: [
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "What is Accathon?",
      description:
        "Accathon is a nationwide competition to provide students with a collaborative platform to solve some of the pressing interdisciplinary problems the society and/or the industries face, and thus inculcate a culture of product innovation and a mindset of problem-solving.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Why should I participate in Accathon?",
      description:
        "Accathon challenges participants to think outside the box and innovate real-world solutions, work with cutting-edge technology, and enhance their skills. Team-based format promotes collaboration, communication, and valuable networking opportunities.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Is this Accathon online or offline?",
      description:
        "The First Round is online, while the Second (Final) Round will take place offline at Nirma University Campus. Accommodation and travel costs (to the extend approved by organising team) will be reimbursed for participants in the offline round.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Eligibility & Team Composition",
      description:
        "Undergraduate & Postgraduate students from universities and colleges across India are welcome! Each team should have 4 members, with at least 2 from commerce or management. Each participant may only be part of one team.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Registration Details",
      description:
        "Team registration is mandatory. Each team must have a designated leader, and only the team leader needs to sign up. The registration fee is ₹600 per team for undergraduate students and ₹1,000 per team for postgraduate students. The fee is non-refundable.\nEach team will participate in the assigned format of the event.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Prize Money",
      description:
        "Compete for exciting cash prizes!\n• 1st Prize: ₹20,000\n• 2nd Prize: ₹15,000\nWinners will be awarded for each category, so bring your best ideas!",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Participation Perks",
      description:
        "Join us for an enriching experience! Beyond the prizes, participants can engage in brainstorming and collaborate with peers to tackle real-world challenges and create impactful ideas. Unleash your creativity!",
    },
    {
      icon: { src: "/Images/Accathon Logo.png", alt: "Accathon Logo" },
      title: "Certificates & Submission",
      description:
        "Get recognized for your efforts! All active participants who submit and present their solutions will receive e-certificates. Final Round attendees will receive printed certificates. Plus, enjoy a hassle-free submission process—no scrutiny as long as you meet the eligibility criteria!",
    },
  ],
};
