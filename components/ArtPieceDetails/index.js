import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBack,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <button onClick={onBack}>Back</button>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image
        src={image}
        alt={`Art piece "${title}" by ${artist}`}
        width={400}
        height={400}
        priority
      />

      <h2>{title}</h2>
      <p>{artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
