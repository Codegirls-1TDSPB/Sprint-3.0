'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#112b3C] text-[#EFEFEF]">
      <Image src="/logo.png" alt="Logo do Projeto" width={150} height={150} />
      <h1 className="mt-4 text-2xl font-bold">RailResponse</h1>
      <button className="mt-6 px-6 py-3 bg-[#F66B0E] text-white text-lg rounded-lg hover:bg-orange-600 transition">
        Entrar
      </button>
    </div>
  );
}
