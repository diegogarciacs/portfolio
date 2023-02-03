const AboutMe = () => {
  return (
    <section
      className="align mx-auto flex min-h-screen w-3/4 flex-col content-center justify-center bg-neutral pt-12"
      id="about-me"
    >
      <div className="hero-content flex-col lg:flex-row">
        <h1 className=" font-bold antialiased text-4xl sm:whitespace-nowrap sm:text-6xl">
          More about me
        </h1>
        <div className="divider divider-horizontal"></div>
        <div>
          <p className="py-6 antialiased text-2xl lg:text-3xl">
            Hi! My name is Diego. I grew up playing video games and spending
            lots of time online. As I've aged I've discovered a love for coding
            and web development. I like to make things beautiful and functional
            for all devices. <br /> So far, I've had the pleasure of interning
            with{" "}
            <a
              href="https://www.libertymutual.com/"
              target="_blank"
              className="link-hover text-primary hover:text-primary-focus "
            >
              Liberty Mutual Insurance
            </a>
            , later building a site with{" "}
            <a
              href="https://beachhacks.com"
              target="_blank"
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
