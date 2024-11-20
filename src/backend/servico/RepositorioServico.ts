import Servico from "@/model/Servico";
import Repositorios from "../Repositorios";

export default class RepositorioServico extends Repositorios {
  static async criar(servico: Servico): Promise<Servico> {
    return await this.db.servico.create({
      data: {
        endereco: servico.endereco,
        cep: servico.cep,
        celular: servico.celular,
        agendamento: servico.agendamento,
      }
    }) as Servico
  }
}
