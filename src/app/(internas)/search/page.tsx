import Image from "next/image";
import loader from '/public/loader.gif'

export default function Search() {
  return (
    <div className="uppercase text-center flex flex-col justify-center items-center w-full h-screen">
      <h1 className="font-bold">Procurando profissional...</h1>
      <Image 
        src={loader}
        alt="loading"
        width={100}
      />
    </div>
  )
}
