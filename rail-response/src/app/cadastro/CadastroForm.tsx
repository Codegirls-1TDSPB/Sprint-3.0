'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Logo } from '../../components/Logo';

export default function CadastroForm() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState<'sucesso' | 'erro' | ''>(''); // NOVO
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dados mock para teste
    const dadosMock = {
      nome: 'usuario',
      sobrenome: 'Teste',
      email: 'teste@gmail.com',
      cpf: '123.456.789‑00',
      telefone: '(11) 34567‑8901',
      senha: '123456'
    };

    // Verificando se os dados correspondem aos valores mock
    if (
      nome === dadosMock.nome &&
      sobrenome === dadosMock.sobrenome &&
      email === dadosMock.email &&
      cpf === dadosMock.cpf &&
      telefone === dadosMock.telefone &&
      senha === dadosMock.senha
    ) {
      setMensagem('Cadastro realizado com sucesso!');
      setTipoMensagem('sucesso'); // ✅ Muda a cor para verde
      setTimeout(() => {
        router.push('/login');  
      }, 2000);
    } else {
      setMensagem('Erro ao cadastrar. Verifique os dados.');
      setTipoMensagem('erro'); // ❌ Muda a cor para vermelho
    }
  };

  return (
    <div className="min-h-screen bg-[#1b4263] relative flex flex-col items-center justify-center px-4">
      {/* Usando o componente Logo aqui */}
      <Logo className="absolute top-6 left-6 w-24 h-24 rounded-full" />
      <h1 className="text-3xl font-bold text-white mb-6">Cadastro</h1>
      <div className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome" className="block text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="w-full px-3 py-2 border rounded-md"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="sobrenome" className="block text-sm font-medium">
              Sobrenome
            </label>
            <input
              type="text"
              id="sobrenome"
              className="w-full px-3 py-2 border rounded-md"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Seu sobrenome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
            />
          </div>
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="w-full px-3 py-2 border rounded-md"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium">
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              className="w-full px-3 py-2 border rounded-md"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium">
              Senha
            </label>
            <div className="relative">
              <input
                type={senhaVisivel ? 'text' : 'password'} 
                id="senha"
                className="w-full px-3 py-2 border rounded-md"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setSenhaVisivel(!senhaVisivel)} 
              >
                {senhaVisivel ? <EyeOff /> : <Eye />} 
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600"
          >
            Criar Conta
          </button>
        </form>

        {/* MENSAGEM COM COR CONDICIONAL */}
        {mensagem && (
          <div
            className={`mt-4 text-center text-sm ${tipoMensagem === 'sucesso' ? 'text-green-600' : 'text-red-600'}`}
          >
            {mensagem}
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
