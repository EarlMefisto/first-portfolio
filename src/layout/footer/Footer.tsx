import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper
        justify={"center"}
        background={"white"}
      >
        <Icon
          iconId={"copyright"}
          width={"24px"}
          height={"24px"}
          viewBox={"0 0 24px 24px"}
        />
        <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;
const Copyright = styled.small`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
`;
