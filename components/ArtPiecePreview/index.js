import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  artist,
  title,
  isFavorite,
  handleToggleFavorite,
}) {
  // console.log(handleToggleFavorite);
  // korrekt!

  // console.log("auf ArtPiecePreview() PIECES: ", slug, image, artist, title);
  // korrekt!

  return (
    <div>
      <FavoriteButton
        isFavorite={isFavorite}
        handleToggleFavorite={() => handleToggleFavorite(slug)}
      />

      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          alt={`Art piece "${title}" by ${artist}`}
          width={200}
          height={200}
          priority
        />
      </Link>
      <h3>{title}</h3>
      <p>by {artist}</p>
    </div>
  );
}
