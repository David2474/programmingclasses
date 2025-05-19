import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClassInfo from "./components/ClassInfo";
import Course from "./components/Course";
import { Code } from 'lucide-react'
import Metodolgi from "./components/Metodolgi";
import Footer from "./components/Footer";
import Contact from "./components/Contact";




export default function Home() {
  return (
    <div className="flex w-[100%] flex-col items-center min-h-screen pb-14 font-[family-name:var(--font-geist-sans)]">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 pl-6">
            <Code className="text-violet-600"></Code>
            <span className="text-xl font-bold text-white">CodeClass</span>
          </div>
          <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white">
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-col w-full gap-[32px] row-start-2 items-center">
        <ClassInfo/>

        <Course/>

        {/* Como aprender */}
        <Contact/>

        {/* Como aprender */}
        <Metodolgi/>
      </main>

      <Footer/>
    </div>
  );
}
