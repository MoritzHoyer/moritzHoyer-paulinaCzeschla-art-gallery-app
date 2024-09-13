import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art Pieces</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: lightgrey;
  padding: 10px 0;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
`;
