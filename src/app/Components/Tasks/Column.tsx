// Column.tsx
import { useState } from "react";
import { AddIcon } from "../Icons/AddIcon";
import { TitleColumn } from "./TitleColumn";
import { InputComponent } from "./InputComponent";
import { MinusIcon } from "../Icons/MinusIcon";
import { Task } from "@/app/Data/TypeTask";
import { PlayIcon } from "../Icons/PlayIcon";
import { CircleStatus } from "./CircleStatus";
import { TrashIcon } from "../Icons/TrashIcon";
import { ReturnIcon } from "../Icons/ReturnIcon";

interface ColumnProps {
  title: string;
  firstColor: string;
  status: string;
  tasks: Task[];
}

export const Column = ({ title, firstColor, status, tasks }: ColumnProps) => {
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
      <div className="flex flex-col gap-2.5">
        <div className="flex-1">
          <ul className="space-y-2.5">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <li key={task.id} className="flex gap-2 h-14">
                  <div className="p-4 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors flex justify-between items-center flex-1">
                    <div className="truncate">{task.title}</div>{" "}
                    <CircleStatus
                      status={status as "pending" | "inProgress" | "completed"}
                    />
                  </div>

                  <div className="bg-zinc-700 rounded-md  flex items-center px-2">
                    <div className="flex items-center gap-2 h-full">
                      <div className="p-1 hover:bg-zinc-500 rounded-md flex items-center justify-center h-8 w-8">
                        <div className="flex items-center justify-center w-4 h-4">
                          {status === "pending" ? (
                            <button className="p-1 hover:bg-zinc-500 rounded-md flex items-center justify-center h-8 w-8 cursor-pointer">
                              <div className="flex items-center justify-center w-4 h-4">
                                <TrashIcon />
                              </div>
                            </button>
                          ) : status === "inProgress" ? (
                            <button className="p-1 hover:bg-zinc-500 rounded-md flex items-center justify-center h-8 w-8 cursor-pointer">
                              <div className="flex items-center justify-center w-4 h-4">
                                <ReturnIcon />
                              </div>
                            </button>
                          ) : (
                            <button className="p-1 hover:bg-zinc-500 rounded-md flex items-center justify-center h-8 w-8 cursor-pointer">
                              <div className="flex items-center justify-center w-4 h-4">
                                <ReturnIcon />
                              </div>
                            </button>
                          )}
                        </div>
                      </div>

                      {status === "pending" || status === "inProgress" ? (
                        <div className="h-4 w-px bg-neutral-500 bg-opacity-25"></div>
                      ) : null}

                      {status === "pending" || status === "inProgress" ? (
                        <button className="p-1 hover:bg-zinc-500 rounded-md flex items-center justify-center h-8 w-8 cursor-pointer">
                          <div className="flex items-center justify-center w-4 h-4">
                            <PlayIcon />
                          </div>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-zinc-400 text-center py-4">
                Nenhuma tarefa{" "}
                {status === "pending"
                  ? "pendente"
                  : status === "inProgress"
                  ? "em progresso"
                  : "concluída"}
              </li>
            )}
          </ul>
        </div>
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
