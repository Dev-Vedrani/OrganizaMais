import Image from "next/image";
import welcomeImage from "@/../public/Enthusiastic-bro.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-zinc-100 p-6 rounded-lg max-w-3xl w-full shadow-md mx-4 flex flex-row gap-5">
        <section className="w-1/2 h-1/2">
          <div className="relative h-full">
            <Image
              src={welcomeImage}
              alt="Ilustração de boas-vindas"
              objectFit="contain"
              priority
            />
          </div>
        </section>

        <section className="w-1/2 flex flex-col justify-between gap-10">
          <div>
            <h2 className=" font-bold mb-4 text-zinc-700 text-4xl">
              Organize <strong className="text-cyan-500">+</strong>
            </h2>
            <p className="text-zinc-600">
              O sucesso é conquistado através de pequenas vitórias diárias.
            </p>
          </div>
          <div>
            <label>Seu nome</label>
            <input
              className="w-full py-2 outline-none border-b-2 border-zinc-400 focus:border-cyan-400 duration-800"
              type="text"
              placeholder="Como gostaria de ser chamado?"
            />
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-sm shadow-zinc-200 cursor-pointer text-white rounded hover:bg-gradient-to-br transition-colors w-full"
          >
            Salvar
          </button>
        </section>
      </div>
    </section>
  );
};
