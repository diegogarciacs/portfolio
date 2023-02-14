import CardList from "../components/Cards/CardList";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="min-h-64 flex flex-col bg-neutral " >
        <section className="mx-auto flex w-3/4 justify-center text-center">
          <div className="layout py-6 text-center font-bold text-6xl">
            <h1>Some Things I've Built.</h1>
          </div>
        </section>
        <div className="flex max-w-7xl flex-wrap justify-center place-self-center	">
          <CardList />
        </div>
      </div>
    </section>
  );
}
