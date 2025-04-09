import { useState } from "react";
import { Task, TaskStatus } from "@/app/Data/TypeTask";
import { AddIcon } from "../Icons/AddIcon";
import { MinusIcon } from "../Icons/MinusIcon";
import { PlayIcon } from "../Icons/PlayIcon";
import { ReturnIcon } from "../Icons/ReturnIcon";
import { TrashIcon } from "../Icons/TrashIcon";
import { TitleColumn } from "./TitleColumn";
import { InputComponent } from "./InputComponent";
import { CircleStatus } from "./CircleStatus";

interface ColumnProps {
  title: string;
  firstColor: string;
  status: TaskStatus;
  tasks: Task[];
  onAddTask?: (taskTitle: string) => void;
  onUpdateTask?: (taskId: string, newStatus: TaskStatus) => void;
  onRemoveTask?: (taskId: string) => void;
}

export const Column = ({
  title,
  firstColor,
  status,
  tasks,
  onAddTask,
  onUpdateTask,
  onRemoveTask,
}: ColumnProps) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim() && onAddTask) {
      onAddTask(inputValue.trim());
      setInputValue("");
      setShowInput(false);
    }
  };

  const handlePlayClick = (taskId: string) => {
    if (status === "pending" && onUpdateTask) {
      onUpdateTask(taskId, "inProgress");
    } else if (status === "inProgress" && onUpdateTask) {
      onUpdateTask(taskId, "completed");
    }
  };

  const handleReturnClick = (taskId: string) => {
    if (onUpdateTask) {
      onUpdateTask(taskId, "pending");
    }
  };

  const handleRemoveClick = (taskId: string) => {
    if (onRemoveTask) {
      onRemoveTask(taskId);
    }
  };

  return (
    <div className="min-w-[380px] max-w-[380px] rounded-lg bg-zinc-800 text-white p-4 flex flex-col h-fit">
      <TitleColumn title={title} />
      <hr
        className={`my-1.5 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent ${firstColor} to-transparent opacity-25`}
      />

      <div className="flex flex-col gap-2.5 flex-grow min-h-0">
        <ul className="space-y-2.5">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li key={task.id} className="flex gap-2 h-14">
                <div className="p-4 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors flex justify-between items-center flex-1">
                  <div className="truncate">{task.title}</div>
                  <CircleStatus status={status} />
                </div>

                <div className="bg-zinc-700 rounded-md flex items-center px-2">
                  <div className="flex items-center gap-2 h-full">
                    <button
                      onClick={() =>
                        status === "pending"
                          ? handleRemoveClick(task.id)
                          : handleReturnClick(task.id)
                      }
                      className="p-1 hover:bg-zinc-500 rounded-md"
                    >
                      {status === "pending" ? <TrashIcon /> : <ReturnIcon />}
                    </button>

                    {(status === "pending" || status === "inProgress") && (
                      <>
                        <div className="h-4 w-px bg-neutral-500 bg-opacity-25"></div>
                        <button
                          onClick={() => handlePlayClick(task.id)}
                          className="p-1 hover:bg-zinc-500 rounded-md"
                        >
                          <PlayIcon />
                        </button>
                      </>
                    )}
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

        {status === "pending" && (
          <div
            className={`transition-all duration-300 ${
              showInput ? "max-h-40" : "max-h-0 overflow-hidden"
            }`}
          >
            <InputComponent
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onSubmit={handleAddClick}
            />
          </div>
        )}
      </div>

      {status === "pending" && (
        <button
          onClick={() => setShowInput(!showInput)}
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
