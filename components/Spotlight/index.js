import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <h2>Art Piece – Spotlight</h2>
      <Image
        src={image}
        alt={`Art Piece by ${artist}?`}
        width={400}
        height={400}
        priority
      />
      <p>{artist}</p>
    </>
  );
}
