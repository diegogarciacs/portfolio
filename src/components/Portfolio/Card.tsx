import cardData from "../../data/CardData";

interface Card {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
  svgImages: JSX.Element[];
}

const CardComponent = ({ title, content, link, svgImages }: Card) => (
  <div className='card m-5 h-80 w-fit bg-base-100 shadow-xl hover:bg-base-content/5 sm:w-96'>
    <div className='card-body'>
      <h2 className='card-title text-xl	'>{title}</h2>
      <p className='text-base'>{content}</p>
      <div className='card-actions'>
        <button className='btn btn-outline btn-secondary '>
          <a href={link}>Link</a>
        </button>
        <div className='mx-2 flex-1 px-2'></div>
        <div className='card-images flex w-auto flex-none items-center self-center'>
          {svgImages.map((svg, i) => (
            <div key={i}>{svg}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardComponent;
