import DateFormatter from "./date-formatter"
import { PostTitle } from "@/app/_components/post-title"
import Profile from "./profile"
import ShareDropdown from "./ShareDropdown"

type Props = {
  title: string
  date: string
  profileShortDescription?: string
}

export function PostHeader({ title, date, profileShortDescription }: Props) {
  return (
    <div className="mx-auto md:mt-8">
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center text-xs text-gray-400 mt-2 mb-8 gap-2 justify-between">
        <DateFormatter dateString={date} />
        <ShareDropdown title={title} />
      </div>

      <Profile concise shortDescription={profileShortDescription}></Profile>
    </div>
  )
}
