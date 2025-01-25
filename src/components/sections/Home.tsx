import { Github, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Projects from "@/components/sections/Projects"

export default function Home() {

  const socials = [
    {
      title: "GitHub",
      href: "https://github.com/afazio1",
      icon: <Github className="w-4 h-4" />
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/alexa-fazio/",
      icon: <Linkedin className="w-4 h-4"/>
    },
    {
      title: "YouTube",
      href: "https://youtube.com/c/RoboticNation",
      icon: <Youtube className="w-4 h-4"/>
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-[#7aa2f7] text-2xl md:text-3xl">Hello, World! 👋</h1>
      <p className="text-lg">
        I&apos;m a full-stack developer, college student, and content creator driven by my love for learning.
      </p>
      <div className="flex gap-4">
        {socials.map((social) => (
          <Link href={social.href} key={social.title}>
            <Button variant="outline" className="gap-2">
              {social.icon}
              {social.title}
            </Button>
          </Link>
        ))}
      </div>
      <Projects />
    </div>
  )
}
