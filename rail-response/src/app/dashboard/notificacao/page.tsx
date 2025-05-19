'use client';

import { useEffect, useState } from 'react';

interface NotificacaoDTO {
  id: number;
  conteudo: string;
  contato: string;
  data_criacao: string;
  data_atualizacao: string;
  id_usuario?: number;
}

export default function NotificacaoPage() {
  const [notificacoes, setNotificacoes] = useState<NotificacaoDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/notificacao')
      .then(res => res.json())
      .then(data => {
        setNotificacoes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando notificações...</p>;

  return (
    <div>
      <h1>Lista de Notificações</h1>
      {notificacoes.length === 0 && <p>Nenhuma notificação cadastrada.</p>}
      <ul>
        {notificacoes.map(n => (
          <li key={n.id}>
            <strong>ID: {n.id}</strong> - {n.conteudo} <br />
            Contato: {n.contato} <br />
            Criado em: {new Date(n.data_criacao).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
