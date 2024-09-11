import ArtPieces from "/components/ArtPieces";
import Spotlight from "/components/Spotlight";

// Funktion zum Auswählen eines zufälligen Kunstwerks
function getRandomPiece(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex]; // Gibt das zufällig ausgewählte Kunstwerk zurück
}

// HomePage-Komponente ist die Hauptkomponente der App und wird in /pages/index.js gerendert.
export default function SpotlightPage({ data }) {
  // Wähle ein zufälliges Kunstwerk für das Spotlight aus
  const spotlightPiece = getRandomPiece(data);

  // Sobald die Daten geladen sind, zeige den Titel und die ArtPieces-Komponente an, die die Kunststücke als Liste rendert.
  return (
    <>
      <h1>Spotlight</h1>
      {/* Rendern des Spotlight-Kunstwerks */}
      <Spotlight
        image={spotlightPiece.imageSource} // Übergibt das Bild des zufälligen Kunstwerks
        artist={spotlightPiece.artist} // Übergibt den Künstler des zufälligen Kunstwerks
      />
    </>
  );
}
