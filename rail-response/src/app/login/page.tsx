'use client';

import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b4263] text-center px-4">
      <h1 className="text-orange-500 text-4xl font-bold mb-6">Bem-vindo de volta!</h1>
      <LoginForm />
    </div>
  );
}
