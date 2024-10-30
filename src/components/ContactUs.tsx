"use client";
import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useState } from "react";
import React from "react";
import { Navbar13 } from "./Navbar";
import { Footer4 } from "./Footer";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Contact9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact9 = (props: Contact9Props) => {
  const { image, tagline, heading, description, button } = {
    ...Contact9Defaults,
    ...props,
  } as Props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=gopikajuneja@nirmauni.ac.in&su=Queries regarding ACCATHON 2.0&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.open(mailtoLink, '_blank');
  };
  

  return (
    <>
      <Navbar13 />
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container grid grid-cols-1 bg-white p-6 rounded-3xl items-stretch gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img src={image.src} alt={image.alt} className="size-full object-cover" />
          </div>
          <div className="">
            <div className="rb-6 mb-6 md:mb-8">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="message" className="mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  className="min-h-[11.25rem] overflow-auto"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <Button {...button}>{button.title}</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer4 />
    </>
  );
};

export const Contact9Defaults: Contact9Props = {
  image: {
    src: "/Images/animations/Contact Us.gif",
    alt: "Relume placeholder image",
  },
  tagline: "",
  heading: "Contact us",
  description: "",
  button: { title: "Submit" },
};
