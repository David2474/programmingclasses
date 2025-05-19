import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function Contact() {
  return (
        <section id="contacto" className="py-16 w-full bg-zinc-900">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para comenzar tu viaje en la programación?
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctame para agendar una consulta gratuita y discutir tus objetivos de aprendizaje.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-lg py-12">
              <Card className="bg-zinc-800 border-zinc-700 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-white">Envíame un mensaje</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Completa el formulario y me pondré en contacto contigo a la brevedad.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="nombre"
                          className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nombre
                        </label>
                        <input
                          id="nombre"
                          className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 ring-offset-zinc-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 ring-offset-zinc-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="interes"
                        className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Me interesa
                      </label>
                      <select
                        id="interes"
                        className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 ring-offset-zinc-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="clases">Clases de programación</option>
                        <option value="desarrollo">Desarrollo de proyecto</option>
                        <option value="consultoria">Consultoría técnica</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="mensaje"
                        className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        className="flex min-h-[120px] w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 ring-offset-zinc-900 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Cuéntame sobre tus objetivos o proyecto"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}
