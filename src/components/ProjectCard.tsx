import { Card } from "@/components/ui/card"
import { Folder } from "lucide-react"

export default function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <Card className="p-6 bg-[#1f2335] border-[#292e42] hover:border-[#7aa2f7] transition-colors">
      <div className="flex items-start gap-3 h-full">
        <Folder className="flex-none w-5 h-5 text-[#7aa2f7]" />
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-[#7aa2f7] font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-[#292e42] text-[#bb9af7]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
