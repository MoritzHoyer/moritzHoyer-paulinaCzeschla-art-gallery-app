import Spotlight from "/components/Spotlight";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  // console.log(handleToggleFavorite);
  // korrekt!

  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
