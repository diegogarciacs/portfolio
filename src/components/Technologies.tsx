import {
  ReactIcon,
  TypescriptIcon,
  JavaIcon,
  CSSIcon,
  TailwindIcon,
} from "./Icons";

export default function Technologies() {
  const people = [
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
  ];
  return (
    <section
      className="min-h-64 mx-auto my-20 flex w-3/4 max-w-7xl flex-col bg-neutral"
      id="technologies"
    >
      <div className="layout py-6 text-center font-bold text-6xl">
        <h1>Technologies I enjoy.</h1>
      </div>
      <div className=" grid grid-cols-1 gap-4 px-4 lg:grid-cols-2">
        {people.map((person) => (
          <div
            key={person.name}
            className="relative flex items-center justify-center space-x-3 rounded-lg
            bg-base-100 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2
            hover:border-gray-400"
          >
            <div className="h-10 w-10 flex-shrink-0 rounded-full">
              <person.technologyIcon />
            </div>
            <div className="min-w-0 flex-1">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="font-medium text-sm">{person.name}</p>
              <p className=" base-text text-sm">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
