import { Column } from "./Column";

export const TaskComponent = () => {
  return (
    <div className="w-full flex justify-center px-4 overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <Column
          title={"Pendentes"}
          firstColor={"via-red-700"}
          secondColor={"via-red-500"}
          showAddIcon={true}
        />
        <Column
          title={"Iniciado"}
          firstColor={"via-yellow-700"}
          secondColor={"via-yellow-500"}
          showAddIcon={false}
        />
        <Column
          title={"Concluído"}
          firstColor={"via-green-700"}
          secondColor={"via-green-500"}
          showAddIcon={false}
        />
      </div>
    </div>
  );
};
