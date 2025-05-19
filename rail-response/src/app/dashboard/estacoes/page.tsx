'use client';

import { useEffect, useState } from 'react';

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: 'pendente' | 'em andamento' | 'concluída';
  responsavel: string;
}

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    // Aqui você buscaria as tarefas da API real
    setTarefas([
      {
        id: 1,
        titulo: 'Revisar sistema de alertas',
        descricao: 'Verificar funcionamento dos alertas nas estações',
        status: 'em andamento',
        responsavel: 'João Silva',
      },
      {
        id: 2,
        titulo: 'Atualizar inventário',
        descricao: 'Atualizar dados de equipamentos na estação central',
        status: 'pendente',
        responsavel: 'Maria Souza',
      },
    ]);
  }, []);

  // Função simples para alterar status localmente (pode depois ser integrada à API)
  const atualizarStatus = (id: number, novoStatus: Tarefa['status']) => {
    setTarefas((old) =>
      old.map((t) => (t.id === id ? { ...t, status: novoStatus } : t))
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tarefas</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-orange-100">
            <th className="border border-gray-300 px-4 py-2">Título</th>
            <th className="border border-gray-300 px-4 py-2">Descrição</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Responsável</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id} className="hover:bg-orange-50">
              <td className="border border-gray-300 px-4 py-2">{tarefa.titulo}</td>
              <td className="border border-gray-300 px-4 py-2">{tarefa.descricao}</td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={tarefa.status}
                  onChange={(e) => atualizarStatus(tarefa.id, e.target.value as Tarefa['status'])}
                  className="border rounded px-2 py-1"
                >
                  <option value="pendente">Pendente</option>
                  <option value="em andamento">Em andamento</option>
                  <option value="concluída">Concluída</option>
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">{tarefa.responsavel}</td>
              <td className="border border-gray-300 px-4 py-2">
                {/* Pode incluir botões para editar detalhes da tarefa, excluir, etc */}
                <button
                  onClick={() => alert(`Editar tarefa ${tarefa.titulo} (implementar!)`)}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
