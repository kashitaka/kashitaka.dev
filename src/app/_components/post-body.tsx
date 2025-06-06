import markdownStyles from "./markdown-styles.module.css"

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <>
      <div
        className={`prose prose-neutral dark:prose-invert ${markdownStyles["markdown"]}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}
