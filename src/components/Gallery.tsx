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

export type Header78Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header78 = (props: Header78Props) => {
  const { heading, images } = {
    ...Header78Defaults,
    ...props,
  } as Props;

  const handleRegisterClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1443jP35gVFL6H3g-tL-cKc557o0Sx5pB/view?usp=sharing";
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1
            className="rb-5 mb-5 text-4xl font-bold md:text-5xl md:mb-6 lg:text-7xl lg:mb-8 "
            style={{
              color: "#000000",
              textShadow: "3px 3px 4px #025E73",
              marginBottom: 0,
            }}
          >
            {heading}
          </h1>
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
        <div>
          <div className="flex flex-row items-center mt-20">
            <h4
              className=" mr-5 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#000000" }}
            >
              ACCATHON 2.0 Report
            </h4>
            <Button><a href="https://docs.google.com/document/d/1UUbBGVWxiiBWNapr052Fy-L1Oz7VJLEf/edit?usp=drivesdk&ouid=101352297503603854883&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Click Here</a></Button>
          </div>
          <div className="flex flex-row items-center mt-10">
            <h4
              className=" mr-5 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#000000" }}
            >
              ACCATHON 1.0 Report
            </h4>
            <Button><a href="https://drive.google.com/file/d/1443jP35gVFL6H3g-tL-cKc557o0Sx5pB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Click Here</a></Button>
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
      src: "/Images/gallery/image-1.png",
      alt: " placeholder image 1",
    },

    {
      src: "/Images/gallery/image-2.JPG",
      alt: " placeholder image 2",
    },

    {
      src: "/Images/gallery/image-3.JPG",
      alt: " placeholder image 3",
    },

    {
      src: "/Images/gallery/image-4.JPG",
      alt: " placeholder image 4",
    },

    {
      src: "/Images/gallery/image-5.JPG",
      alt: " placeholder image 5",
    },

    {
      src: "/Images/gallery/image-6.JPG",
      alt: " placeholder image 6",
    },
  ],
};
