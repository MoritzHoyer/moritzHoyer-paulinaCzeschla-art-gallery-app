import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            slug={piece.slug}
          />
        </li>
      ))}
    </ul>
  );
}
