import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  artPiecesInfo,
  handleToggleFavorite,
  data,
}) {
  // aus "data" Favoriten filtern (mit "slug" finden)
  const favoritePieces = data.filter(({ slug }) =>
    artPiecesInfo.find((piece) => piece.slug === slug && piece.isFavorite)
  );

  // console.log("auf FavoritesPage() DATA: ", data);
  // korrekt!!

  return (
    <>
      <h2>Favorites</h2>
      {favoritePieces.length ? (
        <ArtPieces
          pieces={favoritePieces}
          handleToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <h3>No Favorite Art Pieces selected</h3>
      )}
    </>
  );
}
