export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQHSVOCrzmEeoQ/profile-displayphoto-shrink_400_400/0/1661014729388?e=1678320000&v=beta&t=KUcTSd-WbrMolYFKCfYtyBTH0SlRVDWR00wutXju6qs"
          className="max-w-xlg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold">
            Diego <h1 className="text-5xl font-bold text-secondary">Orel</h1>
            Garcia
          </h1>
          <p className="py-6">
            Hi! I'm a software engineer based in California. I specialize in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
