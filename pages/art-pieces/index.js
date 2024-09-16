import ArtPieces from "../../components/ArtPieces/index.js";
import styled from "styled-components";

export default function ArtPiecesPage({ data, handleToggleFavorite }) {
  return (
    <Container>
      <ArtPieces pieces={data} handleToggleFavorite={handleToggleFavorite} />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px 0 20px;
`;
