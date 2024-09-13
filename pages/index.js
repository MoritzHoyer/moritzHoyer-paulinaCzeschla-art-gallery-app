import Spotlight from "/components/Spotlight";
import styled from "styled-components";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <Container>
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px 0 20px;
`;
