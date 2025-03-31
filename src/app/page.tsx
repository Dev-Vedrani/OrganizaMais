import { Menu } from "./Components/Nav/Menu";
import { Header } from "./Components/Header/Header";
import { TaskComponent } from "./Components/Tasks/Tasks";

const Home = () => {
  return (
    <main className="bg-zinc-800 w-screen h-screen overflow-x-hidden">
      <div className="flex flex-row justify-between py-4 h-full">
        <Menu />
        <section className="flex-11/12 bg-blue-50 rounded-md py-3 px-8 relative">
          <Header />
          <div className="h-screen flex flex-col item">
            <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <div className="flex flex-wrap">
              <TaskComponent />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
