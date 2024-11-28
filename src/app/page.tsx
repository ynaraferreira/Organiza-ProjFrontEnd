"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const [isLoginPage, setIsLoginPage] = useState(true); // Estado para alternar entre Login e Cadastro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook para redirecionar

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      console.log("Usuário autenticado:", email);
      router.push("/inicial"); // Redireciona para a página inicial
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo centralizada */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-36 h-36 relative"> {/* Ajusta o tamanho da logo */}
          <Image
            src="/assets/LOGOsemfundo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className="font-poppins text-gray-800">
          Simplifica: Organiza
        </span>
      </div>

      {/* Card de Login ou Cadastro */}
      <div className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-gradient-to-b from-green-100 to-green-500">
        {isLoginPage ? (
          // Formulário de Login
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm text-gray-700">E-mail:</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Senha:</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-green-700 hover:underline">
                Esqueci minha senha
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Entrar
            </button>
          </form>
        ) : (
          // Formulário de Cadastro
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Nome:</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">E-mail:</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Senha:</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Confirmar Senha:</label>
              <input
                type="password"
                placeholder="Confirme sua senha"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-green-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
            >
              Criar Conta
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-sm text-gray-800">
          {isLoginPage ? (
            <>
              Não possui cadastro?{" "}
              <span
                onClick={() => setIsLoginPage(false)}
                className="text-green-700 font-semibold hover:underline cursor-pointer"
              >
                Inscreva-se gratuitamente
              </span>
            </>
          ) : (
            <>
              Já possui conta?{" "}
              <span
                onClick={() => setIsLoginPage(true)}
                className="text-green-700 font-semibold hover:underline cursor-pointer"
              >
                Faça login
              </span>
            </>
          )}
        </p>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-0 left-0 right-0 w-full bg-gray-100 py-4">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Sobre nós
          </a>
          <a href="#" className="hover:underline">
            Política de privacidade
          </a>
          <a href="#" className="hover:underline">
            Termos de uso
          </a>
          <a href="#" className="hover:underline">
            Fale conosco
          </a>
        </div>
      </footer>
    </div>
  );
}
