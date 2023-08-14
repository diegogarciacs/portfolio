import {
  ReactIcon,
  TypescriptIcon,
  JavaIcon,
  PythonIcon,
  CSSIcon,
  TailwindIcon,
} from "./Icons";

export default function Technologies() {
  const techList = [
    {
      name: "React",
      description:
        "I've had the pleasure of working with React on many different projects and I've loved every minute of it." +
          " It's my go-to framework for building web applications.",
      technologyIcon: ReactIcon,
    },
    {
      name: "TypeScript",
      description:
        "I've recently began working with TypeScript and I've found it to be a great tool that gives enhanced code" +
          " clarity" +
          " and error-catching abilities. I'm" +
          " excited to" +
          " continue learning more about it.",
      technologyIcon: TypescriptIcon,
    },
    {
      name: "TailwindCSS",
      description:
        "I've found TailwindCSS to be a great tool for" +
        " building responsive websites. It's definitely my weapon of choice and I'm" +
        " always looking for opportunities to use it.",
      technologyIcon: TailwindIcon,
    },
    {
      name: "CSS",
      description:
        "CSS is a technology I've gotten more intimate with than I'd personally like. I've certainly gained an appreciation " +
          "for over it over the years and I've learned to use it to my advantage.",
      technologyIcon: CSSIcon,
    },
    {
      name: "Python",
      description:
        "A personal favorite of mine which I've used for a variety of applications. I've used it for web scraping," +
        " data analysis, and practicing my leetcode and DSA. A definite go-to in terms of programming languages for" +
          " me.",
      technologyIcon: PythonIcon,
    },
    {
      name: "Java",
      description:
        "Java was actually my first programming language. I've used it for many of my undergrad classes" +
        ", mainly when learning more about object oriented programming. I'd like to continue using it in the future.",
      technologyIcon: JavaIcon,
    },
  ];
  return (
    <section
      className="min-h-64 mx-auto my-20 flex w-3/4 max-w-7xl flex-col bg-neutral"
      id="technologies"
    >
      <div className="layout py-8 text-center font-bold text-4xl sm:text-6xl">
        <h1>Technologies I enjoy.</h1>
      </div>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2">
        {techList.map((tech) => (
          <div
            key={tech.name}
            className="relative flex items-center justify-center space-x-3 rounded-lg bg-base-100  drop-shadow-xl
            px-6 py-5 shadow-sm bg-blend-normal  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400
            sm:flex-row"
          >
            {tech.name === "TypeScript" ? (
                <div className="flex h-10 w-10 flex-shrink-0 rounded items-center justify-center rounded-full align-middle sm:w-12">
                  <div
                      className={"flex place-items-center justify-center  md:h-10 md:w-10"}
                  >
                    {<TypescriptIcon className="w-10 fill-[gray-300] rounded" />}
                  </div>
                </div>
                ) : (
                <div className="flex h-10 w-10 flex-shrink-0 rounded items-center justify-center rounded-full align-middle sm:w-12">
                    <tech.technologyIcon />
                </div>
                )}

            <div className="min-w-0 flex-1">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="font-medium text-lg">{tech.name}</p>
              <p className=" base-text text-base">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
