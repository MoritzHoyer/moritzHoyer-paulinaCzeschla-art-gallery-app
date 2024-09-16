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
  const [spotlightPiece, setSpotlightPiece] = useState();

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
      <ImageContainer>
        <Image
          src={spotlightPiece.imageSource}
          alt={`Art piece "${spotlightPiece.name}" by ${spotlightPiece.artist}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </ImageContainer>

      <DetailsContainer>
        <Artist>{spotlightPiece.artist}</Artist>

        <ButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            handleToggleFavorite={() =>
              handleToggleFavorite(spotlightPiece.slug)
            }
          />
        </ButtonContainer>
      </DetailsContainer>
    </SpotlightWrapper>
  );
}

const SpotlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  max-height: 70vh;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

const Artist = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  padding: 5px;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
