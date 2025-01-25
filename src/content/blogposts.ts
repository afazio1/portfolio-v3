export interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-neovim",
    title: "Getting Started with Neovim",
    date: "2024-01-22",
    description: "A comprehensive guide to setting up and customizing Neovim for modern development.",
    tags: ["Neovim", "Development", "Tools"],
  },
  {
    id: "react-server-components",
    title: "Understanding React Server Components",
    date: "2024-01-15",
    description: "Deep dive into React Server Components and their impact on modern web development.",
    tags: ["React", "Web Development", "Performance"],
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices in 2024",
    date: "2024-01-10",
    description: "Essential TypeScript patterns and practices for building scalable applications.",
    tags: ["TypeScript", "Programming", "Best Practices"],
  },
  {
    id: "ai-in-web-development",
    title: "The Role of AI in Web Development",
    date: "2024-01-05",
    description: "Exploring how AI is transforming the landscape of web development.",
    tags: ["AI", "Web Development", "Future"],
  },
]
export { blogPosts };
