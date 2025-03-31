import { TrashIcon } from "../Icons/TrashIcon";

export const NewTask = () => {
  return (
    <div className="my-5 flex flex-col gap-3">
      <div className="flex flex-col">
        <ul className="space-y-2">
          <div className="flex flex-row justify-between shadow-sm shadow-zinc-950 bg-zinc-700 py-1 px-3 rounded-md cursor-grabbing hover:bg-zinc-600">
            <li>Titulo</li>
            <TrashIcon />
          </div>
        </ul>
      </div>
    </div>
  );
};
