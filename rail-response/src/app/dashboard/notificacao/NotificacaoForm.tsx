'use client';

import { useState, FormEvent } from 'react';

interface NotificacaoDTO {
  conteudo: string;
  contato: string;
  id_usuario: number;
}

interface Props {
  onSubmitSuccess?: () => void;
  initialData?: Partial<NotificacaoDTO>;
}

export default function NotificacaoForm({ onSubmitSuccess, initialData }: Props) {
  const [conteudo, setConteudo] = useState(initialData?.conteudo || '');
  const [contato, setContato] = useState(initialData?.contato || '');
  const [idUsuario, setIdUsuario] = useState(initialData?.id_usuario || 0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!conteudo || !contato || !idUsuario) {
      setError('Preencha todos os campos.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/notificacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conteudo, contato, id_usuario: idUsuario }),
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar notificação');
      }

      setConteudo('');
      setContato('');
      setIdUsuario(0);
      onSubmitSuccess && onSubmitSuccess();
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Notificação</h2>

      <label>
        Conteúdo:
        <textarea
          value={conteudo}
          onChange={e => setConteudo(e.target.value)}
          rows={4}
          required
        />
      </label>

      <label>
        Contato:
        <input
          type="text"
          value={contato}
          onChange={e => setContato(e.target.value)}
          required
        />
      </label>

      <label>
        ID do Usuário:
        <input
          type="number"
          value={idUsuario}
          onChange={e => setIdUsuario(Number(e.target.value))}
          required
          min={1}
        />
      </label>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  );
}
