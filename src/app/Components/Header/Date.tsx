export const DateComponent = () => {
  const currentDate = new Date();

  const weekday = currentDate.toLocaleDateString("pt-BR", { weekday: "long" });

  const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const dayMonthYear = currentDate.toLocaleDateString("pt-BR");

  return (
    <div className="absolute top-0 right-0 text-3xl flex flex-col justify-center items-center text-center font-semibold bg-zinc-800 rounded-bl-2xl  p-3 text-zinc-200 shadow-xl">
      <span className="mt-3">{formattedWeekday}</span>
      <span className="text-xl font-light">{dayMonthYear}</span>
    </div>
  );
};
