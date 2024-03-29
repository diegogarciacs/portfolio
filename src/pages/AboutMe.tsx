import "./AboutMe.css";
import React, { useEffect, useRef } from "react";

const AboutMe = () => {
  const aboutTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // if we find the element is intersecting
        if (entry.isIntersecting) {
          // tag element with class
          entry.target.classList.add("about-text");
          // stop observing the element
          observer.unobserve(entry.target);
        }
      });
    });
    // observe the element
    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }
    // clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="align mx-auto flex min-h-[50rem] w-3/4 flex-col content-center items-center justify-center bg-neutral pt-12 scroll-smooth"
      id="about-me"
    >
      <div className="hero-content flex-col xl:flex-row">
        <h1 className="font-bold antialiased text-4xl sm:whitespace-nowrap sm:text-6xl	">
          More About Me
        </h1>
        <div className="divider divider-horizontal"></div>
        <div>
          <p
            className="about-text py-6 antialiased transition-transform text-2xl lg:text-3xl"
            ref={aboutTextRef}
          >
            Hello, my name is Diego. I'm an tech enthusiast who's evolved from a childhood of gaming and online
            exploration into a developer with a knack for design.
            I like to make things beautiful and functional. <br /> So far, I've had the pleasure of interning twice
            with{" "}
            <a
              href="https://www.libertymutual.com/"
              target="_blank"
              rel="noreferrer"
              className="link-hover text-primary hover:text-primary-focus "
            >
              Liberty Mutual Insurance.
            </a>
            {" "}I've also dedicated time to work
            with a team of developers to build{" "}
            <a
              href="https://beachhacks.com"
              target="_blank"
              rel="noreferrer"
              className="link-hover text-primary hover:text-primary-focus"
            >
              BeachHacks 2023
            </a>
            , and finally building my own portfolio.
            <br /> My goal is to become a full-stack developer and continue to
            work on projects that I'm passionate about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
