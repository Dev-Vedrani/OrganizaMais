import { useState } from "react";
import { AddIcon } from "../Icons/AddIcon";
import { TitleColumn } from "./TitleColumn";
import { InputComponent } from "./InputComponent";
import { MinusIcon } from "../Icons/MinusIcon";

interface ColumnProps {
  title: string;
  firstColor: string;
  secondColor: string;
  status: string;
}

export const Column = ({ title, firstColor, status }: ColumnProps) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="min-w-[380px] max-w-[380px] rounded-lg bg-zinc-800 text-white p-4 flex flex-col">
      <TitleColumn title={title} />
      <hr
        className={`my-1.5 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent ${firstColor} to-transparent opacity-25`}
      />

      <div
        className={`
    overflow-hidden
    transition-all duration-400 ease-in-out
    ${showInput ? "max-h-40" : "max-h-0"}
  `}
      >
        {status === "pending" && (
          <div
            className={`transition-opacity duration-300 ${
              showInput ? "opacity-100" : "opacity-0"
            }`}
          >
            <InputComponent />
          </div>
        )}
      </div>

      {status === "pending" && (
        <button
          onClick={handleInput}
          className="cursor-pointer py-1 flex justify-center rounded-md hover:bg-zinc-700 duration-300 mt-5 relative"
        >
          <div className="relative w-6 h-6">
            <div
              className={`absolute transition-all duration-300 ${
                showInput ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            >
              <AddIcon />
            </div>
            <div
              className={`absolute transition-all duration-300 ${
                showInput ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            >
              <MinusIcon />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};
