import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Comments from "../Comments";
import CommentForm from "../CommentForm";
import styled from "styled-components";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBack,
  isFavorite,
  handleToggleFavorite,
  comments,
  onSubmitComment,
  slug,
  colors,
}) {
  // console.log(handleToggleFavorite);
  // korrekt!!

  // console.log("auf ArtPieceDetails() DATA: ", image);
  // korrekt!!

  // console.log("COMMENTS!qqq", comments);
  // korrekt!

  // console.log("auf ArtPieceDetails() FUNKTION:", onSubmitComment);
  // korrekt!
  const foundComments = comments.filter((comment) => comment.slug === slug);

  console.log("colers", colors);

  return (
    <>
      <button onClick={onBack}>Back</button>
      <FavoriteButton
        isFavorite={isFavorite}
        handleToggleFavorite={handleToggleFavorite}
      />
      <Image
        src={image}
        alt={`Art piece "${title}" by ${artist}`}
        width={400}
        height={400}
        priority
      />

      <ColorPalette>
        {colors.map((color, index) => (
          <Colors key={index} color={color}></Colors>
        ))}
      </ColorPalette>

      <h3>{title}</h3>
      <p>by {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <Comments comments={foundComments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </>
  );
}

const Colors = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
`;

const ColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
