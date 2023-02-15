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
      className="align mx-auto flex min-h-[50rem] w-3/4 flex-col content-center items-center justify-center bg-neutral pt-12"
      id="about-me"
    >
      <div className="hero-content flex-col lg:flex-row">
        <h1 className="font-bold antialiased text-4xl sm:whitespace-nowrap sm:text-6xl	">
          More About Me
        </h1>
        <div className="divider divider-horizontal"></div>
        <div>
          <p
            className="about-text py-6 antialiased transition-transform text-2xl lg:text-3xl"
            ref={aboutTextRef}
          >
            Hi! My name is Diego. I grew up playing video games and spending
            lots of time online. As I've aged I've discovered a love for coding
            and web development. I like to make things beautiful and functional
            for all devices. <br /> So far, I've had the pleasure of interning
            with{" "}
            <a
              href="https://www.libertymutual.com/"
              target="_blank"
              rel="noreferrer"
              className="link-hover text-primary hover:text-primary-focus "
            >
              Liberty Mutual Insurance
            </a>
            , later building a site with{" "}
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
