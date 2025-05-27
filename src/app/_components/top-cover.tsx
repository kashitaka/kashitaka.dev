
type Props = {
    imageSrc: string;
}

export function TopCover({
    imageSrc,
}: Props) {
   return (
    <div className="
        w-full overflow-hidden mb-8
        lg:-mt-16 lg:h-64 md:h-48 md:-mt-12 sm:h-32 sm:-mt-8 h-24">
        <img
            src={imageSrc}
            alt="Top Cover Image"
            className="w-full h-full object-cover object-center"
        />
      </div>
    );
}
