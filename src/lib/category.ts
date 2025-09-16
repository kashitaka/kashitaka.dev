export type CategoryDef = {
  slug: string
  jp: string
}

export const categories: CategoryDef[] = [
  { slug: "english-learning", jp: "英語学習" },
  { slug: "us-graduate-school", jp: "アメリカ大学院留学" },
]

export function getCategorySlugByJpName(jpName: string) {
  const def = categories.find((c) => c.jp === jpName)
  return def?.slug ?? null
}

export function getCategoryJPName(slug: string) {
  const def = categories.find((c) => c.slug === slug)
  return def?.jp ?? null
}
