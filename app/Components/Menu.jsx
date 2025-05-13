"use client";
import Link from "next/link";
import { useState } from "react";

const opcionesDeMenu = [
  { id: 1, texto: "Acerca de", link: "#about" },
  { id: 2, texto: "Tecnologías", link: "Tecnologias" },
  { id: 3, texto: "Proyectos", link: "Proyectos" },
  { id: 4, texto: "Contactos", link: "Contactos" },
];

export default function Menu() {
  const [elementoActivo, setElementoActivo] = useState(1);

  return (
    <nav>
      <h1 className="p-4 mr-2 text-2xl font-semibold">Menu</h1>
      {opcionesDeMenu.map((opcion) => (
        <Link
          key={opcion.id}
          href={opcion.link}
          className="bg-blue-500 p-2 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded"
          onClick={() => setElementoActivo(opcion.id)}
        >
          {elementoActivo === opcion.id && <span>*</span>} {opcion.texto}
        </Link>
      ))}
    </nav>
  );
}