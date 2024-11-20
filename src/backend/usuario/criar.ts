'use server'
import Usuario from "@/model/Usuario"
import RepositorioUsuario from "./RepositorioUsuario"

export default async function criarUsuario(nome: string, cpf: string, email: string, senha: string, celular: string): Promise<Usuario> {
  const usuario = new Usuario(nome, cpf, email, senha, celular)
  await RepositorioUsuario.criar(usuario)
  return usuario as Usuario
}
