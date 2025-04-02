// import { useState } from "react";
import { AddIcon } from "../Icons/AddIcon";
import { TitleColumn } from "./TitleColumn";

interface ColumnProps {
  title: string;
  firstColor: string;
  secondColor: string;
  showAddIcon: boolean;
}

export const Column = ({ title, firstColor, showAddIcon }: ColumnProps) => {
  // const [showInput, setShowInput] = useState<boolean>(false);

  // const handleShowInput = () => {
  //   setShowInput(!true);
  // };

  return (
    <div className="min-w-[380px] max-w-[380px] rounded-lg bg-zinc-800 text-white p-4 flex flex-col h-auto">
      <TitleColumn title={title} />
      <hr
        className={`my-1.5 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent ${firstColor} to-transparent opacity-25`}
      />

      <div className="space-y-2 mb-4 flex-1 overflow-y-auto">
        <div className="p-3 bg-zinc-700 rounded-lg flex justify-between items-center">
          <span className="truncate">tarefa</span>
          <div className="flex gap-2">
            <button className="text-red-400 hover:text-red-300">Deletar</button>
            <button className="text-blue-400 hover:text-blue-300">
              Editar
            </button>
          </div>
        </div>
      </div>
      {showAddIcon && (
        <button
          // onClick={handleShowInput}
          className="cursor-pointer py-1 flex justify-center rounded-md hover:bg-zinc-700 duration-500"
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
};
