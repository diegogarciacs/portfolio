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
        "I've had the pleasure of working with React for about 1 year and I've loved every minute of it. It's my go-to framework for building web applications.",
      technologyIcon: ReactIcon,
    },
    {
      name: "TypeScript",
      description:
        "I've recently began working with TypeScript and I've found it to be a great tool for building robust applications. I'm excited to continue learning more about it.",
      technologyIcon: TypescriptIcon,
    },
    {
      name: "TailwindCSS",
      description:
        "I've been using TailwindCSS for about 3 months and I've found it to be a great tool for" +
        " building responsive websites. It's definitely my weapon of choice for building websites and I'm" +
        " excited to use it in the future.",
      technologyIcon: TailwindIcon,
    },
    {
      name: "CSS",
      description:
        "I've used CSS for about 3 years and I've reached for it many times. It's a" +
        " technology I've certainly gained an appreciation for over the years and still ise when" +
        " doing more complex CSS.",
      technologyIcon: CSSIcon,
    },
    {
      name: "Python",
      description:
        "A personal favorite of mine which I've used for a variety of applications. I've used it for web scraping," +
        " data analysis, and learning more about DSA. A definite go-to in terms of programming languages for me.",
      technologyIcon: PythonIcon,
    },
    {
      name: "Java",
      description:
        "I've used Java for about 2 years and it was actually my first programming language. I've used it for a" +
        " variety of purposes, mainly when learning more about object oriented programming. I'm interested in" +
        " using it for backend development in the future.",
      technologyIcon: JavaIcon,
    },
  ];
  return (
    <section
      className="min-h-64 mx-auto my-20 flex w-3/4 max-w-7xl flex-col bg-neutral"
      id="technologies"
    >
      <div className="layout py-8 text-center font-bold text-5xl sm:text-6xl">
        <h1>Technologies I enjoy.</h1>
      </div>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2">
        {techList.map((tech) => (
          <div
            key={tech.name}
            className="relative flex items-center justify-center space-x-3 rounded-lg bg-base-100 shadow-xl hover:bg-base-content/5
            px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400
            sm:flex-row"
          >
            <div className="flex h-10 w-10 flex-shrink-0  items-center justify-center rounded-full align-middle sm:w-12">
              <tech.technologyIcon />
            </div>
            <div className="min-w-0 flex-1">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="font-medium text-sm">{tech.name}</p>
              <p className=" base-text text-sm">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
