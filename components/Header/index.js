import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader isScrolled={isScrolled}>
      <h1>ART GALLERY</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  color: black;
  text-align: center;
  text-transform: uppercase;
  z-index: 1000;
  background-color: #f7f7f7;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: box-shadow 0.3s ease-in-out;

  h1 {
    margin: 0;
    font-weight: bold;
    white-space: nowrap;
    font-size: 28px;
    color: #333;

    @media (min-width: 480px) {
      font-size: 32px;
    }

    @media (min-width: 768px) {
      font-size: 36px;
    }

    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }
`;
