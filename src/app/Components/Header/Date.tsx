export const DateComponent = () => {
  const currentDate = new Date();

  // Formata o dia da semana (ex: "segunda-feira")
  const weekday = currentDate.toLocaleDateString("pt-BR", { weekday: "long" });

  // Capitaliza a primeira letra do dia da semana
  const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  // Formata dia/mês/ano (ex: "31/03/2025")
  const dayMonthYear = currentDate.toLocaleDateString("pt-BR");

  return (
    <div className="absolute top-0 right-0 text-3xl flex flex-col justify-center items-center text-center font-semibold bg-zinc-800 rounded-bl-2xl  p-3 text-zinc-200 shadow-xl">
      <span>{formattedWeekday}</span>
      <span className="text-xl font-light">{dayMonthYear}</span>
    </div>
  );
};
