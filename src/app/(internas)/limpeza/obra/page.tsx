export default function LimpezaPosObra() {
  const servicos = ['Remoção de entulho leve e restos de material (pequenos resíduos, como pó de gesso e restos de tinta)',
    'Limpeza de superfícies (paredes, pisos, janelas e móveis fixos)',
    'Limpeza de janelas e portas (interno e externo, incluindo persianas)',
    'Aspiração de pó fino (uso de aspirador industrial, caso necessário)',
    'Limpeza de azulejos e rejuntes (remoção de manchas de tinta ou cimento)',
    'Remoção de respingos de tinta, argamassa e cimento em superfícies',
    'Lavagem de pisos (remoção de sujeira pesada e manchas de obra)',
    'Limpeza de luminárias e tomadas (remoção de poeira e respingos)',
    'Limpeza detalhada de portas e rodapés (remoção de sujeira e manchas)',
    'A limpeza completa é ideal para quem deseja uma limpeza total da casa, abrangendo todas as áreas e detalhes.',
    'Limpeza profunda de todos os cômodos (quartos, salas, banheiros, cozinha)',
    'Limpeza de superfícies e móveis (remoção de poeira, manchas e organização leve)',
    'Limpeza detalhada de banheiros (limpeza de azulejos, vaso, pia, espelho, box)',
    'Limpeza da cozinha (superfícies, eletrodomésticos e chão)',
    'Limpeza de janelas e vidros (interno e externo, incluindo persianas)',
    'Aspiração e lavagem de pisos (esfregação de manchas mais pesadas)',
    'Desinfecção de áreas específicas (como maçanetas, controles remotos, etc.)',
    'Limpeza de estofados e carpetes (inclui lavagem se necessário)',
    'Organização e limpeza interna de armários (se solicitado)',
    'Limpeza de obra: Ideal para até 150m² de área por visita, considerando a remoção de resíduos leves e a limpeza intensiva de superfícies.',
    'Limpeza completa: Abrange uma residência inteira (até 200m²) com possibilidade de personalizar alguns serviços como organização de armários ou limpeza de eletrodomésticos.',
  ]

  const valor = 350

  return (
    <div className="pb-12">
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
