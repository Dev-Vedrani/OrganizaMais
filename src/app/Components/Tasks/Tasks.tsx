import { AddIcon } from "../Icons/AddIcon";
import { NewTask } from "./NewTask";
import { TitleColumn } from "./TitleColumn";

export const TaskComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-10">
      <div className="min-w-[250px] max-w-[350px] rounded-lg bg-zinc-800 text-white p-4 hover:ring-2 hover:ring-cyan-200">
        <TitleColumn />
        <hr className="my-1.5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:via-cyan-400" />
        <NewTask />

        <div>
          <span className="flex justify-center items-center">
            <AddIcon />
          </span>
        </div>
      </div>

      <div className="min-w-[250px] max-w-[350px] cursor-pointer rounded-lg border-2 border-zinc-300 text-zinc-400 p-4 hover:bg-gray-800 hover:text-white">
        <p>+ Adicionar nova coluna</p>
      </div>
    </div>
  );
};
