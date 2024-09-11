import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "/components/Layout";

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

export default function App({ Component, pageProps }) {
  // Verwende useSWR, um Daten von der API zu holen. Es wird der fetcher-Funktion zur Datenerfassung benutzt.
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`, // URL der API.
    fetcher // fetcher-Funktion, die wir zuvor definiert haben.
  );

  // Wenn ein Fehler auftritt, gib eine Fehlermeldung auf der Seite aus.
  if (error) return <h1>{error.message}</h1>;

  // Solange die Daten nicht geladen sind, zeige eine Ladeanzeige an.
  if (!data) return <h1>Loading ...</h1>;
  return (
    <>
      <GlobalStyle />
      {/* Layout-Komponente umschließt den Hauptinhalt */}
      <Layout>
        <Component {...pageProps} data={data} />
      </Layout>
    </>
  );
}
