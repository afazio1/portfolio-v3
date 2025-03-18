import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { remark } from "remark";
import html from "remark-html";
import remarkParse from 'remark-parse';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkParse).use(html).process(markdown);
  return result.toString();
}
