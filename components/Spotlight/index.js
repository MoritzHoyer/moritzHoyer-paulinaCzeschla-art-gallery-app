import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";
import { useEffect, useState } from "react";

function getRandomPiece(data) {
  const randomPiece = data[Math.floor(Math.random() * data.length)];

  return randomPiece;
}

export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    if (pieces && pieces.length > 0) {
      setSpotlightPiece(getRandomPiece(pieces));
    }
  }, [pieces]);

  if (!spotlightPiece) return <h2>Loading...</h2>;

  const isFavorite = artPiecesInfo?.find(
    (pieceInfo) => pieceInfo.slug === spotlightPiece.slug
  )?.isFavorite;

  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => handleToggleFavorite(spotlightPiece.slug)}
      />
      <Image
        src={spotlightPiece.imageSource}
        alt={`"${spotlightPiece.name}" by ${spotlightPiece.artist}`}
        width={400}
        height={400}
        priority
      />
      <p>{spotlightPiece.artist}</p>
    </>
  );
}
