import {
  TailwindIcon,
  JavaIcon,
  TypescriptIcon,
  CSSIcon,
  ReactIcon,
  NodeJSIcon,
  ExpressIcon,
  GrommetIcon,
  BlazorIcon,
  CSharpIcon,
  MudBlazorIcon,
} from "../components/Icons";

interface CardData {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
  svgImages: JSX.Element[];
  isPrivate: boolean;
}
const cardData: CardData[] = [
  {
    id: 1,
    title: "Portfolio",
    content:
      "My personal portfolio website. I built this website using TypeScript, TailwindCSS, React, and lots of love." +
      "" +
      "",
    image: "/images/portfolio.png",
    link: "https://github.com/diegogarciacs/portfolio",
    svgImages: [
      <div
        className={"flex place-items-center justify-center  md:h-10 md:w-10"}
      >
        {<TypescriptIcon className="w-10 rounded fill-[gray-300]" />}
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ReactIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
      <div
        className={`flex h-[40px] w-[40px] place-items-center justify-center`}
      >
        {<TailwindIcon />}
      </div>,
    ],
    isPrivate: false,
  },
  {
    id: 0,
    title: "Liberty Mutual Insurance TechStart Internship 2023",
    content:
      "Web application built with Blazor that displayed all virtual machines provisioned via Azure in table format. " +
      "Allowed for group actions to VDEs such as emailing, deleting, pausing, running scripts, and viewing logs.",
    image: "",
    link: "https://www.libertymutual.com",
    svgImages: [
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <BlazorIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
      <div className="flex h-auto w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <CSharpIcon className="h-8 w-12 fill-gray-300 md:h-auto md:w-8" />
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <MudBlazorIcon className="h-auto w-12 fill-gray-300  md:w-8" />
      </div>,
    ],
    isPrivate: true,
  },
  {
    id: 2,
    title: "BeachHacks 2023",
    content:
      "A primary web developer for the BeachHacks 2023 website. A focus on functionality and responsiveness." +
      " The website is" +
      " built with CSS, and TypeScript, and React.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
    svgImages: [
      <div
        className={"flex place-items-center justify-center  md:h-10 md:w-10"}
      >
        {<TypescriptIcon className="w-10 rounded fill-[gray-300]" />}
      </div>,
      <div
        className={
          "flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]"
        }
      >
        {<CSSIcon className="w-10 fill-[gray-300] md:h-12 md:w-12" />}
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ReactIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
    ],
    isPrivate: false,
  },
  {
    id: 3,
    title: "Liberty Mutual Insurance TechStart Internship 2022",
    content:
      "Created an in-house full-stack web application that displayed user virtual machine information using" +
      " React.js, Express.js, Node.js and in house components and technologies.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://www.libertymutual.com",
    svgImages: [
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ReactIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
      <div className="flex h-auto w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ExpressIcon className="h-8 w-12 fill-gray-300 md:h-auto md:w-8" />
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <NodeJSIcon className="h-auto w-12 fill-gray-300  md:w-8" />
      </div>,
    ],
    isPrivate: true,
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
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ReactIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
      <div className="flex h-auto w-12 place-items-center justify-center md:h-[40px] md:w-[40px]">
        <GrommetIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
    ],
    isPrivate: true,
  },
  {
    id: 5,
    title: "Pokemon Console Game 2022",
    content:
      "Developed a console-based Pokemon game that adhered to design patterns such as Factory and Decorator in Java.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://github.com/diegogarciacs/CECS-277/tree/main/Project%202",
    svgImages: [
      <div className="flex h-[40px] w-[40px] place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <JavaIcon className="flex h-auto w-12 place-items-center justify-center rounded-md md:h-16 md:w-16 md:w-16" />
      </div>,
    ],
    isPrivate: false,
  },
  {
    id: 6,
    title: "Parkview Wellness 2019",
    content:
      "Designed a fully functional website (focusing on HTML and CSS) with a full stack developer." +
      " Allowed for the purchase of online classes and related services such as yoga and meditation.",
    image: "/images/portfolio.png",
    link: "https://parkviewwellness.com",
    svgImages: [
      <div
        className={
          "flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]"
        }
      >
        {<CSSIcon className="w-10 fill-[gray-300] md:h-12 md:w-12" />}
      </div>,
    ],
    isPrivate: false,
  },
];

export default cardData;
