import { CheckIcon } from "../Icons/CheckIcon";

export const InputComponent = () => {
  return (
    <form className=" bg-zinc-700 rounded-lg flex justify-between items-center p-3">
      <input
        className="w-full h-full py-1 outline-none truncate"
        type="text"
        placeholder="Digite sua tarefa..."
      />

      <button className="cursor-pointer">
        <CheckIcon />
      </button>
    </form>
  );
};
