'use client';

import { Logo } from "../components/Logo"; // ajuste o caminho conforme sua estrutura
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b4263] text-center">
      {/* Logo */}
      <Logo className="rounded-full" />

      {/* Nome do sistema */}
      <h1 className="text-orange-500 text-4xl font-bold mt-4">RailResponse</h1>

      {/* Botão de entrada */}
      <button 
        onClick={handleClick}
        className="mt-6 bg-orange-500 text-black font-medium text-lg px-6 py-2 rounded hover:bg-orange-600 transition"
      >
        Entrar
      </button>
    </div>
  );
}
