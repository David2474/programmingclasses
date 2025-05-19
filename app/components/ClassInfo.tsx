import Link from "next/link"
import { Button } from '@/components/ui/button'

export default function ClassInfo() {
  return (
        <section id="inicio" className="py-20 w-full md:py-28 ">
          <div className="container px-4 md:px-6">
            <div className="grid  gap-16 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 ml-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Aprende a programar con clases personalizadas a tu ritmo
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Domina el desarrollo web, aplicaciones móviles y más con un enfoque práctico y personalizado. Clases
                  individuales o en grupo adaptadas a tu nivel y objetivos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                    <Link href={'#cursos'}>Ver cursos</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-zinc-700 bg-black hover:text-zinc-300 text-zinc-300 hover:bg-zinc-800"
                    asChild
                  >
                    <Link href="#contacto">Consulta gratuita</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                {/* <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Estudiante programando"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                /> */}
              </div>
            </div>
          </div>
        </section>
  )
}
