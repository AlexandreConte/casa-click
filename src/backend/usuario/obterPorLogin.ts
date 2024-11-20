"use server"
import RepositorioUsuario from "./RepositorioUsuario";

export default async function obterUsuario(email: string, senha: string) {
  return await RepositorioUsuario.obterPorLogin(email, senha)
}
