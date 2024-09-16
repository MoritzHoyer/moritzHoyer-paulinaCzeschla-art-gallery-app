import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  return (
    <GridContainer>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            slug={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            isFavorite={piece.isFavorite}
            handleToggleFavorite={handleToggleFavorite}
            dimensions={piece.dimensions}
          />
        </li>
      ))}
    </GridContainer>
  );
}

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
