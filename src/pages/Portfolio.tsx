import { TailwindIcon } from "../components/Icons";

interface Card {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
}

let data: Card[] = [
  {
    id: 0,
    title: "Portfolio",
    content:
      "My personal portfolio website. I built this website using TypeScript, TailwindCSS, and lots of love.",
    image: "/images/portfolio.png",
    link: "diegogaric.s",
  },
  {
    id: 1,
    title: "BeachHacks 2023",
    content:
      "A primary web developer for the BeachHacks 2023 website. Responsible for the sponsor page web and mobile form." +
      " The website is" +
      " built with CSS, and TypeScript.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
  },
  {
    id: 2,
    title: "Beachhacks 2022",
    content:
      "Created a header component in Beachhacks 6.0 for the front-end website using React and Grommet.io." +
      " Collaborated with 10+ student's to ensure all other components are functional and scalable.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://beachhacks.com",
  },
  {
    id: 3,
    title: "Pokemon Console Game 2022",
    content:
      "Developed a console-based Pokemon game that adhered to design patterns such as Factory and Decorator in Java.",
    image: "https://i.imgur.com/example.jpg",
    link: "https://github.com/diegogarciacs/CECS-277/tree/main/Project%202",
  },
];
const CardComponent = ({ title, content, link }: Card) => (
  <div className="card m-5 h-80 w-fit bg-base-100 shadow-xl hover:bg-base-content/5 sm:w-96">
    <div className="card-body">
      <h2 className="card-title text-xl	">{title}</h2>
      <p className="text-base">{content}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-secondary ">
          <a href={link}>Link</a>
        </button>
      </div>
    </div>
  </div>
);

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((card, index) => (
        <div className="gap-3 overflow-x-auto" key={index}>
          <CardComponent {...card} />
        </div>
      ))}
    </div>
  );
};

export default function Portfolio() {
  return (
    <>
      <div className="min-h-[55vh] bg-base-300">
        <section>
          <div className="layout py-6 text-center font-bold text-6xl">
            <h1>Some Things I've Built.</h1>
          </div>
        </section>
        <CardList />
      </div>
    </>
  );
}
