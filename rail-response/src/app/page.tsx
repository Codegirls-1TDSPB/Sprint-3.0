import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b4263] text-center">
      {/* Logo */}
      <Image 
        src="/imagens/logo.png" 
        alt="Logo RailResponse" 
        width={200} 
        height={200} 
        className="rounded-full"
      />

      {/* Nome do sistema */}
      <h1 className="text-orange-500 text-4xl font-bold mt-4">RailResponse</h1>

      {/* Botão de entrada */}
      <button className="mt-6 bg-orange-500 text-black font-medium text-lg px-6 py-2 rounded hover:bg-orange-600">
        Entrar
      </button>
    </div>
  );
}
