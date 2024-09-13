import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Comments from "../Comments";
import CommentForm from "../CommentForm";

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

      <h3>{title}</h3>
      <p>by {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <Comments comments={foundComments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </>
  );
}
