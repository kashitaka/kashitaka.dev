import Container from "@/app/_components/container"
import { SITE_TITLE, YEAR } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-gray-900 dark:text-gray-200">
      <Container>
        <div className="py-16 flex justify-center items-center w-full text-sm">
          <span>
            {SITE_TITLE} © {YEAR}.
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
