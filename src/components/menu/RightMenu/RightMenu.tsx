import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../flexWrapper";

export const RightMenu = () => {
  return (
    <StyledRightMenu>
      <FlexWrapper direction={"row"} wrap={"wrap"} justify={"flex-end"}>
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
      </FlexWrapper>
    </StyledRightMenu>
  );
};

const StyledRightMenu = styled.div`
display: flex;

background-color: #FAFAFA;
`;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
