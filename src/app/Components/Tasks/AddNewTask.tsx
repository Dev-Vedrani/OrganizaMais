import { useState } from "react";

interface NewTaskProps {
  onAddTask: (title: string) => void;
  onCancel: () => void;
}

export const AddNewTask = ({ onAddTask, onCancel }: NewTaskProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
        className="w-full p-2 rounded bg-zinc-700 text-white"
        autoFocus
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
        >
          Adicionar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-zinc-600 hover:bg-zinc-700 rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
