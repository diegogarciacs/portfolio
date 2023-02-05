import {
  TailwindIcon,
  JavaIcon,
  TypescriptIcon,
  CSSIcon,
  ReactIcon,
  NodeJSIcon,
  ExpressIcon,
  GrommetIcon,
} from "../components/Icons";

const cardData: any = [
  {
    title: "Portfolio",
    content:
      "My personal portfolio website. I built this website using TypeScript, TailwindCSS, and lots of love." +
      "" +
      "",
    image: "/images/portfolio.png",
    link: "diegogar.cia",
    svgImages: [
      <div
        className={"flex place-items-center justify-center  md:h-10 md:w-10"}
      >
        {<TypescriptIcon className="w-10 fill-[gray-300] " />}
      </div>,
      <div
        className={
          "flex place-items-center justify-center  md:h-[40px] md:w-[40px]"
        }
      >
        {
          <CSSIcon className="flex place-items-center justify-center bg-contain " />
        }
      </div>,
      <div
        className={`flex h-[40px] w-[40px] place-items-center justify-center rounded-md`}
      >
        {<TailwindIcon className="" />}
      </div>,
    ],
    isPrivate: false,
  },
  {
    title: "BeachHacks 2023",
    content:
      "A primary web developer for the BeachHacks 2023 website. Responsible for the sponsor page web and mobile" +
      " form. Assisted with many other sections and components with a focus on functionality and responsiveness." +
      " The website is" +
      " built with CSS, and TypeScript, and React.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
    svgImages: [
      <div
        className={
          "flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]"
        }
      >
        {<TypescriptIcon className="w-10 fill-[gray-300] md:h-12 md:w-12" />}
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        {
          <CSSIcon className="flex place-items-center justify-center bg-contain " />
        }
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ReactIcon className="flex w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
    ],
  },
  {
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
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <ExpressIcon className="h-auto w-12 fill-gray-300  md:w-8" />
      </div>,
      <div className="flex place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <NodeJSIcon className="h-auto w-12 fill-gray-300  md:w-8" />
      </div>,
    ],
    isPrivate: true,
  },
  {
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
      <div className="flex h-[40px] w-[40px] place-items-center justify-center rounded-md md:h-[40px] md:w-[40px]">
        <GrommetIcon className="flex h-[40px] w-12 place-items-center justify-center rounded-md md:h-[40px] md:w-8 md:w-[40px]" />
      </div>,
    ],
    isPrivate: true,
  },
  {
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
