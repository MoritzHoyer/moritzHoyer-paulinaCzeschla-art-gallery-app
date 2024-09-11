// Importiere die ArtPiecePreview-Komponente, die jedes einzelne Kunststück rendern wird, und Next.js's Image-Komponente.
import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({ data }) {
  return <ArtPieces pieces={data} />;
}
