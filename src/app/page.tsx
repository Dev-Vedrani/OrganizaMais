"use client";

import { Header } from "./Components/Header/Header";
import { WhiteboardComponent } from "./Components/Tasks/WhiteboardComponent";
import { Modal } from "./Components/Modal/Modal";
import { useState } from "react";

const Home = () => {
  // Verifica se já tem nome salvo no localStorage para decidir se mostra o modal
  const [modalIsOpen, setModalIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("kanban-user-name");
    }
    return true;
  });

  // Carrega o nome do localStorage ou inicia vazio
  const [name, setName] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("kanban-user-name") || "";
    }
    return "";
  });

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    // Salva o novo nome no localStorage
    localStorage.setItem("kanban-user-name", newName);
  };

  return (
    <main className="bg-zinc-800 w-screen h-screen overflow-x-hidden px-3 relative">
      <div className="flex flex-row justify-between p-6 h-full relative">
        <section className="flex-11/12 bg-blue-50 rounded-md p-5 relative flex flex-col justify-center items-center">
          {name && <Header name={name} />}{" "}
          {/* Só mostra o header se tiver nome */}
          <div className="h-screen flex flex-col item">
            {name && ( // Só mostra a linha divisória se tiver nome
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            )}
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
