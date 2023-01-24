import CardList from "../components/Portfolio/CardList";

export default function Portfolio() {
  return (
    <>
      <div className='min-h-64 bg-neutral'>
        <section className='mx-auto flex w-1/2 justify-center text-center'>
          <div className='layout py-6 text-center font-bold text-5xl'>
            <h1>Some Things I've Built.</h1>
          </div>
        </section>
        <div className='cardlist_container flex justify-center'>
          <CardList />
        </div>
      </div>
    </>
  );
}
