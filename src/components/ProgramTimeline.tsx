import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React from "react";

type ImageProps = {
  srcLandscape: string;
  srcPortrait: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header26Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header26 = (props: Header26Props) => {
  const { heading, description, buttons, image } = {
    ...Header26Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
            <h1 
                className="rb-5 mb-5 text-6xl font-bold md:text-5xl md:mb-6 lg:text-7xl lg:mb-8"
                style={{ color: "rgb(0 0 0)", textShadow: "3px 3px 4px #4494A6" }}
              >
                {heading}
              </h1>
            </div>
          </div>
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={image.srcLandscape} />
              <img
                src={image.srcPortrait}
                className="w-full h-auto object-cover"
                alt={image.alt}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header26Defaults: Header26Props = {
  heading: "Program Timeline",
  image: {
    srcLandscape: "/Images/poster/Landscape.png",
    srcPortrait: "/Images/poster/Portrait.png",
    alt: "Relume placeholder image",
  },
};
