import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">Cv</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`
