import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <h2>Art Piece – Spotlight</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image
        src={image}
        alt={`Art Piece by ${artist}?`}
        width={400}
        height={400}
        priority
      />
      <p>{artist}</p>
    </>
  );
}
