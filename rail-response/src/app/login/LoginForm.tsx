'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Aqui você pode validar o email/senha se quiser
    // Depois do login, redireciona:
    router.push('/chat');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2B5773] px-4">
      <div className="flex items-start bg-gray-100 p-10 rounded-xl shadow-md w-[800px] justify-between">
        {/* Lado esquerdo */}
        <div className="flex flex-col items-start w-[35%] pt-0 pl-0">
          <img
            src="/imagens/logo.png"
            alt="Logo"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Sign in</h2>
          <p className="text-sm text-gray-600">Use your RailResponse</p>
        </div>

        {/* Lado direito */}
        <div className="w-[60%]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium">
                Senha:
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Value"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Esqueceu email ou senha?
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                className="bg-orange-200 text-orange-900 px-4 py-2 rounded hover:bg-orange-300"
                onClick={() => router.push('/cadastro')}
              >
                Criar Conta
              </button>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
