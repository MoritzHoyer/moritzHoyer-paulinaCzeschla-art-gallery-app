import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  return (
    <StyledList>
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
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
