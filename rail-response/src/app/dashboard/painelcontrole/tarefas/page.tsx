'use client'

import Header from '@/components/Cabecalho/Header';
import Footer from '@/components/Rodape/Footer';
import { useRouter } from 'next/navigation';


export default function PainelPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#112B3C] text-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Painel de Controle</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
          <button
            onClick={() => router.push('/painel/alertas')}
            className="bg-[#205375] hover:bg-[#16425e] rounded-lg p-6 text-center font-semibold text-xl transition"
          >
            Visualizar Alertas
          </button>

          <button
            onClick={() => router.push('/painel/tarefas')}
            className="bg-[#205375] hover:bg-[#16425e] rounded-lg p-6 text-center font-semibold text-xl transition"
          >
            Visualizar e Atualizar Tarefas
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
