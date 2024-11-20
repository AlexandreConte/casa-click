'use server'
import Servico from "@/model/Servico"
import RepositorioServico from "./RepositorioServico"

export default async function criarServico(
  endereco: string,
  cep: string,
  celular: string,
  agendamento: Date
) {
  const servico = new Servico(
    endereco,
    cep,
    celular,
    agendamento
  )
  await RepositorioServico.criar(servico)
}
