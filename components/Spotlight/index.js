import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

  return (
    <SpotlightWrapper>
      <SpotlightTitle>Spotlight</SpotlightTitle>

      <SpotlightImageContainer>
        <Image
          src={spotlightPiece.imageSource}
          alt={`Art piece "${spotlightPiece.name}" by ${spotlightPiece.artist}`}
          width={500}
          height={500}
          priority
        />
      </SpotlightImageContainer>

      <SpotlightDetailsContainer>
        <SpotlightArtist>{spotlightPiece.artist}</SpotlightArtist>

        <FavoriteButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            handleToggleFavorite={() =>
              handleToggleFavorite(spotlightPiece.slug)
            }
          />
        </FavoriteButtonContainer>
      </SpotlightDetailsContainer>
    </SpotlightWrapper>
  );
}

// const Container = styled.div`
//   display: flex;
// `;

const SpotlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px; // Abstand zwischen den Elementen
`;

const SpotlightTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const SpotlightImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #e0e0e0; // Platzhalter für das Bild
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpotlightDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  margin-top: 10px;
`;

const SpotlightArtist = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const FavoriteButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
