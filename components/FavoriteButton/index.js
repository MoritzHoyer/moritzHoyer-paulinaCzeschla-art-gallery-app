import Image from "next/image";

export default function FavoriteButton({ isFavorite, handleToggleFavorite }) {
  // isFavorite soll später an das svg übergeben werden
  // NICHT in <button> rein!!
  // soll ca. so verwendet werden:
  // src={isFavorite ? "/assets/heart-filled.svg" : "/assets/heart.svg"}

  return (
    <button type="button" onClick={handleToggleFavorite}>
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
