import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export function PostTitle({ children }: Props) {
  return (
    <h1
      className="
      text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none"
    >
      {children}
    </h1>
  )
}
