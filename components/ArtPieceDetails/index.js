import Image from "next/image";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBack,
}) {
  return (
    <>
      <button onClick={onBack}>Back</button>
      <Image
        src={image}
        alt={`Art piece "${title}" by ${artist}`}
        width={400}
        height={400}
        priority
      />

      <h2>{title}</h2>
      <p>{artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
