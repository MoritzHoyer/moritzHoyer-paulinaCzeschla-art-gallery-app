import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";
import { useEffect, useState } from "react";

// *****************************************************************

function getRandomPiece(data) {
  const randomPiece = data[Math.floor(Math.random() * data.length)];

  return randomPiece;
}

// *****************************************************************

export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  // state, der das random piece speichert
  const [spotlightPiece, setSpotlightPiece] = useState();

  // getRandomPiece whält aus "pieces" ein random piece aus & speichert es im state "spotlightPiece"
  // useEffect macht, dass ein random piece ausgewählt wird, sobald die Daten in pieces geladen oder aktualisiert werden
  useEffect(() => {
    if (pieces && pieces.length > 0) {
      setSpotlightPiece(getRandomPiece(pieces));
    }
  }, [pieces]);

  if (!spotlightPiece) return <h2>Loading...</h2>;

  const isFavorite = artPiecesInfo?.find(
    (pieceInfo) => pieceInfo.slug === spotlightPiece.slug
  )?.isFavorite;

  // console.log("Komponente Spotlight(): ", handleToggleFavorite);
  // korrekt!!

  return (
    <>
      <h2>Spotlight</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        handleToggleFavorite={() => handleToggleFavorite(spotlightPiece.slug)}
      />
      <Image
        src={spotlightPiece.imageSource}
        alt={`Art piece "${spotlightPiece.name}" by ${spotlightPiece.artist}`}
        width={400}
        height={400}
        priority
      />
      <p>{spotlightPiece.artist}</p>
    </>
  );
}
