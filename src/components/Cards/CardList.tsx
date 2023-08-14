import CardComponent from "./Card";
import cardData from "../../data/CardData";
interface Card {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
  svgImages: JSX.Element[];
  isPrivate: boolean;
}

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      {cardData.map((card: Card, index: number) => (
        <div className="gap-3 " key={index}>
          <CardComponent {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;

