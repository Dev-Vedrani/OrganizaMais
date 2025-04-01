interface userNameProps {
  name: string;
}

export const UserName = ({ name }: userNameProps) => {
  return (
    <div>
      <p className="text-xl">
        Bem vindo{" "}
        <span className="block border-b-2 border-blue-200 rounded-md pr-1 text-4xl font-semibold">
          {name}
        </span>
      </p>
    </div>
  );
};
