'use client';

import { useState } from 'react';

export default function PerfilPage() {
  // Estado inicial simulado (em real, viria da API)
  const [nome, setNome] = useState('João Silva');
  const [email, setEmail] = useState('joao.silva@email.com');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [msgSucesso, setMsgSucesso] = useState('');
  const [msgErro, setMsgErro] = useState('');

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      setMsgErro('As senhas não coincidem.');
      setMsgSucesso('');
      return;
    }

    // Aqui você faria a chamada API para atualizar o perfil
    // Por enquanto só simula sucesso
    setMsgErro('');
    setMsgSucesso('Perfil atualizado com sucesso!');
    setSenha('');
    setConfirmSenha('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>
      <form onSubmit={handleSalvar} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block font-medium mb-1">Nome</label>
          <input
            id="nome"
            type="text"
            className="w-full border rounded px-3 py-2"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="senha" className="block font-medium mb-1">Nova Senha</label>
          <input
            id="senha"
            type="password"
            className="w-full border rounded px-3 py-2"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            placeholder="Deixe em branco para não alterar"
          />
        </div>

        <div>
          <label htmlFor="confirmSenha" className="block font-medium mb-1">Confirmar Senha</label>
          <input
            id="confirmSenha"
            type="password"
            className="w-full border rounded px-3 py-2"
            value={confirmSenha}
            onChange={e => setConfirmSenha(e.target.value)}
            placeholder="Confirme a nova senha"
          />
        </div>

        {msgErro && <p className="text-red-600">{msgErro}</p>}
        {msgSucesso && <p className="text-green-600">{msgSucesso}</p>}

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
