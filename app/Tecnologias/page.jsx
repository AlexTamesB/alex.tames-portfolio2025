"use client";

import React from "react";
import Link from "next/link";
import Menu from "../Components/Menu"

export default function Tecnologías() {
  return (
    <div className="max-w-lg mx-auto p-8">
      <Menu/>
      <h1 className="text-4xl font-extrabold mb-4  text-blue-500">Tecnologías</h1>
      <p className="text-sm text-gray-700 dark:text-gray-200">
        Me he formado y he adquirido conocimiento en el desarrollo frontend, utilizando herramientas modernas para construir interfaces web atractivas, responsivas y funcionales. Estas son algunas de las tecnologías que manejo:
      </p>
      <ul className="font-extrabold mb-4 mt-3">
        <li>- Frontend: HTML5, CSS3, Bootstrap,</li>
        <li>- Herramientas: Git, GitHud, Visual Studio</li>
        <li>- Diseño responsivo: Bootstrap, Flexbox, Grid</li>
      </ul>

    
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-gray-400 text-black rounded hover:bg-blue-700 transition-colors">
          Ir a menu
        </button>
      </Link>
    </div>
  );
}