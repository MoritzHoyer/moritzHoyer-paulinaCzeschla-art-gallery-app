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
    <Container>
      <BackButton onClick={onBack}>Back</BackButton>
      <FavoriteButton
        isFavorite={isFavorite}
        handleToggleFavorite={() => handleToggleFavorite(slug)}
      />
      <ImageContainer>
        <StyledImage
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
      </ImageContainer>
      <Details>
        <Title>{title}</Title>
        <Artist>by {artist}</Artist>
        <Year>Year: {year}</Year>
        <Genre>Genre: {genre}</Genre>
      </Details>
      <Comments comments={foundComments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BackButton = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ColorPalette = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Colors = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;

const Details = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Artist = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

const Year = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
`;

const Genre = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
`;
