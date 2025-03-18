import { Card } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/utils";
import { Metadata } from "next"
import markdownStyles from "../../markdown-styles.module.css";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  let title = "Not found";
  if (post) {
    title = post.title;
  }

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-gray-white p-4 md:p-8 font-mono">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <Link href="/blog" className="text-purple-blue hover:text-blue flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <h1 className="text-purple-blue text-3xl font-bold mb-8 text-center">Post not found</h1>
        </div>
      </div>
    )
  }
  const content = await markdownToHtml(post.content || "");
  return (
    <div className="min-h-screen bg-background text-gray-white p-4 md:p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-purple-blue hover:text-blue flex items-center gap-2 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to blog
        </Link>
        <Card className="p-8 bg-card border-card-border">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-purple-blue mb-2">{post.title}</h1>
            <time className="text-sm text-muted mb-6 block">{post.date}</time>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-card-border text-purple">
                  {tag}
                </span>
              ))}
            </div>
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
              />
          </article>
        </Card>
      </div>
    </div>
  )
}

