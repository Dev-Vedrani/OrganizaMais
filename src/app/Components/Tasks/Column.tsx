import { AddIcon } from "../Icons/AddIcon";
import { NewTask } from "./NewTask";
import { TitleColumn } from "./TitleColumn";

interface ColumnProps {
  title: string;
  firstColor: string;
  secondColor: string;
}

export const Column = ({ title, firstColor, secondColor }: ColumnProps) => {
  return (
    <div className="min-w-[380px] max-w-[380px] rounded-lg bg-zinc-800 text-white p-4">
      <TitleColumn title={title} />
      <hr
        className={`my-1.5 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent ${firstColor} to-transparent opacity-25 dark:${secondColor}`}
      />
      <NewTask />
      <div>
        <span className="flex justify-center items-center">
          <AddIcon />
        </span>
      </div>
    </div>
  );
};
