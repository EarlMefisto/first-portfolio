import React from "react";
import styled from "styled-components";
import { DayMode } from "../../components/dayMode/DayMode";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { thems } from "../../styles/Thems";

const Items = ["Home", "Skills", "Works", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper>
          {/* <DayMode /> */}
          <HeaderMenu menuItems={Items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #0f1624;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 30;
  right: 0;
  z-index: 99999;

  border: 2px solid ${thems.colors.text};
`;
