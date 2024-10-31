import React from "react";

type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    logos: ImageProps[];
  };
  
  export type Logo2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Logo2 = (props: Logo2Props) => {
    const { heading, logos } = {
      ...Logo2Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
        <div className="text-center">
          {/* Heading with applied styles */}
          <h1 
            className="rb-5 mb-5 text-4xl font-bold md:text-5xl md:mb-6 lg:text-7xl lg:mb-8" 
            style={{ color: "rgb(0, 0, 0) ", textShadow: "3px 3px 4px #025E73" }}
          >
            {heading}
          </h1>
  
          {/* Logos in a responsive grid below the heading */}
          <div className="grid grid-cols-2 gap-4 pt-10 sm:grid-cols-2 md:gap-5 lg:grid-cols-2 justify-center items-center">
            {logos
              .filter((logo) => logo.src) // Filter out empty image sources
              .map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-3"
                >
                  <img src={logo.src} alt={logo.alt} className="max-h-20 md:max-h-24" />
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  };
  
  export const Logo2Defaults: Props = {
    heading: "Our Partners",  // Set to a plain string
    logos: [
      { src: "/Images/IAA_Logo.svg", alt: "IAA Logo" },
      { src: "/Images/ACCA_Logo.png", alt: "ACCA Logo" },
    ],
  };
  
  