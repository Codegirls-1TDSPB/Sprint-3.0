'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Logo } from '../../components/Logo'; // ✅ Importando o componente Logo

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email !== 'teste@gmail.com' || senha !== '123456') {
      setErro('Email ou senha incorretos.');
      return;
    }

    setErro('');
    router.push('/chat');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1b4263] px-4">
      <div className="flex items-start bg-gray-100 p-10 rounded-xl shadow-md w-[800px] justify-between">
        {/* Lado esquerdo */}
        <div className="flex flex-col items-start w-[35%] pt-0 pl-0">
          <Logo className="w-24 h-24 mb-2" /> {/* ✅ Substituindo o <img> */}
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
                placeholder="Seu email"
                className="w-full px-3 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium">
                Senha:
              </label>
              <div className="relative">
                <input
                  id="senha"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  className="w-full px-3 py-2 border rounded-md pr-10"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {erro && <p className="text-red-500 text-sm">{erro}</p>}

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
