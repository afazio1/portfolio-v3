import ProjectCard from "@/components/ProjectCard"
import projects from "@/content/projects"

export default function Projects() {
  return (
    <>
      <h2 className="text-purple-blue text-2xl">Projects</h2>
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
    </>
  )
}
