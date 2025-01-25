import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { blogPosts } from "@/content/blogposts"
import type { BlogPost } from "@/content/blogposts"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#1a1b26] text-[#a9b1d6] p-4 md:p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#7aa2f7] text-3xl font-bold mb-8 flex flex-row w-full justify-between">
          <Link href="/"><ChevronLeft className="w-8 h-8 text-[#a9b1d6]"/></Link>
          ~/blog
        </h1>
        <div className="h-full flex flex-col gap-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="p-6 bg-[#1f2335] border-[#292e42] hover:border-[#7aa2f7] transition-colors">
        <article className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-[#7aa2f7]">{post.title}</h2>
            <time className="text-sm text-[#565f89]">{post.date}</time>
          </div>
          <p className="text-[#a9b1d6]">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-[#292e42] text-[#bb9af7]">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Card>
    </Link>
  )
}

