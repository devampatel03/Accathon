






"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button, ButtonProps, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { redirect } from "react-router-dom";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: ButtonProps;
};

export type Navbar13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;


export const Navbar13 = (props: Navbar13Props) => {
  const { logo, navLinks, button } = {
    ...Navbar13Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [activePage, setActivePage] = useState<string>("");

  const handleRegisterClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScKRZqB3go_NDcAVzLawiKB1ZkMQxamQc20aFprCqh8MT-BJQ/viewform";
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePage(window.location.pathname);
    }
  }, []);

  return (
    <nav className="relative z-[999] mx-auto mt-5 flex w-full items-start justify-center  px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0">
      <div className="flex min-h-16 w-full items-center justify-between rounded-full bg-background-primary mb-5 gap-4 border border-border-primary border-2 px-5 md:min-h-18 md:px-8 lg:w-auto">
        
        {/* Countdown Timer on the left of the Navbar */}
        <div className="absolute left-[-120px] flex items-center">
          
        </div>

        {/* Navbar Logo */}
        <a href={logo.url}>
          <img src={logo.src} alt={logo.alt} className="w-20 h-20" />
        </a>
        
        {/* Navbar Links */}
        <motion.div
          variants={{
            open: { height: "var(--height, 100vh)" },
            close: { height: "auto" },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:static lg:left-auto lg:right-auto lg:top-auto lg:w-auto lg:overflow-visible lg:[--height:auto]"
        >
          <motion.div
            variants={{
              open: { y: 0 },
              close: { y: "var(--translate-y, -100%)" },
            }}
            animate={isMobileMenuOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-0 mx-auto min-w-[200px] justify-self-center bg-background-primary px-[5%] text-center lg:static lg:inset-auto lg:mx-0 lg:px-0 lg:text-left lg:[--translate-y:0%]"
          >
            <div
              ref={menuRef}
              className="flex w-full flex-col border border-t-0 border-border-primary bg-blur p-5 md:p-8 lg:w-auto lg:flex-row lg:border-none lg:bg-none lg:p-0"
            >
              {navLinks.map((navLink, index) => (
                <div key={index}>
                  {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                    <SubMenu navLink={navLink} isMobile={isMobile} />
                  ) : (
                    <a
                      href={navLink.url}
                      className={`relative block py-3 text-center text-md lg:px-4 lg:py-2 lg:text-left lg:text-lg hover:font-bold hover:text-purple-700
                        ${activePage === navLink.url ? "font-bold text-purple-700" : ""}`}
                    >
                      {navLink.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        {/* End of Navbar Links */}

        {/* Button and Mobile Menu */}
        <div className="flex items-center justify-center gap-4">
          <Button {...button}  onClick={handleRegisterClick} >{button.title}</Button>
          <button
            ref={buttonRef}
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span className="my-[3px] h-0.5 w-6 bg-black" />
            <motion.span className="my-[3px] h-0.5 w-6 bg-black" />
            <motion.span className="my-[3px] h-0.5 w-6 bg-black" />
          </button>
        </div>
      </div>
    </nav>
  );
};


const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="relative flex w-full items-center justify-center gap-4 whitespace-nowrap py-3 text-center text-md lg:gap-2 lg:px-4 lg:py-2 lg:text-left lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          variants={{
            rotate: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotate" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                opacity: "var(--opacity-open, 100%)",
                y: "var(--translate-y-open, 0%)",
                visibility: "visible",
                height: "auto",
              },
              close: {
                opacity: "var(--opacity-close, 100%)",
                y: "var(--translate-y-close, 0%)",
                visibility: "hidden",
                height: "var(--height, 0)",
              },
            }}
            transition={{ duration: 0.2 }}
            className="static flex w-full min-w-full flex-col overflow-hidden whitespace-nowrap border-0 border-border-primary bg-background-primary p-0 lg:absolute lg:overflow-visible lg:border lg:p-2 lg:[--height:auto] lg:[--opacity-close:0%] lg:[--opacity-open:100%] lg:[--translate-y-close:25%] lg:[--translate-y-open:0%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, subIndex) => (
              <a
                key={subIndex}
                href={subMenuLink.url}
                className="px-0 py-3 text-center lg:px-4 lg:py-2 lg:text-left"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar13Defaults: Navbar13Props = {
  logo: {
    url: "home",
    src: "/Images/Accathon Logo.png",
    alt: "",
  },
  navLinks: [
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/team",
      title: "Team",
    },
    {
      url: "/guidelines",
      title: "Guidelines",
    },
    
    {
      url: "/contact",
      title: "Contact",
    },
  ],
  button: {
    title: "Register Now",
    size: "sm",
  },
};

const topLineVariants = {
  open: {
    translateY: 8,
    rotate: 45,
    transition: { duration: 0.3 },
  },
  close: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.3 },
  },
};

const middleLineVariants = {
  open: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  close: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    rotate: -45,
    transition: { duration: 0.3 },
  },
  close: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.3 },
  },
};


