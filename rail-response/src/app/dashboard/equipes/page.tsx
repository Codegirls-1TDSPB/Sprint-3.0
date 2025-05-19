'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Equipe {
  id: number;
  nome: string;
  tipoExperiencia: string;
  contatoResponsavel: string;
}

export default function Equipes() {
  const [equipes, setEquipes] = useState<Equipe[]>([]);

  useEffect(() => {
    // Aqui você pode buscar da API real
    setEquipes([
      { id: 1, nome: 'Equipe Alpha', tipoExperiencia: 'Manutenção', contatoResponsavel: 'joao@exemplo.com' },
      { id: 2, nome: 'Equipe Beta', tipoExperiencia: 'Operação', contatoResponsavel: 'maria@exemplo.com' },
    ]);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Equipes</h1>

      <Link
        href="/dashboard/equipes/novo"
        className="mb-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        + Nova Equipe
      </Link>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-orange-100">
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Tipo de Experiência</th>
            <th className="border border-gray-300 px-4 py-2">Contato Responsável</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {equipes.map((equipe) => (
            <tr key={equipe.id} className="hover:bg-orange-50">
              <td className="border border-gray-300 px-4 py-2">{equipe.nome}</td>
              <td className="border border-gray-300 px-4 py-2">{equipe.tipoExperiencia}</td>
              <td className="border border-gray-300 px-4 py-2">{equipe.contatoResponsavel}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  href={`/dashboard/equipes/${equipe.id}/editar`}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Editar
                </Link>
                <button
                  onClick={() => alert(`Excluir equipe ${equipe.nome} (implementar!)`)}
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
