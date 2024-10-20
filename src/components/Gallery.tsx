import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
};

export type Header78Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header78 = (props: Header78Props) => {
  const { heading, images } = {
    ...Header78Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
          
        </div>

        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-4 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                    >
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header78Defaults: Header78Props = {
  heading: "Glimpses of ACCATHON 1.0",

  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },

    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
  ],
};
