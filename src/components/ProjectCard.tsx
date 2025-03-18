import { Card } from "@/components/ui/card"
import { Folder, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectCard({ 
  title, 
  description,
  tags,
  liveLink,
  devLink 
}: { title: string; description: string; tags: string[], liveLink: string, devLink: string}) {
  return (
    <Card className="p-6 bg-card border-card-border hover:border-card-border-hover transition-colors">
      <div className="flex items-start gap-3 h-full">
        <Folder className="flex-none w-5 h-5 text-purple-blue" />
        <div className="flex flex-col justify-between h-full gap-1">
          <div>
            <h3 className="text-purple-blue font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-tag-background text-purple">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row-reverse gap-1">
            { liveLink && <Link href={liveLink}><ExternalLink className="w-5 h-5"/></Link>}
            { devLink && <Link href={devLink}><Github className="w-5 h-5"/></Link>}
          </div>
        </div>
      </div>
    </Card>
  )
}
