// app/Data/TypeTask.ts
export type TaskStatus = "pending" | "inProgress" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export const initialTasks: Task[] = [];
