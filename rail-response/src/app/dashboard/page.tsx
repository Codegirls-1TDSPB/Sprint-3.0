'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  LucideAlertTriangle,
  LucideClipboardList,
  LucideUsers,
  LucideTrain,
  LucideUserCog,
  LucideUser,
  LucideBell,
} from 'lucide-react';

const dashboardItems = [
  { label: 'Alertas', icon: LucideAlertTriangle, path: '/dashboard/alertas' },
  { label: 'Notificações', icon: LucideBell, path: '/dashboard/notificacao' },
  { label: 'Tarefas', icon: LucideClipboardList, path: '/dashboard/tarefa' },
  { label: 'Equipes', icon: LucideUsers, path: '/dashboard/equipes' },
  { label: 'Usuários', icon: LucideUser, path: '/dashboard/usuario' },
  { label: 'Estações', icon: LucideTrain, path: '/dashboard/estacao' },
  { label: 'Gerenciar Perfil', icon: LucideUserCog, path: '/dashboard/perfil' },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#112B3C] text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-orange-500 mb-12 text-center">
        Painel de Controle
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dashboardItems.map(({ label, icon: Icon, path }) => (
          <div
            key={label}
            onClick={() => router.push(path)}
            className="bg-[#205375] hover:bg-[#1a4663] transition-all duration-300 p-6 rounded-2xl shadow-lg cursor-pointer flex flex-col items-center text-center transform hover:scale-105 ring-0 hover:ring-2 hover:ring-orange-400"
          >
            <Icon className="text-orange-400 w-8 h-8 mb-4" />
            <span className="text-lg font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
