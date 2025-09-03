import { PROFILE, SITE_COVER_IMAGE } from "@/lib/constants"
import { notFound } from "next/navigation"
import Container from "@/app/_components/container"
import Header from "@/app/_components/header"
import Profile from "../../_components/profile"
import { TopCover } from "../../_components/top-cover"
import { MoreStories } from "@/app/_components/more-stories"
import { getAllPosts } from "@/lib/api"

type Params = {
  params: Promise<{
    category: string
  }>
}

export default async function Category(props: Params) {
  const params = await props.params
  const category = decodeURIComponent(params.category)

  const posts = getAllPosts().filter((p) => p.category === category)

  if (posts.length === 0) {
    // そのカテゴリが generateStaticParams に無い場合は 404
    return notFound()
  }

  return (
    <main>
      <Header />
      <TopCover imageSrc={SITE_COVER_IMAGE} />
      <Container>
        <div className="max-w-2xl mx-auto lg:mt-8">
          <Profile concise shortDescription={PROFILE.shortDescription}></Profile>
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-8">Posts in {category}</h1>
            <MoreStories posts={posts} />
          </div>
        </div>
      </Container>
    </main>
  )
}

export function generateStaticParams() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map((p) => p.category))).filter(Boolean)
  return categories.map((category) => ({ category }))
}
