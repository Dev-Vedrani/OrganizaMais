import { useState } from "react";
import { Column } from "./Column";
import { Task } from "@/app/Data/Tasks";

export const TaskComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: "pending",
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id: string, status: Task["status"]) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="w-full min-h-screen p-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Column
          title="Pendentes"
          firstColor="via-red-500"
          secondColor="via-red-400"
          addButton={true}
          tasks={pendingTasks}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          onMoveTask={(id) => moveTask(id, "in-progress")}
          moveButtonText="Iniciar"
        />

        <Column
          title="Em Progresso"
          firstColor="via-yellow-500"
          secondColor="via-yellow-400"
          tasks={inProgressTasks}
          onDeleteTask={handleDeleteTask}
          onMoveTask={(id) => moveTask(id, "completed")}
          moveButtonText="Concluir"
        />

        <Column
          title="Concluídas"
          firstColor="via-green-500"
          secondColor="via-green-400"
          tasks={completedTasks}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};
