type Props = {
  imageSrc: string
}

export function TopCover({ imageSrc }: Props) {
  return (
    <div
      className="
        w-full overflow-hidden
        -mt-16 lg:h-64 md:h-56 h-48"
    >
      <img src={imageSrc} alt="Top Cover Image" className="w-full h-full object-cover object-center" />
    </div>
  )
}
