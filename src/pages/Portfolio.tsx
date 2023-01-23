import {
  TailwindIcon,
  JavaIcon,
  TypescriptIcon,
  CSSIcon,
  ReactIcon,
} from "../components/Icons";
import React from "react";

interface Card {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
  svgImages: JSX.Element[];
}

let data: Card[] = [
  {
    id: 0,
    title: "Portfolio",
    content:
      "My personal portfolio website. I built this website using TypeScript, TailwindCSS, and lots of love.",
    image: "/images/portfolio.png",
    link: "diegogaric.s",
    svgImages: [
      <TailwindIcon
        className="h-12 w-12 fill-gray-300 md:w-8"
        color="bg-[#07B6D5]"
      />,
      <CSSIcon className="w-12 fill-gray-300  md:w-8" />,
      <TypescriptIcon className="w-12 fill-gray-300 md:w-8" />,
    ],
  },
  {
    id: 2,
    title: "BeachHacks 2023",
    content:
      "A primary web developer for the BeachHacks 2023 website. Responsible for the sponsor page web and mobile form." +
      " The website is" +
      " built with CSS, and TypeScript.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
    svgImages: [
      <CSSIcon className="w-12 fill-gray-300  md:w-8" />,
      <TypescriptIcon className="w-12 fill-gray-300 md:w-8" />,
    ],
  },
  {
    id: 3,
    title: "Liberty Mutual Insurance TechStart Internship 2022",
    content:
      "Created an in-house full-stack web application that displayed user virtual machine information using React.js and Express.js and Node.js.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://www.libertymutual.com",
    svgImages: [
      <ReactIcon className="w-12 md:w-8" />,
      <JavaIcon className="w-12 fill-gray-300  md:w-8" />,
    ],
  },
  {
    id: 3,
    title: "BeachHacks 2023",
    content:
      "A primary web developer for the BeachHacks 2023 website. Responsible for the sponsor page web and mobile form." +
      " The website is" +
      " built with CSS, and TypeScript.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
    svgImages: [
      <CSSIcon className="w-12 fill-gray-300  md:w-8" />,
      <ReactIcon className="w-12 fill-gray-300  md:w-8" />,
    ],
  },
  {
    id: 4,
    title: "Beachhacks 2022",
    content:
      "Created a header component in Beachhacks 6.0 for the front-end website using React and Grommet.io." +
      " Collaborated with 10+ student's to ensure all other components are functional and scalable.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
    svgImages: [
      <TailwindIcon className="w-12 fill-gray-300  md:w-8" />,
      <CSSIcon className="w-12 fill-gray-300  md:w-8" />,
      <TypescriptIcon className="w-12 fill-gray-300  md:w-8" />,
    ],
  },
  {
    id: 5,
    title: "Pokemon Console Game 2022",
    content:
      "Developed a console-based Pokemon game that adhered to design patterns such as Factory and Decorator in Java.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://github.com/diegogarciacs/CECS-277/tree/main/Project%202",
    svgImages: [
      <TailwindIcon className="w-12 fill-gray-300  md:w-8" />,
      <CSSIcon className="w-12 fill-gray-300  md:w-8" />,
      <TypescriptIcon className="w-12 fill-gray-300  md:w-8" />,
    ],
  },
];
const CardComponent = ({ title, content, link, svgImages }: Card) => (
  <div className="card m-5 h-80 w-fit bg-base-100 shadow-xl hover:bg-base-content/5 sm:w-96">
    <div className="card-body">
      <h2 className="card-title text-xl	">{title}</h2>
      <p className="text-base">{content}</p>
      <div className="card-actions">
        <button className="btn btn-outline btn-secondary ">
          <a href={link}>Link</a>
        </button>
        <div className="mx-2 flex-1 px-2"></div>
        <div className="card-images flex w-auto flex-none items-center self-center">
          {svgImages.map((svg, i) => (
            <div key={i}>{svg}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CardList = () => {
  return (
    <div className="flex basis-3/4 flex-wrap justify-center 2xl:basis-1/2 ">
      {data.map((card, index) => (
        <div className="gap-3 " key={index}>
          <CardComponent {...card} />
        </div>
      ))}
    </div>
  );
};

export default function Portfolio() {
  return (
    <>
      <div className="min-h-64 bg-neutral">
        <section className="mx-auto flex w-1/2 justify-center text-center">
          <div className="layout py-6 text-center font-bold text-5xl">
            <h1>Some Things I've Built.</h1>
          </div>
        </section>
        <div className="cardlist_container flex justify-center">
          <CardList />
        </div>
      </div>
    </>
  );
}
