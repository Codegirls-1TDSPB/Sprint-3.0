import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[#112b3C] text-[#EFEFEF]">
      <h1 className="text-xl font-bold">RailResponse</h1>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/cadastro">Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
