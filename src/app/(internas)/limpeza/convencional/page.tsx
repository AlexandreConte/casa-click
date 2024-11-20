'use client'
import { useRouter } from "next/navigation"

export default function LimpezaConvencional() {
  const servicos = [
    'Varrer ou aspirar pisos (quartos, salas e corredores)',
    'Limpeza de superfícies (móveis, mesas, prateleiras)',
    'Retirada de pó de objetos decorativos, estantes e eletrônicos', 
    'Limpeza de espelhos e vidros (janelas internas e espelhos de banheiro)',
    'Limpeza de banheiro (pia, vaso sanitário, box, chuveiro, espelhos)',
    'Limpeza de cozinha (pia, fogão, balcão, geladeira externa)',
    'Troca de lixeiras (retirada e substituição de sacos de lixo)',
    'Passar pano úmido com produto adequado nos pisos',
    'Arrumação básica de camas e sofás',
    'Organização leve de itens fora de lugar, como almofadas ou revistas',
  ]
  const valor = 150

  const router = useRouter()

  function recusar() {
    router.back()
  }

  function aceitar() {
    router.push('/busca')
  }

  return (
    <div>
      <h1 className="uppercase font-bold text-center py-8">
        A LIMPEZA CONVENCIONAL INCLUI
      </h1>
      <div className="bg-[#54daff] flex flex-col">
        <ul className="px-6 flex flex-col py-8 list-none">
          {servicos.map((servico, index) => (
            <li key={index}>
              - {servico}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="uppercase bg-[#D9D9D9] py-4 text-center my-8">
          Valor: R$ {valor.toFixed(2)}
        </h1>
      </div>
      <div className="flex justify-between mx-8">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={recusar}>VOLTAR</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={aceitar}>CIENTE</button>
      </div>
    </div>
  )
}
