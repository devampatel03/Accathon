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
                <div
                  key={index}
                  className="min-w-full flex justify-center px-1"
                >
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
                  index === selectedIndex
                    ? "bg-white"
                    : "bg-white/40"
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
      icon: { src: "/Images/Accathon Logo.png" },
      title: "What is Accathon?",
      description:
        "Accathon is a nationwide competition to provide students with a collaborative platform to solve interdisciplinary problems and build innovative products.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Why should I participate in Accathon?",
      description:
        "Participants innovate real-world solutions, work with cutting-edge technology, and gain collaboration and networking experience.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Is this Accathon online or offline?",
      description:
        "The first round is online. The final round takes place offline at Nirma University with reimbursements provided.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Prize Money",
      description:
        "• 1st Prize: ₹25,000\n• 2nd Prize: ₹15,000\nPrizes awarded per theme.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Eligibility & Team Composition",
      description:
        "Open to undergraduate students across India. Teams of 4 with at least 2 members from commerce or management.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Registration Details",
      description:
        "₹600 per team. One team leader registers. Each team may register for one track only.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Participation Perks",
      description:
        "Collaborate, brainstorm, and work on impactful real-world problems.",
    },
    {
      icon: { src: "/Images/Accathon Logo.png" },
      title: "Certificates & Submission",
      description:
        "All participants receive e-certificates. Final round attendees receive printed certificates.",
    },
  ],
};
