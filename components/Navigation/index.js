import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/" passHref>
            <StyledLink isActive={router.pathname === "/"}>
              Spotlight
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/art-pieces" passHref>
            <StyledLink isActive={router.pathname === "/art-pieces"}>
              Art Pieces
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/favorites" passHref>
            <StyledLink isActive={router.pathname === "/favorites"}>
              Favorites
            </StyledLink>
          </Link>
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
  background-color: #333;
  padding: 10px 0;
  color: white;
  font-family: "Inter", sans-serif;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled.a`
  font-weight: ${({ isActive }) => (isActive ? "800" : "400")};
  font-style: normal;
  transition: font-style 0.3s ease;

  &:hover {
    font-style: italic; /* Wechsel zu Italic bei Hover */
  }

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
