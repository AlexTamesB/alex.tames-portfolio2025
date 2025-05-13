"use client";
import React from "react";
import Link from "next/link";
import Menu from "../Components/Menu"

export default function Contactos() {
  return (
    <div className="max-w-lg mx-auto p-8">
      <Menu/>
      <h1 className="text-4xl font-extrabold mb-4 text-blue-500">Contactos</h1>
      <ul className="font-extrabold mb-4 mt-3">
        <li>506 88888888</li>
        <li>Alexander Tames</li>
        <li>Oficina Central - Calle Falsa 123</li>
      </ul>

      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-gray-400 text-black rounded hover:bg-blue-700 transition-colors">
          Ir a menu
        </button>
      </Link>
    
    </div>
  );
}