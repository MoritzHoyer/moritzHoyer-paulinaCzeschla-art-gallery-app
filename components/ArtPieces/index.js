// Importiere die ArtPiecePreview-Komponente, die jedes einzelne Kunststück rendern wird, und Next.js's Image-Komponente.
import ArtPiecePreview from "../ArtPiecePreview";

// ArtPieces-Komponente: Diese Komponente rendert eine Liste von Kunststücken.
// Die 'pieces'-Prop enthält die Daten der Kunststücke, die von der HomePage-Komponente übergeben wurde.
export default function ArtPieces({ pieces }) {
  // Gib eine Liste von Kunststücken zurück. Jedes Kunststück wird mit der map-Funktion über die pieces-Array gerendert.
  return (
    <ul>
      {pieces.map((piece) => (
        // Jedes Listenelement benötigt einen eindeutigen Schlüssel, hier verwenden wir den 'slug' des Kunststücks.
        <li key={piece.slug}>
          {/* Übergib die Bildquelle, den Künstler und den Titel als props an die ArtPiecePreview-Komponente. */}
          <ArtPiecePreview
            image={piece.imageSource} // Bildquelle des Kunststücks
            artist={piece.artist} // Name des Künstlers
            title={piece.name} // Titel des Kunststücks
            slug={piece.slug} // Hier übergeben wir den slug
          />
        </li>
      ))}
    </ul>
  );
}
