import { CheckIcon } from "../Icons/CheckIcon";

interface InputComponentProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const InputComponent = ({
  value,
  onChange,
  onSubmit,
}: InputComponentProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-700 rounded-lg flex justify-between items-center p-3"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite sua tarefa..."
        className="w-full h-full py-1 outline-none truncate bg-transparent text-white placeholder-zinc-400"
        autoFocus
      />
      <button
        type="submit"
        className="cursor-pointer hover:bg-zinc-600 p-1 rounded"
        disabled={!value.trim()}
      >
        <CheckIcon color={value.trim() ? "#fff" : "#6b7280"} />
      </button>
    </form>
  );
};
