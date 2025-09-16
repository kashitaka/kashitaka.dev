import Link from "next/link"
import { getAllPosts } from "@/lib/api"
import { getCategoryJPName } from "@/lib/category"

export default function CategoryStrip() {
  const posts = getAllPosts()
  const counts = posts.reduce<Record<string, number>>((acc, p) => {
    if (!p.category) return acc
    acc[p.category] = (acc[p.category] || 0) + 1
    return acc
  }, {})

  const categories = Object.entries(counts).sort((a, b) => b[1] - a[1])

  if (!categories.length) return null

  return (
    <nav className="-mx-4 px-4">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
        {categories.slice(0, 10).map(([c, count]) => (
          <Link
            key={c}
            href={`/categories/${c}`}
            className="
              shrink-0 inline-flex items-center gap-1
              rounded-full border px-3 py-1 text-sm font-medium
              border-gray-300 dark:border-gray-600
              hover:bg-gray-50 dark:hover:bg-gray-700
              hover:border-gray-400 dark:hover:border-gray-600
              transition
            "
          >
            <span>{getCategoryJPName(c)}</span>
            <span className="text-xs text-gray-500">({count})</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
