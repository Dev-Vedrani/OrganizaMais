import { MoreIcon } from "../Icons/MoreIcon";

export const TitleColumn = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <div>
        <span className="font-semibold text-xl">A fazer</span>
      </div>
      <div className="flex flex-row space-x-2">
        <button className="cursor-pointer">
          <MoreIcon />
        </button>
      </div>
    </div>
  );
};
