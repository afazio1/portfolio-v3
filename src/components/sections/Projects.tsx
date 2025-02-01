import ProjectCard from "@/components/ProjectCard"
import projects from "@/content/projects"

export default function Projects() {
  return (
    <>
      <h2 className="text-[#7aa2f7] text-2xl">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tech}
            liveLink={project.liveLink}
            devLink={project.devLink}
          />
        ))}
      </div>
    </>
  )
}
