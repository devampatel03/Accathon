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
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
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
