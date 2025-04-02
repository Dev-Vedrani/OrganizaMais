import { TrashIcon } from "../Icons/TrashIcon";

export const NewTask = () => {
  return (
    <div className="my-5 flex flex-col gap-3">
      <div className="flex flex-col">
        <ul className="space-y-2">
          <div className="flex items-center justify-between shadow-sm shadow-zinc-950 bg-zinc-700 py-1 px-3 cursor-grabbing rounded-md hover:bg-zinc-600">
            <li className="flex-1 min-w-0 pr-2 truncate">Tarefa 1</li>
            <div className="flex-shrink-0 cursor-pointer">
              <TrashIcon />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
