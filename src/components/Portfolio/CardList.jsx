import CardComponent from "./Card";
import cardData from "../../data/CardData";
const CardList = () => {
  return (
    <div className='flex basis-3/4 flex-wrap justify-center 2xl:basis-1/2 '>
      {cardData.map((card, index) => (
        <div className='gap-3 ' key={index}>
          <CardComponent {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
