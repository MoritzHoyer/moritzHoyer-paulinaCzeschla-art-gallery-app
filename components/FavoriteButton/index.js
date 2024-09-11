import Image from "next/image";

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  positionAbsolute = false,
}) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
