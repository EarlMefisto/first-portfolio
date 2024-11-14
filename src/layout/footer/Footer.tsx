import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/RightMenu/RightMenu";

export const Footer = () => {
  return (
    <StyledFooter>
      <Menu />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #942727;
`;
