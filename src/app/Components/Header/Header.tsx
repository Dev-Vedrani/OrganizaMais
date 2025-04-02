import { DateComponent } from "./Date";
import { UserName } from "./UserName";

interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <UserName name={name} />
      </div>
      <div>
        <DateComponent />
      </div>
    </div>
  );
};
