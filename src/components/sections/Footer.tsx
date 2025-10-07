import { Github, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function Footer() {
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
  <div className="flex flex-row gap-4 justify-center">
        {socials.map((social) => (
          <Link href={social.href} key={social.title}>
            <Button variant="outline" className="gap-2 text-purple border-muted hover:border-gray-white">
              {social.icon}
              {social.title}
            </Button>
          </Link>
        ))}
      </div>
  )
}
