import { DateComponent } from "./Date";

export const Header = () => {
  return (
    <div className="text-xl font-light flex justify-between items-center">
      <div className="">
        Bem-Vindo,
        <span className="text-4xl font-semibold block border-b-2 border-blue-200 rounded-md pr-1">
          Cb Vedrani
        </span>
      </div>
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
