export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://avatars.githubusercontent.com/u/59929620?v=4"
            className="w-auto rounded-lg shadow-3xl"
          />
          <div>
            <h1 className="text-6xl font-bold break-normal">
              Diego{" "}
              <span className="text-6xl font-bold text-secondary">Orel</span>{" "}
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
      <div className="h-full w-full fixed">yoohoo</div>
    </>
  );
}
