export default function LimpezaConvencional() {
  const limpezaSofa = [
    'Sofá de 2, 3, 4 ou mais lugares',
  ]
  const limpezaPoltronas = [
    'Poltrona individual, reclinável ou chaise longue',
  ]
  const limpezaCadeira = [
    'Cadeira de sala de jantar ou cadeira de escritório (por unidade)',
  ]
  const limpezaDeTapete = [
    'Pequenos (até 2 metros)',
    'Médios (entre 2 e 4 metros)',
    'Grandes (acima de 4 metros)',
  ]
  const limpezaDeCarpete = [
    'Área de até 10m²',
    'Área de até 20m²',
    'Área acima de 20m²',
  ]
  const valor = 250

  return (
    <div>
      <h1 className="uppercase font-bold text-center py-8">
        Estofado e carpete inclui até 3 destes itens:
      </h1>
      <div className="bg-[#54daff] flex flex-col">
        <ul className="px-6 flex flex-col py-8 list-none">
          Limpeza de Estofado: Sofá
          {limpezaSofa.map((servico, index) => (
            <li key={index}>
              - {servico}
            </li>
          ))}
          Limpeza de Poltronas:
          {limpezaPoltronas.map((servico, index) => (
            <li key={index}>
              - {servico}
            </li>
          ))}
          Limpeza de Cadeiras:
          {limpezaCadeira.map((servico, index) => (
            <li key={index}>
              - {servico}
            </li>
          ))}
          Limpeza de Tapetes:
          {limpezaDeTapete.map((servico, index) => (
            <li key={index}>
              - {servico}
            </li>
          ))}
          Limpeza de Carpetes:
          {limpezaDeCarpete.map((servico, index) => (
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
