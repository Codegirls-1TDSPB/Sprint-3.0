'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Estacao {
  id: number;
  nome: string;
  localizacao: string;
  status: string;
}

export default function Estacoes() {
  const [estacoes, setEstacoes] = useState<Estacao[]>([]);

  useEffect(() => {
    // Buscar estações na API real aqui
    setEstacoes([
      { id: 1, nome: 'Estação Central', localizacao: 'São Paulo', status: 'Ativa' },
      { id: 2, nome: 'Estação Norte', localizacao: 'Rio de Janeiro', status: 'Em manutenção' },
    ]);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Estações</h1>

      <Link
        href="/dashboard/estacoes/novo"
        className="mb-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        + Nova Estação
      </Link>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-orange-100">
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Localização</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {estacoes.map((estacao) => (
            <tr key={estacao.id} className="hover:bg-orange-50">
              <td className="border border-gray-300 px-4 py-2">{estacao.nome}</td>
              <td className="border border-gray-300 px-4 py-2">{estacao.localizacao}</td>
              <td className="border border-gray-300 px-4 py-2">{estacao.status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  href={`/dashboard/estacoes/${estacao.id}/editar`}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Editar
                </Link>
                <button
                  onClick={() => alert(`Excluir estação ${estacao.nome} (implementar!)`)}
                  className="text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
