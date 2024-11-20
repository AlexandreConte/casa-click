'use client'
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "@/context/usuario";
import Usuario from "@/model/Usuario";
import Backend from "@/backend";
import { useRouter } from "next/navigation";

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const userContext = useUserContext()

  const router = useRouter();

  function redirecionarParaInicio() {
    router.replace('/inicio');
  }

  function login() {
    const usuario = Backend.usuario.obterPorLogin(email, senha);

    if (!usuario) {
      alert('Usuário não encontrado');
      return;
    }

    const loginUsuario = {
      email: usuario.then(u => u!.email),
      nome: usuario.then(u => u!.nome),
      cpf: usuario.then(u => u!.cpf),
      celular: usuario.then(u => u!.celular),
      senha: usuario.then(u => u!.senha),
    }

    userContext.setUsuario(loginUsuario as unknown as Usuario)

    redirecionarParaInicio()
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pb-12">
      <Image
        src={logo}
        alt="logo"
        width={300}
      />
      <div className="flex flex-col flex-1 gap-12">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-4">
            <input type="email" className="bg-[#D9D9D9] py-2 px-4 rounded-md text-center" placeholder="E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" className="bg-[#D9D9D9] py-2 px-4 rounded-md text-center" placeholder="SENHA"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <Link href='/recuperar' className="text-[#0f0afc] text-xs uppercase">Esqueci a senha</Link>
            <Link href='/criar' className="text-[#FD471F] text-xs uppercase">Criar conta</Link>
          </div>
        </div>
        <div className="flex-1 self-end">
          <button className="bg-[#FDE71F] uppercase px-4 py-2 rounded-md shadow-sm shadow-[#00000040] text-sm"
            onClick={login}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
