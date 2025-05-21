// src/components/Header.tsx
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  customTitleClass?: string;
}

export default function Header({ customTitleClass = "" }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tokenFake");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tokenFake");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[#112b3C] text-[#EFEFEF]">
      <h1 className={`text-xl font-bold ${customTitleClass}`}>
        <Link href="/">RailResponse</Link>
      </h1>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Início</Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/cadastro">Cadastro</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/perfil">Perfil</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-orange-400 px-3 py-1 rounded hover:bg-orange-500"
                  type="button"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
