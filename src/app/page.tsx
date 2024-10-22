import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <Image 
        src={logo}
        alt="logo"
      />
      <div className="flex-1">
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href='/login' className="bg-[#FDE71F] uppercase px-4 py-2 rounded-md border border-black">
            Contratante
          </Link>
          <Link href='/login' className="bg-[#54ADFF] uppercase px-4 py-2 rounded-md border border-black">
            Prestador
          </Link>
        </div>
      </div>
    </div>
  );
}
