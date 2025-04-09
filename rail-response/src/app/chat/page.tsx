// chat/page.tsx
'use client';

import AlertItem from './AlertItem';
import AlertActions from './AlertActions';
import { Bell, Settings, ChevronLeft } from 'lucide-react';

export default function Page() {
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
        <div>
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 font-medium">
              <ChevronLeft size={20} />
              Eduarda
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-sm">🔔</span>
              <Settings size={18} />
            </div>
          </div>

          {/* Mensagem de alerta */}
          <div className="bg-gray-100 p-4 rounded-md mb-2">
            <p className="font-bold">Falha técnica!</p>
            <p className="text-sm">Detecção de problemas em equipamento de freio.</p>
            <img
              src="/imagens/warning.png"
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

          {/* Botões */}
          <AlertActions />
        </div>

        {/* Caixa de mensagem */}
        <div className="mt-4">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
            <span className="mr-2">✉️</span>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="bg-transparent w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
