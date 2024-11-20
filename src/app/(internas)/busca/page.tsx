'use client'
import Image from "next/image";
import logo from '/public/logo.png'
import { useState } from "react";
import Backend from "@/backend";
import { useRouter } from "next/navigation";

export default function Busca() {
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState('')
  const [celular, setCelular] = useState('')
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const router = useRouter()

  async function aceitar() {
    const horario = new Date(`${data}T${hora}`)
    await Backend.servico.criar(
      endereco,
      cep,
      celular,
      horario
    )

    router.push('/search');
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end">
        <Image
          alt="logo"
          src={logo}
          width={200}
          className="-translate-y-10"
        />
      </div>
      <div>
        <h1 className="uppercase -translate-y-20 ml-12">
          Agora falta pouco...
        </h1>
        <div className="flex flex-col items-center gap-4">
          <input type="text" placeholder="Endereço" className="bg-[#D9D9D9] px-4 py-2 rounded-md uppercase w-[200px]" value={endereco} onChange={e => setEndereco(e.target.value)}
          />
          <input type="text" placeholder="CEP" className="bg-[#D9D9D9] px-4 py-2 rounded-md uppercase w-[200px]" value={cep} onChange={e => setCep(e.target.value)}
          />
          <input type="tel" placeholder="Telefone" className="bg-[#D9D9D9] px-4 py-2 rounded-md uppercase w-[200px]" value={celular} onChange={e => setCelular(e.target.value)}
          />
          <input type="date" className="bg-[#D9D9D9] px-4 py-2 rounded-md uppercase w-[200px]" value={data} onChange={e => setData(e.target.value)}
          />
          <input type="time" className="bg-[#D9D9D9] px-4 py-2 rounded-md uppercase w-[200px]" value={hora} onChange={e => setHora(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6 mr-16">
        <button className="bg-green-400 px-4 py-2 rounded-md uppercase text-sm" onClick={aceitar}>
          Próximo
        </button>
      </div>
    </div >
  )
}
