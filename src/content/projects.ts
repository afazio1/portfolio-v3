interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "Canine Assistants",
    description: "Web database to track service dog behavior and medical concerns.",
    tags: ["Next.js", "MongoDB", "Azure"],
    liveLink: "https://canine-assistants.netlify.app",
    devLink: "https://github.com/GTBitsOfGood/canine-assistants",
  },
  {
    title: "Peer Notes",
    description: "P2P note sharing platform that allows students to host and search for notes based on professor, course, semester and topic.",
    tags: ["Django", "Flask", "React.js", "SQLite"],
    liveLink: "",
    devLink: "https://github.com/AmanTahiliani/PeerNotes",
  },
  {
    title: "Web Crawler",
    description: "Domain-specific web crawler written in Go with MongoDB as a web archive. Parses pages for keywords and creates an inverted index table for search queries.",
    tags: ["Go", "MongoDB"],
    liveLink: "",
    devLink: "https://github.com/afazio1/web-crawler",
  },
  {
    title: "Obsidian Plugin: Markdown Blogger",
    description: "A text editor plugin empowering developers to effortlessly publish markdown notes to their static sites.",
    tags: ["TypeScript", "Node.js"],
    liveLink: "https://obsidian.md/plugins?search=markdown%20blogger",
    devLink: "https://github.com/afazio1/obsidian-markdown-blogger"
  }
]

export default projects;
