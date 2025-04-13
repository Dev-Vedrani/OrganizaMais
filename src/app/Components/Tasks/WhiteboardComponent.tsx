import { useState, useEffect } from "react";
import { initialTasks, Task, TaskStatus } from "@/app/Data/TypeTask";
import { Column } from "./Column";

export const WhiteboardComponent = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Tenta carregar do localStorage, se não existir, usa as tasks iniciais
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("kanban-tasks");
      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    }
    return initialTasks;
  });

  // Salva as tasks no localStorage sempre que elas mudam
  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskTitle: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle,
      status: "pending",
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row gap-6">
        <Column
          title="Pendentes"
          firstColor="via-red-700"
          status="pending"
          tasks={pendingTasks}
          onAddTask={handleAddTask}
          onUpdateTask={updateTaskStatus}
          onRemoveTask={removeTask}
        />
        <Column
          title="Em Progresso"
          firstColor="via-yellow-700"
          status="inProgress"
          tasks={inProgressTasks}
          onUpdateTask={updateTaskStatus}
          onRemoveTask={removeTask}
        />
        <Column
          title="Concluído"
          firstColor="via-green-700"
          status="completed"
          tasks={completedTasks}
          onUpdateTask={updateTaskStatus}
        />
      </div>
    </div>
  );
};
