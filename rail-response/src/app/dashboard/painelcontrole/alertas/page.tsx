'use client'

import Header from '@/components/Cabecalho/Header';
import Footer from '@/components/Rodape/Footer';

type Alerta = {
  id: number;
  titulo: string;
  descricao: string;
  status: 'Aberto' | 'Em Andamento' | 'Resolvido';
};

const alertasMock: Alerta[] = [
  { id: 1, titulo: 'Falha técnica no equipamento', descricao: 'Problema no freio detectado.', status: 'Aberto' },
  { id: 2, titulo: 'Limpeza necessária', descricao: 'Estação precisa de limpeza extra.', status: 'Em Andamento' },
  { id: 3, titulo: 'Manutenção concluída', descricao: 'Reparo no sistema elétrico finalizado.', status: 'Resolvido' },
];

export default function AlertasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#112B3C] text-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Alertas</h1>

        <ul className="space-y-4 max-w-3xl mx-auto">
          {alertasMock.map((alerta) => (
            <li
              key={alerta.id}
              className={`p-4 rounded-lg shadow-md ${
                alerta.status === 'Aberto'
                  ? 'bg-[#F66B0E]'
                  : alerta.status === 'Em Andamento'
                  ? 'bg-[#205375]'
                  : 'bg-gray-600'
              }`}
            >
              <h2 className="text-xl font-semibold">{alerta.titulo}</h2>
              <p className="mt-1">{alerta.descricao}</p>
              <span className="text-sm italic">{alerta.status}</span>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
