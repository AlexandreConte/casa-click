import criarServico from "./servico/criar";
import criarUsuario from "./usuario/criar";
import obterUsuario from "./usuario/obterPorLogin";

export default class Backend {
  static readonly usuario = {
    criar: criarUsuario,
    obterPorLogin: obterUsuario,
  }

  static readonly servico = {
    criar: criarServico,
  }
}
