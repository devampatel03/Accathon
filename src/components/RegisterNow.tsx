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

    const handleRegisterClick = () => {
        window.location.href = "https://forms.gle/NHJQkG7KP5twVsAt9";
    };

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-100">
            <div className="container max-w-lg text-center">
                <h3
                    className="rb-5 mb-5 text-4xl font-bold md:text-5xl md:mb-6 lg:text-7xl lg:mb-8"
                    style={{ color: "#000000", textShadow: "3px 3px 4px rgb(109 170 184)" }}
                >
                    {heading}
                </h3>
                <Timer3 />
                <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} onClick={handleRegisterClick}>
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
    buttons: [{
        title: "Register Now",
        size: "sm",
        className: "bg-[#023859] text-white hover:bg-[#025E73] px-8 py-3 text-xl font-bold rounded-full border-2 border-white transition-all duration-300 ease-in-out",
    }],
};
