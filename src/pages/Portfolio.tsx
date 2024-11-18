import CardList from "../components/Cards/CardList";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="flex min-h-64 flex-col bg-neutral ">
        <section className="mx-auto flex w-3/4 justify-center text-center">
          <div className="layout py-6 text-center text-6xl font-bold">
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
