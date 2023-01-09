import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="hero min-h-[55vh] bg-base-300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/diego.png"
            className="w-auto rounded-lg shadow-3xl"
          />
          <div>
            <h1 className="text-8xl font-bold break-normal">
              Diego{" "}
              <span className="text-8xl font-bold text-secondary  gradient-text gradient-text:hover ">
                Orel
              </span>{" "}
              Garcia
            </h1>
            <p className="py-6 text-2xl">
              Hi! I'm a software engineer based in California. I specialize in
              building (and occasionally designing) exceptional websites,
              applications, and everything in between.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
