import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({ data, handleToggleFavorite }) {
  // console.log(handleToggleFavorite);
  // korrekt!

  // console.log("auf ArtPiecesPage() DATA: ", data);
  // korrekt!

  return (
    <>
      <h2>Art Pieces</h2>
      <ArtPieces pieces={data} handleToggleFavorite={handleToggleFavorite} />
    </>
  );
}
