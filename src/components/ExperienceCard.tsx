import { Card } from "@/components/ui/card"
import type { Experience } from "@/content/experiences";
import { Asterisk } from "lucide-react";

export default function ExperienceCard({ 
  company,
  position,
  description,
  startDate,
  endDate,
}: Experience) {
  

  return (
    <Card className="p-6 bg-card border-card-border hover:border-card-border-hover transition-colors h-36">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row gap-3">
          <div>
            <h3 className="text-purple-blue font-semibold">{company}: {position}</h3>
            {/* <h3 className="text-purple font-semibold">{position}</h3> */}
            <div className="flex flex-row justify-center gap-3 mt-3">
              <Asterisk className="text-gray-white h-5 w-5"/>
              <p className="text-sm text-gray-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
