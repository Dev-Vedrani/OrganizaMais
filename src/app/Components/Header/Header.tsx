import { DateComponent } from "./Date";
import { UserName } from "./UserName";

interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <div className="text-xl font-light flex justify-between items-center">
      <UserName name={name} />
      <div className="flex flex-col pt-3.5">
        <span>A persistência é o caminho do êxito.</span>
        <span className="text-center">- Charles Chaplin.</span>
      </div>
      <div>
        <DateComponent />
      </div>
    </div>
  );
};
