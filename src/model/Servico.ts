export default class Servico {
  endereco: string
  cep: string
  celular: string
  agendamento: Date

  constructor(endereco: string, cep: string, celular: string, agendamento: Date) {
    this.endereco = endereco
    this.cep = cep
    this.celular = celular
    this.agendamento = agendamento
  }
}
