export default function LimpezaConvencional() {
  const servicos = [
    'Limpeza profunda de pisos (esfregar manual ou mecânicamente, tratamento de pisos de madeira ou mármore)',
    'Lavagem de paredes (remoção de manchas e sujeiras)',
    'Limpeza de cortinas e persianas (lavar e aspirar)',
    'Limpeza de estofados (sofás, cadeiras, poltronas, incluindo lavar a vapor)',
    'Limpeza detalhada de eletrodomésticos (geladeira interna e externa, forno, micro-ondas)',
    'Desinfecção completa de banheiros (especial atenção aos azulejos, ralos e torneiras)',
    'Lavar carpetes e tapetes',
    'Limpeza de rodapés, sancas e áreas de difícil acesso',
  ]

  const valor = 250

  return (
    <div>
      <h1 className="uppercase font-bold text-center py-8">
        A LIMPEZA PREMIUM INCLUI
      </h1>
      <div className="bg-[#54daff] flex flex-col">
        <ul className="px-6 flex list-none flex-col gap-2.5 py-8">
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
