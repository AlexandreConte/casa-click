'use client'
import Router from "next/router";
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar() {
    if (verificaAlgumCampoVazio()) {
      alert('Preencha todos os campos');
      return;
    }

    // TODO: CRIAR CONTAS NO BANCO DE DADOS
    redirecionarParaInicio()
  }

  function verificaAlgumCampoVazio(): boolean {
    if (!nome || !cpf || !celular || !email || !senha) {
      return true;
    }
    return false
  }

  function redirecionarParaInicio() {
    Router.push('/inicio');
  }

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-center uppercase py-10">
        Cadastro
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col mx-8 gap-2">
          <label className="uppercase" htmlFor="nome">
            Nome completo
          </label>
          <input
            type="text"
            className="bg-[#D9D9D9] rounded-md py-2 px-4"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-8 gap-2">
          <label className="uppercase" htmlFor="cpf">
            CPF
          </label>
          <input
            type="number"
            className="bg-[#D9D9D9] rounded-md py-2 px-4"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-8 gap-2">
          <label className="uppercase" htmlFor="celular">
            Celular
          </label>
          <input
            type="tel"
            className="bg-[#D9D9D9] rounded-md py-2 px-4"
            id="celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-8 gap-2">
          <label className="uppercase" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            className="bg-[#D9D9D9] rounded-md py-2 px-4"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-8 gap-2">
          <label className="uppercase" htmlFor="senha">
            Senha
          </label>
          <input
            type="password"
            className="bg-[#D9D9D9] rounded-md py-2 px-4"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="flex-1 self-end mr-8">
          <button
            onClick={cadastrar}
            className="
              bg-[#FDE71F] uppercase px-4 py-2 rounded-md shadow-sm shadow-[#00000040] text-sm
            ">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
