import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import type { BlogPost } from "@/content/blogposts";

const postsDirectory = join(process.cwd(), "src/content/_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    return null; // file not found
  }
  const { data, content } = matter(fileContents);

  return { ...data, content } as BlogPost;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
