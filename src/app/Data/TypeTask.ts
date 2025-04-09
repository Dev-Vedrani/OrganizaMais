// types/task.ts
export type TaskStatus = "pending" | "inProgress" | "completed";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  status: TaskStatus;
}
