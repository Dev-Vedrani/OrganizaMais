// app/Data/TypeTask.ts
export type TaskStatus = "pending" | "inProgress" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  completed?: boolean; // Opcional se não for essencial
  // Ou remova esta propriedade se não for necessária
}
