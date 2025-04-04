import { Column } from "./Column";

export const WhiteboardComponent = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row gap-6">
        <div className="flex-1 min-h-52">
          <Column
            title={"Pendentes"}
            firstColor={"via-red-700"}
            secondColor={"via-red-500"}
            pending={true}
          />
        </div>
        <div className="flex-1 min-h-52">
          <Column
            title={"Iniciado"}
            firstColor={"via-yellow-700"}
            secondColor={"via-yellow-500"}
            pending={false}
          />
        </div>
        <div className="flex-1 min-h-52">
          <Column
            title={"Concluído"}
            firstColor={"via-green-700"}
            secondColor={"via-green-500"}
            pending={false}
          />
        </div>
      </div>
    </div>
  );
};
