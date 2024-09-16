import Header from "../Header";
import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  padding-top: 80px;

  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1024px) {
    padding-top: 120px;
  }

  padding: 20px;
`;
