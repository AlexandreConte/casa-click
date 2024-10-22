import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

export default function Inicio() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Image
        src={logo}
        alt="logo"
      />
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <h1 className="uppercase font-bold mx-auto">
            O que você procura?
          </h1>
          <div className="grid grid-cols-2 gap-4 mx-6">
            <Link href='/limpeza'>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-[#54adff]" />
                <div className="text-center">Limpeza</div>
              </div>
            </Link>
            <Link href='/organizacao'>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-[#FD471F]" />
                <div className="text-center">Organização</div>
              </div>
            </Link>
            <Link href='/jardinagem'>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-[#1ffd92]" />
                <div className="text-center">Jardinagem</div>
              </div>
            </Link>
            <Link href='/reparos'>
              <div className="flex flex-col items-center">
                <div className="w-20 h-12 bg-[#6af8de]" />
                <div className="text-center">Reparos</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
