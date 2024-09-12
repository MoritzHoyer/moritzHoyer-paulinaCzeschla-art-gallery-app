import ArtPieceDetails from "/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = data.find((data) => data.slug === slug);

  if (!artPiece) {
    return <p>Art piece not found</p>;
  }

  function handleBack() {
    router.push("/art-pieces");
  }

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      onBack={handleBack}
    />
  );
}
