import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, handleToggleFavorite }) {
  // console.log(handleToggleFavorite);
  // korrekt!

  // console.log("auf ArtPieces() >pieces< : ", pieces);
  // korrekt!

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            slug={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            isFavorite={piece.isFavorite}
            handleToggleFavorite={handleToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
