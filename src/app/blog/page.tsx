import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import type { BlogPost } from "@/content/blogposts"
import { getAllPosts } from "@/lib/api"

export default async function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="min-h-screen bg-background text-gray-white p-4 md:p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-purple-blue text-3xl font-bold mb-8 flex flex-row w-full justify-between">
          <Link href="/"><ChevronLeft className="w-8 h-8 text-gray-white"/></Link>
          ~/blog
        </h1>
        <div className="h-full flex flex-col gap-3">
          {posts.map((post) => (
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
      <Card className="p-6 bg-card border-card-border hover:border-card-border-hover transition-colors">
        <article className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-purple-blue">{post.title}</h2>
            <time className="text-sm text-muted">{post.date}</time>
          </div>
          <p className="text-gray-white">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-tag-background text-purple">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Card>
    </Link>
  )
}
