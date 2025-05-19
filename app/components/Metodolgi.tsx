import { Badge, Calendar, CheckCircle, FileCode, Github, Users } from 'lucide-react'
import React from 'react'

export default function Metodolgi() {
  return (
        <section id="metodologia" className="py-16 w-full bg-zinc-900">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Cómo aprenderás conmigo
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mi enfoque de enseñanza se basa en la práctica constante y proyectos reales para asegurar que domines
                  cada concepto.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <FileCode className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Aprendizaje práctico</h3>
                <p className="text-zinc-400">
                  Cada concepto se aplica inmediatamente en ejercicios prácticos para reforzar el aprendizaje.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Users className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Clases personalizadas</h3>
                <p className="text-zinc-400">Adaptadas a tu nivel, ritmo de aprendizaje y objetivos específicos.</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Github className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Proyectos reales</h3>
                <p className="text-zinc-400">
                  Construirás proyectos completos que podrás incluir en tu portfolio profesional.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Calendar className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Seguimiento continuo</h3>
                <p className="text-zinc-400">
                  Soporte entre clases y revisión de código para resolver dudas y mejorar constantemente.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Clases individuales o grupales</h3>
                  <p className="text-zinc-400 mb-6">
                    Elige el formato que mejor se adapte a tus necesidades. Las clases individuales ofrecen atención
                    personalizada, mientras que las grupales permiten aprender colaborativamente a un precio más
                    accesible.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-violet-500" />
                      <span className="text-zinc-300">Horarios flexibles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-violet-500" />
                      <span className="text-zinc-300">Clases online</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-violet-500" />
                      <span className="text-zinc-300">Certificado de finalización</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-violet-600 p-8 flex items-center justify-center">
                  {/* <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Clase de programación"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
