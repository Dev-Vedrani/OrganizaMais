import { MoreIcon } from "../Icons/MoreIcon";

interface TitleColumnProps {
  title: string;
}

export const TitleColumn = ({ title }: TitleColumnProps) => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <div>
        <span className="font-semibold text-xl">{title}</span>
      </div>
      <div className="flex flex-row space-x-2">
        <button className="cursor-pointer">
          <MoreIcon />
        </button>
      </div>
    </div>
  );
};
