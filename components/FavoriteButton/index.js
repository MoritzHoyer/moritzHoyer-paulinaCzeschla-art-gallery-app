import Image from "next/image";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, handleToggleFavorite }) {
  // isFavorite soll später an das svg übergeben werden
  // NICHT in <button> rein!!
  // soll ca. so verwendet werden:
  // src={isFavorite ? "/assets/heart-filled.svg" : "/assets/heart.svg"}

  return (
    <button type="button" onClick={handleToggleFavorite}>
      <Image
        src={
          isFavorite ? "/assets/heart-filled.svg" : "/assets/heart-outline.svg"
        }
        width={30}
        height={30}
        alt={isFavorite ? "Unfavorite" : "Favorite"}
      />
    </button>
  );
}

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 15px;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
