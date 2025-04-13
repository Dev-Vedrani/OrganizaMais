// app/Components/Tasks/TaskComponent.tsx
import { useState } from "react";
import { Column } from "./Column";
import { Task, TaskStatus } from "@/app/Data/TypeTask";

export const TaskComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: "pending",
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id: string, status: TaskStatus) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="w-full min-h-screen p-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Column
          title="Pendentes"
          firstColor="via-red-500"
          status="pending"
          tasks={pendingTasks}
          onAddTask={handleAddTask}
          onRemoveTask={handleDeleteTask}
          onUpdateTask={(id) => moveTask(id, "inProgress")}
        />

        <Column
          title="Em Progresso"
          firstColor="via-yellow-500"
          status="inProgress"
          tasks={inProgressTasks}
          onRemoveTask={handleDeleteTask}
          onUpdateTask={(id) => moveTask(id, "completed")}
        />

        <Column
          title="Concluídas"
          firstColor="via-green-500"
          status="completed"
          tasks={completedTasks}
          onRemoveTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};
