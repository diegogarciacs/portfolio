interface Card {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
  svgImages: JSX.Element[];
  isPrivate: boolean;
}

const CardComponent = ({
  title,
  content,
  link,
  svgImages,
  isPrivate,
}: Card) => (
  <div className="card m-5 min-h-max w-auto bg-base-100 shadow-xl hover:bg-base-content/5 sm:h-96 sm:w-96 ">
    <div className="card-body">
      <h2 className="card-title text-2xl	">{title}</h2>
      <p className="text-base">{content}</p>
      <div className="card-actions">
        <div className="card-images flex w-auto flex-none items-center gap-0.5 self-center">
          {svgImages.map((svg, i) => (
            <div key={i}>{svg}</div>
          ))}
        </div>
        <div className="mx-1 flex-auto px-2"></div>
        {isPrivate ? (
          <button className="btn btn-disabled btn-secondary py-4 ">
            <a href={link}>Private</a>
          </button>
        ) : (
          <button className="btn btn-outline btn-secondary py-4 ">
            <a href={link} target="_blank">
              Link
            </a>
          </button>
        )}
      </div>
    </div>
  </div>
);

export default CardComponent;
