import ArtPieceDetails from "/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  data,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = data.find((data) => data.slug === slug);

  if (!artPiece) return <h2>Art Piece not found</h2>;

  // *************************

  const artPieceInfo = artPiecesInfo.find(
    (pieceInfo) => pieceInfo.slug === slug
  );

  const isFavorite = artPieceInfo ? artPieceInfo.isFavorite : false;

  // *************************

  function handleBack() {
    router.push("/art-pieces");
  }

  // console.log(handleToggleFavorite);
  // korrekt!!

  // console.log("auf ArtPieceDetailsPage() DATA: ", data);
  // korrekt!!

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      onBack={handleBack}
      handleToggleFavorite={() => handleToggleFavorite(slug)}
      isFavorite={isFavorite}
    />
  );
}
