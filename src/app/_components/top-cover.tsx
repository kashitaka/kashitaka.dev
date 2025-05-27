type Props = {
  imageSrc: string
}

export function TopCover({ imageSrc }: Props) {
  return (
    <div
      className="
        w-full overflow-hidden mb-8
        -mt-16 lg:h-64 md:h-60 sm:h-56 h-52"
    >
      <img src={imageSrc} alt="Top Cover Image" className="w-full h-full object-cover object-center" />
    </div>
  )
}
