interface CircleStatusProps {
  status: "pending" | "inProgress" | "completed";
}

export const CircleStatus = ({ status }: CircleStatusProps) => {
  // Definindo o tipo para as configurações de status
  type StatusConfig = {
    bgColor400: string;
    bgColor500: string;
    animate?: string;
  };

  // Mapeamento de configurações para cada status
  const statusConfigs: Record<CircleStatusProps["status"], StatusConfig> = {
    pending: {
      bgColor400: "bg-gray-400",
      bgColor500: "bg-gray-500",
    },
    inProgress: {
      bgColor400: "bg-amber-400",
      bgColor500: "bg-amber-500",
      animate: "animate-ping",
    },
    completed: {
      bgColor400: "bg-green-400",
      bgColor500: "bg-green-500",
    },
  };

  const { bgColor400, bgColor500, animate } = statusConfigs[status] || {
    bgColor400: "bg-zinc-400",
    bgColor500: "bg-zinc-500",
  };

  return (
    <span className="relative flex size-3">
      <span
        className={`absolute inline-flex h-full w-full rounded-full ${bgColor400} opacity-75 ${
          animate || ""
        }`}
      ></span>
      <span
        className={`relative inline-flex size-3 rounded-full ${bgColor500}`}
      ></span>
    </span>
  );
};
