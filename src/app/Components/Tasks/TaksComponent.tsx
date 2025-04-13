// app/Components/Tasks/WhiteboardComponent.tsx
import { useState } from "react";
import { Task, TaskStatus, initialTasks } from "@/app/Data/TypeTask"; // Atualize esta linha
import { Column } from "./Column";

export const WhiteboardComponent = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      // Tenta carregar do localStorage se necessário
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: "pending",
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const moveTask = (id: string, status: TaskStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
