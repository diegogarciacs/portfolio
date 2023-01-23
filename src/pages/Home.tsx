import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="hero min-h-[76vh] bg-neutral">
        <div className="hero-content flex-col gap-[2rem] lg:flex-row">
          <div className="person relative w-auto lg:mt-[-6rem]">
            <div className="person_container ease  group grid aspect-[1/1.35] items-end overflow-hidden rounded-b-[100vw] transition duration-[var(--transform-speed)] hover:scale-[1.1]">
              <div className="person_circle ease duration-[calc(var(--transform-speed) * 1.2)] h-55 w-50 m-h-48 m-w-48 group absolute inset-x-0 bottom-0 top-auto bottom-0 m-auto aspect-square rounded-full bg-gradient-to-bl bg-gradient-to-bl from-[#44E47C] via-[#1FD6BB] to-[#D61F96] object-cover transition group-hover:from-[#1F95D6] group-hover:to-[#17E882]"></div>
              <img
                className="person_img z-2 shadow-3xl group-hover:scale[1.1] ease duration-[calc(var(--transform-speed) *	1.12)] pointer-events-none relative left-[1rem] scale-[1.2] transition group-hover:translate-y-[-1.4rem] sm:w-[20rem] lg:w-[25rem]"
                src="/images/diego-transparent.png"
                alt="diego smiling"
              />
            </div>
          </div>
          {/*<img*/}
          {/*  src="/images/diego.png"*/}
          {/*  className="w-auto rounded-lg shadow-3xl"*/}
          {/*/>*/}
          <div>
            <h1 className="break-normal font-bold text-8xl">
              Diego{" "}
              <span className="gradient-text gradient-text:hover font-bold  text-secondary text-8xl ">
                Orel
              </span>{" "}
              Garcia
            </h1>
            <p className="py-6 text-2xl">
              Hi! I'm a software engineer based in California who loves creating
              visually appealing, user-friendly, and efficient
              websites/applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
