import Link from "next/link"
import CoverImage from "./cover-image"
import DateFormatter from "./date-formatter"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-2xl md:text-3xl leading-snug md:mb-4 mb-2">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-xs text-gray-400 md:mb-6 mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base md:text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
