import ProjectCard from "@/components/ProjectCard"
import projects from "@/content/projects"

export default function Projects() {
  return (
    <div className="space-y-3" id="#projects">
      <h2 className="text-gray-white text-2xl">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveLink={project.liveLink}
            devLink={project.devLink}
          />
        ))}
      </div>
    </div>
  )
}
