"use client"

import { useState } from "react"
import { User, Code, BookOpen, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Home from "@/components/sections/Home"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"

export default function Portfolio() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth"});
  }

  const tabs = {
    experience: {
      title: "experience",
      content: <Experience />,
    },
    about: {
      title: "about",
      content: <About />,
    },
    projects: {
      title: "projects",
      content: <Projects />,
    },
    blog: {
      title: "blog",
      content: undefined,
    }
  }

  return (
    <div className="min-h-screen bg-background text-purple-blue p-4 md:p-8 font-mono">
      {/* ASCII Art Banner */}
      {/* <pre className="text-green text-xs md:text-sm lg:text-base whitespace-pre overflow-x-auto">
        {`
█████╗ ██╗     ███████╗██╗  ██╗ █████╗     ███████╗ █████╗ ███████╗██╗ ██████╗ 
██╔══██╗██║     ██╔════╝╚██╗██╔╝██╔══██╗    ██╔════╝██╔══██╗╚══███╔╝██║██╔═══██╗
███████║██║     █████╗   ╚███╔╝ ███████║    █████╗  ███████║  ███╔╝ ██║██║   ██║
██╔══██║██║     ██╔══╝   ██╔██╗ ██╔══██║    ██╔══╝  ██╔══██║ ███╔╝  ██║██║   ██║
██║  ██║███████╗███████╗██╔╝ ██╗██║  ██║    ██║     ██║  ██║███████╗██║╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ 
`}
      </pre> */}
      <div className="flex flex-row flex-wrap sm:justify-start justify-center">
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
      {/* Navigation */}
      <nav className="mb-12 flex flex-wrap justify-between lg:w-2/3">
        <Button
          variant="ghost"
          className={`gap-2 hover:text-purple`}
          onClick={() => scrollTo("#experience")}
        >
          <Briefcase className="w-4 h-4" />
            experience
        </Button>
        <Button
          variant="ghost"
          className={`gap-2 hover:text-purple`}
          onClick={() => scrollTo("#projects")}
        >
          <Code className="w-4 h-4" />
          ~/projects
        </Button>
        <Button
          variant="ghost"
          className={`gap-2 hover:text-purple`}
          onClick={() => scrollTo("#about")}
        >
          <User className="w-4 h-4" />
          ~/about
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
        <Experience />
        <Projects />
        <About/>
      </div>

      {/* Content */}
      {/* <motion.div */}
      {/*   key={selectedSection} */}
      {/*   initial={{ opacity: 0, y: 20 }} */}
      {/*   animate={{ opacity: 1, y: 0 }} */}
      {/*   transition={{ duration: 0.3 }} */}
      {/* > */}
      {/*   {selectedSection === "home" && tabs.home.content} */}
      {/**/}
      {/*   {selectedSection === "about" && tabs.about.content} */}
      {/**/}
      {/*   {selectedSection === "projects" && ( */}
      {/*     <div className="space-y-6"> */}
      {/*       {tabs.projects.content} */}
      {/*     </div> */}
      {/*   )} */}
      {/* </motion.div> */}
    </div>
  )
}


