export default function LimpezaConvencional() {
  const servicos = [
    'Limpeza geral de superfícies (bancadas, armários, pias)',
    'Limpeza detalhada de azulejos (paredes, backsplash)',
    'Limpeza do chão (varrer, passar pano e desinfetar)',
    'Limpeza de janelas internas e externas (se houver)',
    'Limpeza de utensílios de cozinha (fogão, micro-ondas, geladeira, forno)',
    'Organização de armários (limpeza leve e organização de itens)',
    'Limpeza de Eletrodomésticos(com limite de até 3 eletrodomésticos por visita)',
    'Geladeira(interna e externa)',
    'Fogão ou Cooktop(inclui remoção de manchas e gordura)',
    'Forno(interno e externo)',
    'Micro - ondas(interno e externo)',
    'Lava - louças',
    'Exaustor e coifa',
  ]
  const valor = 150

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
        <button className="bg-red-600 text-white px-4 py-2 rounded-md">VOLTAR</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">CIENTE</button>
      </div>
    </div>
  )
}
