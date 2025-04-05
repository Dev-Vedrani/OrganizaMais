// WhiteboardComponent.tsx

import { tasks } from "@/app/Data/Tasks";
import { Column } from "./Column";

export const WhiteboardComponent = () => {
  // Filtra as tarefas para cada coluna
  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row gap-6">
        <div className="flex-1 min-h-52">
          <Column
            title={"Pendentes"}
            firstColor={"via-red-700"}
            status={"pending"}
            tasks={pendingTasks}
          />
        </div>
        <div className="flex-1 min-h-52">
          <Column
            title={"Iniciado"}
            firstColor={"via-yellow-700"}
            status={"inProgress"}
            tasks={inProgressTasks}
          />
        </div>
        <div className="flex-1 min-h-52">
          <Column
            title={"Concluído"}
            firstColor={"via-green-700"}
            status={"completed"}
            tasks={completedTasks}
          />
        </div>
      </div>
    </div>
  );
};
