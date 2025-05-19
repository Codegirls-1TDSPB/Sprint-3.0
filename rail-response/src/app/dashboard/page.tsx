'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  tipo: string; // Exemplo: 'admin' ou 'usuário'
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Exemplo: pegar dados da API (substitua pela sua API real)
  useEffect(() => {
    // Aqui você faria fetch('/api/usuarios') e atualizaria o estado
    // Por enquanto vamos usar dados mockados:
    setUsuarios([
      { id: 1, nome: 'João Silva', email: 'joao@exemplo.com', tipo: 'admin' },
      { id: 2, nome: 'Maria Souza', email: 'maria@exemplo.com', tipo: 'usuário' },
    ]);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Usuários</h1>

      <Link
        href="/dashboard/usuarios/novo"
        className="mb-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        + Novo Usuário
      </Link>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-orange-100">
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Tipo</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id} className="hover:bg-orange-50">
              <td className="border border-gray-300 px-4 py-2">{user.nome}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.tipo}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  href={`/dashboard/usuarios/${user.id}/editar`}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Editar
                </Link>
                <button
                  onClick={() => alert(`Excluir usuário ${user.nome} (implementar!)`)}
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
