"use client";

import React from "react";
import Link from "next/link";

export default function Proyectos() {
  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-4  text-blue-500">Proyectos</h1>
      <p className="text-sm text-gray-700 dark:text-gray-200"></p>
      <ul className="font-extrabold mb-4 mt-3">
        <li>-</li>
        <li>- </li>
        <li>- </li>
      </ul>

    
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-gray-400 text-black rounded hover:bg-blue-700 transition-colors">
          Ir a menu
        </button>
      </Link>
    </div>
  );
}