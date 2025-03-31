"use client";

import { Menu } from "./Components/Nav/Menu";
import { Header } from "./Components/Header/Header";
import { TaskComponent } from "./Components/Tasks/Tasks";
import { Modal } from "./Components/Header/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main className="bg-zinc-800 w-screen h-screen overflow-x-hidden px-3 relative">
      <div className="flex flex-row justify-between py-4 h-full relative">
        <Menu />
        <section className="flex-11/12 bg-blue-50 rounded-md py-3 px-8 relative">
          <Header />
          <div className="h-screen flex flex-col item">
            <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <div>
              <TaskComponent />
            </div>
          </div>
        </section>
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default Home;
