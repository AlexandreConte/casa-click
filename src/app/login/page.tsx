import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Image 
        src={logo}
        alt="logo"
      />
      <div className="flex flex-col flex-1 gap-12">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-4">
            <input type="email" className="bg-[#D9D9D9] py-2 px-4 rounded-md text-center" placeholder="E-MAIL" />
            <input type="password" className="bg-[#D9D9D9] py-2 px-4 rounded-md text-center" placeholder="SENHA" />
          </div>
          <div className="flex justify-between">
            <Link href='/recuperar' className="text-[#0f0afc] text-xs uppercase">Esqueci a senha</Link>
            <Link href='/criar' className="text-[#FD471F] text-xs uppercase">Criar conta</Link>
          </div>
        </div>
        <div className="flex-1 self-end">
          <button className="bg-[#FDE71F] uppercase px-4 py-2 rounded-md shadow-sm shadow-[#00000040] text-sm">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
