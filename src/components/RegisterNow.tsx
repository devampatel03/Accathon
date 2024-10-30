import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Timer3 from "./CountdownTimer";

type Props = {
    heading: string;
    description: string;
    buttons: ButtonProps[];
  };
  
  export type Layout135Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout135 = (props: Layout135Props) => {
    const { heading, description, buttons } = {
      ...Layout135Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-100">
        <div className="container max-w-lg text-center">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
          <Timer3/>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
        </div>
      </section>
    );
  };
  
  export const Layout135Defaults: Layout135Props = {
    heading: "What's stopping you? Hurry up and register now ...",
    buttons: [{ title: "Register Now" },],
    
  };
  