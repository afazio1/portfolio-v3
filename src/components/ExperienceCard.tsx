import { Card } from "@/components/ui/card"
import type { Experience } from "@/content/experiences";
import { Briefcase } from "lucide-react";

export default function ExperienceCard({ 
  company,
  position,
  description,
  startDate,
  endDate,
  tags,
}: Experience) {
  

  return (
    <Card className="p-6 bg-card border-card-border min-h-36">
      <div className="flex flex-col justify-between h-full gap-12">
        <div className="flex flex-row gap-3">
          <Briefcase className="h-5 w-5"/>
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <h3 className="text-purple-blue font-semibold">{company}: {position}</h3>
              <p className="text-gray-white">{startDate} - {endDate}</p>
            </div>
            <div className="flex flex-row justify-start gap-3 mt-3">
              <p className="text-sm text-gray-white">{description}</p>
            </div>
          </div>
        </div>
        <div className="space-x-6">
          {tags?.map((tag) => (
            <span key={tag} className="px-2 py-2 text-xs bg-tag-background text-purple">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
