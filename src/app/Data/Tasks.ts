// app/types/task.ts
export type Task = {
  id: string;
  title: string;
  status: "pending" | "in-progress" | "completed";
};
