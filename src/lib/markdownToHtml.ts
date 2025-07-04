import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeExternalLinks from "rehype-external-links"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
