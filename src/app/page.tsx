"use client";

// import { Menu } from "./Components/Nav/Menu";
import { Header } from "./Components/Header/Header";
import { WhiteboardComponent } from "./Components/Tasks/WhiteboardComponent";
import { Modal } from "./Components/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const [name, setName] = useState<string>("Davi vedrani");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <main className="bg-zinc-800 w-screen h-screen overflow-x-hidden px-3 relative">
      <div className="flex flex-row justify-between p-6 h-full relative">
        <section className="flex-11/12 bg-blue-50 rounded-md p-5 relative flex flex-col justify-center items-center">
          <Header name={name} />
          <div className="h-screen flex flex-col item">
            <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <div>
              <WhiteboardComponent />
            </div>
          </div>
        </section>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        name={name}
        inputChange={handleInputChange}
      />
    </main>
  );
};

export default Home;
