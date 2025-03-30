import { Menu } from "./Components/Nav/Menu";
import { Header } from "./Components/Header/Header";

const Home = () => {
  return (
    <main className="bg-zinc-800 w-screen h-screen overflow-x-hidden">
      <div className="flex flex-row justify-between p-4 h-full">
        <section className="">
          <Menu />
          oi
        </section>
        <section className="flex-11/12 bg-blue-50 rounded-md p-3 relative">
          <Header />
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        </section>
      </div>
    </main>
  );
};

export default Home;
