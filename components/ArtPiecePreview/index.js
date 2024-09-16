import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

export default function ArtPiecePreview({
  slug,
  image,
  artist,
  title,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <ArtPieceWrapper>
      <Link href={`/art-pieces/${slug}`}>
        <ImageContainer>
          <StyledImage
            src={image}
            alt={`Art piece "${title}" by ${artist}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </ImageContainer>
      </Link>

      <DetailsContainer>
        <TextContainer>
          <StyledTitle>{title}</StyledTitle>
          <Artist>by {artist}</Artist>
        </TextContainer>

        <ButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            handleToggleFavorite={() => handleToggleFavorite(slug)}
          />
        </ButtonContainer>
      </DetailsContainer>
    </ArtPieceWrapper>
  );
}

const ArtPieceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  cursor: pointer; /* Show pointer cursor to indicate clickability */
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease; /* Smooth zoom effect */

  &:hover {
    transform: scale(1.1); /* Zoom effect on hover */
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Artist = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
