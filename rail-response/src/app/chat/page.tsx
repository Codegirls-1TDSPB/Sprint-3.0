'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AlertItem from './AlertItem';
import AlertActions from './AlertActions';
import { Bell, Settings, ChevronLeft, LogOut } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const [acaoSelecionada, setAcaoSelecionada] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState('');
  const [mensagensEnviadas, setMensagensEnviadas] = useState<string[]>([]);

  const enviarMensagem = () => {
    if (mensagem.trim() === '') return;

    setMensagensEnviadas((prev) => [...prev, mensagem]);
    setMensagem('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      enviarMensagem();
    }
  };

  const handleLogout = () => {
    // Aqui você pode limpar o localStorage ou tokens, se necessário
    router.push('/login');
  };

  return (
    <div className="grid grid-cols-[300px_1fr] gap-4">
      {/* Sidebar */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Bell size={18} /> Alertas
        </h2>
        <div className="space-y-2">
          <AlertItem name="Paulo Ricardo" initials="PR" time="10 min" status="unread" />
          <AlertItem name="Anna Beatriz" initials="AB" time="1 h" status="unread" />
          <AlertItem name="Maria Pimenta" initials="AB" time="15 min" />
          <AlertItem name="João Carlos" initials="JC" time="3 d" />
          <AlertItem name="William Silva" initials="WS" time="4 h" />
          <AlertItem name="Leandro Rocha" initials="LR" time="2 d" />
          <AlertItem name="Jorge Veiga" initials="JV" time="40 min" />
          <AlertItem name="Bruna Pereira" initials="BP" time="15 min" />
        </div>
      </div>

      {/* Chat box */}
      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between">
        <div className="overflow-y-auto max-h-[60vh]">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 font-medium">
              <ChevronLeft size={20} />
              Eduarda
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm">🔔</span>
              <Settings size={18} />
              {/* Botão Sair */}
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-800"
              >
                <LogOut size={18} />
                Sair
              </button>
            </div>
          </div>

          {/* Mensagem de alerta */}
          <div className="bg-gray-100 p-4 rounded-md mb-2">
            <p className="font-bold">Falha técnica!</p>
            <p className="text-sm">Detecção de problemas em equipamento de freio.</p>
            <img
              src="/imagens/sinal-de-alerta.png"
              alt="Alerta"
              className="w-24 h-24 mx-auto my-4"
            />
            <div className="flex gap-2 text-sm">
              <span className="text-xl">❗</span>
              <p>
                Avise imediatamente: Informe o maquinista ou o responsável pela operação sobre o problema.
              </p>
            </div>
          </div>

          {/* Mensagem do sistema */}
          {acaoSelecionada && (
            <div className="bg-purple-50 border border-purple-300 text-purple-800 px-4 py-2 rounded-md mb-2 text-sm">
              ✅ Situação marcada como: <strong>{acaoSelecionada}</strong>
            </div>
          )}

          {/* Mensagens enviadas pelo usuário */}
          {mensagensEnviadas.map((msg, index) => (
            <div key={index} className="bg-blue-100 p-2 rounded-md mb-2 w-fit ml-auto text-sm">
              {msg}
            </div>
          ))}

          {/* Botões */}
          <AlertActions onSelect={setAcaoSelecionada} acaoSelecionada={acaoSelecionada} />
        </div>

        {/* Caixa de mensagem */}
        <div className="mt-4">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
            <span className="mr-2">✉️</span>
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="bg-transparent w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
