import Container from "@/app/_components/container"
import Header from "@/app/_components/header"
import Profile from "./_components/profile"
import { TopCover } from "./_components/top-cover"
import { MoreStories } from "@/app/_components/more-stories"
import { getAllPosts } from "@/lib/api"

export default function Index() {
  const allPosts = getAllPosts()

  return (
    <main>
      <Header />
      <TopCover imageSrc="/assets/blog/hello-world/cover.jpg" />
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="order-1 lg:order-2 lg:w-1/3 w-full lg:mb-8 lg:mb-0 ">
              <div className="lg:sticky lg:top-8 lg:top-16">
                <Profile />
              </div>
            </div>
            <div className="order-2 lg:order-1 lg:w-2/3 w-full">
              <MoreStories posts={allPosts} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
