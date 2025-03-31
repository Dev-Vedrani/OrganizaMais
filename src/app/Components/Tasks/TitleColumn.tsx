import { EditIcon } from "../Icons/EditIcon";
import { TrashIcon } from "../Icons/TrashIcon";

export const TitleColumn = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <div>
        <span className="font-semibold text-xl">A fazer</span>
      </div>
      <div className="flex flex-row space-x-2">
        <TrashIcon />
        <EditIcon />
      </div>
    </div>
  );
};
