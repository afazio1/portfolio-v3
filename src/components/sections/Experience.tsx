import experiences from "@/content/experiences";
import ExperienceCard from "../ExperienceCard";

export default function Experience() {
  return (
    <div className="space-y-3" id="#experience">
      <h2 className="text-gray-white text-2xl">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, i) => (
          <ExperienceCard key={i} {...experience} />
        ))}
      </div>
    </div>
  )
}
