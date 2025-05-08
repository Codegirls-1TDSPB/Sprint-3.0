import Image from "next/image";

interface LogoProps {
  className?: string; // permite passar estilos personalizados
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image 
      src="/imagens/logo.png" 
      alt="Logo RailResponse" 
      width={200} 
      height={200} 
      className={`rounded-full ${className}`}
    />
  );
}
