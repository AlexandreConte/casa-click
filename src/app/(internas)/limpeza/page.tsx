import Link from "next/link";

export default function Limpeza() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase py-8 font-semibold">O que você procura?</h1>
      <div className="flex flex-col items-center gap-4 mx-6">
        <Link href='/limpeza/convencional' className="text-sm uppercase bg-[#417ace] px-4 py-2 rounded-md self-stretch text-center">
          Limpeza convencional
        </Link>
        <Link href='/limpeza/premium' className="text-sm uppercase bg-[#4aa7fd] px-4 py-2 rounded-md self-stretch text-center">
          Limpeza premium
        </Link>
        <Link href='/limpeza/estofados' className="text-sm uppercase bg-[#64b5ff] px-4 py-2 rounded-md self-stretch text-center">
          Estofados e tapetes
        </Link>
        <Link href='/limpeza/cozinha' className="text-sm uppercase bg-[#54adff] px-4 py-2 rounded-md self-stretch text-center">
          Limpeza de cozinha e eletrodomésticos
        </Link>
        <Link href='/limpeza/obra' className="text-sm uppercase bg-[#8ca0d6] px-4 py-2 rounded-md self-stretch text-center">
          Limpeza pós-obra ou limpeza completa
        </Link>
      </div>
    </div>
  )
}
