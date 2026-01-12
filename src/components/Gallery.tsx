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
    <section id="relume" className="px-[5%] py-10">
      <div className="container flex flex-col items-center">
        <div>
          <div className="flex flex-row items-center mt-5">
            <h4
              className=" mr-5 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
              style={{ color: "#000000" }}
            >
              ACCATHON 2.0 Report
            </h4>
            <Button><a href="https://drive.google.com/file/d/1MIAO6YQfEUshMF-aet5YHI0p35Q-Ao2c/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Click Here</a></Button>
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
