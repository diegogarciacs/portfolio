import CardList from "../components/Cards/CardList";

export default function Portfolio() {
  return (
    <>
      <div className="min-h-64 flex flex-col bg-neutral " id="portfolio">
        <section className="mx-auto flex w-1/2 justify-center text-center">
          <div className="layout py-6 text-center font-bold text-6xl">
            <h1>Some Things I've Built.</h1>
          </div>
        </section>
        <div className="flex max-w-7xl flex-wrap justify-center place-self-center	">
          <CardList />
        </div>
      </div>
    </>
  );
}
