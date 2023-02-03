import CardComponent from "./Card";
import cardData from "../../data/CardData";

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      {cardData.map((card, index) => (
        <div className="gap-3 " key={index}>
          <CardComponent {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
