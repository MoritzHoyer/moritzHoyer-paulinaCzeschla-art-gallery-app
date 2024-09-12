import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // isFavorite soll später an das svg übergeben werden
  // NICHT in <button> rein!!

  return (
    <button type="button" onClick={onToggleFavorite}>
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
