export default class Usuario {
  nome: string
  cpf: string
  email: string
  senha: string
  celular: string

  constructor(nome: string, cpf: string, email: string, senha: string, celular: string) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.senha = senha
    this.celular = celular
  }
}
