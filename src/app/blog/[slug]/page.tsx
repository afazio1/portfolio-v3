import { Card } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  date: string
  content: string
  tags: string[]
}

const blogPosts: Record<string, BlogPost> = {
  "getting-started-with-neovim": {
    id: "getting-started-with-neovim",
    title: "Getting Started with Neovim",
    date: "2024-01-22",
    content: `
Neovim is a hyper-extensible Vim-based text editor that seeks to aggressively refactor Vim. In this guide, we'll explore how to get started with Neovim and make it your own.

## Why Neovim?

Neovim offers several advantages over traditional text editors:

1. Highly customizable
2. Extensible through Lua
3. Built-in LSP support
4. Async plugin architecture
5. Active community

## Basic Setup

First, you'll need to install Neovim. Here's how to get started:

1. Install Neovim
2. Create your init.lua
3. Configure basic settings
4. Add essential plugins

## Essential Plugins

Here are some must-have plugins for your Neovim setup:

- telescope.nvim - Fuzzy finder
- nvim-treesitter - Better syntax highlighting
- lspconfig - Language server protocol configuration
- null-ls - Formatting and diagnostics

## Next Steps

After getting comfortable with the basics, you can:

1. Customize your keybindings
2. Set up language servers
3. Configure debugging
4. Add custom themes

Stay tuned for more detailed guides on each of these topics!
    `,
    tags: ["Neovim", "Development", "Tools"],
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1a1b26] text-[#a9b1d6] p-4 md:p-8 font-mono">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#7aa2f7] text-3xl font-bold mb-8">Post not found</h1>
          <Link href="/blog" className="text-[#7aa2f7] hover:text-[#89ddff] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1b26] text-[#a9b1d6] p-4 md:p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-[#7aa2f7] hover:text-[#89ddff] flex items-center gap-2 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to blog
        </Link>
        <Card className="p-8 bg-[#1f2335] border-[#292e42]">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-[#7aa2f7] mb-2">{post.title}</h1>
            <time className="text-sm text-[#565f89] mb-6 block">{post.date}</time>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-[#292e42] text-[#bb9af7]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-[#a9b1d6]">
              {post.content.split("\n\n").map((paragraph, index) => (
                <div key={index}>
                  {paragraph.startsWith("#") ? (
                    <h2 className="text-2xl font-bold text-[#7aa2f7] mt-8 mb-4">{paragraph.replace(/^## /, "")}</h2>
                  ) : paragraph.startsWith("-") ? (
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i}>{item.replace(/^- /, "")}</li>
                      ))}
                    </ul>
                  ) : paragraph.includes(". ") && /^\d\./.test(paragraph) ? (
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i}>{item.replace(/^\d\. /, "")}</li>
                      ))}
                    </ol>
                  ) : (
                    <p>{paragraph}</p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </Card>
      </div>
    </div>
  )
}

