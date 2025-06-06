import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/api"
import { SITE_ROOT_PATH, SITE_TITLE } from "@/lib/constants"
import markdownToHtml from "@/lib/markdownToHtml"
import Container from "@/app/_components/container"
import Header from "@/app/_components/header"
import { PostBody } from "@/app/_components/post-body"
import { PostHeader } from "@/app/_components/post-header"
import CoverImage from "@/app/_components/cover-image"
import { SectionSeparator } from "@/app/_components/section-separator"
import Profile from "@/app/_components/profile"

export default async function Post(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || "")

  return (
    <main>
      <Header />
      <CoverImage title={post.title} src={post.coverImage} />
      <Container>
        <article className="max-w-2xl mx-auto mb-32">
          <PostHeader title={post.title} date={post.date} profileShortDescription={post.author.shortDescription} />
          <PostBody content={content} />
          <SectionSeparator />
          <Profile />
        </article>
      </Container>
    </main>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  return {
    title: post.title + " | " + SITE_TITLE,
    openGraph: {
      type: "website",
      title: post.title + " | " + SITE_TITLE,
      images: [SITE_ROOT_PATH + post.ogImage.url],
      description: post.excerpt,
      siteName: SITE_TITLE,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
