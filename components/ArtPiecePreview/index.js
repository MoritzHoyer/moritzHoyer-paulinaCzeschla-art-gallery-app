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
  dimensions,
}) {
  const aspectRatio = dimensions.height / dimensions.width;

  return (
    <ArtPieceWrapper>
      <Link href={`/art-pieces/${slug}`}>
        <ContainerImage aspectRatio={aspectRatio}>
          <StyledImage
            src={image}
            alt={`Art piece "${title}" by ${artist}`}
            // width={100}
            // height={100}
            layout="fill" // Bild soll den ganzen Container ausfüllen
            objectFit="cover" // Cover sorgt dafür, dass das Bild das Seitenverhältnis beibehält
            priority
          />
        </ContainerImage>
      </Link>

      <ContainerDetails>
        <ContainerText>
          <StyledTitle>{title}</StyledTitle>
          <p>by {artist}</p>
        </ContainerText>

        <ContainerButton>
          <FavoriteButton
            isFavorite={isFavorite}
            handleToggleFavorite={() => handleToggleFavorite(slug)}
          />
        </ContainerButton>
      </ContainerDetails>
    </ArtPieceWrapper>
  );
}

const ArtPieceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ aspectRatio }) =>
    aspectRatio * 100}%; // Dynamisches Seitenverhältnis
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; // Bild wird das Seitenverhältnis beibehalten
`;

const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
