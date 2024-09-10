// Importiere useSWR für das Abrufen und Zwischenspeichern von Daten sowie die ArtPieces-Komponente, die die Kunststücke rendern wird.
import useSWR from "swr";
import ArtPieces from "/components/ArtPieces";

// Definiere eine fetcher-Funktion, die die API aufruft, um die Daten zu laden.
// Die fetcher-Funktion wird an useSWR übergeben, um den Abruf zu verwalten.
const fetcher = async (url) => {
  const response = await fetch(url); // Hole die Daten von der angegebenen URL.

  // Prüfe, ob die Antwort erfolgreich war (Statuscode 200-299).
  // Wenn nicht, werfe einen Fehler und hänge zusätzliche Informationen an.
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data."); // Definiere eine Fehlernachricht.

    // Füge weitere Informationen zum Fehler hinzu, um das Debugging zu erleichtern.
    error.info = await response.json();
    error.status = response.status;

    // Werfe den Fehler, um ihn später zu behandeln.
    throw error;
  }

  // Wenn die Antwort erfolgreich war, gib die JSON-Daten zurück.
  return response.json();
};

// HomePage-Komponente ist die Hauptkomponente der App und wird in /pages/index.js gerendert.
export default function HomePage() {
  // Verwende useSWR, um Daten von der API zu holen. Es wird der fetcher-Funktion zur Datenerfassung benutzt.
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`, // URL der API.
    fetcher // fetcher-Funktion, die wir zuvor definiert haben.
  );

  // Wenn ein Fehler auftritt, gib eine Fehlermeldung auf der Seite aus.
  if (error) return <h1>{error.message}</h1>;

  // Solange die Daten nicht geladen sind, zeige eine Ladeanzeige an.
  if (!data) return <h1>Loading ...</h1>;

  // Sobald die Daten geladen sind, zeige den Titel und die ArtPieces-Komponente an, die die Kunststücke als Liste rendert.
  return (
    <div>
      <h1>Art Gallery</h1> {/* Titel der Seite */}
      <ArtPieces pieces={data} />{" "}
      {/* Übergib die geladenen Kunststücke als props an ArtPieces */}
    </div>
  );
}
