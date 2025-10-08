"use client"

import { User, Code, BookOpen, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Home from "@/components/sections/Home"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Footer from "@/components/sections/Footer"

export default function Portfolio() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
  }


  return (
    <div className="min-h-screen bg-background text-purple-blue p-4 md:p-8 font-mono">
      {/* ASCII Art Banner */}
      <div className="flex flex-col flex-wrap items-start overflow-x-hidden w-fit">
        <div className="flex flex-row flex-wrap">
          <pre className="text-green text-xs md:text-sm lg:text-base whitespace-pre overflow-x-auto">
            {`
█████╗ ██╗     ███████╗██╗  ██╗ █████╗      
██╔══██╗██║     ██╔════╝╚██╗██╔╝██╔══██╗    
███████║██║     █████╗   ╚███╔╝ ███████║   
██╔══██║██║     ██╔══╝   ██╔██╗ ██╔══██║  
██║  ██║███████╗███████╗██╔╝ ██╗██║  ██║  
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝  
`}
          </pre>
          <pre className="text-green text-xs md:text-sm lg:text-base whitespace-pre overflow-x-auto">
            {`
███████╗ █████╗ ███████╗██╗ ██████╗ 
██╔════╝██╔══██╗╚══███╔╝██║██╔═══██╗
█████╗  ███████║  ███╔╝ ██║██║   ██║
██╔══╝  ██╔══██║ ███╔╝  ██║██║   ██║
██║     ██║  ██║███████╗██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ 
`}
          </pre>
        </div>
        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap w-full justify-between">
          <Button
            variant="ghost"
            className={`gap-2 hover:text-purple`}
            onClick={() => scrollTo("#about")}
          >
            <User className="w-4 h-4" />
            ~/about
          </Button>
          <Button
            variant="ghost"
            className={`gap-2 hover:text-purple`}
            onClick={() => scrollTo("#experience")}
          >
            <Briefcase className="w-4 h-4" />
            ~/experience
          </Button>
          <Button
            variant="ghost"
            className={`gap-2 hover:text-purple`}
            onClick={() => scrollTo("#projects")}
          >
            <Code className="w-4 h-4" />
            ~/projects
          </Button>
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 hover:text-purple">
              <BookOpen className="w-4 h-4" />
              ~/blog
            </Button>
          </Link>
        </nav>
      </div>

      <div className="space-y-12">
        <Home/>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>

    </div>
  )
}


