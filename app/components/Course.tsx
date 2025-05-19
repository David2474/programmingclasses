import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Badge, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Course() {
  return (
        <section id="cursos" className="py-16 w-full">
          <div className="flex flex-col justify-center items-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Cursos y clases personalizadas
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aprende a tu ritmo con cursos diseñados para todos los niveles, desde principiantes hasta
                  desarrolladores avanzados.
                </p>
              </div>
            </div>

            <Tabs defaultValue="principiantes" className="mt-8">

              <TabsContent value="principiantes">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="mb-2 border-violet-500 text-violet-400">
                          Más popular
                        </Badge>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-violet-500 text-violet-500" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-white">Introducción a HTML y CSS</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Aprende los fundamentos del desarrollo web
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Estructura básica de HTML</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Estilos con CSS</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Diseño responsive</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Proyecto final: Portfolio personal</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div>
                        <p className="text-sm text-zinc-400">8 clases · 16 horas</p>
                      </div>
                      <Button className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                        <Link href="#contacto">Inscribirme</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                    <CardHeader>
                      <div className="flex items-center justify-end">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-violet-500 text-violet-500" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-white">JavaScript para principiantes</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Fundamentos de programación con JavaScript
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Variables y tipos de datos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Funciones y eventos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">DOM y manipulación de elementos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Proyecto final: Aplicación interactiva</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div>
                        <p className="text-sm text-zinc-400">10 clases · 20 horas</p>
                      </div>
                      <Button className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                        <Link href="#contacto">Inscribirme</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                    <CardHeader>
                      <div className="flex items-center justify-end">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-violet-500 text-violet-500" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-white">Lógica de programación</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Desarrolla tu pensamiento lógico para programar
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Algoritmos básicos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Estructuras de control</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Resolución de problemas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-violet-500" />
                          <span className="text-zinc-300">Proyecto final: Juego simple</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div>
                        <p className="text-sm text-zinc-400">6 clases · 12 horas</p>
                      </div>
                      <Button className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                        <Link href="#contacto">Inscribirme</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
  )
}
