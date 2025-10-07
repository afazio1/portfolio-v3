import { Card } from "@/components/ui/card"
import { Folder, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProjectCard({ 
  title, 
  description,
  tags,
  liveLink,
  devLink 
}: { title: string; description: string; tags: string[], liveLink: string, devLink: string}) {
  const router = useRouter();
  
  const handleCardClick = () => {
    router.push(devLink);
  }

  return (
    <Card onClick={handleCardClick} className="p-6 bg-card border-card-border hover:border-card-border-hover transition-colors min-h-52">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row gap-3">
          <Folder className="flex-none w-5 h-5 text-purple-blue" />
          <div>
            <h3 className="text-purple-blue font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-white">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div className="space-x-6">
              {tags.map((tag) => (
                <span key={tag} className="px-2 py-2 text-xs bg-tag-background text-purple">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-row-reverse gap-6">
              { liveLink && <Link href={liveLink} onClick={(e) => e.stopPropagation()}><ExternalLink className="w-6 h-6 hover:text-gray-white"/></Link>}
              { devLink && <Link href={devLink} onClick={(e) => e.stopPropagation()}><Github className="w-6 h-6 hover:text-gray-white"/></Link>}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
