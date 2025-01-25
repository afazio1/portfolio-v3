"use client"

import { useState } from "react"
import { Terminal, Mail, User, Code, Folder, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Home from "@/components/sections/Home"
import ProjectCard from "@/components/ProjectCard"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"

export default function Portfolio() {
  const [selectedSection, setSelectedSection] = useState("home")

  const tabs = {
    home: {
      title: "home",
      content: <Home />,
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
    <div className="min-h-screen bg-[#1a1b26] text-[#a9b1d6] p-4 md:p-8 font-mono">
      {/* ASCII Art Banner */}
      <pre className="text-[#bb9af7] text-xs md:text-sm lg:text-base whitespace-pre overflow-x-auto">
        {`
█████╗ ██╗     ███████╗██╗  ██╗ █████╗     ███████╗ █████╗ ███████╗██╗ ██████╗ 
██╔══██╗██║     ██╔════╝╚██╗██╔╝██╔══██╗    ██╔════╝██╔══██╗╚══███╔╝██║██╔═══██╗
███████║██║     █████╗   ╚███╔╝ ███████║    █████╗  ███████║  ███╔╝ ██║██║   ██║
██╔══██║██║     ██╔══╝   ██╔██╗ ██╔══██║    ██╔══╝  ██╔══██║ ███╔╝  ██║██║   ██║
██║  ██║███████╗███████╗██╔╝ ██╗██║  ██║    ██║     ██║  ██║███████╗██║╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ 
`}
      </pre>

      {/* Navigation */}
      <nav className="my-8 flex flex-wrap gap-4">
        <Button
          variant="ghost"
          className={`gap-2 ${selectedSection === "home" ? "text-[#7aa2f7]" : ""}`}
          onClick={() => setSelectedSection("home")}
        >
          <Terminal className="w-4 h-4" />
          ~/home
        </Button>
        <Button
          variant="ghost"
          className={`gap-2 ${selectedSection === "about" ? "text-[#7aa2f7]" : ""}`}
          onClick={() => setSelectedSection("about")}
        >
          <User className="w-4 h-4" />
          ~/about
        </Button>
        <Button
          variant="ghost"
          className={`gap-2 ${selectedSection === "projects" ? "text-[#7aa2f7]" : ""}`}
          onClick={() => setSelectedSection("projects")}
        >
          <Code className="w-4 h-4" />
          ~/projects
        </Button>
        <Link href="/blog">
          <Button variant="ghost" className="gap-2">
            <BookOpen className="w-4 h-4" />
            ~/blog
          </Button>
        </Link>
      </nav>

      {/* Content */}
      <motion.div
        key={selectedSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {selectedSection === "home" && tabs.home.content}

        {selectedSection === "about" && tabs.about.content}

        {selectedSection === "projects" && (
          <div className="space-y-6">
            {tabs.projects.content}
          </div>
        )}
      </motion.div>
    </div>
  )
}


