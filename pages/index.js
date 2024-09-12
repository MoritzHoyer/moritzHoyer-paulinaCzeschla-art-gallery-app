import Spotlight from "/components/Spotlight";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <>
      <h2>Spotlight</h2>
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
