interface Project {
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Canine Assistants",
    description: "Web database to track service dog behavior and medical concerns.",
    tech: ["Next.js", "MongoDB", "Azure"],
    liveLink: "https://canine-assistants.netlify.app",
    devLink: "https://github.com/GTBitsOfGood/canine-assistants",
  },
  {
    title: "Peer Notes",
    description: "P2P note sharing platform that allows students to host and search for notes based on professor, course, semester and topic.",
    tech: ["Django", "Flask", "React.js", "SQLite"],
    liveLink: "",
    devLink: "https://github.com/AmanTahiliani/PeerNotes",
  },
  {
    title: "Web Crawler",
    description: "Domain-specific web crawler written in Go with MongoDB as a web archive. Parses pages for keywords and creates an inverted index table for search queries.",
    tech: ["Go", "MongoDB"],
    liveLink: "",
    devLink: "https://github.com/afazio1/web-crawler",
  },
]

export default projects;
