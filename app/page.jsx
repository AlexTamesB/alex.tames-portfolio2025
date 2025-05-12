"use client";

import Image from "next/image";
import { useState } from 'react'; 


const opcionesDeMenu = [
  {
    id: 1, texto: 'Acerca de', link: '#about', isSelected: true
  }, {
    id: 2, texto: 'Tecnologias', link: 'Tecnologias', isSelected: true
  }, {
    id: 3, texto: 'Proyectos', link: 'Proyectos', isSelected: true
  }, {
    id: 4, texto: 'contactos', link: 'Contactos', isSelected: true
  }
];

const menu = function () {
  const [elementoActivo, setElementoActivo] = useState(1);

  return (
    <nav>
      <h1 className="p-4 mr-2 text-2xl font-semibold ">Menu</h1>
      {opcionesDeMenu.map((opcion) => (
        <a
          key={opcion.id}
          href={opcion.link}
          className="bg-blue-500 p-2 mr-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded"
          onClick={() => {
            setElementoActivo(opcion.id);
          }}
        >

          {elementoActivo === opcion.id &&
            (<span>*</span>)}
          {opcion.texto}
        </a>
      ))}

      {elementoActivo === 1 &&
        (<div>
        <h1 className="mt-3 text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-3 border-b border-gray-300 dark:border-gray-600 pb-2">
  Datos personales:
</h1>

          <p className="text-sm text-gar-700 dark:text-gray-200">

            Nombre completo: Alex Tames <br />

            Edad: 32 años <br />


            Ubicación: San Isidro del General, Costa Rica. <br />
          </p>

       <h1 className="mt-3 text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-3 border-b border-gray-300 dark:border-gray-600 pb-2">
  Acerca de mí:
</h1>
          <p className="text-sm text-gar-700 dark:text-gray-200 max-w-md">

            Hola, soy Alex Tames,aprendiz de desarrollador web enfocado en crear soluciones digitales modernas y eficientes. Me especializo en el desarrollo frontend con tecnologías como JavaScript, React y HTML/CSS, y estoy en constante aprendizaje para mejorar tanto en el diseño de interfaces como en la lógica de programación.

            Desde que comencé e, descubrí una pasión por construir proyectos que no solo funcionen bien, sino que también ofrezcan una excelente experiencia al usuario. Me considero una persona autodidacta, curiosa y comprometida con el crecimiento continuo. Me gusta enfrentar retos técnicos y encontrar soluciones limpias, escalables y bien estructuradas.

            Actualmente busco oportunidades para seguir creciendo profesionalmente, colaborar en proyectos reales y aportar mis habilidades a equipos de desarrollo que valoren la calidad y la innovación.
          </p>
        </div>)
        }
    </nav>
  );
};


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {menu()}

        <h1 className="text-1xl sm:text-1xl font-bold tracking-[-.01em] text-center">
          texto sin raxon
        </h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-4 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.jsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
