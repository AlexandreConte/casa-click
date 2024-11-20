import Usuario from "@/model/Usuario";
import Repositorios from "../Repositorios";

export default class RepositorioUsuario extends Repositorios {
  static async obterPorLogin(email: string, senha: string): Promise<Partial<Usuario>> {
    const usuario = await this.db.usuario.findUnique({
      where: { email, senha }
    })
    return usuario as Usuario
  }

  static async criar(usuario: Usuario): Promise<Usuario> {
    return await this.db.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        cpf: usuario.cpf,
        celular: usuario.celular
      }
    }) as Usuario
  }
}
