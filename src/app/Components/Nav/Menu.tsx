import Image from "next/image";
import userPic from "../../../../public/me.jpeg";
// import HomeIcon from "../../../../public/homeIcon.svg";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full text-zinc-200 py-5 px-1.5">
      <div className=" ">
        <Image
          className="w-15 h-15 rounded-full"
          src={userPic}
          alt="User profile"
        />
      </div>
      <nav className="flex flex-col justify-between items-start">
        {/* <ul className="text-2xl flex flex-col gap-3">
          <div className="flex">
            <Image className="w-8 h-8" src={HomeIcon} alt="User profile" />
            <li>Início</li>
          </div>
          <div>
            <li>Minhas tarefas</li>
          </div>
          <div>
            <li>Conta</li>
          </div>
        </ul> */}
      </nav>
      <div>Sair</div>
    </div>
  );
};
