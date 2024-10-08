import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

export default function FavoritesPage({
  artPiecesInfo,
  handleToggleFavorite,
  data,
  isFavorite,
}) {
  // aus "data" Favoriten filtern (mit "slug" finden)
  const favoritePieces = data.filter(({ slug }) =>
    artPiecesInfo.find((piece) => piece.slug === slug && piece.isFavorite)
  );

  return (
    <Container>
      {favoritePieces.length ? (
        <ArtPieces
          pieces={favoritePieces}
          handleToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      ) : (
        <h3>No Favorite Art Pieces selected</h3>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px 0 20px;
`;
