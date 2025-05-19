'use client';

import { useEffect, useState, FormEvent } from 'react';

interface TipoNotificacaoDTO {
  id?: number;
  nome: string;
  descricao: string;
  data_criacao?: string;
  data_atualizacao?: string;
}

export default function TipoNotificacaoPage() {
  const [tipos, setTipos] = useState<TipoNotificacaoDTO[]>([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/tipo-notificacao')
      .then(res => res.json())
      .then(data => {
        setTipos(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao carregar os tipos de notificação.');
        setLoading(false);
      });
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!nome || !descricao) {
      setError('Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('/tipo-notificacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, descricao }),
      });

      if (!response.ok) throw new Error('Erro ao salvar tipo de notificação.');

      // Atualiza a lista
      const novoTipo = await response.json();
      setTipos([...tipos, novoTipo]);

      // Limpa os campos
      setNome('');
      setDescricao('');
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Tipos de Notificação</h1>

      <form onSubmit={handleSubmit} className="bg-[#205375] p-4 rounded-xl mb-8 space-y-4">
        <h2 className="text-xl font-semibold mb-2">Cadastrar Novo Tipo</h2>

        <div>
          <label className="block text-sm">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            className="w-full p-2 rounded bg-[#1b3a4b] text-white border border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Descrição:</label>
          <textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            className="w-full p-2 rounded bg-[#1b3a4b] text-white border border-gray-600"
            rows={3}
            required
          />
        </div>

        {error && <p className="text-red-400">{error}</p>}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          Salvar Tipo
        </button>
      </form>

      <div className="bg-[#1a4663] p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Tipos Cadastrados</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : tipos.length === 0 ? (
          <p>Nenhum tipo cadastrado.</p>
        ) : (
          <ul className="space-y-3">
            {tipos.map(tipo => (
              <li key={tipo.id} className="border-b border-gray-600 pb-2">
                <strong>{tipo.nome}</strong> <br />
                {tipo.descricao}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
