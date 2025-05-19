import { Code, Github, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-violet-500" />
              <span className="text-xl font-bold text-white">CodeClass</span>
            </div>
            <p className="text-sm text-zinc-400">Enseñando programación de manera efectiva desde 2018.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="#cursos" className="text-sm text-zinc-400 hover:text-violet-400">
              Cursos
            </Link>
            <Link href="#servicios" className="text-sm text-zinc-400 hover:text-violet-400">
              Servicios
            </Link>
            <Link href="#sobre-mi" className="text-sm text-zinc-400 hover:text-violet-400">
              Sobre Mí
            </Link>
            <Link href="#contacto" className="text-sm text-zinc-400 hover:text-violet-400">
              Contacto
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-zinc-400 hover:text-violet-400">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-violet-400">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-violet-400">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
  )
}
