import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />

      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`Art piece "${title}" by ${artist}`}
          width={200}
          height={200}
        />
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
