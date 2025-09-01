import Link from "next/link"
import { getAllPosts } from "@/lib/api"

type Props = {
  category: string
  currentSlug: string
  limit?: number
  sortByDateProximity?: boolean
}

export default function RelatedPosts({ category, currentSlug, limit = 5, sortByDateProximity = false }: Props) {
  const allPosts = getAllPosts()
  const current = allPosts.find((post) => post.slug === currentSlug)
  let related = allPosts.filter((post) => post.category === category && post.slug !== currentSlug)

  if (sortByDateProximity && current?.date) {
    related = related.sort(
      (a, b) =>
        Math.abs(new Date(a.date).getTime() - new Date(current.date).getTime()) -
        Math.abs(new Date(b.date).getTime() - new Date(current.date).getTime())
    )
  }

  if (!related.length) return null

  return (
    <section>
      {/* モバイル: 1枚 + peek。左寄せ。親の px-4 ガターを打ち消したい場合は -mx-4 + px-4 */}
      <div className="md:hidden overflow-x-auto scrollbar-hide w-full -mx-4 px-4">
        <div className="flex space-x-4">
          {related.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className="min-w-[220px] w-[220px] bg-white dark:bg-gray-800 rounded-lg shadow flex-shrink-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition p-4 flex flex-col"
            >
              {post.coverImage && (
                <img src={post.coverImage} alt="" className="w-full h-28 object-cover rounded mb-3" loading="lazy" />
              )}
              <div className="font-medium mb-1 line-clamp-2">{post.title}</div>
              <div className="text-xs text-gray-500">{post.date}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* md以上: 2枚 + GAP + peek。左寄せ。必要なら -mx-4 + px-4 は外してもOK */}
      <div className="hidden md:block overflow-x-auto scrollbar-hide w-full">
        <div className="flex space-x-4">
          {related.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className="min-w-[280px] w-[280px] bg-white dark:bg-gray-800 rounded-lg shadow flex-shrink-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition p-4 flex flex-col"
            >
              {post.coverImage && (
                <img src={post.coverImage} alt="" className="w-full h-36 object-cover rounded mb-3" loading="lazy" />
              )}
              <div className="font-medium mb-1 line-clamp-2">{post.title}</div>
              <div className="text-xs text-gray-500">{post.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
