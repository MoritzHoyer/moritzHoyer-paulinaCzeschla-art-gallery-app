// Importiere die Next.js's Image-Komponente, um optimierte Bilder darzustellen.
import Image from "next/image";

// ArtPiecePreview-Komponente: Diese Komponente zeigt ein einzelnes Kunststück an.
// Es nimmt die 'image', 'title', und 'artist'-Props, die von der ArtPieces-Komponente übergeben wurden.
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      {/* Verwende die Image-Komponente von Next.js, um das Bild des Kunststücks darzustellen.
          Die Größe des Bildes ist hier auf 200x200 Pixel festgelegt. */}
      <Image
        src={image}
        alt={`Art piece "${title}" by ${artist}`}
        width={200}
        height={200}
        priority
      />
      {/* Zeige den Titel des Kunststücks */}
      <h2>{title}</h2>
      {/* Zeige den Namen des Künstlers */}
      <p>{artist}</p>
    </div>
  );
}
