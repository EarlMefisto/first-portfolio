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
      <HeaderWrapper>
        <FlexWrapper>
          {/* <DayMode /> */}
          <HeaderMenu menuItems={Items} />
        </FlexWrapper>
      </HeaderWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 10px;
  position: fixed;
  top: 30px;
  right: 200px;
  z-index: 99999;

  border: 4px solid ${thems.colors.title};
  border-radius: 10px;
`;

const HeaderWrapper = styled.div`
margin: 10px 0;
`;
