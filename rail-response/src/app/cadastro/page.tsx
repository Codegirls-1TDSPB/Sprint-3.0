"use client";
import { useState } from "react";

export default function Cadastro() {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro:", { nome, email, senha });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#112b3C] text-[#EFEFEF]">
      <h1 className="text-2xl font-bold">Cadastro</h1>

      {/* Formulário */}
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 rounded bg-[#EFEFEF] text-black"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded bg-[#EFEFEF] text-black"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-2 rounded bg-[#EFEFEF] text-black"
          required
        />

        <button className="px-4 py-2 bg-[#F66B0E] text-white rounded hover:bg-orange-600 transition">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
