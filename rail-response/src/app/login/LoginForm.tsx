'use client'

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import { Logo } from '../../components/Logo';

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState('');
  const [mostrarRecuperacao, setMostrarRecuperacao] = useState(false);
  const [emailRecuperacao, setEmailRecuperacao] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email !== 'teste@gmail.com' || senha !== '123456') {
      setErro('Email ou senha incorretos.');
      return;
    }

    setErro('');
    localStorage.setItem('tokenFake', 'ok');
    router.push('/dashboard');
  };

  const handleRecuperarSenha = () => {
    if (emailRecuperacao.trim() === '') {
      alert('Por favor, insira seu email.');
      return;
    }
    alert(`Instruções enviadas para: ${emailRecuperacao}`);
    setMostrarRecuperacao(false);
    setEmailRecuperacao('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1b4263] px-4">
      <div className="flex items-start bg-gray-100 p-10 rounded-xl shadow-md w-[800px] justify-between relative">
        {/* Lado esquerdo */}
        <div className="flex flex-col items-start w-[35%] pt-0 pl-0">
          <Logo className="w-24 h-24 mb-2" />
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
              <button
                type="button"
                className="text-xs text-blue-600 hover:underline"
                onClick={() => setMostrarRecuperacao(!mostrarRecuperacao)}
              >
                Esqueceu email ou senha?
              </button>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Next
              </button>
            </div>
          </form>
        </div>

        {/* Card de recuperação */}
        {mostrarRecuperacao && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white border rounded-md shadow-lg p-6 w-[300px] z-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Recuperar acesso
              </h3>
              <button
                onClick={() => setMostrarRecuperacao(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Digite seu e-mail para receber as instruções.
            </p>
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="w-full px-3 py-2 border rounded mb-3"
              value={emailRecuperacao}
              onChange={(e) => setEmailRecuperacao(e.target.value)}
            />
            <button
              onClick={handleRecuperarSenha}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Enviar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
